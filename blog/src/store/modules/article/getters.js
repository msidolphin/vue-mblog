const getters = {
  articles(state) {
    return state.articles
  },
  article(state) {
    return state.article
  },
  comments(state) {
    return state.comments
  },
  pageNum(state) {
    return state.pageNum
  },
  pageSize(state) {
    return state.pageSize
  },
  records(state) {
    return state.records
  }
}

export default getters
