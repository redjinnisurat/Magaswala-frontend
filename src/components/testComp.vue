<template>
  <div class="trengel">
  <div class="shape">
  </div>
  </div>
</template>
<script>
export default {
  name: "testComp",
};
</script>
<style scoped>
.trengel{
position: relative;
height: 837px;
width: 405px;
background: white;
border: solid 2px #BF9742;
border-right: none;
}
.shape{
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  border: solid 2px #BF9742;
  transform: rotate(45deg);
  top: -25px;
  left: 200px;
  border-right: none;
  border-top: none;
}
</style>
