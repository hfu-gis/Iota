import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";
import AppLogin from "../views/AppLogin";
import Socialmedia from "../views/Social media Login";
import Register from "../views/Register";
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: HelloWorld
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/AppLogin',
            component: AppLogin
        },
    ]
})