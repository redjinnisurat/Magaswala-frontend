<template>
  <div class="container" style="v-if == width: 60em;">
    <div class="col-lg-20 mt-3 pe-1">
      <!-- <div class="card"> -->
      <div class="card-body mx-5">
        <h5 class="card-title me-5">Shopping Bag</h5>

        <div class="container2 mb-0">
          <img
            class="ladu mt-4"
            src="@/assets/ladu.png"
            alt=""
            style="width: 8em"
          />
          <p class="outer-text mb-0">Kesar Magas</p>
          <p class="weight">1kg</p>
          <img class="dlt" src="@/assets/delete.png" alt="" width="15px" />
          <p class="inner-text">Made with pure kesar</p>
          <p class="prize">Rs.250</p>
          <p class="add-remove">
            <img class="plus" src="@/assets/plus.png" alt="" width="15px" /> 2
            <img class="minus" src="@/assets/minus.png" alt="" width="15px" />
          </p>
        </div>

        <div class="container3">
          <img
            class="ladu2 mt-5"
            src="@/assets/ladu.png"
            alt=""
            style="width: 8em"
          />
          <p class="outer-text mb-0">Kesar Magas</p>
          <p class="weight">1kg</p>
          <img class="dlt" src="@/assets/delete.png" alt="" width="15px" />
          <p class="inner-text">Made with pure kesar</p>
          <p class="prize">Rs.125</p>
          <p class="add-remove">
            <img class="plus" src="@/assets/plus.png" alt="" width="15px" /> 1
            <img class="minus" src="@/assets/minus.png" alt="" width="15px" />
          </p>
        </div>

        <div class="container4 mb-0">
          <img
            class="ladu3 mt-5"
            src="@/assets/ladu.png"
            alt=""
            style="width: 8em"
          />
          <p class="outer-text mb-0">Kesar Magas</p>
          <p class="weight">1kg</p>
          <img class="dlt" src="@/assets/delete.png" alt="" width="15px" />
          <p class="inner-text">Made with pure kesar</p>
          <p class="prize">Rs.125</p>
          <p class="add-remove">
            <img class="plus" src="@/assets/plus.png" alt="" width="15px" /> 2
            <img class="minus" src="@/assets/minus.png" alt="" width="15px" />
          </p>
        </div>
      </div>
      <p class="vertical-line"></p>
      <img
        class="checkout mb-0 p-0"
        src="@/assets/checkout.png"
        alt=""
        style="width: 15em;"
      />
      <div class="box" style="width: 17em">
        <!-- <div class="box-body"> -->
          <h3 class="box-title">items summary</h3>
          <p class="box-text">
           items:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; Rs.875
          </p><br/>
          <hr class="horizontal-line" style="width:85%; margin-left: 14px;">
          <router-link to="/Checkoutpage">
          <a href="#" class="btn" @click="MyCheckoutpage">Proceed to checkout</a>
        </router-link>
        <!-- </div> -->
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>


<script>

import { ref } from "vue";
export default {
  name: "ShoppingBag",

  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  methods :{
    MyCheckoutpage: function() {
      // console.log("1");
    }
  }
};
</script>


<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.container {
  border: 1px solid #A17A35;
  border-radius: 5px;
  width: 60em;
  height: 24em;
  padding-right: 10px;
  margin-left: 6.5em;
  margin-top: -0.2em;
  background-color: white;
}
.card-title {
  color: #B1622A;
  font-weight: bold;
  margin-left: -2em;
}

.container2 {
  margin-right: 20em;
  margin-left: -2em;
}

.add-remove {
  margin-top: -2.5em;
  margin-left: 20.5em;
}
.container3 {
  margin-right: 20em;
  margin-left: -2em;
  margin-top: -3em;
}
.container4 {
  margin-right: 20em;
  margin-left: -2em;
  margin-top: -3em;
}
.ladu {
  width: 20em;
  margin-right: 18em;
}

.ladu2 {
  width: 20em;
  margin-right: 18em;
}
.ladu3 {
  width: 20em;
  margin-right: 18em;
}

.outer-text {
  margin-top: -5em;
  letter-spacing: 0px;
  opacity: 1;
  margin-left: 10em;
}
.inner-text {
  margin-top: 0em;
  margin-left: 10em;
}

.prize {
  margin-top: -1em;
  margin-left: 12.5em;
  color: orange;
  font-size: small;
  font-weight: bold;
}
.outer-text2 {
  margin-top: -30px;
}
.outer-text3 {
  margin-top: -30px;
}
.weight {
  float: right;
  color: orange;
  margin-right: 21em;
  margin-top: -21px;
  margin-bottom: 0;
  font-size: 13px;
}
.dlt {
  float: right;
  margin-top: -19px;
  margin-right: 12em;
}

