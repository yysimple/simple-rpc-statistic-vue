import Vue from 'vue'
import Router from 'vue-router';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({showSpinner: false}) // NProgress Configuration

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home'),
    }
]

const statisticRouters = () => new Router({
    routes: [
        ...constantRoutes,
    ]
})


const router = statisticRouters()

export default router
