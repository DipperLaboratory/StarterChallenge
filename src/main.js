import Vue from 'vue'
import VueCookies from 'vue-cookies'
import vuetify from './plugins/vuetify';

import App from './App.vue'

Vue.use(VueCookies)

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

new Vue({
  el:'#app',
  vuetify,
  render: h => h(App)
})
