import Vue  from 'vue'
import Vuex from 'vuex'

import article from '@/store/modules/article'
import site    from '@/store/modules/site'
import user    from '@/store/modules/user'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    article,
    site,
    user
  }
})

export default store

