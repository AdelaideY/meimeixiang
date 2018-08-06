import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import commons from './common'
const store = new Vuex.Store({
    modules: {
        commons
    }
})
export default store