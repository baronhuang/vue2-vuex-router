/**
 * Created by Administrator on 2017/1/20 0020.
 */

/**
 * 接口api
 * */

import axios from 'axios'
import config from '../config'

export default {
    getRecommendList(params) {
        return axios({
            method: 'get',
            //data: params,
            params: params,
            url: `${config.httpUrl}recommend_feed`
        });
    },
    /*获取虚构类图书*/
    getFictionBook(params) {
        return axios({
            method: 'get',
            //data: params,
            params: params,
            url: `${config.httpUrl}subject_collection/book_fiction/items`
        });
    },
    /*获取非虚构类图书*/
    getNonfictionBook(params) {
        return axios({
            method: 'get',
            //data: params,
            params: params,
            url: `${config.httpUrl}subject_collection/book_nonfiction/items`
        });
    },
    /*热门小说*/
    getHotFictionBook(params) {
        return axios({
            method: 'get',
            //data: params,
            params: params,
            url: `${config.httpUrl}subject_collection/filter_book_fiction_hot/items`
        });
    },
    /*获取图书详情*/
    getBookDetail(params) {
        return axios({
            method: 'get',
            //data: params,
            // params: params,
            url: `${config.httpUrl}book/${params.id}`
        });
    },
}