import types from '@/store/types'

const mutations = {
  //设置文章列表
  [types.SET_ARTICLES](state, articles) {
    state.articles = articles
    state.articles.id = Math.random()
  },
  [types.SET_ARTICLE_PAGENUM](state, pageNum) {
    state.pageNum = pageNum
  },
  [types.SET_ARTICLE_SIZE](state, pageSize) {
    state.pageSize = pageSize
  },
  [types.SET_ARTICLE_RECORDS](state, records) {
    state.records = records
  },
  //设置文章详情
  [types.SET_ARTICLE_DETAIL](state, article) {
    state.article = article
  },
  [types.SET_COMMENT](state, comments) {
    state.comments = comments
  },
  [types.SET_QUERY](state, query) {
    state.query = query
  },
  [types.SET_SIMPLE_QUERY](state, query) {
    state.simpleQuery = query
  }
}

export default mutations
