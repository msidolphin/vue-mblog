<template>
  <div class="articleList container">
    <div class="row">
      <div class="col-md-12">
        <!--single article-->
        <div class="block block-help">
          <p>根据关键词  <span style="color:#f00">使用</span> ，共搜索到如下文章</p>
        </div>
        <div class="article">
          <div class="articleHeader">
            <h1 class="articleTitle">
              <a href="/article/20.html">使用 CSS3 实现 tip 提示</a>
            </h1>
            <span class="cate-Div">搜索结果</span>
          </div>
          <div class="articleBody clearfix">
            <!--摘要-->
            <div class="articleFeed" style="margin-left: 0px; ">
              <p>这里是使用了CSS的after和before两个<em>伪元素</em>实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，</p>
            </div>
          </div>
          <div class="articleFooter clearfix">
            <ul class="articleStatu">

            </ul>
            <a href="/article/20.html" class="btn btn-readmore btn-info btn-md">阅读更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {fetch} from '@/scripts/ajax'
    import Pagination from '@/components/Pagination'
    import {mapGetters} from 'vuex'
    import types from '@/store/types'
    export default {
      name: "search-result",
      computed: {
        ...mapGetters(['query'])
      },
      watch: {
        'query': 'fetchData'
      },
      mounted() {
        this.fetchData()
      },
      methods: {
        fetchData() {
          console.log(this.query)
        }
      }
    }
</script>

<style scoped>
  .articleFeed p em {
    color: red;
    font-style: normal;
  }
</style>
