<template>
<div class="containerr">
<div class="itemm item1">hello</div>
<div class="itemm"></div>
<div class="itemm"></div>
<div class="itemm">lorem45</div>
<div class="itemm"></div>




</div>
</template>
<script>
export default {
    name:"gridComp"
}



</script>
<style>
.containerr{
    background-color: red;
    height: 400px;
    width: 900px;
    display: grid;
    grid-template-columns:1fr 1fr  ;
    grid-template-rows:1fr 1fr  ;
    row-gap: 12px;
    column-gap: 12px;
}
.itemm{
    background-color: rgb(245, 182, 9);
    height: 122px;
    /* width: 122px; */
}
.item1{
    grid-column-start:1 ;
    grid-column-end: 3;
    background-color: rgb(245, 182, 9);
  
    }
</style>