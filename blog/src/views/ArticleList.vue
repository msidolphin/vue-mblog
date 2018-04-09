<!--文章列表页-->
<template>
  <div class="articleList container">
    <div class="row">
      <div class="col-md-12">
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
                <template v-for='tag in article.tags.split(",")'>
                 <a href="#">{{tag.name}}</a>
                </template>
              </li>
            </ul>  <!-- CSS -->
            <router-link :to="'/article/' + article.id" class="btn btn-readmore btn-info btn-md">阅读更多</router-link>
          </div>
        </div>
      </div>
      <!-- pagination start -->
      <pagination :pageNum="articles.pageNum" :pageSize="articles.pageSize" :records="articles.total" @pageChange="pageChange" />
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
        ...mapGetters(['articles', 'user', 'query'])
      },
      mounted() {
        this.fetchData(this.query)
      },
      watch: {
        '$route': 'fetchData', //不是要监听路由的改变，还要监听query的改变
        'query': 'fetchData'
      },
      methods: {
        fetchData(query) {
          this.pageChange(this.pageNum, this.pageSize, query)
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
