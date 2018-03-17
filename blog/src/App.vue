<template>
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
  </div>
</template>

<script>
import AppHeader  from '@/components/AppHeader'
import AppFooter  from '@/components/AppFooter'
import MenuBox    from '@/components/MenuBox'
import ScrollBar  from '@/components/ScrollBar'
import SearchBox  from '@/components/SearchBox'
import LoadingBar from '@/components/LoadingBar'
import AppShadow  from '@/components/AppShadow'
import ToolsBar   from '@/components/ToolsBar'

export default {
  name: 'App',
  components: {
  	AppHeader,
  	AppFooter,
  	MenuBox,
  	ScrollBar,
  	LoadingBar,
  	SearchBox,
  	AppShadow,
  	ToolsBar
  }
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
