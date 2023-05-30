<template>
  <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-light p-4 ham">
    <a href="/homepage" class="text-black h4 home">Home</a>
    <a href="/addbag" class="text-black h4 bag">Bag</a>
    <a href="#" class="text-black h4 profile">Favourites</a>
    <a href="#" class="text-black h4 profile">Profile</a>
    <a href="#" class="text-black h4 log">Logout</a>
    <!-- <span class="text-body-secondary">Toggleable via the navbar brand.</span> -->
  </div>
</div>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand mx-2" href="#"><img class="navbar-logo" src="@/assets/Magaswala.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" @click="openNavbar"></span>
      
    </button>
    <form class="search-bar">
        <input type="text" placeholder="Search...">
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
      <ul class="navbar-nav me-auto mb-1 mt-lg-4">
        <li class="nav-item my-0">
          <a class="nav-link active mx-5 me-3" aria-current="page" href="/homepage">&nbsp; &nbsp;<img src="@/assets/home.png" alt="" style="width: 1em;"><br/>Home</a>
        </li>
        <li class="nav-item nav-li">
          <a class="nav-link me-3 mx-2" href="/addbag">&nbsp;<img src="@/assets/bag.png" alt="" style="width: 1em;"><br/><p style="color: #B1622A;">Bag</p></a>
        </li>
        <li class="nav-item">
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
<!--       
      <div class="hamburger" @click="openNavbar" :class="{'active': isMenuOpen}">
        <span class="bar">Home</span>
        <span class="bar">Bag</span>
        <span class="bar">Favorites</span>
        <span class="bar">Profile</span>
        <span class="bar">Logout</span>
      </div> -->

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
  width: 9em;
  margin-left: -4em;
  margin-top: 0.3em;
}
.search-bar {
  display: flex;
  align-items: center;
  margin-left: 3rem;
  margin-top: 10px;
}

.search-bar input[type="text"] {
    border:0.5px solid #CEB070;
    border-radius:10px ;
  padding: 0.7rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  margin-left: 5%;
  width: 25rem;
  height: 3em;
}

.search-bar input[type="text"]:focus {
 
  border: 1px solid  #CEB070;
}

.search-bar button[type="submit"] {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left:-10% ;
}

.search-bar button[type="submit"] i {
  color: #707070;
  font-size: 1.5rem;

}
.navbar-nav{
  margin-left: -2em;
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
.ham{
  display: flex;
  flex-direction: column;
}
.home{
  text-decoration: none;
}
.bag{
  text-decoration: none;
}
.fav{
  text-decoration: none;
}
.profile{
  text-decoration: none;
}
.log{
  text-decoration: none;
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
  .search-bar{
    margin-top: -3.3em;
    margin-left: 10em;
  }

  /* #search{
    display: flex;
    margin-left: 8em;
    margin-top: -2.5em;
  } */
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

  /* #search{
    margin-top: -4em;
    margin-left: 12em;
  } */
  .navbar-toggler{
    float: right;
    margin-right: 2em;
  }
}
@media screen and (max-width: 790px) {
  .navbar-toggler{
    margin-right: -6em;
  }
}
@media screen and (max-width: 690px) {

  .navbar {
    margin-left: 13em;
  }
  .navbar-logo{
    font-size: 3rem;
  }
  .navbar-toggler{
    /* float:right; */
    margin-left: 44em;
    margin-top: -6em;
  }
  .search-bar{
    margin-top: -7em;
    margin-left: 18em;
  }
  /* #search{
    margin-left: 20rem;
    width: 20em;
    height: 10rem;
    margin-top: -5rem;
    padding: 20px;
  } */
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
  /* #search{
    width: 30em;
    margin-top: -7em;
  } */
  .form-control{
    font-size: 30px;
  }
  .navbar-toggler{
    margin-top: -6em;
    margin-left: 44em;
  }
  /* .navbar-toggler-icon{
    margin-left: -80rem;
  } */
}
@media screen and (max-width: 490px) {
  .navbar{
    margin-left: 19em;
  }
  .navbar-toggler{
    margin-left: 50em;
    margin-top: -6em;
  }
  /* #search{
    margin-top: -7em;
    margin-left: 24em;
  } */
  /* .navbar-toggler-icon{
    margin-left: -20rem;
  } */
}
@media screen and (max-width: 390px) {
  .navbar{
    margin-left: 8em;
  }
  .navbar-toggler{
    /* float:right; */
    margin-left: 55em;
    margin-top: -8rem;
    width: 2em;
  }
  /* .navbar-toggler-icon{
    margin-left: -40rem;
  } */
  .navbar-logo{
    font-size: 3rem;
    margin-left: -5rem;
  }
  .search-bar{
    margin-left: 28em;
    margin-top: -7em;
  }
 
  .form-control{
    font-size: 40px;
    
  }
  /* .search img{
    margin-right: 10rem;
    margin-bottom: 5rem;
    padding-bottom: -3rem;;
    width: 25em;
  } */
  
}
</style>