<template>
	<footer>
		<div class="main-footer">
		    <div class="container">
		        <div class="row footrow">
              <div class="col-md-4">
                <div class="widget tagbox">
                  <h4 class="title">文章标签</h4>
                  <div class="box tags clearfix">
                    <ul class="post_tags" v-if="footer.tags">
                      <li v-for="tag in footer.tags"><a href="javascript:;" @click="searchByTag(tag.name)">{{tag.name}}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
			        <div class="col-md-4">
               <div class="widget contactbox">
                   <h4 class="title">联系我</h4>
                   <div class="contact-us clearfix">
                     <ul class="contract_list" v-if="footer.contracts">
                       <li v-for="contract in footer.contracts">
                         <a href="javascript:;"><i :class="contract.icon"></i>{{ contract.name }}</a>
                       </li>
                     </ul>
					        </div>
		          </div>
		        </div>
		        <div class="col-md-4">
		           <div class="widget linkbox" >
		              <h4 class="title">友情链接</h4>
		              <div class="box friend-links clearfix" v-if="footer.links">
	                    <li v-for="link in footer.links">
                        <a :href="link.url" :title="link.name" target="_blank">{{link.name}}</a>
                      </li>
                  </div>
				      </div>
			      </div>
            </div>
		        <div class="row">
		        	<div class="copyright" style="text-align:center;" v-if="footer.copyright">
                <span>&copy;{{footer.copyright.date}} <a :href="footer.copyright.site.url" target="_blank">{{ footer.copyright.site.text }}</a> , All Rights Reserved  </span>
		        		<span><a href="http://www.miibeian.gov.cn/" target="_blank" :title="footer.copyright.ipc">{{ footer.copyright.ipc }}</a></span>
		        		<span v-if="footer.design">Designed by · <a :href="footer.design.value" target="_blank">{{footer.design.name}}</a></span>
		        	</div>
		        </div>
		    </div>
		</div>
	</footer>
</template>

<script>
  import {mapGetters} from 'vuex'
  import types from '@/store/types'
  export default {
    computed: mapGetters(['footer']),
    methods: {
      //根据标签名进行检索，现在仅仅只是简单查询（直接查询数据库）
      searchByTag(tagName) {
        this.$store.dispatch(types.SET_SIMPLE_QUERY, {tags: tagName})
        this.$router.push('/')
      }
    }
  }
</script>

<style>
</style>
