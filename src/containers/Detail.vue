<!--详情-->
<template>
    <div class="detail">
        <template v-if="bookDetail">
            <h2>{{bookDetail.title}}</h2>
            <section class="info">
                <div class="cover">
                    <img :src="bookDetail.pic.large" alt="">
                </div>
                <div class="info-detail"></div>
                <div class="estimate"></div>
            </section>
        </template>

    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
    .detail {
        .info {
            .cover {
                width: 40%;
                img {
                    width:100%;
                }
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
//                bookDetail: this.$store.getters.bookDetail
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