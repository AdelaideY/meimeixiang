import Vue from 'vue'
// axios
import axios from 'axios'

// 引入公共scss
import '../stylesheets/main.scss'
import 'mint-ui/lib/style.css'
// 引入swiper css
import 'swiper/dist/css/swiper.min.css'
//引入awesome
import 'vue-awesome/icons'
// 引入fileter
import './filter'
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
import Icon from 'vue-awesome/components/Icon'
// rem
import computedRem from './rem'
computedRem()
Vue.component('icon', Icon)
// axios
Vue.prototype.$http = axios

Vue.config.productionTip = false
