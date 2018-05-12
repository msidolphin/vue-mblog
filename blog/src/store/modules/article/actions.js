import types from '@/store/types'
import {fetch} from '@/scripts/ajax'
import {fetchList, fetchDetail, fetchComment} from '@/utils/api'

const actions = {
  [types.GET_ARTICLES]({commit, state}, payload) {
    //获取文章列表
    commit(types.SET_IS_LOADING, true)
    fetchList(payload).then(response => {
      commit(types.SET_ARTICLES, response.data.data)
      commit(types.SET_IS_LOADING, false)
    })
  },
  [types.SET_QUERY]({commit}, payload) {
    commit(types.SET_QUERY, payload)
  },
  [types.SET_SIMPLE_QUERY]({commit}, payload) {
    commit(types.SET_SIMPLE_QUERY, payload)
  },
  [types.SET_ARTICLES]({commit}, payload) {
    commit(types.SET_ARTICLES, payload)
  },
  [types.GET_ARTICLE_DETAIL]({commit, state}, payload) {
    //获取文章详情
    commit(types.SET_IS_LOADING, true)
    fetchDetail(payload).then(response => {
      commit(types.SET_ARTICLE_DETAIL, response.data.data)
      commit(types.SET_COMMENT, response.data.data.commentList)
      commit(types.SET_IS_LOADING, false)
    })
  },
  [types.GET_COMMENT]({commit, state}, payload) {
    commit(types.SET_IS_LOADING, true)
    fetchComment(payload).then(response => {
      commit(types.SET_COMMENT, response.data.data)
      commit(types.SET_IS_LOADING, false)
    })
  }
}

export default actions
