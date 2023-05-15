import { createWebHistory,createRouter } from "vue-router";
import Home from './components/Home.vue';
import favourite from './components/favourite.vue'
import ProductPage from './components/ProductPage.vue'
import ProductPageAdd from './components/ProductPageAdd.vue'

const routes=[
   
    {
        name:'Home',
        path:'/home',
        component: Home
    },
    {
        name:'favourite',
        path:'/favourite',
        component: favourite
    },
    {
        name:'ProductPage',
        path:'/ProductPage',
        component: ProductPage
    },
    {
        name:'ProductPageAdd',
        path:'/ProductPageAdd',
        component: ProductPageAdd
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;