.vertical-line{
  border-left:1px solid #A17A35;
  height: 22em;
  position: absolute;
  margin-left: 30em;
  margin-top: -21em;
}
.checkout {
  float: right;
  margin-right: 10em;
  margin-top: -20em;
}
.box{
  border: 2px solid #CEB070;
  border-radius: 20px;
  text-align: center;
  height: 10.5em;
  padding-top: 1em;
  margin-left: 33em;
  margin-top: -9.5em;
}
.box .box-title{
  margin-top: -5px;
  margin-bottom: 5px;
}
.box .box-text{
  margin-bottom: -35px;
  margin-top: 10px;
  padding-bottom: -8px;
  font-size: 18px;
  font-weight: 500;
}
.horizontal-line{
  margin-top: 26px;
}
.box .btn{
  background-color: #A17A35;
  color: white;
  border-radius: 6px;
  width: 16em;
  height: 1.9rem;
  margin-top: 0.2rem;
  font-size: 15px;
 padding-top: 2px;
}

@media screen and (max-width: 1190px) {
  .container{
    margin-left: 7em;
  }
  .checkout{
    margin-right: 8em;
  }

  .box{
    margin-left: 35em;
    margin-top: -10em;
  }

  .weight{
    margin-right: 18em;
  }
  .dlt{
    margin-right: 10em;
  }
  .box .btn{
    margin-top: -10px;
  }
  .box .box-text{
    margin-top: 15px;
  }
}
@media screen and (max-width: 990px) {
  .container{
    height: 25em;
    max-width: 60em;
    margin-left: 6em;
    margin-top: 2em;
  }
  .weight{
      margin-right: 17em;
  }

  .dlt{
    margin-right: 8em;
  }

  .add-remove{
    display: flex;
    margin-left: 21em;
    /* padding-right: 5px; */
  }
  .add-remove .plus{
    width: 20px;
    margin-right: 5px;
  }
  .add-remove .minus{
    width: 20px;
    margin-left: 5px;
  }
  .vertical-line{
    margin-left: 30em;
  }

  .checkout{
    margin-right: 10em;
    margin-top: -20em;
  }

  .box{
    margin-left: 34em;
    margin-top: -8em;
  }

  .box .box-title{
    margin-top: -5px;
  }

  .box .box-text{
    margin-top: -4px;
  }
  .horizontal-line{
    margin-top: 32px;
  }
  .box .btn{
    margin-top: -15px;
  }
}
@media screen and (max-width: 890px) {
  .container{
    width: 70em;
  }
  .checkout{
    margin-right: 10rem;
  }
  .weight{
    margin-right: 18em;
  }
  .dlt{
    margin-right: 9em;
  }
}

@media screen and (max-width: 790px) {

  .container{
    width: 70em;
    margin-left: 6em;
    margin-top: 2em;
  }
  .outer-text{
    display:flex;
    /* align-items: center; */
    writing-mode:horizontal-tb;
    text-orientation:initial;
  }
  .checkout{
    margin-right:10em;
    margin-top: -20em;
  }

  .weight {
    margin-right: 18em;
  }

  .dlt{
    margin-right: 9em;
  }
}

