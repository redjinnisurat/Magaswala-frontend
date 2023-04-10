<template>
    <h3 class="heading">Recommanded Products</h3>
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

  <!-- <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/> <a href="#" class="btn">Add to Bag</a></p>
    </div>
  </div> -->

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
  margin-left: 3.8em;
  font-weight: bold;
}
.container{
 margin-left: 5.5em; 
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

  /* .heading{
    margin-left: 4em;
  }
  .container{
    margin-left: 6em;
    max-width: 80em;
  } */
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
@media screen and (max-width: 590px) {
  .container{
    width: 70rem;
  }
  .heading{
    font-size: 50px;
    width: 40rem;
    margin-left: 5rem;
  }
  .box{
    max-width: 37rem;
    padding-right: 0px;
    margin-right: 0px;
  }
  .box .card-img-top{
    width: 35rem;
  }
  .box .card-body{
    width: 37rem;
    font-size: 30px;
    padding: 0px;

  }
  .box .btn{
    margin-left: 25rem;
    margin-top: -8rem;
    font-size: 20px;
  }
}
@media screen and (max-width: 490px) {
  .container{
    width: 70rem;
    /* margin-top: 20rem; */
  }
  .heading{
    font-size: 50px;
    width: 40rem;
    margin-left: 5rem;
    margin-top: 57rem;
  }
  .box{
    max-width: 37rem;
    padding-right: 0px;
    margin-right: 0px;
  }
  .box .card-img-top{
    width: 35rem;
  }
  .box .card-body{
    width: 80rem;
    font-size: 30px;
    padding: 0px;

  }
  .box .btn{
    margin-left: 25rem;
    margin-top: -8rem;
    font-size: 20px;
  }
}

  @media screen and (max-width: 390px) {
    .container{
    width: 70rem;
    margin-top: 10rem;
  }
  .heading{
    font-size: 50px;
    width: 40rem;
    margin-left: 5rem;
    margin-top: 58rem;
    margin-bottom: 10rem;
  }
  .box{
    max-width: 35rem;
    margin-top: -8rem;
    margin-bottom: -8rem;
  }
  .box .card-img-top{
    width: 28rem;
  }
  .box .card-body{
    width: 28rem;
    font-size: 25px;
    padding: 0px;

  }
  .box .btn{
    margin-left: 17rem;
    margin-top: -6rem;
    font-size: 20px;
  }
  }
  </style>