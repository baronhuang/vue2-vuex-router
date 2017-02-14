<!--详情-->
<template>
    <div class="detail">
        <template v-if="bookDetail">
            <h2 class="title">{{bookDetail.title}}</h2>
            <section class="info flex">
                <div class="cover">
                    <img :src="bookDetail.pic.large" alt="">
                </div>
                <div class="info-detail flex-item">
                    <p ><span class="label">作者：</span>{{bookDetail.author[0]}}</p>
                    <p v-if="bookDetail.subtitle.length"><span class="label">副标题：</span>{{bookDetail.subtitle[0]}}</p>
                    <p><span class="label">出版社：</span>{{bookDetail.press[0]}}</p>
                    <p><span class="label">出版年：</span>{{bookDetail.pubdate[0]}}</p>
                    <p><span class="label">页数：</span>{{bookDetail.pages[0]}}</p>
                    <p><span class="label">定价：</span>{{bookDetail.price[0]}}</p>
                </div>
                <!--<div class="estimate flex-item"></div>-->
            </section>

            <section class="intro">
                <p class="title">内容简介</p>
                <article v-html="this.$options.filters.lineFeed(bookDetail.intro)"></article>
            </section>
        </template>

    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
    .detail {
        font-size: 12px;
        .title {
            font-size: 16px;
        }
        section {
            margin-top: 8px;
            .title {
                color: #007722;
                border-bottom: 1px #eee;
                border-bottom-style: dashed;
                line-height: 23px;
            }
        }
        .info {
            .cover {
                width: 30%;
                margin-right: 10px;
                img {
                    width:100%;
                }
            }
            .label {
                color: #666;
            }
        }
        .intro {
            article {
                margin-top: 10px;
            }
        }
    }
</style>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Detail',
        data () {
            return {

            }
        },
        computed: {
            bookDetail () {
//                console.log(44444444, this.$store.state.bookStore[this.$route.params.id])
                return this.$store.getters.bookDetail;
            }
        },
        methods: {

        },

        preFetch: (store)=>{
            return Promise.all([
                store.dispatch('GET_BOOK_DETAIL', {id: store.state.route.params.id}),
            ]);
        },
        beforeMount () {
            this.$store.dispatch('GET_BOOK_DETAIL', {id: this.$route.params.id});
        },
        mounted(){
//            console.log(888, this.$store.state.bookStore)
        }
    }
</script>