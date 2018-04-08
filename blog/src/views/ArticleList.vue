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
                <img src="https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c" :alt="article.title" class="wp-post-image" width="400" height="200">
              </a>
            </div>
            <!--摘要-->
            <div class="articleFeed">
              <p>yangyu</p>
            </div>
          </div>
          <div class="articleFooter clearfix">
            <ul class="articleStatu">
              <li><i class="fa fa-user"></i>{{ article.author }}</li>
              <li><i class="fa fa-calendar"></i>{{ article.createTime }}</li>
              <li><i class="fa fa-eye"></i>{{ article.views }}</li>
              <li><i class="fa fa-folder-o"></i><a href="/article-css-1.html" null="">CSS</a></li>
            </ul>  <!-- CSS -->
            <a :href="'/article/' + article.id" class="btn btn-readmore btn-info btn-md">阅读更多</a>
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
        ...mapGetters(['articles', 'user'])
      },
      created() {
        this.fetchData()
      },
      watch: {
        '$route': 'fetchData'
      },
      methods: {
        fetchData() {
          this.pageChange(this.pageNum, this.pageSize)
          //获取用户信息
          this.$store.dispatch(types.GET_USER)
        },
        pageChange(pageNum, pageSize) {
          this.$store.dispatch(types.GET_ARTICLES, { pageNum: pageNum, pageSize: pageSize })
        }
      },
      components: {
        Pagination
      }
    }
</script>

<style scoped>

</style>
