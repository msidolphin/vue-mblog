import Vue  from 'vue'
import Vuex from 'vuex'

import article from '@/store/modules/article'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    article
  }
})

export default store

