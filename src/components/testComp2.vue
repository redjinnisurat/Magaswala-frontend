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
            
            <div class="">
          <h4 class="text-right profile">Payments Methods</h4>
        </div>

        <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
            <h4 class="text-right profile1">Cards</h4>
          </div>
          <div class="p-0 py-0">
            <div class="flex-shrink-0">
              <img
                src="../assets/card.png"
                alt="paymrnt card"
                class="img-fluid"
                style="    width: 309px;
    margin-left: -62px;
    margin-top: -45px;
    height: 198px;"
              />
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="p-0 py-0">
            <div class="row mt-2">
              <div class="col-md-1">
                <label class="labels"></label>
                <h4 style="color: rgb(149, 184, 52)">I</h4>
              </div>
              <div class="col-md-11">
                <label class="labels"></label>
                <h4 style="text-align: initial">Cards</h4>
              </div>
            </div>
  
            <div class="row mt-2">
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/Group2.png" align="right" />
              </div>
              <div class="col-md-9">
                <label class="labels"></label>
                <p style="text-align: left">Add Credit, Debit&ATM Cards</p>
              </div>
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/forword.png" align="right" />
              </div>
            </div>
          </div>
        </div> 

         <!--UPI method -->

       
    <div class="col-md-6">
      One of three columns
    </div>
    <div class="col-md-6
    ">
      One of three columns
    </div>
       <!--UPI method -->


      
        <!-- netbanking -->
  <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
            <h4 class="text-right profile1">Net Banking</h4>
          </div>
          <div class="p-3 py-0">
            <div class="flex-shrink-0">
              <img
                src="../assets/netbank.png"
                alt="paymrnt card"
                class="img-fluid"
                style="left: 638px; width: 258px; margin-top: 2px"
              />
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="p-3 py-0">
            <div class="row mt-2">
              <div class="col-md-1">
                <label class="labels"></label>
                <h4 style="color: red">I</h4>
              </div>
              <div class="col-md-11">
                <label class="labels"></label>
                <h4 style="text-align: initial">Net Banking</h4>
              </div>
            </div>
  
            <div class="row mt-2" style=" height: 30px;">
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/Group246.png" align="right" />
              </div>
              <div class="col-md-5">
                <label class="labels"></label>
                <p style="text-align: left">State Bank Of India</p>
              </div>
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/forword.png" align="right" />
              </div>
            </div>
  
            <div class="row mt-2" style=" height: 30px;">
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/Group247.png" align="right" style="    width: 50px;" />
              </div>
              <div class="col-md-5">
                <label class="labels"></label>
                <p style="text-align: left">Bank Of Badodra</p>
              </div>
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/forword.png" align="right" />
              </div>
            </div>
            <div class="row mt-2" style=" height: 30px;">
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/Group248.png" align="right" />
              </div>
              <div class="col-md-5">
                <label class="labels"></label>
                <p style="text-align: left">Kotak Bank</p>
              </div>
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/forword.png" align="right" />
              </div>
            </div>
            <div class="row mt-2" style=" height: 30px;">
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/Group249.png" align="right" />
              </div>
              <div class="col-md-5">
                <label class="labels"></label>
                <p style="text-align: left">Axis Bank</p>
              </div>
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/forword.png" align="right" />
              </div>
              <!-- <span style="text-align: initial;">You Need Have A Registered UPI ID</span> -->
            </div>
          </div>
        </div>
         <!-- submit buttton -->
         <div class="" style="text-align: right">
          <!-- <a href="#" class="btn btn-outlined btn-black   address" data-wow-delay="0.7s"><img src="../assets/plus.svg"> <small></small></a> -->
          <button
            class="btn btn-primary"
            style="background-color: #bf9742; border: 0px"
            type="submit"
          >
            Save changes
          </button>
          <i class="mdi mdi-settings-outline"></i>
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
  name: "testComp2",
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




body {
  margin-top: 20px;
  background-color: #f2f6fc;
  color: #69707a;
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




body {
  background: rgb(231, 228, 235);
}





.labels {
  font-size: 17px;
}





.profile {
  text-align: initial;
  font: normal normal bold 20px/30px Poppins;
  letter-spacing: 0px;
  color: #b1622a;
}










p{
  
  margin-top: 0;
    margin-bottom: 1rem;
    font-size: small;

}

body {
  background: rgb(99, 39, 120);
}


.bord {
  border: solid 2px #bf9742;
  border-radius: 15px;
  background-color: white;
}








</style>
