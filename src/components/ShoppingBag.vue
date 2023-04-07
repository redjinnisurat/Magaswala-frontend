<template>
  <div class="container">
    <div class="col-lg-20 mt-3 pe-1">
      <!-- <div class="card"> -->
      <div class="card-body mx-3">
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
      <div class="box" style="width: 14em">
        <!-- <div class="box-body"> -->
          <h4 class="box-title">items summary</h4>
          <p class="box-text">
           items:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Rs.875
          </p>
          <hr/>
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
  color: rgb(217, 119, 53);
  font-weight: bold;
  /* margin-left: -14em; */
}

.container2 {
  margin-right: 20em;
  /* margin-bottom: 10px; */
}

.add-remove {
  margin-top: -2.5em;
  margin-left: 20.5em;
}
.container3 {
  margin-right: 20em;
  margin-top: -3em;
}
.container4 {
  margin-right: 20em;
  margin-top: -3em;
}
.ladu {
  margin-right: 18em;
}

.ladu2 {
  margin-right: 18em;
}
.ladu3 {
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
  margin-right: 23.5em;
  margin-top: -21px;
  margin-bottom: 0;
  font-size: 13px;
}
.dlt {
  float: right;
  margin-top: -19px;
  margin-right: 14em;
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
  border: 1.5px solid #A17A35;
  border-radius: 5px;
  text-align: center;
  height: 8em;
  padding-top: 1em;
  margin-left: 34em;
  margin-top: -8em;
}
.box .box-title{
  margin-top: -0.3em;
}
.box .box-text{
  margin-bottom: -0.5em;
}
.box .btn{
  background-color: #A17A35;
  color: white;
  border-radius: 7px;
  width: 15em;
  height: 1.5rem;
  margin-top: -5em;
  font-size: 12px;
 padding-top: 2px;
}

@media screen and (max-width: 1190px) {
  .container{
    margin-left: 9em;
  }
  .checkout{
    margin-right: 8em;
  }

  .box{
    margin-left: 35em;
    margin-top: -10em;
  }

  .weight{
    margin-right: 23em;
  }
  .dlt{
    margin-right: 14em;
  }

  .box .btn{
    margin-top: -2em;
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
      margin-right: 23em;
  }

  .dlt{
    margin-right: 13em;
  }

  .add-remove{
    display: flex;
    margin-left: 21.5em;
    /* padding-right: 5px; */
  }

  .vertical-line{
    margin-left: 27em;
  }

  .checkout{
    margin-right: 14em;
    margin-top: -20em;
  }

  .box{
    margin-left: 29em;
    margin-top: -8em;
  }

  .box .box-title{
    margin-top: 0.5em;
  }

  .box .box-text{
    margin-bottom: -1em;
  }

  .box .btn{
    margin-top: -5.5em;
  }
}

@media screen and (max-width: 790px) {

  .container{
    max-width: 60em;
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
    margin-right:13em;
    margin-top: -20em;
  }

  .weight {
    margin-right: 23em;
  }

  .dlt{
    margin-right: 13em;
  }
}

@media screen and (max-width: 690px) {
  .container{
    margin-left: 5em;
    max-width: 60em;
  }

  .weight{
    margin-right: 23em;
  }

  .dlt{
    margin-right: 13em;
  }

  .checkout{
    margin-right: 14em;
  }

  .box{
    margin-top: -8em;
    margin-left: 30em;
  }

  .box .box-title{
    padding-bottom: -5em;
  }
  .box .box-text{
    padding-top: -0.5em;
  }

  .box .btn{
    margin-top: -5.5em;
  }
}
@media screen and (max-width: 590px){

  .container{
    margin-top: -1em;
    max-width: 75em;
    height: 30rem;
    margin-left: 15em;
  }

  .weight{
    margin-right: 23em;
  }

  .dlt{
    margin-right: 13em;
  }
  .checkout{
    margin-top: -20em;
    margin-right: 14em;
  }

  .box{
    margin-left: 30em;
  }
}
@media screen and (max-width: 390px) {

  .container{
    width: 55em;
    margin-left: 6em;
  }
  .weight{
    margin-right: 17em;
  }
  .dlt{
    margin-right: 9em;
  }
  .vertical-line{
    margin-left: 27em;
  }

  .checkout{
    margin-right: 9em;
  }

  .box{
    margin-top: -9em;
  }

  .box .box-title{
    margin-top: 0.5em;
  }

  .box .box-text{
    margin-bottom: 1em;
  }

  .box .btn{
    margin-top: -2.5em;
  }
}
</style>