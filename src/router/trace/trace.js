const trace = [
    {
        path: 'trace',
        name: 'trace',
        meta: { title: '追踪', icon: 'line-chart' },
        hidden: false,
        component: () => import('@/views/trace/index'),
    },
    {
        path: 'trace-search',
        name: 'traceSearch',
        meta: { title: '追踪1', icon: 'line-chart' },
        component: () => import('@/views/trace/trace-search')
    },
    {
        path: 'trace-view',
        name: 'traceView',
        meta: { title: '追踪2', icon: 'line-chart' },
        component: () => import('@/views/trace/trace-view')
    }
]

export default trace
