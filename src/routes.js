import MyHomepage from './components/MyHomepage.vue'
import MyCheckoutpage from './components/MyCheckoutpage.vue'
import MyPaymentpage from './components/MyPaymentpage.vue'
import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    name: "MyHomepage",
    component: MyHomepage,
    path: "/"
  },
  {
    name: "MyCheckoutpage",
    component: MyCheckoutpage,
    path: "/Checkoutpage"
  },
  {
    name: "MyPaymentpage",
    component: MyPaymentpage,
    path: "/paymentpage"
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router