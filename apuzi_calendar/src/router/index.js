import Vue from 'vue'
import Router from "vue-router";
import Home from "../views/Home.vue";
import 'fullcalendar/dist/fullcalendar.css'

Vue.use(Router)
const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Login.vue')
        }
    },
    {
        path: '/sign_up_doctor',
        name: 'sign_up_doctor',
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Sign_up_doctor.vue')
        }
    },
    {
        path: '/sign_up_user',
        name: 'sign_up_user',
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Sign_up_user.vue')
        }
    },
    {
        path: '/board',
        name: 'board',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Board.vue')
        }
    },
    {
        path: '/sign_up',
        name: 'sign_up',
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Sign_up.vue')
        }
    },
    {
        path: '/booking',
        name: 'booking',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Book.vue')
        }
    },
    {
        path: '/:idx',
        name: 'board_idx',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Board.vue')
        }
    },
]


const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router