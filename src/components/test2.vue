<template>
    <li class="lmenu">
             <router-link to="./profile">Next<span><img src="../assets/side_bag.svg" /></span></router-link>
         </li>
        
   <div class="trengel">
   <div class="shape">
   </div>
   <!-- <div class="shape2">
   </div> -->
   </div>
 </template>
 <script>
 export default {
   name: "test2",
 };
 </script>
 <style scoped>
 .trengel{
 position: relative;
 height: 561px;
 margin-left: 126px;
 width: 405px;
 background: white;
 border: solid 2px #BF9742;
 border-right: none;
 }
 .shape{
   position: absolute;
     width: 289px;
     height: 122px;
     background:#F9F9F9;
     border: solid 2px #BF9742;
     top: 218px;
     left: 257px;
     transform: skew(295deg);
     rotate: 102.5deg;
     border-left: none;
     border-top: none; 
 }
 /* .shape2{
   position: absolute;
     width: 269px;
     height: 0px;
     background: white;
     border: solid 2px #BF9742;
     transform: rotate(70deg);
     top: 434px;
     left: 79px;
     border-right: none;
     border-top: none;
 } */
 </style>
 