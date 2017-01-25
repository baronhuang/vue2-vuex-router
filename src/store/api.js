/**
 * Created by Administrator on 2017/1/20 0020.
 */

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
    /*豆瓣纸书*/
    getMarketBook(params) {
        return axios({
            method: 'get',
            //data: params,
            params: params,
            url: `${config.httpUrl}subject_collection/market_product_book/items`
        });
    },
}