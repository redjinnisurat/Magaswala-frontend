<template>
  <NavComp/>
  <div class="mainContainer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
     <div class="sidebar">
       <myprofileComp/>
     </div></div>
     <div class="col-md-6">
 <div class="container rounded  mt-0 mb-0" >
   <div
     class="row"
     style="border: #bf9742; border-style: solid; border-width: 2px; border-radius: 15px;    "
   >
    



   <div class="container rounded bg-white mt-6 mb-0">
      <div class="row">
        <!-- <div class="col-md-3 border-right">
                  <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
              </div> -->
        <div class="col-md-5 border-right " style="
    margin-top: auto;">
          <div class="p-3 py-5">
            <div class="" style="text-align: left; margin-top: -45px; margin-bottom: 30px">
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                 sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                 magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
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

     <!-- <div class="col-md-4">
           <div class="p-2 py-5">
               <div class="d-flex justify-content-between align-items-center experience"><span></span></div><br>
               <div class="col-md-12"><label class="labels"></label><input type="text" class="form-control" placeholder="experience" value=""></div> <br>
               <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div>
           </div>
       </div> -->
   </div>
 </div> </div></div></div></div>
</template>

<script>
import myprofileComp from './myprofileComp.vue';
import NavComp from './NavComp.vue';
export default {
 name: "ternComp",
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
body {
 background: rgb(231, 228, 235);
}

.form-control:focus {
 box-shadow: none;
 border-color: #ba68c8;

}
.form-control{
 height: 40px;
}

.back:hover {
 color: #73272b;
 cursor: pointer;
}

.labels {
 font-size: 16px;
}

.add-experience:hover {
 background: #ba68c8;
 color: #fff;
 cursor: pointer;
 border: solid 1px #ba68c8;
}

.address {
 text-align: initial;
 font: normal normal bold 20px/30px Poppins;
 letter-spacing: 0px;
 color: #262626;
}

.profile {
 text-align: initial;
 font: normal normal bold 20px/30px Poppins;
 letter-spacing: 0px;
 color: #b1622a;
}
.container{
 width: 800px;
 margin-right: 100px;
 height: 535px;
 background-color: white;
 border-radius: 4%;
}


</style>
