<template>
  <div id="app">
    <!--头部-->
   <div class="header">
     <ele-header/>
   </div>
    <!--内容区-->
   <div class="content">
      <!--左侧-->
      <div class="content-left">
        <ele-nav/>
      </div>
      <div class="content-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
   </div>
  </div>
</template>
<script>
import header from './components/header/header.vue'
import nav from './components/nav/nav.vue'
export default {
  components: {
    'ele-header': header,
    'ele-nav': nav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  #app
    width 100%
    height 100%
    position relative
    .header
      position absolute
      top 0px
      left 0px
      width 100%
      height 70px
      background #20A0FF
    .content
      width 100%
      height 100%
      padding-top 70px
      box-sizing border-box
      display flex
      .content-left
        flex 0 0 200px
        background #545C64
      .content-right
        flex 1
        overflow scroll
</style>

