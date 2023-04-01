<template>
    <h3 class="heading mt-4 pb-2">Recommanded Products</h3>
    <div class="container d-flex">
      <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/><a href="#" class="btn">Add to Bag</a></p>
      
    </div>
  </div>
  
  <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.125/500gm <br/> Made with pure kesar <br/> <a href="#" class="btn">Add to Bag</a></p>
      
    </div>
  </div>
  
  <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/> <a href="#" class="btn">Add to Bag</a></p>
    </div>
  </div>

  <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/> <a href="#" class="btn">Add to Bag</a></p>
    </div>
  </div>

  </div>
  </template>
  
  <script>
  import { ref } from "vue";
    export default{
      name: "RecommandedProducts",
      setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    }
  </script>
  
  <style scoped>
  .heading{
  margin-left: 4em;
  font-weight: bold;
}
.container{
 margin-left: 3em; 
}
  
  .box img{
    background-color: #edd5a4;
    width: 22em;
  }
  
  .box{
    height: 10em;
    padding: 9px;
    width: 45em;
    border-radius: 0px;
  }
  
  .card-img-top{
    background: none;
  }
  .card-body{
    width: 22em;
    background-color: white;
  }
  /* .card2{
    height: 10em;
    width: 20em;
    padding: 10px;
  }
  
  .card3{
    height: 10em;
    width: 20em;
    padding: 10px;
  } */
  .box .btn{
    background-color: #A17A35;
    color: white;
    margin-left: 11em;
    margin-top: -3em;
    width: 7em;
  }
  /* .card2 .btn{
    background-color: #A17A35;
    color: white;
    margin-left: 11em;
    margin-top: -5em;
    width: 7em;
  }
  .card3 .btn{
    background-color: #A17A35;
    color: white;
    margin-left: 11em;
    margin-top: -5em;
    width: 7em;
  } */
@media screen and (max-width: 1800px) {

  /* .heading{
    margin-left: 6.5em;
  }
   .container{
    max-width: 80em;
    margin-left: 10em;
   } */
}
@media screen and (max-width: 1399px) {

  .heading{
    margin-left: 4em;
  }
  .container{
    margin-left: 6em;
    max-width: 80em;
  }
}
  @media screen and (max-width: 993px) {
    .container{
      margin-left: 3em;
      padding-right: 10px;
      width: 50em;
    }
  
    .card{
      width: 18em;
      padding: 10px;
    }
  
    /* .card2{
      width: 18em;
    }
  
    .card3{
      width: 18em;
    } */
  }
  
  @media screen and (max-width: 400px) {
    .heading {
      width: 12em;
    }
  }
  </style>