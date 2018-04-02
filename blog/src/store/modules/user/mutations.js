/**
 * Created by msidolphin on 2018/4/2.
 */
import types from '@/store/types'

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user
  }
}

export default mutations
