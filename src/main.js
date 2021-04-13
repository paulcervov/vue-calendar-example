import Vue from 'vue'
import App from './App.vue'
import vueMoment from 'vue-moment'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(vueMoment);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
