const routers = [
    {
        path: '/',
        name: 'Index',
        component: (resolve) => require(['./views/Index.vue'], resolve)
    },
    {
        path: '/sidebar',
        name: 'Sidebar',
        component: (resolve) => require(['./views/Sidebar.vue'], resolve)
    },
]
export default routers
