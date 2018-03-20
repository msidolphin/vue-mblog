<!--文章列表页-->
<template>
  <div class="articleList container">
    <div class="row">
      <div class="col-md-12">
        <!--single article-->
        <div class="article" v-for="article in articles">
          <div class="articleHeader">
            <h1 class="articleTitle">
              <router-link :to="article.url">{{ article.title }}</router-link>
            </h1>
          </div>
          <div class="articleBody clearfix">
            <!--缩略图-->
            <div class="articleThumb">
              <a :href="article.url">
                <img :src="article.pic" :alt="article.title" class="wp-post-image" width="400" height="200">
              </a>
            </div>
            <!--摘要-->
            <div class="articleFeed">
              <p>{{ article.summary }}</p>
            </div>
          </div>
          <div class="articleFooter clearfix">
            <ul class="articleStatu">
              <li><i class="fa fa-user"></i>{{ article.author }}</li>
              <li><i class="fa fa-calendar"></i>{{ article.date }}</li>
              <li><i class="fa fa-eye"></i>{{ article.views }}</li>
              <li><i class="fa fa-folder-o"></i><a href="/article-css-1.html" null="">CSS</a></li>
            </ul>  <!-- CSS -->
            <a :href="article.url" class="btn btn-readmore btn-info btn-md">阅读更多</a>
          </div>
        </div>
      </div>
      <!-- pagination start -->
      <pagination :pageNum="pageNum" :pageSize="pageSize" :records="records" @pageChange="pageChange" />
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
      name: "article",
      computed: {
        ...mapGetters(['articles', 'pageNum', 'pageSize', 'records'])
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
        },
        pageChange(pageNum, pageSize) {
          this.$store.dispatch(types.GET_ARTICLES, { pageNum: pageNum, pageSize: pageSize }).then(() => {

          })
        }
      },
      components: {
        Pagination
      }
    }
</script>

<style scoped>

</style>
