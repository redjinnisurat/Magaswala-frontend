<template>
    <NavComp />
 <div class="container">
  <div class="row justify-content-md-center">
   
    <div class="col-md-auto" style="    border-style: solid;
    border-width: 2px;
    width: 100%;
    height: 100%;">
    <div class="col-md-6">
          <div class="sidebar">
            <myprofileComp />
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
  name: "orderComp",
  components: {
    NavComp, myprofileComp,
    
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

body {
  background: rgb(231, 228, 235);
}

.form-control:focus {
  box-shadow: none;
  border-color: #bf9742;
}

.form-control {
  height: 40px;
}

.back:hover {
  color: #bf9742;
  cursor: pointer;
}

.labels {
  font-size: 16px;
}

.add-experience:hover {
  background: #bf9742;
  color: #fff;
  cursor: pointer;
  border: solid 1px #bf9742;
}

.address {
  text-align: initial;
  font: normal normal bold 20px/30px Poppins;
  letter-spacing: 0px;
  color: #bf9742;
}

.profile {
  text-align: initial;
  font: normal normal bold 20px/30px Poppins;
  letter-spacing: 0px;
  color: #b1622a;
}

.container5 {
  width: 800px;
  margin-right: 100px;
  height: 535px;
}
</style>
