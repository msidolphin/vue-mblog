<template lang="html">
  <div id="app">
    <search-box/>
    <app-shadow/>
    <scroll-bar/>
    <loading-bar/>
    <app-header/>
    <!-- page start -->
    <router-view/>
    <!-- page end -->
    <app-footer/>
    <menu-box/>
    <tools-bar/>
    <loading :loading="isLoading"/>
  </div>
</template>

<script>
  import types from '@/store/types'

  import AppHeader  from '@/components/AppHeader'
  import AppFooter  from '@/components/AppFooter'
  import MenuBox    from '@/components/MenuBox'
  import ScrollBar  from '@/components/ScrollBar'
  import SearchBox  from '@/components/SearchBox'
  import LoadingBar from '@/components/LoadingBar'
  import AppShadow  from '@/components/AppShadow'
  import ToolsBar   from '@/components/ToolsBar'
  import Loading from "@/components/Loading";

  import {mapGetters} from 'vuex'
  export default {
    name: 'App',
    components: {
      Loading,
      AppHeader,
      AppFooter,
      MenuBox,
      ScrollBar,
      LoadingBar,
      SearchBox,
      AppShadow,
      ToolsBar
    },
    methods: {
      getData() {
        //获取网站配置信息 例如高频标签、友情链接等
        this.$store.dispatch(types.GET_SITE_SETTINGS)
      }
    },
    computed: mapGetters(['isLoading']),
    created() {
      this.getData()
    },
  }
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
