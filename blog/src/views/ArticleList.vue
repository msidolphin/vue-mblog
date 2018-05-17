<!--文章列表页-->
<template>
  <div class="articleList container">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <!--single article-->
        <div class="article" v-for="article in articles.list">
          <div class="articleHeader">
            <h1 class="articleTitle">
              <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
            </h1>
          </div>
          <div class="articleBody clearfix">
            <!--缩略图-->
            <div class="articleThumb">
              <a :href="'/article/' + article.id">
                <img :src="article.thumbnail" :alt="article.title" class="wp-post-image" width="400" height="200">
              </a>
            </div>
            <!--摘要-->
            <div class="articleFeed">
              <p>{{article.summary}}</p>
            </div>
          </div>
          <div class="articleFooter clearfix">
            <ul class="articleStatu">
              <li><i class="fa fa-user"></i>{{ article.author }}</li>
              <li><i class="fa fa-calendar"></i>{{ article.createTime }}</li>
              <li><i class="fa fa-eye"></i>{{ article.views }}</li>
              <li v-if="article.tags">
                <i class="fa fa-tag"></i>
                <template v-for='tag in article.tagArray'>
                 <span style="display:inline-block;margin-left:10px">{{tag}}</span>
                </template>
              </li>
            </ul>  <!-- CSS -->
            <router-link :to="'/article/' + article.id" class="btn btn-readmore btn-info btn-md">阅读更多</router-link>
          </div>
        </div>
      </div>
      <!-- pagination start -->
      <pagination v-if="articles.total > 0" :currentPage="articles.pageNum" :pageSize="articles.pageSize" :records="articles.total" @pageChange="pageChange" />
      <!-- pagination end -->
    </div>
  </div>
</template>

<script>
    import {fetch} from '@/scripts/ajax'
    import Pagination from '@/components/Pagination'
    import {mapGetters} from 'vuex'
    import types from '@/store/types'

    export default {
      computed: {
        ...mapGetters(['articles', 'user', 'simpleQuery'])
      },
      mounted() {
        this.fetchData()
      },
      watch: {
        '$route': 'fetchData',
        'simpleQuery': 'fetchData'
      },
      methods: {
        fetchData() {
          //回到页面顶部
          window.scrollTo(0,0);
          this.pageChange(this.pageNum, this.pageSize, this.simpleQuery)
          //获取用户信息
          this.$store.dispatch(types.GET_USER)
        },
        pageChange(pageNum, pageSize, query) {
          this.$store.dispatch(types.GET_ARTICLES, { pageNum: pageNum, pageSize: pageSize, ...query})
        }
      },
      components: {
        Pagination
      }
    }
</script>

<style scoped>

</style>
