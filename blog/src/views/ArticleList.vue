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
              <a href="/article/20.html">
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
    </div>
  </div>
</template>

<script>
    import {fetch} from '@/scripts/ajax'
    export default {
      name: "article",
      data() {
        return {
          articles: []
        }
      },
      created() {
        this.fetchData()
      },
      watch: {
        '$route': 'fetchData'
      },
      methods: {
        fetchData: function () {
          //获取文章列表
          fetch("/article", 'get', null).then(response => {
            console.log(response)
            this.articles = response.data
          })
        }
      },
    }
</script>

<style scoped>

</style>
