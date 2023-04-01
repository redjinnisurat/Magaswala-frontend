<template>
    <MyNavbar />
    <div class="container d-flex">

        <div class="box py-2 px-0 pe-5">
            <h5 class="title mx-2 mt-2 mb-3">Checkout</h5>
        <div class="box-address mx-2 mt-1">
        <h6>Shipping To</h6>
        <div class="home-address mx-0 mb-2">
          <img
            class="checkin3"
            src="@/assets/checkin.png"
            alt=""
            style="width: 11px"
          />
          <img
            class="edit-icon"
            src="@/assets/edit.png"
            alt=""
            style="width: 10px"
          />
          <p class="home">Home Address</p>

          <p class="base-address">(269) 444-6853<br />Road Number 5649 Akali</p>
        </div>

        <div class="office-address mx-0 mb-2">
          <img
            class="checkout6"
            src="@/assets/checkout2.png"
            alt=""
            style="width: 11px"
          />
          <!-- <img
            class="edit-icon"
            src="@/assets/edit.png"
            alt=""
            style="width: 10px"
          /> -->
          <p class="office">Office Address</p>
          <p class="base-address2">
            (269) 444-2596<br />Road Number 2403 Blogshow
          </p>
        </div>
        <!-- <router-link to="/paymentpage">
          <button href="#" class="btn2 mx-2">Make Payment</button>
        </router-link> -->
        <!-- <div class="form-check3">
        <input
          class="form-check3-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
      </div> -->
      </div>

        <div class="box2">
      
      <br /><br /><br /><br /><br />
      <h6 class="title2">Payment Options</h6>

      <div id="box">
        <img
          class="debit-card mx-3 mt-3"
          src="@/assets/debitcard.png"
          alt=""
          style="width: 20px; height: 20px"
        />
        <p class="credit">Credit Card/Debit Card</p>
        <img
          class="checkout3"
          src="@/assets/checkout2.png"
          alt=""
          style="width: 11px"
        />
      </div>
      <!-- <div class="form-check2">
  <input class="form-check2-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  </div> -->
      <div id="box2">
        <img
          class="apple-card mx-3"
          src="@/assets/applepay.png"
          alt=""
          style="width: 20px"
        />
        <p class="apple">Apple Pay</p>
        <img
          class="checkout4"
          src="@/assets/checkout2.png"
          alt=""
          style="width: 11px"
        />
      </div>
      <!-- <div class="form-check2">
  <input class="form-check2-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  </div>  -->
      <div id="box3">
        <img
          class="upi-card"
          src="@/assets/Upi.png"
          alt=""
          style="width: 24px"
        />
        <p class="upi">UPI</p>
        <img
          class="checkout5"
          src="@/assets/checkout2.png"
          alt=""
          style="width: 11px"
        />
      </div>
      <!-- <div class="form-check2">
  <input class="form-check2-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  </div> -->
      <div id="box4">
        <img class="payon-card" src="@/assets/payon.png" alt="" />
        <p class="pay">Pay On Delivery</p>
        <img
          class="checkin2"
          src="@/assets/checkin.png"
          alt=""
          style="width: 11px"
        />
      </div>
      <!-- <div class="form-check2">
  <input class="form-check2-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  </div> -->

      
      
    </div>
</div>
<br/>
<br/>
    <p class="vertical-line"></p>

    <h6 class="promo-code">Promo Code</h6>
    <input type="text" class="input-box col-1 row-2" placeholder="Promo code" aria-label="Search" style="width: 15em; height: 2em;">
    <button href="#" class="btn-apply mx-0">Apply</button>

    <div class="order">
      <h5 class="summery">Order Summery</h5>
      <p class="items">items:</p>
      <p class="prize">Rs.875</p>
      <p class="items2">CGST:</p>
      <p class="prize2">Rs.20</p>
      <p class="items3">SGST:</p>
      <p class="prize3">Rs.20</p>
      <hr />
      <img
        class="corner1"
        src="@/assets/top-left.png"
        alt=""
        style="width: 10px"
      />
      <p class="items4">Total:</p>
      <p class="prize4">Rs.915</p>
      <img class="plus" src="@/assets/plus2.png" alt="" style="width: 10px" />
      <p class="items5">Delivery:</p>
      <p class="prize5">Rs.45</p>
      <img
        class="corner2"
        src="@/assets/bottom-left.png"
        alt=""
        style="width: 10px"
      />
      <hr />
      <p class="items6">Total:</p>
      <p class="prize6">Rs.950</p>
      <button href="#" class="btn2 mx-0">Make Payment</button>
    </div>

    </div>
    <MyUsersBought />
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyUsersBought from "@/components/MyUsersBought.vue";
 export default {
    name: "MyPaymentpage",
    components: {MyNavbar, MyUsersBought},
 };
</script>

<style scoped>

.container{
    border: 1px solid #BF9742;
    border-radius: 10px;
    width: 59em;
    margin-right: 11em;
    background-color: white;
}
.box{
    margin-right: 5em;
}
.box .title{
    color: #B1622A;
}

