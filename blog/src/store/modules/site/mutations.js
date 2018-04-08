import types from '@/store/types'

const mutations = {
  [types.SET_SITE_SETTINGS](state, settings) {
    state.site = settings
  }
}

export default mutations
