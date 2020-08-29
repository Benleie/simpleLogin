import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Welcome from './components/welcome.vue'
import Login from './components/Login.vue'
import Main from './components/Main.vue'
export const constantRoutes = [
    { path:"/welcome", name:"welcome", component: Welcome },
    { path:"/", name:"login", component:Login},
    {
        path: '/left1',
        component: Main,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('./components/backend/Left1.vue'),
            }
        ]
    },
    {
        path: '/left2',
        component: Main,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('./components/backend/Left2.vue'),
            }
        ]
    },
    {
        path: '/left3',
        component: Main,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('./components/backend/Left3.vue'),
            }
        ]
    },
]
const createRouter = () => new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export default router