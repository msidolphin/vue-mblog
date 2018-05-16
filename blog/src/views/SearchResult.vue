<template>
  <div class="articleList container">
    <div class="row">
      <div class="col-md-12">
        <!--single article-->
        <div class="block block-help">
          <p>根据关键词  <font color="#f00">{{query.title}}</font> ，共搜索到如下文章</p>
        </div>
        <div class="article" v-for="res in searchResult" v-if="found">
          <div class="articleHeader">
            <h1 class="articleTitle">
              <router-link :to="'/article/' + res.id" v-if="res.highlight.title" v-html="res.highlight.title.join('')"></router-link>
              <router-link :to="'/article/' + res.id" v-else v-html="res.source.title"></router-link>
            </h1>
            <span class="cate-Div">搜索结果</span>
          </div>
          <div class="articleBody clearfix">
            <!--摘要-->
            <div class="articleFeed" style="margin-left: 0px; " v-if="res.highlight.summary">
              <p v-html="res.highlight.summary.join('')"></p>
            </div>
            <div class="articleFeed" style="margin-left: 0px; " v-else>
              <p v-html="res.source.summary"></p>
            </div>
          </div>
        </div>
		  </div>
    </div>
  </div>
</template>
<script>
    import {fetch} from '@/scripts/ajax'
    import {search} from "@/utils/api";
    import {mapGetters} from 'vuex'
    import types from '@/store/types'
    import Loading from "@/components/Loading";
    export default {
      components: {Loading},
      name: "search-result",
      data () {
        return {
          searchResult: [],
          found: false
        }
      },
      computed: {
        ...mapGetters(['query', 'isLoading'])
      },
      watch: {
        'query': 'fetchData'
      },
      mounted() {
        if (!this.query.title || !this.query.summary) {
          this.$router.push('/')
          return
        }
        this.fetchData()
      },
      methods: {
        fetchData() {
          if (!this.query.title && !this.query.summary) {
            this.$router.push('/')
            return
          }
          this.$store.dispatch(types.SET_IS_LOADING, true)
          search(this.query).then(response => {
            this.$store.dispatch(types.SET_IS_LOADING, false)
            let data = response.data.data
            this.searchResult = data.meta
            if (data.hits > 0) this.found = true
            else this.found =false
          })
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
