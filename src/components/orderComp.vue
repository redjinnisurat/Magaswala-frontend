<template>
<NavComp />
<div class="container">
      <div class="row">
          <div class="col-lg-4 col-sm-4 col-md-4" style=" height: 100%">
              <div id="test" class="sidenav" style="  position: absolute;
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
                         

                    <div class="row row2">
                        <div class="p-3 py-3">
                            <div class="d-flex justify-content-between align-items-center mb-2 mt-1">
                                <h2 class="text-right profile" style="font-size: 21px">Orders</h2>
                            </div>

                            <div class="order">
                                <table class="table" style="border-bottom-color: white">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <img src="../assets/ladu.png" style="width: 50px; float: none" align="left" />
                                            </th>
                                            <th>
                                                <span>delevary today, 12 march</span>

                                                <br />
                                                <span class="right"> 1 kg suger </span>
                                            </th>
                                            <th>
                                                <a href="./orderstatus">
                                                    <button class="btn btn-primary" style="
                                background-color: #bf9742;
                                border: 0px;
                                text-align: right;
                                float: none;
                              " type="submit">
                                                        track Order
                                                    </button>
                                                </a>
                                                <!-- <a href="https://google.com" class="button">Track 
                  order</a> -->
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="order">
                                <table class="table" style="border-bottom-color: white">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <img src="../assets/ladu.png" style="width: 50px; float: none" align="left" />
                                            </th>
                                            <th>
                                                <span>delevary today, 31 march</span>

                                                <br />
                                                <span class="right"> 1 kg suger </span>
                                            </th>
                                            <th>
                                                <a href="./orderstatus">
                                                <button class="btn btn-primary" style="
                              background-color: #bf9742;
                              border: 0px;
                              text-align: right;
                              float: none;
                            " type="submit">
                                                    track Order
                                                </button></a>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mb-2 mt-1">
                                <h4 class="text-right profile">Recently ordered</h4>
                                <div class="" style="text-align: end; margin-right: 90px">
                                    <select class="form-select" aria-label="Default select example" style="border: 1px solid #bf9742; box-shadow: aqua">
                                        <option selected>select date</option>
                                        <option value="1">Last One week</option>
                                        <option value="2">Last Two week</option>
                                        <option value="3">Last month</option>
                                    </select>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-2 mt-1">
                                <div class="" style="text-align: end; margin-right: 90px">
                                    <select class="form-select" aria-label="Default select example" style="border: 1px solid #bf9742; box-shadow: aqua">
                                        <option selected>10/12/2022, Saturday</option>
                                        <option value="1">09/12/2022, friday</option>
                                        <option value="2">08/12/2022, thurseday</option>
                                        <option value="3">06/12/2022, wednesday</option>
                                    </select>
                                </div>
                            </div>

                            <div class="order">
                                <table class="table" style="border-bottom-color: white">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <img src="../assets/ladu.png" style="width: 50px; float: none" align="left" />
                                            </th>
                                            <th>
                                                <span>delevary today, 31 march</span>

                                                <br />
                                                <span class="right"> 1 kg suger </span>
                                            </th>
                                            <th>
                                                <button class="btn btn-primary" style="
                              background-color: #bf9742;
                              border: 0px;
                              text-align: right;
                              float: none;
                            " type="submit">
                                                    track Order
                                                </button>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="order">
                                <table class="table" style="border-bottom-color: white">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <img src="../assets/ladu.png" style="width: 50px; float: none" align="left" />
                                            </th>
                                            <th>
                                                <span>delevary today, 31 march</span>

                                                <br />
                                                <span class="right"> 1 kg suger </span>
                                            </th>
                                            <th>
                                                <button class="btn btn-primary" style="
                              background-color: #bf9742;
                              border: 0px;
                              text-align: right;
                              float: none;
                            " type="submit">
                                                    track Order
                                                </button>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    </div>
</div>
</template>

<script>
import myprofileComp from "./myprofileComp.vue";
import NavComp from "./NavComp.vue";

export default {
    name: "orderComp",
    components: {
        NavComp,
        myprofileComp
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
@media (max-width: 1026px) {
        #test {
            display: none;
        }
    }
#item {
  width: 746px;
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
