<template>
  <MyNavbar />

  <div class="container d-flex">
    <div class="box" style="v-if == width: 35rem">
      <img
        src="@/assets/ladu.png"
        class="card-img-top"
        alt="..."
        style="v-if == width: 20em"
      />
      <div class="card-body">
        <h5 class="card-title">Kesar magas</h5>
        <img
          class="feather-heart me-3"
          src="@/assets/feather-heart.png"
          alt=""
          width="20px;"
        />
        <h6 class="weight pt-1 mt-1">₹ 250 Per Kg</h6>
        <p class="card-text mt-1">Description 
          <br/><br/>
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
        <h6 id="title">Shipping To</h6>
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
      <div id="bill">
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
 
 
  </div>
  <br />
  <br />
  <RecommandedProducts />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
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

.container{
  margin-left: 14rem;
  
}
.box {
  border: 2px solid #bf9742;
  border-radius: 4px;
  padding: 7px;
  background-color: white;
  height: 32em;
}

.box .card-img-top {
  margin-left: 3rem;
  width: 20em;
}
.card-body .card-title{
  font-weight: bold;
}
.feather-heart {
  padding: 0px;
  position: relative;
  float: right;
  margin-top: -1.5em;
}
.weight {
  color: #e6b325;
  font-weight: 650;
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
  margin-right: 25em;
}

