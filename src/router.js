import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from './components/Login.vue'
import Main from './components/Main.vue'
export const constantRoutes = [

    { path:"/", name:"login",  component:Login},
    { path:"/myhome", name:"Home", component: () => import('./components/home.vue') },
    {
        path:"/upload",
        // ???
        // name:"welcome",
        component: Main,
        children: [
            {
                path: 'image',
                name: 'image',
                component: () => import('./components/upload.vue'),
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

router.beforeEach((to, from, next) => {
    console.log(from.fullPath);
    console.log(to.fullPath);
    next();

    // token exists？
    if(localStorage.getItem('loginToken')){
        console.log("from where: " + from.name)
        if(to.name == "login"){
            console.log("already log in!")
            console.log("from where: " + from.name)
            next({ name:"MainBoard" } );
        } else {
            next();
        }
    } else {
        if(to.name == "Home")
            next()
        else {
            console.log("Please log in")
            next({
                name:'login'
            })
        }

    }



});
export default router