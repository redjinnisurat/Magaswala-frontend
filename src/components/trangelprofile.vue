<template>
  <nav class="nnvv navbar navbar-expand-lg bg-body-tertiy">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/Magaswala.svg" alt=""
      /></a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" role="search">
          <div class="form-div">
            <input
              class="nav-input"
              type="text"
              placeholder="Search for food peoducts"
            />
            <button class="btn" type="submit">
              <img src="../assets/input_search.svg" alt="" />
            </button>
          </div>
        div
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item nav-li">
            <img src="../assets/home.svg" alt="" />
            <p>Home</p>
          </li>
          <li class="nav-item nav-li">
            <img src="../assets/bag.svg" alt="" />
            <p style="margin-left: 0px" class="bag-container">Bag</p>
          </li>

          <li class="nav-item nav-li">
            <img src="../assets/favourite.svg" alt="" />
            <p>Favourite</p>
          </li>
          <li class="nav-item nav-li">
            <img src="../assets/profile.svg" alt="" />
            <p>Profile</p>
          </li>
          <li class="nav-item nav-li">
            <img src="../assets/logout.svg" alt="" />
            <p>Log Out</p>
          </li>
        </ul>
        </form>
      
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    name:"trangelprofile"
} </script>
<style>

</style>