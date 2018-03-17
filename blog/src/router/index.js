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
      redirect  : 'home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/article',
      name: 'articles',
      component: ArticleList
    },
    { path: '/article/:id',
      name: 'article',
      props: true,
      component: ArticleDetail
    },
    {
    	path: '*',
    	redriect: '/'
    }
  ]
})
