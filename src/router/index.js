import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import Homei  from '../components/home/home'

Vue.use(VueRouter)

const routes = [{
  path:'/',
  redirect:'/home'
},
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[{
      path:'',
      component:Homei
  }]
  },{
    path: '/login',
    component: Login
  }
  
  // {
  //   path: '/about',
  //   name: 'about',
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
