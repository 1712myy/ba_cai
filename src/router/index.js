import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import log from '../views/log/index.vue'
import nav from '../views/nva/nva.vue'
import chan from '../views/chan_pin/Prducts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  // 一级路由
  {
    // 导航
    path: '/nva',
    name: 'nav',
    component: nav
  },
  // 产品
  {
    path: '/chan',
    // name: 'chan',
    component: chan
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/log',
    component: log

  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
