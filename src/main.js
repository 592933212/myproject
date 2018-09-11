import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './vuex/store'
import App from './App'
import routers from '@/router/index.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.axios = axios

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes: routers
})

let vRouter = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
Vue.use({
  vRouter
})
