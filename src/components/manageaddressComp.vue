<template>
     <NavComp/>
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
                height: 534px;
              "
            >

        <div class="col-md-5 border-right">
            <div class="p-1 py-2">
                <div class="d-flex justify-content-between align-items-center mb-3 mt-1">
                    <h4 class="text-right profile  " style="    font-size: 21px;">Home Address</h4>
                </div>
                <div class="row mt-1">
                    <div class="col-md-12">
                        <label class="labels"></label><input type="text" class="form-control " placeholder="Building name" value="" />
                 
                        <img    class="pen" align="right" src="../assets/pen1.svg" alt="" />




                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-md-12">
                        <label class="labels"></label><input type="text" class="form-control" placeholder="country" value="" />
                 
                        <img    class="pen" align="right" src="../assets/pen1.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>
        <div class="col-md-6">
            <div class="p-3 py-0">

                <!--Google map-->
                <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 370px">
                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>

                <!--Google Maps-->
            </div>
        </div>

        <div class="row " style="       margin-top: initial;">
            <div class="col-md-6">
                <div class="" style="text-align: left">
                    <a href="#" class="btn btn-outlined btn-black   address" data-wow-delay="0.7s"><img src="../assets/plus.svg"> <small>Add Address</small></a>

                    <i class="mdi mdi-settings-outline"></i>
                </div>

            </div>

        </div>
    </div></div></div></div>
</div></div>
</template>

    
<script>
  import myprofileComp from './myprofileComp.vue';
import NavComp from './NavComp.vue';
export default {
    name: "manageaddressComp",
    components:{ NavComp, myprofileComp} 
};
</script>

    
<style scoped>

body {
  margin-top: 20px;
  background-color: #f2f6fc;
  color: #69707a;
}

.button {
  background-color: #bf9742;
  border-radius: 10px;
  border-width: 0px;
  width: 125px;
  height: 37px;
  position: initial;
  margin-left: 400px;
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
#item {
  width: 746px;
}

/* .container{
  width:800px;
 
  height:530px;
} */
body {
    background: rgb(99, 39, 120);
}

.form-control:focus {
    box-shadow: none;
    border-color: #ba68c8;
}
.bord{
    border: solid 2px #BF9742;
    border-radius: 15px;
    height: 536px;

    }
.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none;
}

.profile-button:hover {
    background: #682773;
}

.profile-button:focus {
    background: #682773;
    box-shadow: none;
}

.profile-button:active {
    background: #682773;
    box-shadow: none;
}

.back:hover {
    color: #682773;
    cursor: pointer;
}

.labels {
    font-size: 17px;
}
.pen {
    margin-top: -33px;
    margin-right: 15px;
   
    z-index: 1;

    transition: opacity 0.5s ease;
    position: relative;

    cursor: pointer;
}
 
</style>
