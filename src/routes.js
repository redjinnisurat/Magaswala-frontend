import setnewpassword from './components/setnewpassword.vue'
import forgetpassword from './components/forgetpassword.vue'
import userlogin from './components/userlogin.vue'
import signup from './components/signup.vue'
import verification from './components/verification.vue'
import verification2 from './components/verification2.vue'
import abc from './components/abc.vue'


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
        name: 'userlogin',
        component: userlogin,
        path: '/userlogin'
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
        name: 'verification2',
        component: verification2,
        path: '/verification2'

    },

    {
        name: 'abc',
        component: abc,
        path: '/abc'
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router