import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import axios from './BackEnd/axios-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueImg from 'v-img';

Vue.component('icon', Icon)
Vue.use(VueImg);
Vue.use(BootstrapVue);
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
