<!--首页-->
<template>
    <div class="home">
        <div class="book-list-wrap">
            <header>最受关注图书 | 虚构类</header>
            <ul class="book-list">
                <li v-for="book in fictionBook">
                    <router-link :to="'/book/' + book.id">
                        <img :src="book.cover.url" alt="">
                        <p>{{book.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="book-list-wrap">
            <header>最受关注图书 | 非虚构类</header>
            <ul class="book-list">
                <li v-for="book in noFictionBook">
                    <router-link :to="'/book/' + book.id">
                        <img :src="book.cover.url" alt="">
                        <p>{{book.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="book-list-wrap">
            <header>热门小说</header>
            <ul class="book-list">
                <li v-for="book in hotFictionBook">
                    <router-link :to="'/book/' + book.id">
                        <img :src="book.cover.url" alt="">
                        <p>{{book.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<style lang="less" rel="stylesheet/less" scoped>
    .home {
        .book-list-wrap {
            +.book-list-wrap {
                margin-top: 10px;
            }
            header {
                font-size: 16px;
                margin-bottom: 10px;
            }
        }
        .book-list {
            display: flex;
            li {
                flex: 1;
                padding: 0 3px;
                img {
                    width:100%;
                }
                p {
                    font-size: 12px;
                }
            }
        }
    }
</style>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        data () {
            return {
//                user: this.$store.state.user
            }
        },
//        computed: {
//            fictionBook(){
//                return this.$store.state.fictionBook;
//            },
//            noFictionBook(){
//                return this.$store.state.noFictionBook;
//            },
//            hotFictionBook(){
//                return this.$store.state.hotFictionBook;
//            }
//        },
        /*这里等同于上面*/
        computed: mapState(['fictionBook', 'noFictionBook', 'hotFictionBook']),
        methods: {
            abc(){
//                this.$store.state.user.a = 4;
//                this.$store.dispatch('GET_BANNER_LIST', {type: 111});
            }
        },
        /*preFetch 一定要有返回action*/
        preFetch(store){
            return Promise.all([
                store.dispatch('GET_FICTION_BOOK', {start:0, count: 4}),
                store.dispatch('GET_NOFICTION_BOOK', {start:0, count: 4}),
                store.dispatch('GET_HOTFICTION_BOOK', {start:0, count: 4}),
            ]);
        },
        beforeMount () {
            this.$store.dispatch('GET_FICTION_BOOK', {start:0, count: 4});
            this.$store.dispatch('GET_NOFICTION_BOOK', {start:0, count: 4});
            this.$store.dispatch('GET_HOTFICTION_BOOK', {start:0, count: 4});
        }
    }
</script>