<template>
    <div class="home">
        <div class="book-list-wrap">
            <header>最受关注图书 | 虚构类</header>
            <ul class="book-list">
                <li v-for="book in fictionBook">
                    <img :src="book.cover.url" alt="">
                    <p>{{book.title}}</p>
                </li>
            </ul>
        </div>

        <div class="book-list-wrap">
            <header>最受关注图书 | 非虚构类</header>
            <ul class="book-list">
                <li v-for="book in noFictionBook">
                    <img :src="book.cover.url" alt="">
                    <p>{{book.title}}</p>
                </li>
            </ul>
        </div>

        <div class="book-list-wrap">
            <header>豆瓣纸书</header>
            <ul class="book-list">
                <li v-for="book in marketBook">
                    <img :src="book.cover.url" alt="">
                    <p>{{book.title}}</p>
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
    export default {
        name: 'Home',
        data () {
            return {
//                user: this.$store.state.user
            }
        },
        computed: {
            fictionBook(){
                return this.$store.state.fictionBook;
            },
            noFictionBook(){
                return this.$store.state.noFictionBook;
            }
        },
        methods: {
            abc(){
//                this.$store.state.user.a = 4;
//                this.$store.dispatch('GET_BANNER_LIST', {type: 111});
            }
        },
        /*preFetch 一定要有返回action*/
        preFetch(store){
//            return Promise.all([
//                store.dispatch('GET_FICTION_BOOK', {start:0, count: 4}),
//                store.dispatch('GET_NOFICTION_BOOK', {start:0, count: 4}),
//                store.dispatch('GET_MARKET_BOOK', {start:0, count: 4}),
//            ]);
        },
        beforeMount () {
            this.$store.dispatch('GET_FICTION_BOOK', {start:0, count: 4});
            this.$store.dispatch('GET_NOFICTION_BOOK', {start:0, count: 4});
            this.$store.dispatch('GET_MARKET_BOOK', {start:0, count: 4});
        }
    }
</script>