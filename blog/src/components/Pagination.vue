<template>
	<div class="container pageNav">
		<div class="row">
			<div class="col-md-12">
				<nav>
				  <ul class="pagination">
				  							<li class="previous disabled">
							<a href="javascript:;">上一页</a>
						</li>
						<li class="active">
							<a href="javascript:;">1</a>
						</li>
						<li class="">
							<a href="/2.html">2</a>
						</li>
						<li class="next">
							<a href="/2.html">下一页</a>
						</li>
					 <!--  <li><span class='page-numbers current'>1</span></li>	 -->
				  </ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    props: ['pageInfo'],
    created() {

    }
  }
</script>

<style>
</style>