@media screen and (max-width: 690px) {
  .container{
    margin-left: 7em;
    max-width: 65em;
    margin-top: -2rem;
  }

  .weight{
    margin-right: 24em;
  }

  .dlt{
    margin-right: 14em;
  }
  .vertical-line{
    margin-left: 32rem;
  }
  .checkout{
    margin-right: 13em;
  }

  .box{
    margin-top: -8em;
    margin-left: 35em;
  }

  .box .box-title{
    padding-bottom: -5em;
  }
  .box .box-text{
    padding-top: -0.5em;
  }

  .box .btn{
    margin-top: -1em;
  }
}
@media screen and (max-width: 590px) {
  .container{
    margin-left: 20em;
    width: 160em;
    margin-top: -3rem;
    height: 50rem;
  }

  .card-title{
    margin-top: 2rem;
    font-size: 50px;
    margin-left: 2rem;
  }
  .container2{
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
  .container3{
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
  .container4{
    margin-left: 1rem;
  }
  .ladu{
    width: 20rem;
    /* margin-bottom: 5rem; */
  }
  .ladu2{
    width: 20rem;
  }
  .ladu3{
    width: 20rem;
  }
  .outer-text{
    font-size: 30px;
    margin-top: -4rem;
    margin-left: 12rem;
  }
  .inner-text{
    width: 40rem;
    height: 7rem;
    font-size: 30px;
    margin-top: 1rem;
    margin-left: 12rem;
  }
  .weight{
    margin-right: 5em;
    margin-top: -2.8rem;
    font-size: 30px;
    margin-bottom: 0px;
  }

  .dlt{
    margin-right: -15em;
    margin-top: -2rem;
    width: 2rem;
  }
  .prize{
    font-size: 30px;
    margin-left: 12rem;
    margin-top: -4rem;
  }
  .add-remove{
    font-size: 35px;
    margin-left: 34rem;
  }
  .add-remove .plus{
    height: 3rem;
    width: 3rem;
    margin-right: 10px;
  }
  .add-remove .minus{
    height: 3rem;
    width: 3rem;
    margin-left: 10px;
  }
  .vertical-line{
    margin-left: 50rem;
    margin-top: -32rem;
    height: 30em;
  }
  .checkout{
    margin-right: -3em;
    margin-top: -32rem;
  }

  .box{
    margin-top: -18em;
    margin-left: 52em;
  }

  .box .box-title{
    padding-bottom: -5em;
  }
  .box .box-text{
    padding-top: -0.5em;
  }

  .box .btn{
    margin-top: -1em;
  }
}
@media screen and (max-width: 490px){

  .container{
    margin-top: -1em;
    max-width: 40em;
    height: 95rem;
    margin-left: 7em;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .card-body{
    margin-left: 23rem;
  }
  .card-title{
    margin-top: 2rem;
    font-size: 50px;
    margin-left: 6rem;
  }
  .outer-text{
    font-size: 30px;
    margin-top: -8rem;
    margin-left: 12rem;
  }
  .inner-text{
    width: 40rem;
    height: 7rem;
    font-size: 30px;
  }
  .ladu{
    margin-top: 2rem;
    margin-left: -7rem;
  }
  .ladu2{
    margin-top: 2rem;
    margin-left: -7rem;
  }
  .ladu3{
    margin-top: 2rem;
    margin-left: -7rem;
  }
  .weight{
    margin-right: 13em;
    margin-top: -2.8rem;
    font-size: 30px;
    margin-bottom: 0px;
  }

  .dlt{
    margin-right: -11em;
    margin-top: -2rem;
    width: 2rem;
  }
  .prize{
    font-size: 30px;
    margin-left: 12rem;
  }
  .add-remove{
    font-size: 35px;
    margin-left: 40rem;
  }
  .add-remove .plus{
    height: 3rem;
    width: 3rem;
    margin-right: 10px;
  }
  .add-remove .minus{
    height: 3rem;
    width: 3rem;
    margin-left: 10px;
  }
  .vertical-line{
    display: none;
  }
  .checkout{
    width: 30rem;
    margin-top: 1em;
    margin-right: 50rem;
  }
.box .box-title{
  font-size: 60px;
  font-weight: bold;
  margin-top: -1rem;
}
.box .box-text{
  margin-top: 10px;
  padding-top: 15px;
  /* padding-bottom: 10px; */
  font-size: 50px;
}
.horizontal-line{
  margin-right: 10px;
  margin-top: 10px;
  width: 70%;
  height: 3px;
}
  .box{
    margin-top: 9em;
    margin-left: 8em;
    font-size: 40px;
  }
  .box .btn{
    font-size: 35px;
    height: 3.5rem;
    width: 28rem;
    margin-top: -15px;
  }
  .container2{
    padding-bottom: 5rem;
    margin-left: 6rem;
  }
  .container2 .ladu{
    width: 15rem;
  }
  .container3{
    padding-bottom: 5rem;
    margin-left: 6rem;
  }
  .container4{
    margin-left: 6rem;
  }
}
@media screen and (max-width: 390px) {

  .container{
    width: 55em;
    margin-left: 5em;
    height: 100rem;
    margin-top: 1rem;
  }
  .ladu{
    width: 20em;
  }
  .weight{
    margin-right: 13em;
  }
  .dlt{
    margin-right: -11em;
  }
  .vertical-line{
    display: none;
  }

  .checkout{
    margin-right: 28em;
    max-width: 45rem;
  }

  .box{
    margin-top: 10em;
  }

  .box .box-title{
    margin-top: 0em;
  }
  .horizontal-line{
    margin-top: -7rem;
  }
  .box .box-text{
    margin-bottom: 1em;
  }

  .box .btn{
    width: 30rem;
    margin-top: 0rem;
  }
}
</style>