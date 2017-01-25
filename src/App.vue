<template>
  <div id="app">
    <!--<div class="header">-->
      <!--<div class="inner">-->
        <!--<router-link to="/" exact>-->
          <!--<img class="logo" src="./assets/logo.png" alt="logo">-->
        <!--</router-link>-->
        <!--<router-link to="/top">Top</router-link>-->
        <!--<router-link to="/new">New</router-link>-->
        <!--<router-link to="/show">Show</router-link>-->
        <!--<router-link to="/ask">Ask</router-link>-->
        <!--<router-link to="/job">Jobs</router-link>-->
        <!--<a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">-->
          <!--Built with Vue.js-->
        <!--</a>-->
      <!--</div>-->
    <!--</div>-->
    <Top></Top>
    <div style="padding: 10px;">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Top from './components/Top.vue'
  export default {
    name: 'App',
    components: {Top}
  }
</script>

<style lang="less">
  /** 清除内外边距 **/
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
  th, td /* table elements 表格元素 */{
    margin: 0;
    padding: 0;
  }

  /** 设置默认字体 **/
  body,
  button, input, select, textarea /* for ie */{
    font-family: -apple-system,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  }
  h1, h2, h3, h4, h5, h6{ font-size: 100%; }
  address, cite, dfn, em, var{ font-style: normal; } /* 将斜体扶正 */
  code, kbd, pre, samp{ font-family: courier new, courier, monospace; } /* 统一等宽字体 */

  /** 重置列表元素 **/
  ul, ol,li{ list-style: none; }

  /** 重置文本格式元素 **/
  a{ text-decoration: none;  cursor: pointer;color: inherit; }
  a:hover,a:focus{ text-decoration: none; }

  article,p {
    word-break: break-all;
  }

  /*去掉IE的虚线框*/
  a:active, a:focus, a:visited{
    border:none;
    outline:none;
  }

  /** 重置表单元素 **/
  fieldset, img{ border: 0; } /* img 搭车：让链接里的 img 无边框 */
  button, input, select, textarea{ font-size: 100%; } /* 使得表单元素在 ie 下能继承字体大小 */

  /** 重置表格元素 **/
  table{ border-collapse: collapse; border-spacing: 0; }

  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:before,
  *:after{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>




