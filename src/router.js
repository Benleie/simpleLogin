import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from './components/Login.vue'
import Main from './components/Main.vue'
export const constantRoutes = [

    { path:"/", name:"login", component:Login},
    {
        path:"/upload",
        // ???
        // name:"welcome",
        component: Main,
        children: [
            {
                path: 'image',
                name: 'image',
                component: () => import('./components/welcome.vue'),
            }
        ]
    },
    {
        path: '/left1',
        component: Main,
        name: "MainBoard",
        // ()
        props: true,
        children: [
            {
                path: 'index',
                name: 'Left1',
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
                name: 'Left2',
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
                name: 'Left3',
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