<template>
   <NavComp/>
   <div class="mainContainer">
      <div class="sidebar">
        <myprofileComp/>
      </div>
  <div class="container rounded bg-white mt-5 mb-5">
    <div
      class="row"
      style="border: #b1622a; border-style: solid; border-width: 2px; border-radius: 15px;    "
    >
      <div class="col-md-12 border-right">
        <div class="p-3 py-1">
          <div class="d-flex justify-content-between align-items-center mb-3 mt-4">
            <h4 class="text-right profile">My Profile</h4>
            <div class="" style="text-align: end">
              <a href="./editprofile" class="btn btn-outlined btn-black address" data-wow-delay="0.7s"
                ><img src="../assets/edit.svg" /> <small></small
              ></a>

              <i class="mdi mdi-settings-outline"></i>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-md-6">
              <div class="" style="text-align: left">
                <label class="labels">Name</label>
              </div>
              <input type="text" class="form-control" placeholder="first name" value="" />
            </div>
            <div class="col-md-6">
              <label class="labels"></label
              ><input
                type="text"
                class="form-control"
                style=""
                value=""
                placeholder="surname"
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6">
              <div class="" style="text-align: left">
                <label class="labels">Mobile Number</label>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="enter phone number"
                value=""
              />
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <!-- <label class="labels"></label><input type="text" class="form-control" value="" placeholder="Near by landmark" /> -->
                  <div class="" style="text-align: left">
                    <label class="labels">Gender</label>
                  </div>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Male</option>
                    <option value="1">Female</option>
                    <option value="2">Other</option>
                  </select>
                </div>
                <div class="col-md-8">
                  <div class="" style="text-align: left">
                    <label class="labels">Birthday</label>
                  </div>
                  <input
                    class="form-control"
                    style="height: 40px"
                    id="birthday"
                    type="date"
                    name="birthday"
                    placeholder="Enter your birthday"
                    value="2017-06-01"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6">
              <div class="" style="text-align: left">
                <label class="labels">Email</label>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="enter email id"
                value=""
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-2">
              <div
                class=""
                style="text-align: left; margin-bottom: -24px; margin-top: -6px"
              >
                <label class="labels">Address</label>
              </div>
              <label class="labels"></label
              ><input type="text" class="form-control" value="" placeholder="Plot No." />
            </div>
            <div class="col-md-4">
              <label class="labels"></label
              ><input
              style="    margin-top: -6px;"
                type="text"
                class="form-control"
                placeholder="Building name"
                value=""
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-4">
              <label class="labels"></label
              ><input
                type="text"
                class="form-control"
                value=""
                placeholder="Near by landmark"
              />
            </div>
            <div class="col-md-2">
              <label class="labels"></label
              ><input type="number" class="form-control" value="" placeholder="Pincode" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-2">
              <label class="labels"></label
              ><input type="text" class="form-control" value="" placeholder="state" />
            </div>
            <div class="col-md-4">
              <label class="labels"></label
              ><input type="text" class="form-control" placeholder="country" value="" />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6">
              <div class="" style="text-align: left">
                <a
                  href="#"
                  class="btn btn-outlined btn-black address"
                  data-wow-delay="0.7s"
                  ><img src="../assets/plus.svg" /> <small>Add Address</small></a
                >

                <i class="mdi mdi-settings-outline"></i>
              </div>
            </div>
          </div>

          <!-- <div class="mt-5 text-center">
                    <button
                class="btn btn-primary"
                style="background-color: #bf9742; border: 0px; margin-left: 400px"
                type="submit"
              >
                Save changes
              </button>
                </div> -->
        </div>
      </div>

      <!-- <div class="col-md-4">
            <div class="p-2 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span></span></div><br>
                <div class="col-md-12"><label class="labels"></label><input type="text" class="form-control" placeholder="experience" value=""></div> <br>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div>
            </div>
        </div> -->
    </div>
  </div> </div>
</template>

<script>
import myprofileComp from './myprofileComp.vue';
import NavComp from './NavComp.vue';
export default {
  name: "profileComp",
  components:{ NavComp, myprofileComp} 
};
</script>

<style scoped>
.bg {
    background-color: #f8fdff;
    padding: 2rem;
}
/* .sidebar{
  width: 66px;
  height: 666px;
} */
.mainContainer {
    display: grid;
    grid-template-columns: 15% 85%;
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
.container{
  width: 690px;
  margin-right: 100px;
  height: 624px;
}


</style>
