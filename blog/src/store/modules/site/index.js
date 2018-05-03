import getters   from './getters'
import actions   from './actions'
import mutations from './mutations'

const site = {
  state: {
    site: {
      header: {},
      footer: {}
    },
    isLoading: false
  },
  getters,
  actions,
  mutations
}

export default site
