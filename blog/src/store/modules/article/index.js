import getters   from './getters'
import actions   from './actions'
import mutations from './mutations'

const article = {
  state: {
    articles: {}, //文章列表详情
    pageNum: 1,
    pageSize:10,
    records: null
  },
  getters,
  actions,
  mutations
}

export default article

