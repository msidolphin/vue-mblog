import types from '@/store/types'
import {fetch} from '@/scripts/ajax'

const actions = {
  [types.GET_SITE_SETTINGS]({commit}) {
    fetch('/api/settings', 'get', null).then(response => {
      if(200 === response.status) {
        let data = response.data.data
        commit(types.SET_SITE_SETTINGS, data)
      }
    })
  },
  [types.SET_IS_LOADING]({commit}, isLoading) {
    commit(types.SET_IS_LOADING, isLoading)
  }
}

export default actions
