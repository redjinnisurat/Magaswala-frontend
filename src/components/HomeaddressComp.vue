<template>
    <div class="container rounded bg-white mt-6 mb-5">
        <div class="row">
            <!-- <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
            </div> -->
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
                        <h4 class="text-right profile">Home Address</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels"></label><input type="text" class="form-control" placeholder="Building name" value="" />
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label class="labels"></label><input type="text" class="form-control" placeholder="Near by landmark" value="" />
                        </div>
                        <div class="col-md-6">
                            <label class="labels"></label><input type="text" class="form-control" value="" placeholder="Pincode" />
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label class="labels"></label><input type="text" class="form-control" placeholder="state" value="" />
                        </div>
                        <div class="col-md-6">
                            <label class="labels"></label><input type="text" class="form-control" value="" placeholder="city" />
                        </div>
                    </div>
    
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels"></label><input type="text" class="form-control" placeholder="country" value="" />
                        </div>
                    </div>
                    <!-- <div class="mt-5 text-center">
                        <button class="btn btn-primary profile-button" type="button">
                            Save Profile
                        </button>
                    </div> -->
                   
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 py-5">
                    <!-- <div class="flex-shrink-0">
                        <img src="../assets/map.png" alt="Generic placeholder image" class="img-fluid" style="
                    width: 481px;
    
                    height: 271px;
                    margin-top: 110px;
                  " />
                    </div> -->
                    <!--Google map-->
<div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
    style="border:0" allowfullscreen></iframe>
</div>
                </div>
            </div>
            <div class="" style="text-align:right">
                <!-- <a href="#" class="btn btn-outlined btn-black   address" data-wow-delay="0.7s"><img src="../assets/plus.svg"> <small></small></a> -->
                <button class="btn btn-primary" style="background-color: #bf9742; border: 0px; " type="submit">
                    Save changes
                </button>
                <i class="mdi mdi-settings-outline"></i>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: "HomeaddressComp",
    };
    </script>
    
    <style>
    body {
        background: rgb(99, 39, 120);
    }
    
    .map-container{
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}
.map-container iframe{
  left:0;
  top:0;
  width: 481px;
  margin-top: 110px;
                    height: 271px;
  position:absolute;
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
    </style>
    