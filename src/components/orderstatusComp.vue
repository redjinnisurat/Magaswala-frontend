<template>
  <NavComp />
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-md-4" style="height: 100%">
        <div id="mySidenav" class="sidenav" style="position: absolute">
          <myprofileComp />
        </div>
      </div>

      <div class="col-lg-8 col-sm-8 col-md-8" style="height: 100%">
        <div class="col-md-6">
          <div id="item" class="container rounded bg-white mt-0 mb-0">
            <div
              class="row"
              style="
                border: #bf9742;
                border-style: solid;
                border-width: 2px;
                border-radius: 15px;
                height: 535px;
               
              "
            >
           
            <div class="col-md-6">
            <div class="p-3 py-0">
                      <img
                        src="../assets/track.png"
                        alt="Generic placeholder image"
                        class="img-fluid"
                        style="
                          width: 592px;

                          height: 428px;
                          margin-top: 70px;
                        "
                      />
                    </div>
             
     </div>
     <div class="col-md-6 content">
                  
                  <div class="container mt-5 mb-5">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="col" style="text-align: initial">
                          <p class="text">
                            <b>Order details</b> <span class="order"></span>
                          </p>
                          <p class="text">
                            <b>Order No.:</b><span class="order">#951452</span>
                          </p>
                        </div>
                      </div>
                      <div class="col-md-10">
                        <div class="col">
                          <img
                            align="right"
                            class="icon"
                            src="../assets/ladu.png"
                            style="
                              top: 410px;
                              left: 1476px;
                              width: 131px;
                              height: 92px;
                            "
                          />
                          <div class="d-flex flex-column" style="text-align: initial">
                            <p class="text">
                              <b>Magas </b
                              ><span class="font-weight-bold text-dark"
                                ><br />1KG</span
                              >
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- ratting -->

                      <div class="col-md-12">
                        <div class="col">
                          <div style="text-align: initial">
                            <p class="text">
                              <span align="left" class="heading">Rating</span>
                            </p>
                          </div>
                          <div align="left" class="star">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                          </div>
                          <div></div>
                        </div>
                      </div>

                      <!-- order status -->
                      <div class="col-md-12">
                        <div class="row"></div>
                        <h4 style="text-align: initial">Track Order</h4>
                        <div class="status">
                          <ul class="timeline" style="text-align: initial">
                            <li>
                              <!-- <a target="_blank" href="https://www.totoprayogo.com/#">Track order</a> -->
                              <a href="#" class="float">Order Placed</a>
                              <p>We Have received your order.</p>
                            </li>
                            <li>
                              <a href="#" class="float"  >Comformed</a>
                              <p>Your order has been conferment.</p>
                            </li>
                            <li>
                              <a href="#" class="float">Order Shiped</a>
                              <p>Estimated for 29 September , 2022</p>
                            </li>
                            <li>
                              <a href="#" class="float">Out for Delivery</a>
                              <p>Estimated for 30 September , 2022</p>
                            </li>
                            <li>
                              <a href="#" class="float">Delivered</a>
                              <p>Estimated for 3 October , 2022</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavComp from "./NavComp.vue";
import myprofileComp from "./myprofileComp.vue";
export default {
  name: "orderstatusComp",
  components: {
    NavComp,
    myprofileComp,
  },
};
</script>

<style scoped>
#item {
  width: 746px;
}

.form-control {
  height: 41px;
}

.form-control:focus {
  box-shadow: none;
  border-color: #bf9742;
}

body {
  margin-top: 20px;
  background-color: #f2f6fc;
  color: #69707a;
}


.img-account-profile {
  height: 10rem;
}

.rounded-circle {
  border-radius: 50% !important;
}

.card {
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}

button {
  /* padding-top: 100px; */
  width: 100%;
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  background-color: white;
}
button span {
  text-align: left;
  position: absolute;
  left: 0%;
  font-weight: 600;
  font: normal normal normal  Poppins;
}
button img {
  position: relative;
  right: -50%;
  width: 6px;
}
.item{
  border-bottom: 1px solid rgb(243, 235, 235);
  left: -25px;
}
.search-bar input[type="text"] {
  border: 0.5px solid #ceb070;
  border-radius: 10px;
  padding: 0.7rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  margin-left: 5%;
  width: 21rem;
}

.search-bar input[type="text"]:focus {
  border: 1px solid #ceb070;
}

.search-bar button[type="submit"] {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: -10%;
}

.search-bar button[type="submit"] i {
  color: #707070;
  font-size: 1.5rem;
}


