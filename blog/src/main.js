// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'

//import styles
import 'bootstrap/dist/css/bootstrap.css'
import './styles/css/style.css'
import './styles/css/zenburn.css'
import 'font-awesome/css/font-awesome.css'

//import scripts
import './scripts/jquery.totop.min'
import './scripts/menu'
import './scripts/top_right_menu'
import './scripts/jquery.museum'
import '@/mock'
//代码高亮
import 'highlight.js/styles/googlecode.css'
import  hljs from 'highlight.js'

//Vuex
import store from '@/store'

Vue.config.productionTip = false

hljs.Highlighting = function () {
  //解决highlight.js 初始化函数只调用一次的问题
  // if (initHighlighting.called)
  //   return;
  // initHighlighting.called = true;
  var blocks = document.querySelectorAll('pre code');
  [].forEach.call(blocks, hljs.highlightBlock);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
