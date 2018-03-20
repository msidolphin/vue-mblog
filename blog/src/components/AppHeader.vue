<template>
	<div class="banner">
		<!-- site -->
		<div class="header container">
			<!--个人信息-->
			<div class="row">
				<div class="col-md-12">
					<div class="personInfo">
						<div class="logo">
						    <a href="/">
						   	<!--  <img src="/templates/simple/picture/kide.jpg" alt="logo"> -->
									<img :src="header.avatar" class="animated bounceInDown">
						    </a>
						</div>
						<div class="logoTheme">
							<h3>{{ header.title }}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import types from '@/store/types'
  export default {
    computed: {
      ...mapGetters(['header'])
    },
    created() {
      //获取站点头部信息
      this.$store.dispatch(types.GET_SITE_HEADER)
    }
  }
</script>

<style>
</style>
