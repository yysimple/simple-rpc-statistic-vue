const register = [
    {
        path: 'register',
        name: 'register',
        meta: { title: '注册中心总揽', icon: 'user' },
        hidden: false,
        component: () => import('@/views/register/index'),
    },
    {
        path: 'app-search',
        name: 'appSearch',
        meta: { title: '应用搜索', icon: 'user' },
        component: () => import('@/views/register/app-search')
    },
    {
        path: 'service-search',
        name: 'serviceSearch',
        meta: { title: 'RPC服务搜索', icon: 'user' },
        component: () => import('@/views/register/service-search')
    }
]

export default register
