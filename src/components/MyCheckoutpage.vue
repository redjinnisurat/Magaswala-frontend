<template>
  <MyNavbar />

  <div class="container d-flex">
    <div class="box" style="width: 30rem">
      <img
        src="@/assets/ladu.png"
        class="card-img-top mx-5"
        alt="..."
        style="width: 20em"
      />
      <div class="card-body">
        <h5 class="card-title">Kesar magas</h5>
        <img
          class="feather-heart me-3"
          src="@/assets/feather-heart.png"
          alt=""
          width="20px;"
        />
        <h6 class="weight pt-1 mb-1">₹ 250 Per Kg</h6>
        Description
        <p class="card-text mt-1 mb-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
          sed diam nonumy eirmod tempor invidunt ut labore et<br />
          dolore magna aliquyam erat, sed
        </p>
        <p class="weight2">1Kg</p>
        <p class="add-remove">
          <img class="plus" src="@/assets/plus.png" alt="" width="17px" /> 1
          <img class="minus" src="@/assets/minus.png" alt="" width="17px" />
        </p>
        <img
          class="checkin"
          src="@/assets/checkin.png"
          alt=""
          style="width: 11px"
        />
        <!-- <div class="form-check1">
        <input
          class="form-check1-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
      </div> -->
        <p class="weight3">500G</p>
        <img
          class="checkout"
          src="@/assets/checkout2.png"
          alt=""
          style="width: 11px"
        />
        <!-- <div class="form-check1 mb-2 pt-1">
  <input class="form-check1-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
</div> -->
        <p class="weight4">250G</p>
        <img
          class="checkout"
          src="@/assets/checkout2.png"
          alt=""
          style="width: 11px"
        />
        <!-- <div class="form-check1 pt-0">
  <input class="form-check1-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    </div> -->
        <a href="#" class="btn">Add to Bag</a>
      </div>
    </div>

    <div class="box2">
      <h5 class="title mx-3 mt-2 mb-0">Checkout</h5>
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
          class="checkout2"
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
          class="checkout3"
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
          class="checkout4"
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

      <div class="box-address mx-2 mt-1">
        <h6>Shipping To</h6>
        <div class="home-address mx-2 mb-2">
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

        <div class="office-address mx-2 mb-2">
          <img
            class="checkout6"
            src="@/assets/checkout2.png"
            alt=""
            style="width: 11px"
          />
          <img
            class="edit-icon"
            src="@/assets/edit.png"
            alt=""
            style="width: 10px"
          />
          <p class="office">Office Address</p>
          <p class="base-address2">
            (269) 444-2596<br />Road Number 2403 Blogshow
          </p>
        </div>
        <router-link to="/paymentpage">
          <button href="#" class="btn2 mx-2">Make Payment</button>
        </router-link>
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
    </div>
      <p class="vertical-line"></p>
   
    <div class="order">
      <h5 class="summery">Order Summery</h5>
      <p class="items">items:</p>
      <p class="prize">Rs.250</p>
      <p class="items2">CGST:</p>
      <p class="prize2">Rs.10</p>
      <p class="items3">SGST:</p>
      <p class="prize3">Rs.10</p>
      <hr />
      <img
        class="corner1"
        src="@/assets/top-left.png"
        alt=""
        style="width: 10px"
      />
      <p class="items4">Total:</p>
      <p class="prize4">Rs.270</p>
      <img class="plus" src="@/assets/plus2.png" alt="" style="width: 10px" />
      <p class="items5">Delivery:</p>
      <p class="prize5">Rs.40</p>
      <img
        class="corner2"
        src="@/assets/bottom-left.png"
        alt=""
        style="width: 10px"
      />
      <hr />
      <p class="items6">Total:</p>
      <p class="prize6">Rs.310</p>
    </div>
 
  </div>
  <RecommandedProducts />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <MostBoughtProducts />
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import RecommandedProducts from "@/components/RecommandedProducts.vue";
import MostBoughtProducts from "@/components/MostBoughtProducts.vue";
export default {
  name: "MyCheckoutpage",
  components: { MyNavbar, RecommandedProducts, MostBoughtProducts },
};
</script>

<style scoped>
/* *{
  background-color: #F9F9F9 0% 0% no-repeat padding-box;
  opacity: 1;
} */

