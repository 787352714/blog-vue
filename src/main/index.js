import Vue from "vue"
import blog from './blog.vue'

import vueRouter from 'vue-router'
Vue.use(vueRouter);
import router from './router.js'

import vuePreview from 'vue-preview'
Vue.use(vuePreview);

import './fonts/iconfont.css'

var vm = new Vue({
    el: '.app',
    render:c=>c(blog),
    router
})