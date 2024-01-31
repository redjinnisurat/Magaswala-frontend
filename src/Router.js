import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage/HomePage.vue";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage.vue";
import BagPage from "./components/BagPage/BagPage.vue";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage.vue";
import CompletePage from "./components/Completepage/CompletePage.vue";
import ProfilePage from "./components/ProfilePage/ProfilePage.vue";
import LoginPage from "./components/LoginPage/LoginPage.vue";
import ForgetPassPage from "./components/LoginPage/ForgetPassPage.vue";
import ForgetPassOTPVerify from "./components/LoginPage/ForgetPassOTPVerify.vue";
import SetNewPassPage from "./components/LoginPage/SetNewPassPage.vue";
import VerifyEmailPage from "./components/LoginPage/VerifyEmailPage.vue";
import SignUpPage from "./components/SignUpPage/SignUpPage.vue";
import BagItemPage from "./components/BagItemPage/BagItemPage.vue";
import ProfileDataComp from "./components/ProfilePage/ProfileDataComp.vue";
import OrdersComp from "./components/ProfilePage/OrdersComp.vue";
import TrackOrderComp from "./components/ProfilePage/TrackOrderComp.vue";
import ResetPasswordComp from "./components/ProfilePage/ResetPasswordComp.vue";
import PaymentMethodsComp from "./components/ProfilePage/PaymentMethodsComp.vue";
import AddressComp from "./components/ProfilePage/AddressComp.vue";
import HomeAddressComp from "./components/ProfilePage/HomeAddressComp.vue";
import AddAddressComp from "./components/ProfilePage/AddAddressComp.vue";
import HelpSupportComp from "./components/ProfilePage/HelpSupportComp.vue";
import TermsCondComp from "./components/ProfilePage/TermsCondComp.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "FavouritesPage",
    path: "/favPage",
    component: FavouritesPage,
  },
  {
    name: "BagPage",
    path: "/bagPage",
    component: BagPage,
  },
  {
    name: "CheckoutPage",
    path: "/checkoutPage/:order",
    component: CheckoutPage,
  },
  {
    name: "CompletePage",
    path: "/completePage/:order_id",
    component: CompletePage,
  },
  {
    name: "ProfilePage",
    path: "/profilePage",
    component: ProfilePage,
    children: [
      {
        path: "/profilePage/userData",
        component: ProfileDataComp,
      },
      {
        path: "/profilePage/orders",
        component: OrdersComp,
      },
      {
        name: "TrackOrderComp",
        path: "/profilePage/orders/trackOrder/:order",
        component: TrackOrderComp,
      },
      {
        path: "/profilePage/resetPassword",
        component: ResetPasswordComp,
      },
      {
        path: "/profilePage/paymentMethods",
        component: PaymentMethodsComp,
      },
      {
        name: "AddressComp",
        path: "/profilePage/manageAddress",
        component: AddressComp,
      },
      {
        name: "HomeAddressComp",
        path: "/profilePage/manageAddress/homeAddress/:address",
        component: HomeAddressComp,
      },
      {
        name: "AddAddressComp",
        path: "/profilePage/manageAddress/addAddress",
        component: AddAddressComp,
      },
      {
        path: "/profilePage/helpSupport",
        component: HelpSupportComp,
      },
      {
        path: "/profilePage/termsCondition",
        component: TermsCondComp,
      },
    ],
  },
  {
    name: "LoginPage",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "ForgetPassPage",
    path: "/forgetPassword",
    component: ForgetPassPage,
  },
  {
    name: "ForgetPassOTPVerify",
    path: "/forgetPassOtpVerify/:object",
    component: ForgetPassOTPVerify,
  },
  {
    name: "SetNewPassPage",
    path: "/setPassword/:id",
    component: SetNewPassPage,
  },
  {
    name: "VerifyEmailPage",
    path: "/verifyEmail/:object",
    component: VerifyEmailPage,
  },
  {
    name: "SignUpPage",
    path: "/signup",
    component: SignUpPage,
  },
  {
    name: "BagItemPage",
    path: "/bagItemPage/:id",
    component: BagItemPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
