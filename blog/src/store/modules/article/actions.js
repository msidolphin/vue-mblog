import types from '@/store/types'
import {fetch} from '@/scripts/ajax'

const actions = {
  [types.GET_ARTICLES]({commit, state}, payload) {
    //获取文章列表
     fetch("/article", 'post', { pageNum: payload.pageNum, pageSize: payload.pageSize }).then(response => {
      if(200 === response.status) {
        commit(types.SET_ARTICLES, response.data.list)
        commit(types.SET_ARTICLE_PAGENUM, response.data.pageNum)
        commit(types.SET_ARTICLE_SIZE, response.data.size)
        commit(types.SET_ARTICLE_RECORDS, response.data.records)

        // 回到顶部
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }else if(503 === response.status) {

      }else if(403 === response.status) {

      }else if(404 === response.status) {

      }
    })
  }
}

export default actions
