<template>
  <div class="container-xl px-4 mt-4">
    <div class="row">
      <div class="col-xl-8">
        <!-- Account details card-->
        <div class="card mb-4" style="border: 2px #bf9742; background-color: #ffffff">
          <!-- <div class="card-header">Account Details</div> -->
          <div class="profile">
            <h2>My Profile</h2>
          </div>

          <div class="card-body">
            <form>
              <div class="row gx-3 mb-3">
                <!-- Form Group (first name)-->
                <label class="small mb-1" style="margin-left: -325px">name</label>
                <div class="col-md-6">
                  <!-- <label class="small mb-1" for="inputFirstName">name</label> -->
                  <input
                    class="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Enter your first name"
                    style="
                      background-color: #f9f9f9;
                      background-clip: padding-box;
                      border: 1px solid #bf9742;
                    "
                  />
                </div>
                <!-- Form Group (last name)-->
                <div class="col-md-6">
                  <!-- <label class="small mb-1" for="inputLastName">Last name</label> -->
                  <input
                    class="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Enter your last name"
                    style="
                      background-color: #f9f9f9;
                      background-clip: padding-box;
                      border: 1px solid #bf9742;
                    "
                  />
                </div>
              </div>

              <div class="row gx-3 mb-3">
                <!-- Form Group (organization name)-->
                <div class="col-md-6">
                  <label class="small mb-1" for="inputOrgName">Mobile No.</label>
                  <input
                    class="form-control"
                    id="inputOrgName"
                    type="text"
                    placeholder="mob"
                    style="
                      background-color: #f9f9f9;
                      background-clip: padding-box;
                      border: 1px solid #bf9742;
                    "
                  />
                </div>

                <div class="col-md-6">
                  <div class="col-md-3">
                    <label class="small mb-1" for="inputBirthday">Gender</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      style="
                        background-color: #f9f9f9;
                        background-clip: padding-box;
                        border: 1px solid #bf9742;
                      "
                    >
                      <option selected>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Other</option>
                    </select>
                  </div>

                  <div class="col-md-7" style="margin-left: 143px; margin-top: -64px">
                    <label class="small mb-1" for="inputBirthday">Birthday</label>
                    <input
                      class="form-control"
                      id="birthday"
                      type="date"
                      name="birthday"
                      placeholder="Enter your birthday"
                      style="
                        background-color: #f9f9f9;
                        background-clip: padding-box;
                        border: 1px solid #bf9742;
                      "
                    />
                  </div>
                </div>
              </div>

              <!-- Form Group (email address)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputEmailAddress">Email id</label>
                <input
                  class="form-control"
                  id="inputEmailAddress"
                  type="email"
                  placeholder="Enter your email address"
                  style="
                    background-color: #f9f9f9;
                    background-clip: padding-box;
                    border: 1px solid #bf9742;
                  "
                />
              </div>

              <div class="row gx-3 mb-3">
                <div class="col-md-6">
                  <label class="small mb-1" for="inputBirthday">Address</label>
                  <div class="col-md-3">
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Flot No."
                      style="
                        background-color: #f9f9f9;
                        background-clip: padding-box;
                        border: 1px solid #bf9742;
                      "
                    />
                  </div>

                  <div class="col-md-8" style="margin-left: 122px; margin-top: -37px">
                    <!-- <label class="small mb-1" for="inputBirthday">Birthday</label> -->
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Building Name"
                      style="
                        background-color: #f9f9f9;
                        background-clip: padding-box;
                        border: 1px solid #bf9742;
                      "
                    />
                  </div>
                  <div class="col-md-3" style="margin-left: 260px; margin-top: 25px">
                    <!-- <label class="small mb-1" for="inputBirthday">Birthday</label> -->

                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="pincode"
                      style="
                        background-color: #f9f9f9;
                        background-clip: padding-box;
                        border: 1px solid #bf9742;
                      "
                    />
                  </div>
                  <div class="col-md-8" style="margin-left: 0px; margin-top: -38px">
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Nr. By Landmark"
                      style="
                        background-color: #f9f9f9;
                        background-clip: padding-box;
                        border: 1px solid #bf9742;
                      "
                    />
                  </div>

                  <div class="col-md-3" style="margin-left: 0px; margin-top: 20px">
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="state"
                      style="
                        background-color: #f9f9f9;
                        background-clip: padding-box;
                        border: 1px solid #bf9742;
                      "
                    />
                  </div>
                  <div class="col-md-8" style="margin-left: 120px; margin-top: -36px">
                    <!-- <label class="small mb-1" for="inputBirthday">Birthday</label> -->
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="country"
                      style="
                        background-color: #f9f9f9;
                        background-clip: padding-box;
                        border: 1px solid #bf9742;
                      "
                    />
                  </div>
                </div>
              </div>

              <!-- Save changes button-->
              <!-- <button class="button" herf="#" type="button">Save changes</button> -->
              <button
                class="btn btn-primary"
                style="background-color: #bf9742; border: 0px; margin-left: 400px"
                type="submit"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeComp",
};
</script>
<style>
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
</style>
