/**
 * Created by msidolphin on 2018/3/29.
 */
import Axios from '@/utils/axios'

//获取当前用户
export function getUser() {
  return Axios.$request("/users", "get")
}

//新增用户
export function addUser(params) {
  return Axios.$request("/users", "post", params)
}

//文章列表
export function fetchList(params) {
  return Axios.$request('/articles', 'get', params)
}

//文章详情
export function fetchDetail(params) {
  return Axios.$request('/articles/detail/' + params.id, 'get')
}

//获取评论
export function fetchComment(params) {
  return Axios.$request('/comments/' + params.articleId, 'get', {pageNum: params.pageNum})
}

//获取回复
export function fetchReplies(params) {
  return Axios.$request('/comments/replies/' + params.commentId, 'get', {pageNum: params.pageNum})
}

//新增评论
export function addComment(params) {
  return Axios.$request('/comments', 'post', params)
}

//新增回复
export function addReply(params) {
  return Axios.$request('/comments/replies', 'post', params)
}
