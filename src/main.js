import Vue from 'vue'
import VueCookies from 'vue-cookies'
import vuetify from './plugins/vuetify';
import md5 from 'js-md5';

import App from './App.vue'

Vue.use(VueCookies)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.prototype.$md5 = md5;

new Vue({
    el: '#app',
    vuetify,
    render: h => h(App)
})
