import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home";

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/',
        component: home,
        // hidden: true,
        children: [
            {
                path: '/',
                name:"example",
                component: () => import('@/views/mainpage/example'),
            },
        ]
    },

]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()


export default router

