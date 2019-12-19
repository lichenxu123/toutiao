import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Component from './components/'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
