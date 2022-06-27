const trace = [
    {
        path: 'trace-overview',
        name: 'trace',
        meta: { title: '链路总揽', icon: 'line-chart' },
        hidden: false,
        component: () => import('@/views/trace/index'),
    },
    {
        path: 'trace-list',
        name: 'traceList',
        meta: { title: 'trace列表', icon: 'line-chart' },
        component: () => import('@/views/trace/trace-list')
    },
    {
        path: 'view-trace',
        name: 'traceView',
        meta: { title: '链路树', icon: 'line-chart' },
        component: () => import('@/views/trace/trace-view')
    }
]

export default trace