.box {
  border: 2px solid #bf9742;
  border-radius: 4px;
  padding: 7px;
  background-color: white;
  height: 32em;
}

.feather-heart {
  padding: 0px;
  position: relative;
  float: right;
  margin-top: -1.5em;
}
.weight {
  color: #e6b325;
}

.card-text {
  letter-spacing: 0px;
  font: normal normal medium 20px/20px Poppins;
  font-size: 12px;
  width: -1em;
  /* height: 2em; */
}

.weight2 {
  color: #bf9742;
  padding-bottom: 0px;
  margin-right: 0px;
}

.add-remove {
  float: left;
  margin-top: -2.5em;
  margin-left: 3em;
  color: #bf9742;
}

.checkin {
  margin-top: -5em;
  margin-left: 9em;
}
/* .box .form-check1 {
  float: right;
  margin-right: 18em;
  margin-top: -2em;
}
.box .form-check1-input:checked {
  border-color: #BF9742;
  color: white;
  background-color: #BF9742;
  width: 15px;
  height: 15px;
} */
.weight3 {
  text-transform: capitalize;
  font-weight: 550;
  padding: 0em;
  margin-top: -2em;
  margin-left: 0em;
  margin-right: 21em;
}

.checkout {
  margin-top: -5em;
  margin-left: 9em;
}
.weight4 {
  text-transform: capitalize;
  font-weight: 550;
  margin-top: -2em;
}

/* .box .form-check1-input{
  border-color: #BF9742;
  width: 13px;
  height: 13px;
}  */
.box .btn {
  background-color: #a17a35;
  color: white;
  float: right;
  margin-top: -3em;
  width: 12em;
  height: 2em;
  text-align: center;
  justify-content: center;
  padding-top: 1px;
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

#box .checkout2 {
  margin-left: 15em;
  margin-top: -5.2em;
}

#box2 .checkout3 {
  margin-left: 15em;
  margin-top: -5.2em;
}

#box3 .checkout4 {
  margin-left: 15em;
  margin-top: -5.2em;
}

#box4 .checkin2 {
  margin-left: 15em;
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
  height: 17em;
  position: absolute;
  margin-left: 46em;
  margin-top: 0em;
}

.order {
  margin-left: 5em;
  margin-top: 3em;
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
.box-address .btn2 {
  width: 13em;
  height: 2em;
  border: 2px solid #a17a35;
  border-radius: 5px;
  background-color: #a17a35;
  color: white;
  outline: none;
  padding: 1px;
}

@media screen and (max-width: 1370px) {
  .container{
    margin-left: 6em;
  }

  .box-address .btn2{
    margin-top: 0.5em;
  }
}
@media screen and (max-width: 1201px) {
  .container {
    margin-left: 7em;
  }
  .box{
    padding: 15px;
  }
  .order {
    width: 10em;
    height: 10em;
  }

  .order .prize {
    margin-right: -0.5em;
  }
  .order .prize2 {
    margin-right: -0.2em;
  }
  .order .prize3 {
    margin-right: -0.2em;
  }
  .order .prize4 {
    margin-right: -0.5em;
  }
  .order .prize5 {
    margin-right: -2.5em;
  }
  .order .prize6 {
    margin-right: -0.5em;
  }

  @media screen and (max-width: 990px) {

    .container{
      margin-left: 5em;
      margin-top: 2rem;
      max-width: 150rem;
    }
    .box{
      padding: 50px;
      width: 50rem;
      height: 35rem;
    }
    .box2{
      margin-left: 2rem;
      max-width: 50rem;
      padding: 10px;
    }
    .order .summery {
      padding-left: 2px;
      width: 8em;
    }

    .box-address .btn2{
      margin-top: 0.5em;
    }

    .vertical-line{
      margin-left: 51rem;
    }
  }

  @media screen and (max-width: 590px) {
    .container{
      display: flex;
      /* flex-direction: column; */
      flex-wrap: wrap;
      
    }

    .box{
      max-width: 260rem;
      height: 35rem;
      padding: 50px;
      margin-left: 20rem;
    }

    .box2{
      max-width: 70rem;
      display: block;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 20rem;
      margin-top: 1rem;
    }

    .order{
      margin-top: -28rem;
      margin-left: 43rem;
    }

    .vertical-line{
      margin-left: 40rem;
      margin-top: 37rem;
    }
  }
}
</style>