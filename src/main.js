import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Router from './router.js'

Vue.config.productionTip = true
Vue.prototype.$http= axios
Vue.use(ElementUI);


new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
