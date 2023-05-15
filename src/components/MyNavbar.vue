<template>
  <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-body-secondary" aria-hidden="false">Toggleable via the navbar brand.</span>
  </div>
</div>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand mx-2" href="#"><img class="navbar-logo" src="@/assets/Magaswala.png" alt="" style="width: 6em;"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" aria-hidden="false" @click="openNavbar"></span>
      <!-- <i class="fa fa-bars" aria-hidden="true" style="color:black"></i> -->
    </button>
    <form class="search d-flex" role="search" id="search">
        <input class="form-control me-2" type="search" placeholder="Search for food products" aria-label="Search" style="width: 20em; height: 2em;">
        <img class="img-logo mt-2 my-2" src="@/assets/search.png" alt="" style="width: 18px; height: 20px;">
        <!-- <div class="btn-serach">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div> -->
      </form>
    <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
      <ul class="navbar-nav me-auto mb-1 mt-lg-4">
        <li class="nav-item my-0">
          <a class="nav-link active mx-5 me-3" aria-current="page" href="#">&nbsp; &nbsp;<img src="@/assets/home.png" alt="" style="width: 1em;"><br/>Home</a>
        </li>
        <li class="nav-item nav-li">
          <a class="nav-link me-3 mx-2" href="#">&nbsp;<img src="@/assets/bag.png" alt="" style="width: 1em;"><br/><p style="color: #B1622A;">Bag</p></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> &nbsp; &nbsp; &nbsp;<img src="@/assets/favorite.png" alt="" style="width: 1em;"><br/>Favorites
          </a>
        </li>
        <li class="nav-item nav-li">
          <a class="nav-link mx-2">&nbsp; &nbsp;<img src="@/assets/profile.png" alt="" style="width: 1em;"><br/>Profile</a>
        </li>

        <li class="nav-item nav-li">
          <a class="nav-link mx-4">&nbsp; &nbsp; <img src="@/assets/logout.png" alt="" style="width: 1em;"><br/>Logout</a>
        </li>
      </ul>
      
      <div class="hamburger" @click="openNavbar" :class="{'active': isMenuOpen}">
        <span class="bar">1</span>
        <span class="bar">2</span>
        <span class="bar">3</span>
      </div>

    </div>
  </div>
</nav>
 
</template>

<script>
import { ref } from "vue";

  export default {
    name : "MyNavbar",

    setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  data() {
     return {
      isMenuOpen: false
     };
  },
  methods: {
   
    openNavbar() {
      // alert("cliked");
      // this.isMenuOpen = !this.isMenuOpen;
      const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".navbar-nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    })
  }
}
  // openNavbar() {
  //   var navbarToggleExternalContent = document.getElementById('navbarToggleExternalContent');
  //   if(navbarToggleExternalContent.click.visibility == "hidden") {
  //     navbarToggleExternalContent.click.visibility = "visible";
  //   } else {
  //     navbarToggleExternalContent.click.visibility = "hidden";
  //   }
  // }

  // methods: {
  //   openNavbar: function(){
  //     let navbarToggleExternalContent = document.getElementById('navbarToggleExternalContent');
  //     navbarToggleExternalContent.classList.add('open-navbar');
  //   }
  // }
//   methods: {
//   const hamburger = document.querySelector(".hamburger");
//   const navBar = document.querySelector(".navbar");

//   hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navBar.classList.toggle("active");
//   })
// }
}
</script>

<style scoped>
.navbar{
  margin-top: -2em;
  margin-left: -5em;
  /* background: whitesmoke; */
}
.navbar-logo{
  margin-left: -2em;
  margin-top: 0.3em;
}
.search{
  margin-top: 10px;
  /* border: 1px solid #A17A35; */
  border-radius: 8px;
  margin-left: 3em;
}

.search .img-logo{
  margin-left: -2.5em;
  
}
.hamburger{
  display: none;
  cursor: pointer;
}

.bar{
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
}
@media screen and (max-width: 1800px) {
  .navbar {
    margin-left: 15em;
  }
}

@media screen and (max-width: 1390px) {
  .navbar {
    margin-left: 8em;
  }
}

@media screen and (max-width: 990px){

  .navbar{
    margin-top: 2em;
    margin-left: 3em;
  }

  #search{
    display: flex;
    /* float: left; */
    margin-left: 8em;
    margin-top: -2.5em;
  }
  .navbar-toggler{
    float: right;
    margin-left: 15em;
    /* display: none; */
  }
  .navbar-toggler-icon{
    margin:0px;
    width: 1.5em;
  }
  .hamburger{
    display: block;
  }
  .hamburger .active .bar:nth-child(2){
    opacity:0;
  }
  .hamburger .active .bar:nth-child(1){
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger .active .bar:nth-child(1){
    transform: translateY(-8px) rotate(-45deg);
  }
  .navbar-nav{
    position: fixed;
    left: -100%;
    top: 70px;
    gap:0;
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: 0.3s;
  }
  .nav-item{
    margin: 16px 0;
  }
  .navbar.active{
    left: 0;
  }
}

@media screen and (max-width: 890px) {

  #search{
    margin-top: -2.5em;
    margin-right: 8em;
    /* display:flex; */
  }
  .navbar-toggler{
    float: right;
    margin-right: 2em;
  }
}

@media screen and (max-width: 690px) {

  .navbar {
    margin-left: 8em;
  }
  .navbar-logo{
    font-size: 3rem;
  }
  .navbar-toggler{
    /* float:right; */
    margin-left: 50em;
    margin-top: -4em;
  }

  #search{
    margin-left: 20rem;
    width: 40rem;
    height: 10rem;
    margin-top: -5rem;
    padding: 20px;
  }
  .box{
    max-width: 100rem;
  }
}
@media screen and (max-width: 590px) {
  .navbar-logo{
    margin-top: 2rem;
  }
  .navbar{
    margin-left: 15rem;
  }
  .search{
    margin-bottom: 2rem;
  }
  .form-control{
    font-size: 30px;
  }
  .navbar-toggler{
    margin-left: 110rem;
  }
  .navbar-toggler-icon{
    margin-left: -80rem;
  }
}
@media screen and (max-width: 490px) {
  .navbar-toggler-icon{
    margin-left: -80rem;
  }
}
@media screen and (max-width: 390px) {
  .navbar-toggler{
    /* float:right; */
    margin-left: 70em;
    margin-top: -8rem;
  }
  .navbar-toggler-icon{
    margin-left: -40rem;
  }
  .navbar-logo{
    font-size: 3rem;
    margin-left: -5rem;
  }

  #search{
    /* margin-right: 8rem; */
    margin-left: 20rem;
    width: 45rem;
    height: 3rem;
    margin-top: -9rem;
    padding: 20px;
    /* font-size: 50px; */
  }
  .form-control{
    font-size: 40px;
    
  }
  .search img{
    margin-right: 10rem;
    margin-bottom: 5rem;
    padding-bottom: -3rem;;
    width: 20em;
  }
  
}
</style>