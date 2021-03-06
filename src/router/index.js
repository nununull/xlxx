import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/XxsPage',
                name: 'XxsPage',
                component: () => import("@/views/under18/XxsPage")
            },
            {
                path: '/LspPage',
                name: 'Page',
                component: () => import("@/views/18/LspPage")
            },
            {
                path: '/OperateGuide',
                name: "OperateGuide",
                component: () => import("@/views/OperateGuide")
            },
            {
                path: 'Player',
                name: 'Player',
                component: () => import("@/views/Player")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
