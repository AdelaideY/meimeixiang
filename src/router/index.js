// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入Home
import Home from '../components/pages/Home/Home'
import store from '../store'
// 引入Classfiy
import Classify from '../components/pages/classify/Classify'
// 引入mine
import Mine from '../components/pages/Mine/Mine'
import Car from '../components/pages/Car/Car'
// today 二级路由
import Today from '../components/pages/Home/TodaySelect/TodaySelect.vue'
import AppLogin from '../components/pages/Login/Login.vue'
import Pony from '../components/pages/Home/pony/Pony'
import AppRegister from '../components/pages/Register/Register.vue'
import AppList from '../components/pages/List/List.vue'
// 全局注册
Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        redirect: {name: 'today'}
      },
      {
        path: 'top=1',
        name: 'today',
        component: Today
      },
      {
        path: 'top=6',
        name: 'Pony',
        component: Pony
      }
    ]
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    beforeEnter: (to, from ,next) => {
      if ( !store.state.commons.user_state ){
          next('/login')
      }else {
          next()
      }
  }
  },
  {
    path: '/car',
    name: 'car',
    component: Car
    
  },
  {
    path: '/list',
    name: 'list',
    component: AppList
  },
  {
    path: '/login',
    name: 'login',
    component: AppLogin
  },
  {
    path: '/register',
    name: 'register',
    component: AppRegister
  }
]
// 实例
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router

// activity/jkdlek5k
// activity/jk3soldb
// activity/jk3sjlud