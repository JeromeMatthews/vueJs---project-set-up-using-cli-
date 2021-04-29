import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue'
import Info from './components/Info.vue' // if we want to do it globally
Vue.component('app-user', User);


new Vue({
  el: '#app',
  render: h => h(App)
})
