import{createRouter, createWebHistory} from "vue-router";

import HelloWorld from "./components/HelloWorld.vue"
import gridComp from "./components/gridComp.vue"
import profileComp from "./components/profileComp.vue"

import HomeaddressComp from "./components/HomeaddressComp.vue"

import editprofileComp from "./components/editprofileComp.vue"
import manageaddressComp from "./components/manageaddressComp.vue"
import addaddressComp from "./components/addaddressComp.vue"
import offaddComp from "./components/offaddComp.vue"
import orderComp from "./components/orderComp.vue"
import paymentComp from "./components/paymentComp.vue"
import resetpassComp from "./components/resetpassComp.vue"
import termComp from "./components/termComp.vue"
import orderstatusComp from "./components/orderstatusComp.vue"
import myprofileComp from "./components/myprofileComp.vue"
import testComp2 from "./components/testComp2.vue"
import DashComp from "./components/DashComp.vue"
import NavComp from "./components/NavComp.vue"
import helpandsupportComp from "./components/helpandsupportComp.vue"
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
  //   {
  //     name:"testComp",
  //   path: '/t',
  //     component:testComp
  // },
  {
    name:"testComp2",
  path: '/test',
    component:testComp2
},
  {
    name:"editprofileComp",
  path: '/editprofile',
    component:editprofileComp
},
{
  path: "/d",
  name: "DashComp",
  component: DashComp,
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
{
  name:"resetpassComp",
path: '/reset',
  component:resetpassComp
},
{
  name:"termComp",
path: '/term',
  component:termComp
},
{
  name:"orderstatusComp",
path: '/orderstatus',
  component:orderstatusComp
},
{
  name:"myprofileComp",
path: '/mp',
  component:myprofileComp
},
{
  name:"NavComp",
path: '/NavComp.vue',
  component:NavComp
},
{
  name:"helpandsupportComp",
path: '/help',
  component:helpandsupportComp
},


]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;