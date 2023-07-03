<template>
  <NavComp />
  <div class="container">
      <div class="row   ">
          <div class="col-lg-4 col-sm-4 col-md-4" style=" height: 100%">
              <div id="test" class="sidenav  col-lg-4 col-sm-4 col-md-4" style="  position: absolute;
">
                  <myprofileComp />
              </div>
          </div>
  
          <div class="col-lg-8 col-sm-8 col-md-8" style=" height: 100%">
  
              <div class="col-md-6">
                  <div id="item" class="container rounded bg-white mt-0 mb-0">
                      <div class="row" style="
                  border: #bf9742;
                  border-style: solid;
                  border-width: 2px;
                  border-radius: 15px;
                ">
                          <div class="col-md-12 border-right">
                              <div class="p-3 py-1">
                                  <div class="d-flex justify-content-between align-items-center mb-1 mt-3">
                                      <h4 class="text-right profile">My Profile</h4>
                                      <div class="" style="text-align: end">
                                          <a href="./editprofile" class="btn btn-outlined btn-black address" data-wow-delay="0.7s"><img src="../assets/edit.svg" /> <small></small></a>
  
                                          <i class="mdi mdi-settings-outline"></i>
                                      </div>
                                  </div>
  
                                  <div class="row">
                                      <div class="col-md-6 col-sm-6">
                                          <div class="" style="text-align: left">
                                              <label class="labels">Name</label>
                                          </div>
                                          <input type="text" class="form-control" placeholder="first name" value="" />
                                      </div>
                                      <div class="col-md-6 col-sm-">
                                          <label class="labels"></label><input type="text" class="form-control" style="" value="" placeholder="surname" />
                                      </div>
                                  </div>
  
                                  <div class="row mt-1">
                                      <div class="col-md-6">
                                          <div class="" style="text-align: left">
                                              <label class="labels">Mobile Number</label>
                                          </div>
                                          <input type="text" class="form-control" placeholder="enter phone number" value="" />
                                      </div>
                                      <div class="col-md-6">
                                          <div class="row">
                                              <div class="col-md-4">
                                                  <!-- <label class="labels"></label><input type="text" class="form-control" value="" placeholder="Near by landmark" /> -->
                                                  <div class="" style="text-align: left">
                                                      <label class="labels">Gender</label>
                                                  </div>
                                                  <select class="form-select form-control" aria-label="Default select example" style="
      padding: 12px;
  ">
                                                      <option selected>Male</option>
                                                      <option value="1">Female</option>
                                                      <option value="2">Other</option>
                                                  </select>
                                              </div>
                                              <div class="col-md-8">
                                                  <div  class=" " style="text-align: left">
                                                      <label class="labels">Birthday</label>
                                                  </div>
                                              
                                                  <input class="form-control" style="" id="birthday" type="date" name="birthday" placeholder="Enter your birthday" value="2017-06-01" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="row mt-1">
                                      <div class="col-md-6">
                                          <div class="" style="text-align: left">
                                              <label class="labels">Email</label>
                                          </div>
                                          <input type="text" class="form-control" placeholder="enter email id" value="" />
                                      </div>
                                  </div>
  
                                  <div class="row mt-1">
                                      <div class="col-md-2">
                                          <div class="" style="text-align: left; margin-bottom: -24px; margin-top: -6px">
                                              <label class="labels">Address</label>
                                          </div>
                                          <label class="labels"></label><input type="text" class="form-control" value="" placeholder="Plot No." />
                                      </div>
                                      <div class="col-md-4">
                                          <label class="labels"></label><input style="margin-top: -6px" type="text" class="form-control" placeholder="Building name" value="" />
                                      </div>
                                  </div>
  
                                  <div class="row mt-1">
                                      <div class="col-md-4">
                                          <label class="labels"></label><input type="text" class="form-control" value="" placeholder="Near by landmark" />
                                      </div>
                                      <div class="col-md-2">
                                          <label class="labels"></label><input type="number" class="form-control" value="" placeholder="Pincode" />
                                      </div>
                                  </div>
                                  <div class="row mt-1">
                                      <div class="col-md-2">
                                          <label class="labels"></label><input type="text" class="form-control" value="" placeholder="state" />
                                      </div>
                                      <div class="col-md-4">
                                          <label class="labels"></label><input type="text" class="form-control" placeholder="country" value="" />
                                      </div>
                                  </div>
  
                                  <div class="row mt-1" style="margin-top: 4px">
                                      <div class="col-md-6">
                                          <div class="" style="text-align: left">
                                              <a href="./addaddress" class="btn btn-outlined btn-black address" data-wow-delay="0.7s"><img src="../assets/plus.svg" /> <small>Add Address</small></a>
  
                                              <i class="mdi mdi-settings-outline"></i>
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
      name: "profileComp",
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
.form-control
{
  display: block;
  width: 100%;
  padding: 0.875rem 1.125rem;
  font-size: -0.875rem;
  font-weight: 400;
  line-height: 1;
  color: #69707a;
  background-color: #F9F9F9;
    background-clip: padding-box;
    border: 1px solid #BF9742;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (max-width: 1026px) {
        #test {
            display: none;
        }
    }
#item {
  width: 746px;
}
.form-control{
  background-color: #F9F9F9;
    background-clip: padding-box;
    border: 1px solid #BF9742;
}
.profile {
  top: 276px;
  left: 640px;
  width: 172px;
  height: 49px;
  text-align: left;
  font: normal normal 600 35px/53px Poppins;
  letter-spacing: 0px;
  color: #b1622a;
  opacity: 1;
  font-family: Poppins;
}
  .form-control {
      height: 41px;
  }
  
  .form-control:focus {
      box-shadow: none;
      border-color: #bf9742;
  }
  </style>
  