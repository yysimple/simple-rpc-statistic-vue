const register = [
    {
        path: 'register',
        name: 'register',
        meta: { title: '注册页', icon: 'user' },
        hidden: false,
        component: () => import('@/views/register/index'),
    },
    {
        path: 'app-search',
        name: 'appSearch',
        meta: { title: '注册1', icon: 'user' },
        component: () => import('@/views/register/app-search')
    },
    {
        path: 'service-search',
        name: 'serviceSearch',
        meta: { title: '注册2', icon: 'user' },
        component: () => import('@/views/register/service-search')
    }
]

export default register
