<template>
  <div class="container rounded bg-white mt-6 mb-5">
    <div class="row">
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="" style="text-align: left; margin-top: -45px; margin-bottom: 30px">
            <a
              href="#"
              class="btn btn-outlined btn-black address"
              data-wow-delay="0.7s"
              style="color: #bf9742"
              ><img src="../assets/back.svg" /> <small>Add Address</small></a
            >

            <i class="mdi mdi-settings-outline"></i>
          </div>
          <div class="" style="text-align: left; margin-top: 30px; margin-bottom: -30px">
            <label class="labels">Contact Info</label>
          </div>

          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels"></label
              ><input
                type="text"
                class="form-control"
                placeholder="Building name"
                value=""
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels"></label
              ><input
                type="text"
                class="form-control"
                placeholder="Building name"
                value=""
              />
            </div>
          </div>
          <div class="" style="text-align: left; margin-top: 30px; margin-bottom: -30px">
            <label class="labels">Address</label>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels"></label
              ><input
                type="text"
                class="form-control"
                placeholder="Building name"
                value=""
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels"></label
              ><input
                type="text"
                class="form-control"
                placeholder="Near by landmark"
                value=""
              />
            </div>
            <div class="col-md-6">
              <label class="labels"></label
              ><input type="text" class="form-control" value="" placeholder="Pincode" />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels"></label
              ><input type="text" class="form-control" placeholder="state" value="" />
            </div>
            <div class="col-md-6">
              <label class="labels"></label
              ><input type="text" class="form-control" value="" placeholder="city" />
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels"></label
              ><input type="text" class="form-control" placeholder="country" value="" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="p-3 py-5">
          <div class="flex-shrink-0">
            <div class="col-md-12">
              <div
                class=""
                style="text-align: left; margin-top: 30px; margin-bottom: -30px"
              >
                <label class="labels">Type of address</label>
              </div>
              <br />
              <!-- <input type='radio' name="gender"/>

    <input type='radio' name="gender"/>

    <input type='radio' name="gender"/> -->

              <div class="radio checkbox">
                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="optionsRadios1"
                    value="option1"
                    checked
                  />
                  Home
                </label>

                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option2"
                  />
                  Office
                </label>
                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option3"
                  />
                  Other
                </label>
              </div>
              <div class="checkbox">
                <label> <input type="checkbox" /> Make as default address </label>
              </div>
            </div>
            <img
              src="../assets/map.png"
              alt="Generic placeholder image"
              class="img-fluid"
              style="
                width: 481px;

                height: 271px;
                margin-top: 145px;
              "
            />
          </div>
        </div>
      </div>

      <div class="" style="text-align: right">
        <!-- <a href="#" class="btn btn-outlined btn-black   address" data-wow-delay="0.7s"><img src="../assets/plus.svg"> <small></small></a> -->
        <button
          class="btn btn-primary"
          style="background-color: #bf9742; border: 0px"
          type="submit"
        >
          Save Address
        </button>
        <i class="mdi mdi-settings-outline"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addaddressComp",
};
</script>

<style>
body {
  background: rgb(99, 39, 120);
}

.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
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
  font-size: 11px;
}

.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}

.checkbox {
  font-size: 21px;
  color: #999999;
}

input[type="radio"]:after {
  width: 10px;
  height: 10px;
  border-radius: 15px;
  top: -6px;
  left: 1px;
  position: relative;
  background-color: white;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

input[type="radio"]:checked:after {
  width: 8px;
  height: 8px;
  border-radius: 15px;
  top: -13px;
  left: 2px;
  position: relative;
  background-color: #bf9742;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid #bf9742;
}
</style>
