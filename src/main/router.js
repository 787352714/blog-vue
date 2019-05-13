//引入vue 和 vue-router
import Vue from 'vue'
import vueRouter from 'vue-router'

import home from '../compopnents/home.vue'
import font from '../compopnents/font.vue'

//手动加载vue-router
Vue.use(vueRouter);

//注册路由
var router = new vueRouter({
    routes:[
        {path:'/',directives:home},
        {path:'/home',component:home},
        {path:'/font',component:font}
    ]
})

export default router;