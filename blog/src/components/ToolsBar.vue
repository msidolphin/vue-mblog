<template>
	<div id="tools">
    <template v-if="this.$route.path !== '/' && this.$route.path !== '/article'">
      <div class="tool back" title="返回" @click="goBack">
        <i class="fa fa-backward"></i>
      </div>
    </template>
		<div class="icon-search" title="搜索内容">
			<i style="margin-top:18px;" class="fa fa-search"></i>
		</div>
		<div class="menu mobile-menuicon" title="菜单栏">
			<i class="fa fa-bars"></i>
		</div>
		<a class="to-top" title="回到顶部" style="cursor: pointer; display: none;">
			<span class="topicon"><i class="fa fa-angle-up"></i></span>
			<span class="toptext">Top</span>
		</a>
	</div>
</template>

<script>
	$(function(){
	 	$('.to-top').toTop({
			position:false,
			autohide: true
		})
	})

  export default {
	  methods: {
	    goBack() {
        this.$router.go(-1)
      }
    },
    mounted() {
	    console.log()
    }
  }
</script>

<style scoped>
  .tool.back {
    position: fixed;
    right:calc(50% - 525px);
    line-height: 48px;
    background: #6c9;
    color: #fff;
    box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
    display: block;
    text-align: center;
    z-index: 999;
    cursor: pointer;
    width: 48px;
    bottom: 438px;
  }
</style>
