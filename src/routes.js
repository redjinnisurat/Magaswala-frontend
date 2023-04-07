import{createRouter, createWebHistory} from "vue-router";

import HelloWorld from "./components/HelloWorld.vue"
import gridComp from "./components/gridComp.vue"
import profileComp from "./components/profileComp.vue"
import HomeaddressComp from "./components/HomeaddressComp.vue"
import testComp from "./components/testComp.vue"
import editprofileComp from "./components/editprofileComp.vue"
import manageaddressComp from "./components/manageaddressComp.vue"
import addaddressComp from "./components/addaddressComp.vue"
import offaddComp from "./components/offaddComp.vue"
import orderComp from "./components/orderComp.vue"
import paymentComp from "./components/paymentComp.vue"
const routes=[
    {
        name:"HelloWorld",
        component: HelloWorld,
        path:"/hello",
    },

    {
        name:"gridComp",
      path: '/grid',
        component: gridComp
    },
    {
        name:"profileComp",
      path: '/',
        component:profileComp
    },
    {
        name:"HomeaddressComp",
      path: '/homeaddress',
        component:HomeaddressComp
    },
    {
      name:"testComp",
    path: '/test',
      component:testComp
  },
  {
    name:"editprofileComp",
  path: '/editaddress',
    component:editprofileComp
},

{
  name:"manageaddressComp",
path: '/manageaddress',
  component:manageaddressComp
},
{
  name:"addaddressComp",
path: '/addaddress',
  component:addaddressComp
},
{
  name:"offaddComp",
path: '/officeaddress',
  component:offaddComp
},
{
  name:"orderComp",
path: '/order',
  component:orderComp
},
{
  name:"paymentComp",
path: '/payment',
  component:paymentComp
},
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;