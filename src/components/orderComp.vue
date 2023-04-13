<template>
    <div class="container rounded bg-white mt-6 mb-5">
      <div class="row">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-2 mt-1">
            <h4 class="text-right profile">Orders</h4>
          </div>
  
          <div class="order">
            <table class="table" style="border-bottom-color: white">
              <tbody>
                <tr>
                  <th>
                    <img
                      src="../assets/ladu.png"
                      style="width: 50px; float: none"
                      align="left"
                    />
                  </th>
                  <th>
                    <span>delevary today, 12 march</span>
  
                    <br />
                    <span class="right"> 1 kg suger </span>
                  </th>
                  <th>
                    <button
                      class="btn btn-primary"
                      style="
                        background-color: #bf9742;
                        border: 0px;
                        text-align: right;
                        float: none;
                      "
                      type="submit"
                    >
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
                    <img
                      src="../assets/ladu.png"
                      style="width: 50px; float: none"
                      align="left"
                    />
                  </th>
                  <th>
                    <span>delevary today, 31 march</span>
  
                    <br />
                    <span class="right"> 1 kg suger </span>
                  </th>
                  <th>
                    <button
                      class="btn btn-primary"
                      style="
                        background-color: #bf9742;
                        border: 0px;
                        text-align: right;
                        float: none;
                      "
                      type="submit"
                    >
                      track Order
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
  
          <div class="d-flex justify-content-between align-items-center mb-2 mt-1">
            <h4 class="text-right profile">Recently ordered</h4>
            <div class="" style="text-align: end;margin-right: 90px;">
              <select class="form-select" aria-label="Default select example" style="    border: 1px solid  #bf9742;box-shadow: aqua;">
    <option selected>select date</option>
    <option value="1">Last One week</option>
    <option value="2">Last Two week</option>
    <option value="3">Last month</option>
  </select>
              </div>
          
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2 mt-1">
          
            <div class="" style="text-align: end;margin-right: 90px;">
              <select class="form-select" aria-label="Default select example" style="    border: 1px solid  #bf9742;box-shadow: aqua;">
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
                    <img
                      src="../assets/ladu.png"
                      style="width: 50px; float: none"
                      align="left"
                    />
                  </th>
                  <th>
                    <span>delevary today, 31 march</span>
  
                    <br />
                    <span class="right"> 1 kg suger </span>
                  </th>
                  <th>
                    <button
                      class="btn btn-primary"
                      style="
                        background-color: #bf9742;
                        border: 0px;
                        text-align: right;
                        float: none;
                      "
                      type="submit"
                    >
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
                    <img
                      src="../assets/ladu.png"
                      style="width: 50px; float: none"
                      align="left"
                    />
                  </th>
                  <th>
                    <span>delevary today, 31 march</span>
  
                    <br />
                    <span class="right"> 1 kg suger </span>
                  </th>
                  <th>
                    <button
                      class="btn btn-primary"
                      style="
                        background-color: #bf9742;
                        border: 0px;
                        text-align: right;
                        float: none;
                      "
                      type="submit"
                    >
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
  </template>
  <script>
  export default {
    name: "orderComp",
  };
  </script>
  <style>
  .ccontaine {
    width: 100%;
    height: 100%;
  }
  </style>
  