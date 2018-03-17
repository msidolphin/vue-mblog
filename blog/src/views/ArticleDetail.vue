<!--文章详情页-->
<template>
  <div class="articleDetail container">
    <div class="row">
      <div class="col-md-12">
        <div class="articleContent">
          <!-- article info start -->
          <div class="article-info-wrap">
            <!-- 标题 -->
            <div class="title">{{ articleInfo.title }}</div>
            <!-- 访问量 ...-->
            <div class="secTitleBar">
              <ul>
                <li>分类：<a :href="articleInfo.category_url" null>{{ articleInfo.category }}</a></li>
                <li>发表：{{ articleInfo.date }}</li>
                <li>围观：{{ articleInfo.views }}</li>
                <!--<li><a href="javascript:goTo('#SOHUCS',500);">前往评论</a></li>-->
                <li><a href="#comments">评论：{{ articleInfo.comments }}</a></li>
              </ul>
            </div>
          </div>
          <!-- article info end -->
          <!-- article content start -->
          <div class="articleCon post_content" v-html="content">
            <reproduce/>
          </div>
          <!-- article content end -->
          <div id="SOHUCS" sid="9"></div>
          <!--  -->
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
  import {fetch} from '@/scripts/ajax'
  import Reproduce    from '@/components/Reproduce'         //转载
  export default {
    name: "article-detail",
    props: ['id'],
    components: {
      Reproduce
    },
    data() {
      return {
        articleInfo : {
          title: "",
          category: "",
          category_url: "",
          date: "",
          views: null,
          comments: null
        },
        content: null
      }
    },
    created() {
      //代码高亮

      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        const path = this.$route.path
        fetch(path, 'get', {id: path.substring(path.lastIndexOf('/') + 1)}).then(response => {
          this.articleInfo = response.data.articleInfo
          this.content = response.data.data
        }).then(() => {
          hljs.initHighlightingOnLoad()
        })
      }
    }
  }
</script>

<style scoped>

</style>
