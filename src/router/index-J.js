// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入Home
import Home from '../components/pages/Home/Home'

// 引入Classfiy
import Classify from '../components/pages/classify/Classify'
// 引入mine
import Mine from '../components/pages/Mine/mine'

// today 二级路由
import Today from '../components/pages/Home/TodaySelection/Today'
import Pony from '../components/pages/Home/pony/pony'

// 详情页
import Detail from '../components/pages/details/details'

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
    component: Mine
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

// 实例
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
