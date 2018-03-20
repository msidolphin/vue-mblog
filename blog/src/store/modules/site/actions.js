import types from '@/store/types'
import {fetch} from '@/scripts/ajax'

const actions = {
  [types.GET_SITE_HEADER]({commit}) {
    fetch('/header', 'get', null).then(response => {
      if(200 === response.status) {
        commit(types.SET_SITE_HEADER, response.data)
      }
    })
  },
  [types.GET_SITE_FOOTER]({commit}) {
    fetch('/footer', 'get', null).then(response => {
      if(200 === response.status) {
        commit(types.SET_SITE_FOOTER, response.data)
      }
    })
  }
}

export default actions
