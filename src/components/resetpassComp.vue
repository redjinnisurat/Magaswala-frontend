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
              "
            >
              <div class="col-md-6 border-right">
                <div class="p-0 py-0">
                  <div
                    class="d-flex justify-content-between align-items-center mb-3 mt-4"
                  >
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
                <div class="p-0 py-0">
                  <div class="flex-shrink-0">
                    <img
                      src="../assets/password.png"
                      alt="Generic placeholder image"
                      class="img-fluid"
                      style="top: 325px; left: 1255px; width: 424px; height: 424px"
                    />
                  </div>
                </div>
              </div>
              <div
                class="mt-5"
                style="
                  top: 965px;
                  left: 1451px;
                  width: 236px;
                  height: 56px;
                  position: sticky;
                "
              >
                <button
                  class="btn btn-primary"
                  style="background-color: #bf9742; border: 0px"
                  type="submit"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myprofileComp from "./myprofileComp.vue";
import NavComp from "./NavComp.vue";
export default {
  name: "resetpassComp",
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
</style>
