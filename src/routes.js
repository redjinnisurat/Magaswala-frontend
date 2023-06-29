import setnewpassword from './components/setnewpassword.vue'
import forgetpassword from './components/forgetpassword.vue'
import login from './components/login.vue'
import signup from './components/signup.vue'
import verification from './components/verification.vue'
import Home from './components/home.vue';
import navbar from './components/navbar.vue'




import { createRouter, createWebHistory }
from 'vue-router'



const routes = [

    {
        name: 'setnewpassword',
        component: setnewpassword,
        path: '/setnewpassword'
    },
    {

        name: 'forgetpassword',
        component: forgetpassword,
        path: '/forgetpassword'
    },

    {
        name: 'login',
        component: login,
        path: '/login'
    },
    {
        name: 'signup',
        component: signup,
        path: '/signup'
    },
    {
        name: 'verification',
        component: verification,
        path: '/verification'
    },
    {
        name: 'navbar',
        path: '/navba',
        component: navbar
    },
    {
        name: 'Home',
        path: '/home',
        component: Home
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router