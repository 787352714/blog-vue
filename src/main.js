// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './blog.vue'
import router from './router/router.js'
import '../src/main/fonts/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '.app',
  router,
  components: { App },
  template: '<App/>'
})