.checkout {
  margin-top: -5.5em;
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
  margin-top: -3.5em;
  width: 12em;
  height: 2em;
  text-align: center;
  justify-content: center;
  padding-top: 1px;
}
.box2 .title{
  font-weight: bold;
}
.box2 .title2 {
  margin-top: -6.5em;
  margin-left: 1em;
  font-weight: bold;
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
    margin-left: 2em;
  }
  .box{
    padding: 15px;
  }
  .card-img-top {
    width: 17em;
    margin-left: 5rem;
  }
  .vertical-line{
    margin-left: 47rem;
  }
  .order {
    width: 10em;
    height: 10em;
  }

  .order .summery{
    width: 10em;
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
}
  @media screen and (max-width: 990px) {

    .container{
      margin-left: 1em;
      margin-top: 2rem;
      max-width: 150rem;
    }
    .box{
      padding: 30px;
      width: 60rem;
      height: 35rem;
    }
    .box .card-img-top{
      margin-left: 3rem;
      width: 20rem;
      margin-top: -1rem;
    }
    .box2{
      margin-left: 0rem;
      max-width: 50rem;
      padding: 10px;
    }
    .vertical-line{
      margin-left: 25rem;
      margin-right: -20rem;
    }
    .order{
      margin-left: 4rem;
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
@media screen and (max-width: 690px) {
  .container{
    margin-top: -2rem;
    margin-left: 2rem;
  }

  .vertical-line{
    margin-left: 50rem;
  }
}
@media screen and (max-width: 590px) {
  .container{
    margin-top: 1rem;
    width: 70rem;
    height: 90rem;
  }
  .box{
    width: 67em;
    height: 73rem;
    margin-left: -2rem;
    margin-top: -2rem;
  }
  .box .card-img-top{
    width: 35rem;
    margin-left: 12rem;
  }
  .card-body .card-title{
    font-size: 60px;
  }
  .card-body .weight{
    font-size: 50px;
  }
  .card-text{
    font-size: 40px;
    width: 65rem;
  }
  .card-body .weight2{
    font-size: 40px;
  }
  .add-remove .plus{
    width: 3rem;
    height: 3rem;
  }
  .add-remove .minus{
    width: 3rem;
    height: 3rem;
  }
  .add-remove{
    font-size: 40px;
    margin-top: -5rem;
  }
  .card-body .weight3{
    font-size: 40px;
    margin-left: 0rem;
    margin-top: -1.5rem;
  }
  .card-body .weight4{
    font-size: 40px;
    margin-left: 0rem;
    margin-top: -1.5rem;
  }
  .checkin{
    width: 10em;
    margin-left: 20rem;
    margin-top: -7rem;
  }
  .checkout{
    margin-left: 20rem;
    margin-top: -7rem;
  }
  .btn{
    font-size: 28px;
  }
  .vertical-line {
    margin-left: 98.5rem;
    width: 2rem;
    height: 15rem;
  }
  .box2{
    margin-top: -3rem;
    margin-left: 0rem;
  }
  .box2 .title{
    font-size: 50px;
  }
  .box2 .title2{
    font-size: 40px;
    margin-top: -5rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
  }
  #box{
    font-size: 35px;
  }
  #box .debit-card{
    margin-bottom: 14px;
    width: 2rem;
  }
  #box .credit{
    margin-left: 3rem;
  }
  #box .checkout2{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  #box2{
    font-size: 35px;
  }
  #box2 .apple-card{
    margin-top: 15px;
  }
  #box2 .checkout3{
    margin-left: 29rem;
    margin-top: -10rem;
  }
  #box3{
    font-size: 35px;
  }
  #box3 .upi-card{
    margin-bottom: 20px;
    margin-left: 10px;
  }
  #box3 .upi{
    margin-left: 3rem;
  }
  #box3 .checkout4{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  #box4{
    font-size: 35px;
  }
  #box4 .payon-card{
    margin-left: 10px;
  }
  #box4 .pay{
    margin-left: 3rem;
  }
  #box4 .checkin2{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  .box2 #title{
    font-size: 50px;
    font-weight: bold;
    margin-top: 2rem;
  }
  .box2 .home{
    font-weight: bold;
  }
  .box2 .home-address{
    font-size: 50px;
    margin-top: 2rem;
  }

  .home-address .checkin3{
    size: 30px;
  }
  .home-address .edit-icon{
    padding:0;
    width: 30px;
  }
  .box2 .office{
    font-weight: bold;
  }
  .home-address .base-address{
    margin-top: 1rem;
    font-size: 30px;
  }
  .box2 .office-address{
    font-size: 50px;
    margin-top: 2rem;
    width: 32rem;
  }
  .office-address .base-address2{
    margin-top: 1rem;
    font-size: 30px;
  }
  .btn2{
    font-size: 28px;
  }
  .order{
    margin-top: 3rem;
    margin-left: -3rem;
  }
  .order .summery{
    font-size: 35px;
    width: 20rem;
    font-weight: bold;
  }
  .order #bill{
    font-size: 40px;
    width: 20rem;
  }
  .order .prize4{
    margin-top: -4rem;
  }
  .order .prize5{
    margin-top: -1.5rem;
  }
  .order .prize6{
    margin-top: -4rem;
  }
  .order .corner1{
    margin-left: -2rem;
    margin-top: 0.8rem;
    width: 2rem;
  }
  .order .plus{
    margin-left: -2rem;
    margin-top: -6rem;
  }
  .order .corner2{
    margin-left: -2rem;
  }
}
  @media screen and (max-width: 490px) {
    .container{
    margin-top: -2rem;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    width: 70rem;
    height: 90rem;
    margin-left: -4em;
  }
  .box{
    width: 100%;
    margin-left: 8em;
    /* margin-right: auto; */
  }
  .container .box2{
    width: 30%;
    margin-top: auto;
    margin-left: 9em;
    margin-right: auto;
  }
  .vertical-line{
    display: none;
  }
  .order{
    margin-right: 8em;
  }
  .box2 .title2{
    width: 10em;
  }
  /* .box{
    width: 100%;
    height: 77rem;
    margin-left: 10rem;
    margin-top: -2rem;
  } */
  /* .box .card-img-top{
    width: 40rem;
  }
  .card-body .card-title{
    font-size: 60px;
  }
  .card-body .weight{
    font-size: 50px;
  }
  .card-text{
    font-size: 40px;
    width: 65rem;
  }
  .card-body .weight2{
    font-size: 40px;
  }
  .add-remove .plus{
    width: 2rem;
    height: 2rem;
  }
  .add-remove .minus{
    width: 2rem;
    height: 2rem;
  }
  .add-remove{
    font-size: 40px;
    margin-top: -5rem;
  }
  .card-body .weight3{
    font-size: 40px;
    margin-left: -1rem;
    margin-top: -1.5rem;
  }
  .card-body .weight4{
    font-size: 40px;
    margin-left: -1rem;
    margin-top: -1.5rem;
  }
  .checkin{
    margin-left: 16rem;
    margin-top: -7rem;
  }
  .checkout{
    margin-left: 16rem;
    margin-top: -7rem;
  }
  .vertical-line {
    display: none;
  }
  .box2{
    margin-top: 2rem;
    margin-left: 10rem;
  }
  .box2 .title{
    font-size: 50px;
  }
  .box2 .title2{
    font-size: 40px;
    margin-top: -5rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
  }
  #box{
    font-size: 35px;
  }
  #box .debit-card{
    margin-bottom: 14px;
    width: 2rem;
  }

  #box .credit{
    margin-left: 3rem;
  }
  #box .checkout2{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  #box2{
    font-size: 35px;
  }
  #box2 .apple-card{
    margin-top: 15px;
  }
  #box2 .checkout3{
    margin-left: 29rem;
    margin-top: -10rem;
  }
  #box3{
    font-size: 35px;
  }
  #box3 .upi-card{
    margin-bottom: 20px;
    margin-left: 10px;
  }
  #box3 .upi{
    margin-left: 3rem;
  }
  #box3 .checkout4{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  #box4{
    font-size: 35px;
  }
  #box4 .payon-card{
    margin-left: 10px;
  }
  #box4 .pay{
    margin-left: 3rem;
  }
  #box4 .checkin2{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  .box2 #title{
    font-size: 50px;
    font-weight: bold;
    margin-top: 2rem;
  }
  .box2 .home{
    font-weight: bold;
  }
  .box2 .home-address{
    font-size: 50px;
    margin-top: 2rem;
  }

  .home-address .checkin3{
    size: 30px;
  }
  .home-address .edit-icon{
    padding:0;
    width: 30px;
  }
  .box2 .office{
    font-weight: bold;
  }
  .home-address .base-address{
    margin-top: 1rem;
    font-size: 30px;
  }
  .box2 .office-address{
    font-size: 50px;
    margin-top: 2rem;
    width: 35rem;
  }
  .office-address .base-address2{
    margin-top: 1rem;
    font-size: 30px;
  }
  .order{
    margin-top: -65rem;
    margin-left: 45rem;
  }
  .order .summery{
    font-size: 35px;
    width: 20rem;
    font-weight: bold;
  }
  .order #bill{
    font-size: 40px;
    width: 30rem;
  }
  .order .prize4{
    margin-top: -4rem;
  }
  .order .prize5{
    margin-top: -1.5rem;
  }
  .order .prize6{
    margin-top: -4rem;
  }
  .order .corner1{
    margin-left: -2rem;
    margin-top: 0.8rem;
    width: 2rem;
  }
  .order .plus{
    margin-left: -2rem;
    margin-top: -6rem;
  }
  .order .corner2{
    margin-left: -2rem;
  } */
  }
