import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import App from './App.vue'
import Router from './router.js'
import store from "./store.js"
import "./rem.js"

Vue.config.productionTip = false
Vue.prototype.$http= axios
Vue.use(ElementUI);
Vue.use(iView)

new Vue({
  router: Router,
  store,
  render: h => h(App),
}).$mount('#app')
