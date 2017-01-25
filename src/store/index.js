import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recommendList: [],
    fictionBook: [],  /*最受欢迎图片|虚构类*/
    noFictionBook: [], /*最受欢迎图片|非虚构类*/
    marketBook: [] /*豆瓣纸书*/
  },

  actions: {
    /*获取推荐列表*/
    GET_RECOMMEND_LIST: async ({commit, dispatch, state}, params) => {
      const data = (await api.getRecommendList()).data.recommend_feeds;
      commit('SET_RECOMMEND_LIST', {data});
    },

    /*获取虚构类图书*/
    GET_FICTION_BOOK: async ({commit, dispatch, state}, params) => {
      if(!state.fictionBook.length){
        const data = (await api.getFictionBook(params)).data.subject_collection_items;
        commit('SET_FICTION_BOOK', {data});
      }
    },

    /*获取非虚构类图书*/
    GET_NOFICTION_BOOK: async ({commit, dispatch, state}, params) => {
      if(!state.noFictionBook.length){
        const data = (await api.getNonfictionBook(params)).data.subject_collection_items;
        commit('SET_NOFICTION_BOOK', {data});
      }
    },

    /*获取豆瓣纸书*/
    GET_MARKET_BOOK: async ({commit, dispatch, state}, params) => {
      if(!state.marketBook.length){
        const data = (await api.getMarketBook(params)).data.subject_collection_items;
        commit('SET_MARKET_BOOK', {data});
      }
    },

    // ensure data for rendering given list type
    FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
      commit('SET_ACTIVE_TYPE', { type })
      return fetchIdsByType(type)
        .then(ids => commit('SET_LIST', { type, ids }))
        .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
    },

    // ensure all active items are fetched
    ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
      return dispatch('FETCH_ITEMS', {
        ids: getters.activeIds
      })
    },

    FETCH_ITEMS: ({ commit, state }, { ids }) => {
      // only fetch items that we don't already have.
      ids = ids.filter(id => !state.items[id])
      if (ids.length) {
        return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
      } else {
        return Promise.resolve()
      }
    },

    FETCH_USER: ({ commit, state }, { id }) => {
      return state.users[id]
        ? Promise.resolve(state.users[id])
        : fetchUser(id).then(user => commit('SET_USER', { user }))
    }
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

    SET_MARKET_BOOK: (state, {data}) => {
      state.marketBook = data;
    },

    SET_ACTIVE_TYPE: (state, { type }) => {
      state.activeType = type
    },

    SET_LIST: (state, { type, ids }) => {
      state.lists[type] = ids
    },

    SET_ITEMS: (state, { items }) => {
      items.forEach(item => {
        if (item) {
          Vue.set(state.items, item.id, item)
        }
      })
    },

    SET_USER: (state, { user }) => {
      Vue.set(state.users, user.id, user)
    }
  },

  getters: {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds (state) {
      const { activeType, itemsPerPage, lists } = state
      const page = Number(state.route.params.page) || 1
      if (activeType) {
        const start = (page - 1) * itemsPerPage
        const end = page * itemsPerPage
        return lists[activeType].slice(start, end)
      } else {
        return []
      }
    },

    // items that should be currently displayed.
    // this Array may not be fully fetched.
    activeItems (state, getters) {
      return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    }
  }
})

export default store
