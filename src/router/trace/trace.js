const trace = {
    path: 'trace',
    name: 'trace',
    component: () => import('@/views/trace/index'),
    children: [
        {
            path: 'traceSearch',
            name: 'traceSearch',
            component: () => import('@/views/trace/trace-search')
        },
        {
            path: 'traceView',
            name: 'traceView',
            component: () => import('@/views/trace/trace-view')
        }
    ]
}

export default trace