.box-address .checkin3 {
  margin-left: 0em;
  margin-top: 1em;
}
.box-address .edit-icon {
  float: right;
  margin-top: 1em;
}
.home-address {
  border: 1px solid #e6b325;
  border-radius: 7px;
  padding: 0.5em;
  width: 10em;
  height: 3.5em;
}
.home {
  font-weight: 645;
  font-size: 80%;
  margin-top: -2.5em;
  margin-left: 1.5em;
}

.base-address {
  font-size: 54%;
  margin-left: 2em;
  margin-top: -2em;
}

.box-address .checkout6 {
  margin-left: 0em;
  margin-top: 1em;
}
.office-address {
  background-color: white;
  border-radius: 7px;
  padding: 0.5em;
  width: 10em;
  height: 3.5em;
}
.office {
  font-weight: 645;
  font-size: 80%;
  margin-top: -2.5em;
  margin-left: 1.5em;
}

.base-address2 {
  font-size: 54%;
  margin-left: 2em;
  margin-top: -2em;
}

.box2 .title2 {
  margin-top: -6.5em;
  margin-left: 1em;
}

.credit {
  margin-left: 3em;
  margin-top: -1.5em;
  font-weight: 500;
}

#box .checkout3 {
  margin-left: 14em;
  margin-top: -5.2em;
}

#box2 .checkout4 {
  margin-left: 14em;
  margin-top: -5.2em;
}

#box3 .checkout5 {
  margin-left: 14em;
  margin-top: -5.2em;
}

#box4 .checkin2 {
  margin-left: 14em;
  margin-top: -5.2em;
}
.apple-card {
  float: left;
  /* margin-left: 1em; */
}
.apple {
  margin-right: 1em;
  margin-top: -1.5em;
  font-weight: 500;
}

.upi-card {
  margin-top: -3em;
  margin-left: 0.8em;
}
.upi {
  margin-left: 3em;
  margin-top: -3em;
  font-weight: 500;
}

.payon-card {
  margin-top: -3em;
  margin-left: 0.8em;
}
.pay {
  margin-left: 3em;
  margin-top: -3em;
  font-weight: 500;
}

/* .box2 .form-check2{
  margin-left: 16em;
  margin-top: -2.5em;
} */

.vertical-line {
  border-left: 1px solid #bf9742;
  height: 25em;
  position: absolute;
  margin-left: 25em;
  margin-top: 1em;
}
.promo-code{
   font-weight: 500;
   margin-top: 3em;
   margin-left: 7em;
}
.input-box{
    margin-top: 5em;
    margin-left: -8em;
    padding-left: 1em;
    margin-right: 0.5em;
    border: 1px solid #a17a35;
    border-radius: 5px;
}
.btn-apply{
    margin-top: 5em;
  border: 2px solid #a17a35;
  border-radius: 5px;
  background-color: #a17a35;
  color: white;
  width: 5em;
  height: 1.9em;
}
.order {
  margin-left: -20em;
  margin-top: 8.5em;
  height: 10em;
  width: 15em;
}

.order .items {
  font-size: 90%;
  margin-bottom: 0em;
}
.order .prize {
  font-size: 90%;
  float: right;
  margin-top: -1.3em;
  margin-right: 6.5em;
}
.order .items2 {
  font-size: 90%;
  margin-bottom: 0em;
}
.order .prize2 {
  font-size: 90%;
  float: right;
  padding: 0px;
  margin-top: -1.3em;
  margin-right: 6.8em;
  margin-bottom: 0px;
}
.order .items3 {
  font-size: 90%;
  margin-bottom: -0.5em;
}
.order .prize3 {
  font-size: 90%;
  float: right;
  margin-top: -1em;
  margin-right: 6.8em;
}
.order .items4 {
  font-size: 90%;
  margin-top: -2.5em;
}
.order .prize4 {
  font-size: 90%;
  float: right;
  margin-top: -2.5em;
  margin-right: 6.8em;
}
.order .items5 {
  font-size: 90%;
  margin-top: -2.5em;
  margin-bottom: -2em;
}
.order .prize5 {
  font-size: 90%;
  float: right;
  margin-top: -1em;
  margin-right: 6.8em;
}
.order .items6 {
  font-size: 90%;
  margin-top: -0.5em;
}
.order .prize6 {
  font-size: 90%;
  float: right;
  margin-top: -2.5em;
  margin-right: 6.8em;
}
.order .corner1 {
  margin-left: -1em;
  /* margin-top: -2em; */
  margin-bottom: 1.2em;
}
.order .plus {
  margin-left: -1.2em;
  margin-top: -3em;
}
.order .corner2 {
  margin-top: 1em;
  margin-left: -1em;
}

.order .btn2 {
  width: 13em;
  height: 2em;
  border: 2px solid #a17a35;
  border-radius: 5px;
  background-color: #a17a35;
  color: white;
  margin-left: -5em;
  padding: 1px;
}

@media screen and (max-width: 1800px) {
  /* .container{
    margin-left: 20em;
    max-width: 80em;
  } */
}

@media screen and (max-width: 1390px){
  /* .container {
    margin-left: 12em;
  } */
}

@media screen and (max-width: 990px) {
    .container{
       max-width: 60em;
       margin-left: 5em;
    }
}

@media screen and (max-width: 690px) {
    .container{
       max-width: 80em;
       margin-left: 10em;
    }
}


</style>