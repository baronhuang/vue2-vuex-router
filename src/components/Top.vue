<!--头部-->
<template>
    <header class="header">
        <div class="wrap">
            <a href="/" class="title">豆瓣读书</a>

        </div>
    </header>
</template>

<style lang="less" rel="stylesheet/less" scoped>
    .header {
        /*position: fixed;*/
        /*left: 0;*/
        /*right: 0;*/
        /*top: 0;*/
        /*z-index: 9999;*/
        /*background: #fff;*/
        padding: 10px;
        .wrap {
            display: flex;
            .title {
                color: #00b600;
                font-size: 22px;
                font-weight: 700;
                width: 100px;
            }
            nav {
                flex: 1;
                text-align: right;
                padding-right: 10px;
                ul {
                    li {
                        display: inline-block;
                    }
                }
            }
        }

    }

</style>