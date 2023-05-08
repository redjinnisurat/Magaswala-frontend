<template>
   <NavComp/>
   <div class="mainContainer">
      <div class="sidebar">
        <myprofileComp/>
      </div>
    <div class="container rounded bg-white mt-6 mb-5">
      <div class="row bord">
        <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
          <h4 class="text-right profile">Payments Methods</h4>
        </div>
        <!-- Cards method -->


        <!-- <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
            <h4 class="text-right profile1">Cards</h4>
          </div>
          <div class="p-3 py-5">
            <div class="flex-shrink-0">
              <img
                src="../assets/card.png"
                alt="paymrnt card"
                class="img-fluid"
                style="width: 259px; margin-left: -62px; margin-top: -70px; height: 259px"
              />
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="p-3 py-5">
            <div class="row mt-2">
              <div class="col-md-1">
                <label class="labels"></label>
                <h4 style="color: red">I</h4>
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
        </div> -->
  
        <!--UPI method -->
        <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
            <h4 class="text-right profile1">UPI</h4>
          </div>
          <div class="p-3 py-5">
            <div class="flex-shrink-0">
              <img
                src="../assets/qr.png"
                alt="paymrnt card"
                class="img-fluid"
                style="left: 638px; width: 258px; margin-top: 2px"
              />
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="p-3 py-5">
            <div class="row mt-2">
              <div class="col-md-1">
                <label class="labels"></label>
                <h4 style="color: red">I</h4>
              </div>
              <div class="col-md-11">
                <label class="labels"></label>
                <h4 style="text-align: initial">UPI</h4>
              </div>
            </div>
  
            <div class="row mt-2" style=" height: 30px;">
              <div class="col-md-1">
                <label class="labels"></label>
                <img  src="../assets/Group246.png" align="right"  />
              </div>
              <div class="col-md-5">
                <label class="labels"></label>
                <p style="text-align: left">Paytm UPI</p>
              </div>
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/forword.png" align="right"  />
              </div> 
             
            </div>
  
            <div class="row mt-2" style=" height: 30px;">
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/Group247.png" align="right" style="    width: 50px;" />
              </div>
              <div class="col-md-5">
                <label class="labels"></label>
                <p style="text-align: left">Google UPI</p>
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
                <p style="text-align: left">Phone pay UPI</p>
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
                <p style="text-align: left">Pay Via UPI</p>
              </div>
              <div class="col-md-1">
                <label class="labels"></label>
                <img src="../assets/forword.png" align="right" />
              </div>
              <span style="text-align: initial;">You Need Have A Registered UPI ID</span>
            </div>
          </div>
        </div>
  <!-- Netbanking -->
 
  <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
            <h4 class="text-right profile1">Net Banking</h4>
          </div>
          <div class="p-3 py-5">
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
          <div class="p-3 py-5">
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
    </div></div>
  
  
  </template>
  <script>
  import myprofileComp from './myprofileComp.vue';
import NavComp from './NavComp.vue';
  export default {
    name: "paymentComp",
    components:{ NavComp, myprofileComp} 
  };
  </script>
  <style>
  .bg {
    background-color: #f8fdff;
    padding: 2rem;
}

.mainContainer {
    display: grid;
    grid-template-columns: 15% 85%;
}
.container{
  width: 1070px;
  margin-right: 100px;
  height: 658px;
}
  .ccontaine {
    width: 100%;
    height: 100%;
  }
  .card-horizontal {
    display: flex;
    flex: 1 1 auto;
  }
  .card-body {
    margin-top: 80px;
    /* margin-right: 70%; */
  }
  .card-title {
    text-align: initial;
  }
  .profile1 {
    text-align: initial;
    font: normal normal bold 20px/30px Poppins;
    letter-spacing: 0px;
    color: black;
    margin-bottom: -104px;
    margin-left: 60px;
  }
  .bord{
        border: solid 2px #BF9742;
    border-radius: 15px;
    }
  </style>
  