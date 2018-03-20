import types from '@/store/types'

const mutations = {
  [types.SET_SITE_FOOTER](state, footer) {
    state.footer = footer
  },
  [types.SET_SITE_HEADER](state, header) {
    state.header = header
  }
}

export default mutations
