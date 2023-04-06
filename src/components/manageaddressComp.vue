<template>
    <div class="container rounded bg-white mt-6 mb-5">
        <div class="row">
    
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
                        <h4 class="text-right profile">Home Address</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels"></label><input type="text" class="form-control add" placeholder="Building name" value="" />
                        </div>
                    </div>
    
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels"></label><input type="text" class="form-control add" placeholder="country" value="" />
                        </div>
                    </div>
    
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 py-5">
                    <div class="flex-shrink-0">
                        <img src="../assets/map.png" alt="Generic placeholder image" class="img-fluid" style="
                        width: 481px;
    
                        height: 271px;
                        margin-top: 110px;
                      " />
                    </div>
                </div>
            </div>
    
            <div class="row mt-3">
                <div class="col-md-6">
                    <div class="" style="text-align: left">
                        <a href="#" class="btn btn-outlined btn-black   address" data-wow-delay="0.7s"><img src="../assets/plus.svg"> <small>Add Address</small></a>
    
                        <i class="mdi mdi-settings-outline"></i>
                    </div>
    
                </div>
    
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: "manageaddressComp",
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
        font-size: 17px;
    }
    
    .add-experience:hover {
        background: #ba68c8;
        color: #fff;
        cursor: pointer;
        border: solid 1px #ba68c8;
    }
    
    .add {
        width: 345px;
        background-image: url(../assets/pen1.svg);
        background-repeat: no-repeat;
        background-position: right;
        height: 120px;
    
    }
    </style>
    