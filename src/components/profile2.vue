<template>
    <NavComp />
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-4 col-md-4" style=" height: 100%">
                <div id="mySidenav" class="sidenav">
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
                            <div class="col-md-12 border-right">
                                <div class="p-3 py-1">
                                    <div class="d-flex justify-content-between align-items-center mb-1 mt-3">
                                        <h4 class="text-right profile">My Profile</h4>
                                        <div class="" style="text-align: end">
                                            <a href="./editprofile" class="btn btn-outlined btn-black address" data-wow-delay="0.7s"><img src="../assets/edit.svg" /> <small></small></a>
    
                                            <i class="mdi mdi-settings-outline"></i>
                                        </div>
                                    </div>
    
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="" style="text-align: left">
                                                <label class="labels">Name</label>
                                            </div>
                                            <input type="text" class="form-control" placeholder="first name" value="" />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="labels"></label><input type="text" class="form-control" style="" value="" placeholder="surname" />
                                        </div>
                                    </div>
    
                                    <div class="row mt-1">
                                        <div class="col-md-6">
                                            <div class="" style="text-align: left">
                                                <label class="labels">Mobile Number</label>
                                            </div>
                                            <input type="text" class="form-control" placeholder="enter phone number" value="" />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <!-- <label class="labels"></label><input type="text" class="form-control" value="" placeholder="Near by landmark" /> -->
                                                    <div class="" style="text-align: left">
                                                        <label class="labels">Gender</label>
                                                    </div>
                                                    <select class="form-select form-control" aria-label="Default select example" style="
        padding: 12px;
    ">
                                                        <option selected>Male</option>
                                                        <option value="1">Female</option>
                                                        <option value="2">Other</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-8">
                                                    <div  class=" " style="text-align: left">
                                                        <label class="labels">Birthday</label>
                                                    </div>
                                                
                                                    <input class="form-control" style="" id="birthday" type="date" name="birthday" placeholder="Enter your birthday" value="2017-06-01" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="row mt-1">
                                        <div class="col-md-6">
                                            <div class="" style="text-align: left">
                                                <label class="labels">Email</label>
                                            </div>
                                            <input type="text" class="form-control" placeholder="enter email id" value="" />
                                        </div>
                                    </div>
    
                                    <div class="row mt-1">
                                        <div class="col-md-2">
                                            <div class="" style="text-align: left; margin-bottom: -24px; margin-top: -6px">
                                                <label class="labels">Address</label>
                                            </div>
                                            <label class="labels"></label><input type="text" class="form-control" value="" placeholder="Plot No." />
                                        </div>
                                        <div class="col-md-4">
                                            <label class="labels"></label><input style="margin-top: -6px" type="text" class="form-control" placeholder="Building name" value="" />
                                        </div>
                                    </div>
    
                                    <div class="row mt-1">
                                        <div class="col-md-4">
                                            <label class="labels"></label><input type="text" class="form-control" value="" placeholder="Near by landmark" />
                                        </div>
                                        <div class="col-md-2">
                                            <label class="labels"></label><input type="number" class="form-control" value="" placeholder="Pincode" />
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-md-2">
                                            <label class="labels"></label><input type="text" class="form-control" value="" placeholder="state" />
                                        </div>
                                        <div class="col-md-4">
                                            <label class="labels"></label><input type="text" class="form-control" placeholder="country" value="" />
                                        </div>
                                    </div>
    
                                    <div class="row mt-1" style="margin-top: 4px">
                                        <div class="col-md-6">
                                            <div class="" style="text-align: left">
                                                <a href="./addaddress" class="btn btn-outlined btn-black address" data-wow-delay="0.7s"><img src="../assets/plus.svg" /> <small>Add Address</small></a>
    
                                                <i class="mdi mdi-settings-outline"></i>
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
    </style>
    