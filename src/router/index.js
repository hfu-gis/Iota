import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";
import AppLogin from "../views/AppLogin";
import Socialmedia from "../views/Social media Login";
import Dashboard from "../views/Dashboard";
import Konto from "../views/Konto";
import Bezahlen from "../views/Bezahlen";

Vue.use(VueRouter)

//let Dashboard;
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
            name: 'Bezahlen',
            component: Bezahlen
        },



        {   path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
    ]
})
