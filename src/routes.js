import MyHomepage from './components/MyHomepage.vue'
import MyCheckoutpage from './components/MyCheckoutpage.vue'
import MyPaymentpage from './components/MyPaymentpage.vue'
// import RandomItemsProducts from './components/RandomItemsProducts.vue'
// import ProductSlider from './components/ProductSlider.vue'
import ImageSlider from './components/ImageSlider.vue'
import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    name: "MyHomepage",
    component: MyHomepage,
    path: "/addbag"
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
  },
//   {
//     name: "RandomItemsProducts",
//     component: RandomItemsProducts,
//     path: "/"
//   },
  //  {
  //   name: "ProductSlider",
  //   component: ProductSlider,
  //   path: "/productslider"
  //  },
   {
    name: "ImageSlider",
    component: ImageSlider,
    path: "/imageslider"
   },
 ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router