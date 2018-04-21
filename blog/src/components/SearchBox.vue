<template>
	<form id="searchForm" role="search" method="get" class="search-form" style="top: 0px; margin-top: -80px; opacity: 0; transition: all 0.5s;">
		<span class="search-close">×</span>
		<label>
			<input type="search" class="search-field" placeholder="请输入关键字搜索" v-model="query" autocomplete="off">
		</label>
    <button type="button" id="submitBtn" class="search-submit" @click="search">搜索</button>
	</form>
</template>

<script>
  import types from '@/store/types'
  import {fetchList} from '@/utils/api'
  export default {
    data() {
      return {
        query: null
      }
    },
    methods: {
      search() {
        //这里搜素条件为文章标题右模糊查询
        this.$store.dispatch(types.SET_QUERY, {title: this.query, summary: this.query, tag: this.query})
        //隐藏搜索栏
        let shadow = document.querySelector('.shadow')
        let searchForm = document.querySelector('#searchForm')
        shadow.style.display = ''
        searchForm.style.top = '0'
        searchForm.style.opacity = '0'
        //回到首页进行查询
        this.$router.push('/article/_search')
      }
    }
  }
</script>

<style>
</style>
