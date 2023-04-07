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
        <li class="nav-item">
          <a class="nav-link me-3 mx-2" href="#">&nbsp;<img src="@/assets/bag.png" alt="" style="width: 1em;"><br/><p style="color: #B1622A;">Bag</p></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> &nbsp; &nbsp; &nbsp;<img src="@/assets/favorite.png" alt="" style="width: 1em;"><br/>Favorites
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2">&nbsp; &nbsp;<img src="@/assets/profile.png" alt="" style="width: 1em;"><br/>Profile</a>
        </li>

        <li class="nav-item">
          <a class="nav-link mx-4">&nbsp; &nbsp; <img src="@/assets/logout.png" alt="" style="width: 1em;"><br/>Logout</a>
        </li>
      </ul>
      
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
  openNavbar() {
    var navbarToggleExternalContent = document.getElementById('navbarToggleExternalContent');
    if(navbarToggleExternalContent.click.visibility == "hidden") {
      navbarToggleExternalContent.click.visibility = "visible";
    } else {
      navbarToggleExternalContent.click.visibility = "hidden";
    }
  }

  // methods: {
  //   openNavbar: function(){
  //     let navbarToggleExternalContent = document.getElementById('navbarToggleExternalContent');
  //     navbarToggleExternalContent.classList.add('open-navbar');
  //   }
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
    margin-left: 7em;
  }

  #search{
    display: flex;
    float: left;
    margin-left: 13em;
    margin-top: -3em;
  }
  .navbar-toggler{
    float: right;
    margin-left: 14em;
  }
  .navbar-toggler-icon{
    margin:0px;
    width: 2em;
  }
}

@media screen and (max-width: 890px) {

  .search{
    margin-top: 10px;
    /* display:flex; */
  }
  .navbar-toggler{
    float: right;
    margin-right: -10em;
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
    margin-left: 60em;
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

@media screen and (max-width: 390px) {
  .navbar-toggler{
    /* float:right; */
    margin-left: 60em;
    margin-top: -7rem;
  }
  .navbar-logo{
    font-size: 5rem;
    margin-left: -3rem;
  }

  #search{
    /* margin-right: 8rem; */
    margin-left: 35rem;
    width: 40rem;
    height: 3rem;
    margin-top: -10rem;
    padding: 20px;
  }

  .search img{
    margin-right: 15rem;
  }
}
</style>