import types from '@/store/types'

const mutations = {
  [types.SET_SITE_SETTINGS](state, settings) {
    state.site = settings
  },
  [types.SET_IS_LOADING](state, isLoading) {
    state.isLoading = isLoading
  }
}

export default mutations
