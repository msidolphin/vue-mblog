import types from '@/store/types'

const mutations = {
  [types.SET_ARTICLES](state, articles) {
    state.articles = articles
  },
  [types.SET_ARTICLE_PAGENUM](state, pageNum) {
    state.pageNum = pageNum
  },
  [types.SET_ARTICLE_SIZE](state, pageSize) {
    state.pageSize = pageSize
  },
  [types.SET_ARTICLE_RECORDS](state, records) {
    state.records = records
  }
}

export default mutations
