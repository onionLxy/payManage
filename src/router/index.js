import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/login.vue'
import Home from '@/components/Home/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
