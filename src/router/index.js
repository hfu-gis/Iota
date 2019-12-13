import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";
import AppLogin from "../views/AppLogin";
import Socialmedia from "../views/Social media Login";
import Register from "../views/Register";
import Konto from "../views/Konto";
import Bezahlen from "../views/Bezahlen";
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/AppLogin',
            component: AppLogin
        },
        {
            path: '/Bezahlen',
            component: Bezahlen
        },



        {   path: '/Register',
            component: Register},
    ]
})
