<template>
  <NavComp />
  <div class="mainContainer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="sidebar">
            <myprofileComp />
          </div>
        </div>
        <div class="col-md-6">
          <div class="container rounded bg-white mt-1 mb-0">
            <div class="row bord">
              <div class="col-md-6 border-right">
                <div class="p-0 py-0">
                  <div
                    class="d-flex justify-content-between align-items-center mb-3 mt-4"
                  >
                    <h4 class="text-right profile">Help & Support</h4>
                  </div>

                  <form class="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><i class="fas fa-search"></i></button>
                  </form>
                  <div class="smenu">
                    <ul id="nav" class="list">
                   
                     
                    

                      <li>
                        <button onclick="location.href='./test'" type="button" class="item">
                          <span>Shipping FAQs</span>
                          <img src="../assets/for.svg" 
                        />
                          
                        </button>
                      </li>
                      <button type="button" class="item">
                        <span>Payment FAQs</span>
                        <img src="../assets/for.svg" />
                      </button>
                    </ul>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myprofileComp from "./myprofileComp.vue";
import NavComp from "./NavComp.vue";
export default {
  name: "helpandsupportComp",
  components: { NavComp, myprofileComp },
};
</script>

<style scoped>
.item{
  border-bottom: 1px solid rgb(243, 235, 235);
  left: -25px;
}
button {
  /* padding-top: 100px; */
  width: 100%;
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  background-color: white;
}
button span {
  text-align: left;
  position: absolute;
  left: 0%;
  font-weight: 600;
  font: normal normal normal  Poppins;
}
button img {
  position: relative;
  right: -50%;
  width: 6px;
}
.search-bar input[type="text"] {
  border: 0.5px solid #ceb070;
  border-radius: 10px;
  padding: 0.7rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  margin-left: 5%;
  width: 21rem;
}

.search-bar input[type="text"]:focus {
  border: 1px solid #ceb070;
}

.search-bar button[type="submit"] {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: -10%;
}

.search-bar button[type="submit"] i {
  color: #707070;
  font-size: 1.5rem;
}
.list {
  list-style-type: none;

}
.mainContainer {
  display: grid;
  grid-template-columns: 15% 85%;
}
.container {
  width: 690px;
  margin-right: 100px;
  height: 624px;
}
body {
  background: rgb(231, 228, 235);
}

.bord {
  border: solid 2px #bf9742;
  border-radius: 15px;
}
.address {
  text-align: initial;
  font: normal normal bold 20px/30px Poppins;
  letter-spacing: 0px;
  color: #262626;
}

.profile {
  text-align: initial;
  font: normal normal bold 20px/30px Poppins;
  letter-spacing: 0px;
  color: #b1622a;
}
.container {
  width: 800px;
  margin-right: 100px;
  height: 530px;
}
.smenu {
  height: 359px;
}

.lmenu {
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
}

li:hover {
  background-color: white;
  color: #bf9742;
  font-weight: 700;
}
</style>
