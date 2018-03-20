const getters = {
  articles(state) {
    return state.articles
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