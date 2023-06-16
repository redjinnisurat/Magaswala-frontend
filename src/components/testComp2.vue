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
           
     
            <div class="row">
                  <div class="col-md-5 border-right" style="margin-top: auto">
                    <div class="p-3 py-5">
                      <div
                        class=""
                        style="text-align: left; margin-top: -45px; margin-bottom: 30px"
                      >
                        <i class="mdi mdi-settings-outline"></i>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <p
                            style="
                              text-align: left;
                              font: normal normal 600 35px/45px Poppins;
                              letter-spacing: 0px;
                              color: #b1622a;
                              opacity: 1;
                            "
                          >
                            Term And<br />Conditions
                          </p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <p
                            style="
                              text-align: left;
                              font: normal normal normal 22px/24px Poppins;
                              letter-spacing: 0px;
                              color: #262626;
                              opacity: 1;
                            "
                          >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo
                          </p>
                        </div>
                      </div>
                      <div class="" style="text-align: left">
                        <!-- <a href="#" class="btn btn-outlined btn-black   address" data-wow-delay="0.7s"><img src="../assets/plus.svg"> <small></small></a> -->
                        <button
                          class="btn btn-primary"
                          style="background-color: #bf9742; border: 0px"
                          type="submit"
                        >
                          Learn More
                        </button>
                        <i class="mdi mdi-settings-outline"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="p-3 py-5">
                      <div class="flex-shrink-0">
                        <img
                          src="../assets/term.png"
                          alt="Generic placeholder image"
                          class="img-fluid"
                          style="
                  width: 400px;
  
                  height: 400px;
                  <!-- margin-top: 70px; -->
                "
                        />
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


.img-account-profile {
  height: 10rem;
}

.rounded-circle {
  border-radius: 50% !important;
}

.card {
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
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
.item{
  border-bottom: 1px solid rgb(243, 235, 235);
  left: -25px;
}
.search-bar input[type="text"] {
  border: 0.5px solid #ceb070;
  border-radius: 10px;
  padding: 0.7rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  margin-left: 5%;
  width: 21rem;
}

.search-bar input[type="text"]:focus {
  border: 1px solid #ceb070;
}

.search-bar button[type="submit"] {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: -10%;
}

.search-bar button[type="submit"] i {
  color: #707070;
  font-size: 1.5rem;
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
