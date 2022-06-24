const register = {
    path: 'register',
    name: 'register',
    component: () => import('@/views/register/index'),
    children: [
        {
            path: 'appSearch',
            name: 'appSearch',
            component: () => import('@/views/register/app-search')
        },
        {
            path: 'serviceSearch',
            name: 'serviceSearch',
            component: () => import('@/views/register/service-search')
        }
    ]
}

export default register