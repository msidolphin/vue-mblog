import Vue  from 'vue'
import Vuex from 'vuex'

import article from '@/store/modules/article'
import site    from '@/store/modules/site'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    article,
    site
  }
})

export default store

