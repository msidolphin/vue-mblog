<template>
	<div id="tools">
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
			offset:$(window).height(),
			autohide: true
		})
	})
</script>

<style>
</style>