@media screen and (max-width: 390px) {
  .box{
    margin-top: 2em;
    margin-left: 6em;
  }
  .box2{
    margin-left: 3em;
  }
  .order{
    margin-left: 5em;
  }
}
/* @media screen and (max-width: 390px) {
  .container{
    margin-top: 4rem;
    width: 70rem;
    height: 90rem;
  }
  .box{
    width: 100%;
  }
  .box2{
    width: 30%;
    margin-right: 2em;
    margin-left: auto;
  }
  .box{
    width: 100%;
    height: 75rem;
    margin-left: 2rem;
    margin-top: 1rem;
  }
  .box .card-img-top{
    width: 40rem;
  }
  .card-body .card-title{
    font-size: 60px;
  }
  .card-body .weight{
    font-size: 50px;
  }
  .card-text{
    font-size: 40px;
    width: 65rem;
  }
  .card-body .weight2{
    font-size: 40px;
  }
  .add-remove .plus{
    width: 2rem;
    height: 2rem;
  }
  .add-remove .minus{
    width: 2rem;
    height: 2rem;
  }
  .add-remove{
    font-size: 40px;
    margin-top: -5rem;
  }
  .card-body .weight3{
    font-size: 40px;
    margin-left: -1rem;
    margin-top: -1.5rem;
  }
  .card-body .weight4{
    font-size: 40px;
    margin-left: -1rem;
    margin-top: -1.5rem;
  }
  .checkin{
    margin-left: 16rem;
    margin-top: -7rem;
  }
  .checkout{
    margin-left: 16rem;
    margin-top: -7rem;
  }
  .vertical-line {
    display: none;
  }
  .box2{
    margin-top: 2rem;
    margin-left: 5rem;
  }
  .box2 .title{
    font-size: 50px;
  }
  .box2 .title2{
    font-size: 40px;
    margin-top: -5rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
  }
  #box{
    font-size: 35px;
  }
  #box .debit-card{
    margin-bottom: 14px;
    width: 2rem;
  }

  #box .credit{
    margin-left: 3rem;
  }
  #box .checkout2{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  #box2{
    font-size: 35px;
  }
  #box2 .apple-card{
    margin-top: 15px;
  }
  #box2 .checkout3{
    margin-left: 29rem;
    margin-top: -10rem;
  }
  #box3{
    font-size: 35px;
  }
  #box3 .upi-card{
    margin-bottom: 20px;
    margin-left: 10px;
  }
  #box3 .upi{
    margin-left: 3rem;
  }
  #box3 .checkout4{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  #box4{
    font-size: 35px;
  }
  #box4 .payon-card{
    margin-left: 10px;
  }
  #box4 .pay{
    margin-left: 3rem;
  }
  #box4 .checkin2{
    margin-left: 29rem;
    margin-top: -9rem;
  }
  .box2 #title{
    font-size: 50px;
    font-weight: bold;
    margin-top: 2rem;
  }
  .box2 .home{
    font-weight: bold;
  }
  .box2 .home-address{
    font-size: 50px;
    margin-top: 2rem;
    width: 32rem;
  }

  .home-address .checkin3{
    size: 30px;
  }
  .home-address .edit-icon{
    padding:0;
    width: 30px;
  }
  .box2 .office{
    font-weight: bold;
  }
  .home-address .base-address{
    margin-top: 1rem;
    font-size: 30px;
  }
  .box2 .office-address{
    font-size: 50px;
    margin-top: 2rem;
    width: 32rem;
  }
  .office-address .base-address2{
    margin-top: 1rem;
    font-size: 30px;
  }
  .order{
    margin-top: -65rem;
    margin-left: 38rem;
    
  }
  .order .summery{
    font-size: 35px;
    width: 20rem;
    font-weight: bold;
  }
  .order #bill{
    font-size: 40px;
    width: 30rem;
  }
  .order .prize4{
    margin-top: -4rem;
  }
  .order .prize5{
    margin-top: -1.5rem;
  }
  .order .prize6{
    margin-top: -4rem;
  }
  .order .corner1{
    margin-left: -2rem;
    margin-top: 0.8rem;
    width: 2rem;
  }
  .order .plus{
    margin-left: -2rem;
    margin-top: -6rem;
  }
  .order .corner2{
    margin-left: -2rem;
  }
} */

</style>