import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img4.imgtn.bdimg.com/it/u=1051709616,2752434580&fm=27&gp=0.jpg',
  loading: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
})
