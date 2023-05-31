<template>
  <NavComp />
  <div class="mainContainer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="sidebar">
            <myprofileComp />
          </div>
        </div>
        <div class="col-md-6">
           
          <div class="container rounded bg-white mt-6 mb-5">
    <div class="row bord">
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="" style="text-align: left; margin-top: -45px; margin-bottom: 30px">
            <a
              href="#"
              class="btn btn-outlined btn-black address"
              data-wow-delay="0.7s "
              style="color: #bf9742"
              ><img src="../assets/back.svg" /> <small>Add Address</small></a
            >

            <i class="mdi mdi-settings-outline"></i>
          </div>
          <div class="" style="text-align: left; margin-top: 30px; margin-bottom: -30px">
            <label class="labelss">Contact Info</label>
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
           <p> <label class="labelss">Address</label></p>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels"></label
              ><input
                type="text"
                class="form-control "
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
                class="form-control offadd"
                placeholder="Near by landmark"
                value=""
              />
            </div>
            <div class="col-md-6">
              <label class="labels"></label
              ><input type="text" class="form-control offadd" value="" placeholder="Pincode" />
            </div>
          </div>




          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels"></label
              ><input type="text" class="form-control offadd" placeholder="state" value="" />
            </div>
            <div class="col-md-6">
              <label class="labels"></label
              ><input type="text" class="form-control offadd" value="" placeholder="city" />
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
                style="text-align: left; margin-top: 40px; margin-bottom: -30px"
              >
                <label class="labelss">Type of address</label>
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
                 <span class="rediotext"> Home</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option2"
                  />
                <span class="rediotext">  Office</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option3"
                  />
               <span class="rediotext">   Other</span>
                </label>
              </div>
              <div class="checkbox">
                <label> <input type="checkbox" /> Make as default address </label>
              </div>
            </div>
            
            <!--Google map-->
<div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
    style="border:0" allowfullscreen></iframe>
</div>

<!--Google Maps-->
          </div>
        </div>
      </div>

      <div class="" style="text-align: right">
        <!-- <a href="#" class="btn btn-outlined btn-black   address" data-wow-delay="0.7s"><img src="../assets/plus.svg"> <small></small></a> -->
        <button
          class="button"
          style="background-color: #bf9742; border: 0px;    width: 207px;"
          type="submit"
        >
          Save Address
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
import myprofileComp from "./myprofileComp.vue";
import NavComp from "./NavComp.vue";
export default {
  name: "profileComp",
  components: {
    NavComp,
    myprofileComp,
  },
};
</script>
<style scoped>
.bg {
    background-color: #f8fdff;
    padding: 2rem;
}

.mainContainer {
    display: grid;
    grid-template-columns: 15% 85%;
}
.ccontaine {
  width: 100%;
  height: 100%;
}

.row2{
        border: solid 2px #BF9742;
    border-radius: 15px;
    }
  .sidebar{
    margin-bottom: 66px;
  }

  a.button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    text-decoration: none;
    color: initial;
}
.container{
  width: 800px;
  margin-right: 100px;
  height: 535px;
}
</style>

