/* eslint-disable */
import Vue from "vue";
// 引入路由
import VueRouter from "vue-router";
// 引入组件
import Login from "../components/login/Login.vue";
import Home from "../components/home/Home.vue";
import Users from "../components/users/Users.vue";
import Roles from '../components/roles/Roles.vue'
import Rights from '../components/rights/Rights.vue'

Vue.use(VueRouter);
/* eslint-disable */
// 实例化路由
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    {
      path: "/home",
      component: Home,
      children: [
        { path: "/users", component: Users },
        { path: "/roles", component: Roles },
        { path: "/rights", component: Rights }
      ]
    }
  ]
});
// 导出路由(在main.js引入)
export default router;
