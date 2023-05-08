<template>
     <NavComp/>
   <div class="mainContainer">
      <div class="sidebar">
        <myprofileComp/>
      </div>
<div class="container rounded bg-white mt-6 mb-5">
    <div class="row bord">

        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
                    <h4 class="text-right profile">Home Address</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12">
                        <label class="labels"></label><input type="text" class="form-control " placeholder="Building name" value="" />
                 
                        <img    class="pen" align="right" src="../assets/pen1.svg" alt="" />




                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-md-12">
                        <label class="labels"></label><input type="text" class="form-control" placeholder="country" value="" />
                 
                        <img    class="pen" align="right" src="../assets/pen1.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>
        <div class="col-md-6">
            <div class="p-3 py-5">

                <!--Google map-->
                <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>

                <!--Google Maps-->
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
</div></div>
</template>

    
<script>
  import myprofileComp from './myprofileComp.vue';
import NavComp from './NavComp.vue';
export default {
    name: "manageaddressComp",
    components:{ NavComp, myprofileComp} 
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
.container{
  width: 690px;
  margin-right: 100px;
  height: 624px;
}
body {
    background: rgb(99, 39, 120);
}

.form-control:focus {
    box-shadow: none;
    border-color: #ba68c8;
}
.bord{
        border: solid 2px #BF9742;
    border-radius: 15px;
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

/* .add-experience:hover {
    background: #ba68c8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #ba68c8;
} */

/* .add {
    width: 345px;
    background-image: url(../assets/pen1.svg);
    background-repeat: no-repeat;
    background-position: right;
    height: 120px;
    margin-left: 77px;

} */
.pen {
    margin-top: -33px;
    margin-right: 15px;
   
    z-index: 1;

    transition: opacity 0.5s ease;
    position: relative;

    cursor: pointer;
  
}
</style>
