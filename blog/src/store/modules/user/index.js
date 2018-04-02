/**
 * Created by msidolphin on 2018/4/2.
 */

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const user = {
  state: {
    user: {}
  },
  getters,
  actions,
  mutations
}

export default user
