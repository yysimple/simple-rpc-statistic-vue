import Vue from 'vue'
import Router from 'vue-router';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import Home from '@/views/home'

NProgress.configure({showSpinner: false}) // NProgress Configuration

import trace from './trace/trace'
import register from './register/register'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/',
        name: 'home',
        redirect: { path: '/trace' },
        meta: { title: '链路追踪', icon: 'bar-chart' },
        component: Home,
        children: [
            ...trace,
        ]
    },
    {
        path: '/reg',
        name: 'homeRegister',
        redirect: { path: '/reg/register' },
        meta: { title: '用户注册', icon: 'user' },
        component: Home,
        children: [
            ...register,
        ]
    },
    {
        path: '*',
        hidden: true,
        component: {
            render: (h) => h('h2', '404 Not Found'),
        }
    }
]

const statisticRouters = () => new Router({
    routes: [
        ...constantRoutes
    ]
})

const router = statisticRouters()

export default router
