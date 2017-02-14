import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        recommendList: [],
        fictionBook: [], /*最受欢迎图片|虚构类*/
        noFictionBook: [], /*最受欢迎图片|非虚构类*/
        hotFictionBook: [], /*热门小说*/
        bookStore: {}, /*存储加载过的书籍详情*/
    },

    actions: {
        /*获取推荐列表*/
        GET_RECOMMEND_LIST: async({commit, dispatch, state}, params) => {
            const data = (await api.getRecommendList()).data.recommend_feeds;
            commit('SET_RECOMMEND_LIST', {data});
        },

        /*获取虚构类图书*/
        GET_FICTION_BOOK: async({commit, dispatch, state}, params) => {
            if (!state.fictionBook.length) {
                const data = (await api.getFictionBook(params)).data.subject_collection_items;
                commit('SET_FICTION_BOOK', {data});
            }
        },

        /*获取非虚构类图书*/
        GET_NOFICTION_BOOK: async({commit, dispatch, state}, params) => {
            if (!state.noFictionBook.length) {
                const data = (await api.getNonfictionBook(params)).data.subject_collection_items;
                commit('SET_NOFICTION_BOOK', {data});
            }
        },

        /*获取热门小说*/
        GET_HOTFICTION_BOOK: async({commit, dispatch, state}, params) => {
            if (!state.hotFictionBook.length) {
                const data = (await api.getHotFictionBook(params)).data.subject_collection_items;
                commit('SET_HOTFICTION_BOOK', {data});
            }
        },

        /*获取图书详情*/
        GET_BOOK_DETAIL: async({commit, dispatch, state}, {id}) => {
            if(!state.bookStore[id]){
                const {data} = (await api.getBookDetail({id}));
                commit('SET_BOOK_DETAIL', {data, id});
            }
        },

    },

    mutations: {

        SET_RECOMMEND_LIST: (state, {data}) => {
            state.recommendList = data;
        },

        SET_FICTION_BOOK: (state, {data}) => {
            state.fictionBook = data;
        },

        SET_NOFICTION_BOOK: (state, {data}) => {
            state.noFictionBook = data;
        },

        SET_HOTFICTION_BOOK: (state, {data}) => {
            state.hotFictionBook = data;
        },

        SET_BOOK_DETAIL: (state, {data, id}) => {
            state.bookStore[id] = data;
        },

    },

    getters: {
        /*图书详情*/
        bookDetail (state, getters) {
            /*设置初始值，防止报错*/
            if(!state.bookStore[state.route.params.id]){
                Vue.set(state.bookStore, state.route.params.id, {pic: {}, author:[], subtitle: [], press: [], pubdate: [], pages: [], price: []})
            }

            return state.bookStore[state.route.params.id];
        },
    }
})

export default store
