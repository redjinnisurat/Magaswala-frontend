<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/Magaswala.svg" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
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
        </form>
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
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "HomeNavbar",
  methods() {},
};
</script>
<style>
.nav-input {
  outline: 0;
  border: none;
  margin-left: 20px;
}
.form-div {
  margin-left: 140px;
  width: 537px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ceb070;
  border-radius: 10px;
}
.nav-li {
  margin-top: 29px;
  margin-left: 108px;

  cursor: pointer;
}
.nav-li p {
  margin-left: -5px;
}
nav {
  margin-top: 91px;
  margin-left: 146px;
  margin-right: 140px;
}
p {
  text-align: left;
}
@media (max-width: 600px) {
  nav {
    margin: 0;
  }
  .nav-li {
    display: flex;
    flex-direction: row;
  }
  .nav-li p {
    margin: 1rem;
  }
  .bag-container {
    padding-left: 30px;
  }
}
</style>