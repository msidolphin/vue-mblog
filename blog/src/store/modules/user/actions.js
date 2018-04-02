/**
 * Created by msidolphin on 2018/4/2.
 */
import types from '@/store/types'
import {getUser, addUser} from '@/utils/api'

const actions = {
  [types.GET_USER]({commit}) {
      getUser().then(response => {
        commit(types.SET_USER, response.data.data)
      }).catch(error => {
      })
  }
}

export default actions
