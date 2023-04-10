<template>
    <div class="container rounded bg-white mt-6 mb-5">
      <div class="row">
        <div class="col-md-6 border-right">
          <div class="p-3 py-6">
            <div class="p-3 py-5">
              <div class="flex-shrink-0">
                <img
                  src="../assets/track.png"
                  alt="Generic placeholder image"
                  class="img-fluid"
                  style="
                    width: 592px;
  
                    height: 592px;
                    margin-top: 70px;
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-3 py-5">
            <div class="container mt-5 mb-5">
              <div class="row">
                <div class="col-md-12">
                  <div class="col">
                    <p class="text"><b>Order details</b> <span class="order"></span></p>
                    <p class="text"><b>Order No.:</b><span class="order">#951452</span></p>
                  </div>
                </div>
                <div class="col-md-3 offset-md-6">
                  <div class="col">
                    <img
                      align="right"
                      class="icon"
                      src="../assets/ladu.png"
                      style="top: 410px; left: 1476px; width: 131px; height: 92px"
                    />
                    <div class="d-flex flex-column">
                      <p class="text">
                        <b>Magas </b
                        ><span class="font-weight-bold text-dark"><br />1KG</span>
                      </p>
                    </div>
                  </div>
                </div>
  
                <div class="col-md-3 offset-md-6">
                  <div align="left" class="star">
                    <span align="right" class="heading">Rating</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </div>
                <div class="col-md-6 offset-md-6">
                  <div class="row"></div>
                  <h4>Track Order</h4>
                  <ul class="timeline">
                    <li>
                      <!-- <a target="_blank" href="https://www.totoprayogo.com/#">Track order</a> -->
                      <a href="#" class="float">Order Placed</a>
                      <p>We Have received your order.</p>
                    </li>
                    <li>
                      <a href="#" class="float">Comformed</a>
                      <p>Your order has been conferment.</p>
                    </li>
                    <li>
                      <a href="#" class="float">Order Shiped</a>
                      <p>Estimated for 29 September , 2022</p>
                    </li>
                    <li>
                      <a href="#" class="float">Out for Delivery</a>
                      <p>Estimated for 30 September , 2022</p>
                    </li>
                    <li>
                      <a href="#" class="float">Delivered</a>
                      <p>Estimated for 3 October , 2022</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "orderstatusComp",
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
  .heading {
    /* font-size: 25px; */
    margin-right: 25px;
    text-align: left;
  }
  .order {
    text-align: left;
    font: normal normal medium 22px/20px Poppins;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .checked {
    color: orange;
  }
  ul.timeline {
    list-style-type: none;
    position: relative;
  }
  ul.timeline:before {
    content: " ";
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 86%;
    z-index: 400;
  }
  ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
  }
  ul.timeline > li:before {
    content: " ";
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #22c0e8;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
  }
  .float {
    text-decoration: none;
    text-decoration: none;
    color: black;
  
    font-weight: 700;
  }
  
  div.stars {
    width: 270px;
  
    display: inline-block;
  }
  
  .mt-200 {
    margin-top: 200px;
  }
  
  input.star {
    display: none;
  }
  
  label.star {
    float: left;
  
    padding: 10px;
  
    font-size: 10px;
  
    color: #4a148c;
  
    transition: all 0.2s;
  }
  
  input.star:checked ~ label.star:before {
    content: "\f005";
  
    color: #fd4;
  
    transition: all 0.25s;
  }
  
  input.star-5:checked ~ label.star:before {
    color: #fe7;
  
    text-shadow: 0 0 20px #952;
  }
  
  input.star-1:checked ~ label.star:before {
    color: #f62;
  }
  
  label.star:hover {
    transform: rotate(-15deg) scale(1.3);
  }
  
  label.star:before {
    content: "\f006";
  
    font-family: FontAwesome;
  }
  </style>
  