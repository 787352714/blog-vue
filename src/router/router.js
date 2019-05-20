//引入vue 和 vue-router
import Vue from 'vue'
import vueRouter from 'vue-router'

import home from '../components/home.vue'
import font from '../components/font.vue'
import python from '../components/python.vue'
import algorithm from '../components/algorithm.vue'
import pageinfo from '../components/pageinfo/pageinfo.vue'
import other from '../components/other.vue'
import search from '../components/subcomponents/search.vue'

//手动加载vue-router
Vue.use(vueRouter);

//注册路由
var router = new vueRouter({
    routes:[
        {path:'/#',redirect:home},
        {path:'/home',component:home},
        {path:'/font',component:font,name:'font'},
        {path:'/:name/pageinfo/:id',component:pageinfo},
        {path:'/python',component:python,name:'python'},
        {path:'/algorithm',component:algorithm,name:'algorithm'},
        {path:'/other',component:other,name:'other'},
        {path:'/search',component:search,name:'search'}
    ]
})

export default router;