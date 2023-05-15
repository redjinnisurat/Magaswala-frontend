<template>
 <p>Some text ... </p>
</template>

<script>
export default{
  name:"testComp"
}

</script>

<style scoped>
body{background:url('http://lorempixel.com/image_output/food-q-c-640-480-1.jpg');background-size:cover;}
p{
  position: relative;
  width: 150px; height: 150px;
  overflow: hidden;
  border-top:3px solid #EF0EFE;
}
p:before, p:after{
  content: '';
  position: absolute;
  top: -3px;
  height: 100%; width: 50%;
  z-index: -1;
  border:2px solid #EF0EFE;
  box-sizing:border-box;
}
p:before{
  left: 0;  
  transform-origin: 0 0;
  transform: skewY(-20deg);
  border-width:0 0 4px 3px;
}
p:after{
  right: 0;
  transform-origin: 100% 0;
  transform: skewY(20deg);
  border-width:0 3px 4px 0;
}
</style>