import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue'
import Info from './components/Info.vue' // if we want to do it globally
import VueRouter from 'vue-router'

// SPA view routes:
import Blog from './components/Blog.vue'
import Account from './components/Account.vue'


Vue.use(VueRouter);

const routes = [
  {path:'/blog', component: Blog},
  {path: '/account', component: Account},
  {path: '/', component: User},
]


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.component('app-user', User);


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
