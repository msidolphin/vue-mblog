import Vue            from 'vue'
import Router         from 'vue-router'
import Home           from '@/views/Home'
import ArticleDetail  from '@/views/ArticleDetail'
import ArticleList    from '@/views/ArticleList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path      : '/',
      component: Home
    },
    {
      path: '/article',
      component: ArticleList
    },
    { path: '/article/:id',
      props: true,
      component: ArticleDetail
    },
    {
    	path: '*',
    	redirect: '/'
    }
  ]
})
