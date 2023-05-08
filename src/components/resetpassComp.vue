<template>
  <NavComp/>
   <div class="mainContainer">
      <div class="sidebar">
        <myprofileComp/>
      </div>
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row bord">
        <div class="col-md-6 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3 mt-4">
              <h4 class="text-right profile">Reset Password</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-10">
                <div class="" style="text-align: left">
                  <label class="text">Password</label>
                </div>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Old Password"
                  value=""
                />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-10">
                <input
                  type="password"
                  class="form-control"
                  placeholder="New Password"
                  value=""
                />
              </div>
            </div>
  
            <div class="row mt-2">
              <div class="col-md-10">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Conform Password"
                  value=""
                />
              </div>
            </div>
         
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-3 py-5">
            <div class="flex-shrink-0">
              <img
                src="../assets/password.png"
                alt="Generic placeholder image"
                class="img-fluid"
                style="
                top: 325px;
  left: 1255px;
  width: 424px;
  height: 424px;
                "
              />
            </div>
          </div>
        </div>
        <div class="mt-5"  style="top: 965px;
  left: 1451px;
  width: 236px;
  height: 56px;
  position: sticky;">
              <button
                class="btn btn-primary"
                style="background-color: #bf9742; border: 0px "
                type="submit"
                
              >
                Change Password
              </button>
            </div>
      </div>
    </div></div>
  </template>
  
  <script>
  import myprofileComp from './myprofileComp.vue';
import NavComp from './NavComp.vue';
  export default {
    name: "resetpassComp",
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
  height: 624px;
}
  body {
    background: rgb(231, 228, 235);
  }
  
  .form-control:focus {
    box-shadow: none;
    border-color: #ba68c8;
  }
  
  .back:hover {
    color: #73272b;
    cursor: pointer;
  }
  
  .labels {
    font-size: 16px;
  }
  
  .add-experience:hover {
    background: #ba68c8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #ba68c8;
  }
  .bord{
        border: solid 2px #BF9742;
    border-radius: 15px;
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
  </style>
  