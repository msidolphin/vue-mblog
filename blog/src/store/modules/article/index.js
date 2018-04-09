import getters   from './getters'
import actions   from './actions'
import mutations from './mutations'

const article = {
  state: {
    articles: {}, //文章列表 包含分页信息
    pageNum: 1,
    pageSize:10,
    records: null,
    article: {}, //文章详情 包含评论回复信息
    comments: {}, //评论回复
    query: {}
  },
  getters,
  actions,
  mutations
}

export default article