.card .card-header {
  font-weight: 500;
}

.card-header:first-child {
  border-radius: 0.35rem 0.35rem 0 0;
}

.card-header {
  padding: 1rem 1.35rem;
  margin-bottom: 0;
  background-color: rgba(33, 40, 50, 0.03);
  border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.875rem 1.125rem;
  font-size: -0.875rem;
  font-weight: 400;
  line-height: 1;
  color: #69707a;
  background-color: #f9f9f9;
  background-clip: padding-box;
  border: 1px solid #bf9742;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control {
  background-color: #f9f9f9;
  background-clip: padding-box;
  border: 1px solid #bf9742;
}

.profile {
  top: 276px;
  left: 640px;

  height: 49px;
  text-align: left;
  font: normal normal 600 35px/53px Poppins;
  letter-spacing: 0px;
  color: #b1622a;
  opacity: 1;
  font-family: Poppins;
}

.bg {
  background-color: #f8fdff;
  padding: 2rem;
}

.mainContainer {
  display: grid;
  grid-template-columns: 15% 85%;
}
/* .container {
  width: 670px;
  margin-right: 100px;
} */
body {
  background: rgb(231, 228, 235);
}

.fake-input {
  position: relative;
  width: 240px;
}

.fake-input input {
  border: none;
  background-color: #fff;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.fake-input img {
  position: absolute;
  top: 2px;
  right: 5px;
}

.form-control:focus {
  box-shadow: none;
  border-color: #bf9742;
}

.back:hover {
  color: #73272b;
  cursor: pointer;
}

.labels {
  font-size: 17px;
}

.add-experience:hover {
  background: #bf9742;
  color: #fff;
  cursor: pointer;
  border: solid 1px#BF9742;
}

.address {
  text-align: initial;
  font: normal normal bold 20px/30px Poppins;
  letter-spacing: 0px;
  color: #262626;
}

.profile {
  text-align: initial;
  font: normal normal bold 20px/30px Poppins;
  letter-spacing: 0px;
  color: #b1622a;
}
.form-control {
  height: 40px;
}
.pen {
  margin-top: -33px;
  margin-right: 15px;
  opacity: 0;
  z-index: 1;

  transition: opacity 0.5s ease;
  position: relative;

  cursor: pointer;
}
.map-container iframe {
    left: 0;
    top: 0;
    width: 481px;
    margin-top: 17px;
    height: 244px;
    position: absolute;
}
.pen {
  opacity: 1;
}
ul{
  margin: o;
}
.content{
  margin-top: -509px;
    margin-left: 403px;
}
.order {
  text-align: left;
  font: normal normal medium 22px/20px Poppins;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.float{
  font-size: small;
}
/* .bg {
  background-color: #f8fdff;
  padding: 2rem;
} */
.heading {
  /* font-size: 25px; */
  margin-right: 25px;
  text-align: left;
}
.mainContainer {
  display: grid;
  grid-template-columns: 15% 85%;
}
/* .ccontaine {
  width: 100%;
  height: 100%;
} */

.row2 {
  border: solid 2px #bf9742;
  border-radius: 15px;
  height: 537px;
}
.sidebar {
  margin-bottom: 0px;
}

/* a.button {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;

  text-decoration: none;
  color: initial;
} */

p{
  
  margin-top: 0;
    margin-bottom: 1rem;
    font-size: small;

}
/* ul.timeline > li {
    margin: -10px 0;
    padding-left: 16px;
} */
body {
  background: rgb(99, 39, 120);
}

.heading {
  /* font-size: 25px; */
  margin-right: 25px;
  text-align: left;
}
.order {
  text-align: left;
  font: normal normal medium 22px/20px Poppins;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.checked {
  color: orange;
}
ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 86%;
  z-index: 400;
}
ul.timeline > li {
  margin: -7px 0;
  padding-left: 20px;
}
.bord {
  border: solid 2px #bf9742;
  border-radius: 15px;
  background-color: white;
}
ul.timeline > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #22c0e8;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
.float {
  text-decoration: none;
  text-decoration: none;
  color: black;

  font-weight: 700;
}


input.star {
  display: none;
}

label.star {
  float: left;

  padding: 10px;

  font-size: 10px;

  color: #4a148c;

  transition: all 0.2s;
}

input.star:checked ~ label.star:before {
  content: "\f005";

  color: #fd4;

  transition: all 0.25s;
}




label.star:hover {
  transform: rotate(-15deg) scale(1.3);
}

label.star:before {
  content: "\f006";

  font-family: FontAwesome;
}

</style>
