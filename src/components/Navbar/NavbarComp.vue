<template>
  <section class="navbar_comp">
    <div class="logo">Magaswala</div>
    <div class="input-grp d-flex flex-column justify-content-center">
      <div class="inputContainer input-group ps-5">
        <div class="input-div" data-mdb-input-init>
          <input
            v-model="search_product"
            type="search"
            id=""
            class=""
            placeholder="Search for food products"
            @input="handleInput"
          />
          <div v-show="showAutocompleteResults" class="autocomplete-results">
            <ul>
              <li
                class="d-flex align-items-center justify-content-center"
                style="height: 20rem"
                v-if="searchProductFound"
              >
                <h3>No result found!!</h3>
              </li>
              <li v-for="result in navbarData" :key="result" v-else>
                <div class="favItem bg-light border rounded">
                  <div class="favItem_content d-flex align-items-center">
                    <div
                      class="fav-img d-flex align-items-center justify-content-center ps-2"
                    >
                      <img
                        :src="result.image ? result.image : defaulImage"
                        class="rounded-4"
                        alt="Image"
                      />
                    </div>
                    <div class="favText">
                      <h3 class="mb-1">
                        {{ result.name }}
                        <span class="text-muted">{{ result.quantity }}</span>
                      </h3>
                      <h3 class="mb-1">{{ result.desc }}</h3>
                      <h4 class="text-muted">Rs.{{ result.price }}</h4>
                    </div>
                  </div>
                  <div
                    class="favItem_btn d-flex justify-content-center align-items-center py-3"
                  >
                    <div class="btns2 d-flex flex-column gap-2">
                      <button
                        type="button"
                        class="btn"
                        v-on:click="addToBag(result.id)"
                      >
                        Add to bag
                      </button>
                      <button
                        type="button"
                        class="btn"
                        v-on:click="buyNow(result.id)"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" v-on:click="search()" data-mdb-ripple-init>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
    <div class="logoList">
      <router-link to="/">
        <div class="iconItem" id="homeIcon">
          <div class="icon-img-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.506"
              height="25.632"
              viewBox="0 0 30.506 30.632"
            >
              <g
                id="Group_84"
                data-name="Group 84"
                transform="translate(-1436.646 -887.118)"
              >
                <path
                  id="Vector"
                  d="M8.439,29H20.562a5.928,5.928,0,0,0,6.061-5.784V16.142A3.785,3.785,0,0,1,27.812,13.4a3.76,3.76,0,0,0-.483-5.869L18.065,1.106a6.3,6.3,0,0,0-7.131,0L1.671,7.535A3.76,3.76,0,0,0,1.187,13.4a3.785,3.785,0,0,1,1.189,2.738v7.071A5.928,5.928,0,0,0,8.439,29Z"
                  transform="translate(1437.4 888)"
                  fill="none"
                  stroke="#838282"
                  stroke-width="1.7"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M6,14c6.2,2.632,9.655,2.583,15.646,0"
                  transform="translate(1438.077 893.926)"
                  fill="none"
                  stroke="#838282"
                  stroke-width="1.7"
                />
              </g>
            </svg>
          </div>
          <!-- <i class="fa-solid fa-house"></i> -->
          <p>Home</p>
        </div>
      </router-link>
      <router-link to="/bagPage">
        <div class="iconItem" id="blogIcon">
          <div class="icon-img-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.699"
              height="25.7"
              viewBox="0 0 25.699 30.7"
            >
              <g
                id="Group_85"
                data-name="Group 85"
                transform="translate(-1524.65 -887.051)"
              >
                <path
                  id="_290141_bag_case_handbag_purse_shopping_icon"
                  data-name="290141_bag_case_handbag_purse_shopping_icon"
                  d="M23.826,32H3.174A2.5,2.5,0,0,1,1,29.271L3.174,12.909a3.229,3.229,0,0,1,.85-2.09,2.016,2.016,0,0,1,1.8-.637H7.266C8.086,5.448,10.561,2,13.5,2s5.415,3.448,6.235,8.181h1.441a2.017,2.017,0,0,1,1.8.637,3.23,3.23,0,0,1,.85,2.09L26,29.271A2.5,2.5,0,0,1,23.826,32ZM13.5,3.364c-2.366,0-4.374,2.849-5.119,6.817H18.619C17.872,6.213,15.866,3.364,13.5,3.364Zm9.238,9.544a1.629,1.629,0,0,0-.414-1.023,1.025,1.025,0,0,0-.874-.341H19.915a20.421,20.421,0,0,1,.108,2.045.558.558,0,1,1-1.088,0,18.977,18.977,0,0,0-.109-2.045H8.171a19.116,19.116,0,0,0-.109,2.045.625.625,0,0,1-.544.682.625.625,0,0,1-.544-.682c0-.684.038-1.367.108-2.045H5.548a1.026,1.026,0,0,0-.873.341,1.629,1.629,0,0,0-.414,1.023L2.088,29.271a1.25,1.25,0,0,0,1.088,1.364H23.826a1.25,1.25,0,0,0,1.088-1.364Z"
                  transform="translate(1524 885.401)"
                  fill="#828a89"
                  stroke="#828a89"
                  stroke-width="0.7"
                  fill-rule="evenodd"
                />
                <path
                  id="Vector_1781"
                  data-name="Vector 1781"
                  d="M0,0C2.262,1.287,3.5,1.273,5.76,0"
                  transform="translate(1534.621 906.359)"
                  fill="none"
                  stroke="#828a89"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </g>
            </svg>
          </div>
          <!-- <i class="fa-solid fa-bag-shopping"></i> -->
          <p>Bag</p>
        </div>
      </router-link>
      <router-link to="/favPage">
        <div class="iconItem" id="favoriteIcon">
          <div class="icon-img-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.5"
              height="25.5"
              viewBox="0 0 31.5 31.5"
            >
              <path
                id="Vector"
                d="M16.148,2.837,15,4.207,13.853,2.837A7.4,7.4,0,0,0,8.115,0,7.4,7.4,0,0,0,2.377,2.837a11.058,11.058,0,0,0,0,13.7L12.7,28.865a2.888,2.888,0,0,0,4.59,0L27.623,16.537a11.058,11.058,0,0,0,0-13.7,7.221,7.221,0,0,0-11.475,0Z"
                transform="translate(0.75 0.75)"
                fill="none"
                stroke="#838282"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </div>
          <!-- <i class="fa-solid fa-heart"></i> -->
          <p>Favorites</p>
        </div>
      </router-link>
      <router-link to="/profilePage/userData">
        <div class="iconItem" id="profileIcon">
          <div class="icon-img-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.50"
              height="25.50"
              viewBox="0 0 21 29"
            >
              <g
                id="Group_374"
                data-name="Group 374"
                transform="translate(-1582 -114)"
              >
                <g
                  id="Group_137"
                  data-name="Group 137"
                  transform="translate(1414.871 -412.116)"
                >
                  <ellipse
                    id="Ellipse_255"
                    data-name="Ellipse 255"
                    cx="9.5"
                    cy="5.5"
                    rx="9.5"
                    ry="5.5"
                    transform="translate(168.129 543.116)"
                    fill="none"
                    stroke="#838282"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <ellipse
                    id="Ellipse_257"
                    data-name="Ellipse 257"
                    cx="7.5"
                    cy="6"
                    rx="7.5"
                    ry="6"
                    transform="translate(170.129 527.116)"
                    fill="none"
                    stroke="#838282"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </g>
            </svg>
          </div>
          <!-- <i class="fa-solid fa-user"></i> -->
          <p>Profile</p>
        </div>
      </router-link>
      <div class="iconItem" id="logout">
        <div class="icon-img-div" v-on:click="logout()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 25 30"
          >
            <path
              id="Icon_metro-switch"
              data-name="Icon metro-switch"
              d="M20.57,6.223v3.983a8.92,8.92,0,0,1,2.742,1.968,9.71,9.71,0,0,1,0,13.258,8.631,8.631,0,0,1-12.627,0,9.71,9.71,0,0,1,0-13.258,8.919,8.919,0,0,1,2.742-1.968V6.223A13.062,13.062,0,0,0,4.5,18.8c0,7.249,5.6,13.125,12.5,13.125S29.5,26.052,29.5,18.8A13.062,13.062,0,0,0,20.57,6.223ZM15.213,1.928h3.571v15H15.213Z"
              transform="translate(-4.499 -1.928)"
              fill="grey"
              stroke-width=""
            />
          </svg>
        </div>
        <!-- <i class="fa-solid fa-right-from-bracket" v-on:click="logout()"></i> -->
        <p v-on:click="logout()">Logout</p>
      </div>
      <div class="iconItem" id="menuIcon">
        <i class="fa-solid fa-bars" v-on:click="openPanel()"></i>
        <p>Menu</p>
      </div>
    </div>
  </section>
  <aside
    class="logoList-panel"
    :class="{ logoList_show: show }"
    id="side_panel"
  >
    <div class="logoTitle">
      <h2>Menu</h2>
      <i class="fa-solid fa-xmark" v-on:click="closePanel()"></i>
    </div>
    <router-link to="/">
      <div class="iconItem-panel" id="homeIcon-panel">
        <i class="fa-solid fa-house"></i>
        <p>Home</p>
      </div>
    </router-link>
    <router-link to="/bagPage">
      <div class="iconItem-panel" id="blogIcon-panel">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Bag</p>
      </div>
    </router-link>
    <router-link to="/favPage">
      <div class="iconItem-panel" id="favoriteIcon-panel">
        <i class="fa-solid fa-heart"></i>
        <p>Favorites</p>
      </div>
    </router-link>
    <router-link to="/profilePage/userData">
      <div class="iconItem-panel" id="profileIcon-panel">
        <i class="fa-solid fa-user"></i>
        <p>Profile</p>
      </div>
    </router-link>
    <div class="iconItem-panel" id="logout_panel">
      <i class="fa-solid fa-right-from-bracket" v-on:click="logout()"></i>
      <p v-on:click="logout()">Logout</p>
    </div>
  </aside>
</template>

<script>
// import axios from 'axios';
import Swal from "sweetalert2";
import { mapActions } from "vuex";

export default {
  name: "NavbarComp",
  data() {
    return {
      show: false,
      token: "",
      search_product: "",
      searchQuery: "",
      navbarData: [],
      showAutocompleteResults: false,
      defaulImage: require("./assets/ladoo_img_1.jpeg"),
    };
  },
  computed: {
    searchedProducts() {
      return this.$store.getters.allSearchedProducts;
    },
    searchProductFound() {
      return this.$store.getters.searchProductFound;
    },
  },
  methods: {
    async addToBag(id) {
      this.$store.dispatch("addToCart", {
        product_id: id,
        qty: 1,
      });
      await Swal.fire({
        title: "Added Successfully",
        text: "This item added in your cart.",
        icon: "success",
        customClass: {
          popup: "my-swal-popup", // Make sure this matches your CSS class name
        },
      });
      // alert("Product added to your Bag!!");
      this.$router.push({
        name: "BagPage",
      });
    },
    buyNow(id) {
      this.$router.push({
        name: "BagItemPage",
        params: {
          id: id,
        },
      });
    },
    handleInput() {
      if (this.search_product != "") {
        this.showAutocompleteResults = true;
        this.getAllSearchedProducts(this.search_product)
          .then(() => {
            // console.log("Searched Products: ", this.searchedProducts);
            this.navbarData = this.searchedProducts;
          })
          .catch(() => {
            // console.log("No result found!!");
          });
      } else {
        this.hideAutocomplete();
        this.navbarData = [];
      }
    },
    hideAutocomplete() {
      this.showAutocompleteResults = false;
    },
    ...mapActions(["getAllSearchedProducts"]),
    handleSearch() {
      this.getAllSearchedProducts(this.search_product).then(() => {
        // console.log("Searched Products: ", this.searchedProducts);
      });
    },
    search() {
      // console.log("Search This Item: ", this.search_product);
    },
    openPanel() {
      this.show = true;
    },
    closePanel() {
      this.show = false;
    },
    async logout() {
      // if (confirm("Are you sure ?\nYou want to Logout ?") === true) {
      //   localStorage.removeItem("token");
      //   this.$router
      //     .push({
      //       name: "LoginPage",
      //     })
      //     .then(() => {
      //       this.$router.go();
      //     });
      // }
      await Swal.fire({
        title: "Are you sure ?",
        text: "You want to logout ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
        customClass: {
          popup: "my-swal-popup", // Make sure this matches your CSS class name
        },
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");

          Swal.fire({
            title: "Logout Successfully.",
            text: "You logout successfully.",
            icon: "success",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          }).then(() => {
            this.$router
              .push({
                name: "LoginPage",
              })
              .then(() => {
                this.$router.go();
              });
          });
        }
      });
    },

    // async logout() {

    //     this.token = localStorage.getItem('token')

    //     if (confirm("Are you sure ?\nYou want to Logout ?") === true) {
    //         const response = await axios.post(`https://uatapi.magaswala.com/public/api/logout?toke=${this.token}`).catch((e) => e.response);
    //         const result = response.data;
    //         console.log("Response: " + JSON.stringify(result));
    //         // console.log("Response: " + result.message);

    //         if (result.status === true) {
    //             alert(result.message);
    //             localStorage.removeItem('token');
    //         } else {
    //             alert(result.message);
    //         }
    //     }
    // },
  },
};
</script>

<style>
.my-swal-popup {
  width: 500px; /* Set the desired width */
  max-width: 60%; /* Set the maximum width if needed */
  font-size: 1.6rem; /* Adjust font size if needed */
}
</style>

<style scoped>
.favItem {
  background-color: var(--background-color);
  border: 0.2rem solid var(--border-color) !important;
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.favItem_content {
  width: 60%;
  display: flex;
  gap: 2rem;
}

.fav-img {
  width: 45%;
  max-width: 8rem;
  height: 8rem;
  overflow: hidden;
}

.fav-img img {
  width: 7.5rem;
  height: 7rem;
}

.favText {
  width: 55%;
}

.favText h3 {
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0.6rem 0;
}

.favText h4,
span {
  font-size: 1rem;
  font-weight: 600;
  color: var(--price-font-color) !important;
}

.favItem_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.8rem;
  gap: 4.2rem;
}

.btns2 {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.4rem;
}

.btns2 button {
  font-size: 1rem !important;
  border: none !important;
  border-radius: 6px;
  background-color: var(--primary-color) !important;
  color: var(--btn-font-color);
  padding: 0.6rem 1.2rem !important;
  cursor: pointer !important;
  margin-bottom: 1rem;
}

.autocomplete-results {
  width: 100%;
  position: absolute;
  left: 0;
  background-color: white;
  border: 1px solid var(--border-color);
  height: 45rem;
  margin: 1rem auto;
  overflow-y: auto;
  box-shadow: 0.2rem 0.2rem 0.9rem black;
}

.autocomplete-results ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.autocomplete-results li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete-results li:hover {
  background-color: #f0f0f0;
}

.input-group {
  width: 100% !important;
}

.input-group .btn {
  z-index: 0;
}

.input-div {
  width: 80%;
}
.input-group input {
  width: 100%;
  height: 50%;
  font-size: 1.5rem;
  /*padding: 0.8rem 1.8rem;*/
  border: none;
  background: transparent;
  outline: none;
}
.icon-img-div {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: fill 0.3s ease; /* Add a smooth transition effect */
}

.iconItem:hover #Vector,
#Vector-2 {
  /*fill: var(--border-color) Your hover color here */
  stroke: var(--border-color); /*   Your hover color here */
}

.iconItem:hover #_290141_bag_case_handbag_purse_shopping_icon,
#Vector_1781 {
  /*fill: var(--border-color) Your hover color here */
  stroke: var(--border-color); /*   Your hover color here */
}

.iconItem:hover #Ellipse_257,
#Ellipse_255 {
  /*fill: var(--border-color) Your hover color here */
  stroke: var(--border-color); /*   Your hover color here */
}

.iconItem:hover #Icon_metro-switch {
  fill: var(--border-color); /* Your hover color here */
  /*stroke: var(--border-color);    Your hover color here */
}

.iconItem:hover p {
  color: var(--border-color) /* Your hover color here */;
  /* stroke: var(--border-color)  Your hover color here */
}

.navbar_comp {
  z-index: 1000;
  background-color: var(--nav-color);
  padding: 1.8rem 2.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 4.8rem;
  margin-left: 0rem;
  font-weight: 900;
  color: var(--primary-color);
  font-family: "Merienda", cursive;
}

.input-grp {
  width: 30%;
}

.inputContainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.2rem solid var(--border-color);
  border-radius: 0.4rem;
  background-color: var(--btn-font-color);
}

/*.inputContainer input {
  width: 100%;
  height: 50%;
  font-size: 1.5rem;
  padding: 0.8rem 1.8rem;
  border: none;
  background: transparent;
  outline: none;
}*/

.inputContainer button {
  padding: 0.8rem 1.8rem;
  border: none;
  margin-left: 1rem;
  font-size: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
}

.logoList {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  margin-left: -4rem;
}

.logoList a {
  text-decoration: none;
}

.iconItem {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  cursor: pointer;
}

.iconItem i {
  font-size: 1.6rem;
  text-align: center;
  color: var(--border-color);
  opacity: 0.6;
}

.iconItem p {
  font-size: 1.3rem;
  margin-top: 0.4rem;
  margin-bottom: 0;
  font-weight: 600;
  color: grey;
  opacity: 0.8;
}

#logout {
  margin-left: 5rem;
}

#menuIcon {
  display: none;
  font-size: 2rem;
}

.logoList-panel {
  width: 40%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  background-color: var(--nav-color);
  padding: 0rem 2rem;
  transition: 0.5s ease;
}

.logoTitle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0.2rem;
}

.logoTitle h2 {
  font-size: 3.2rem;
  margin-left: 0.7rem;
  color: var(--primary-color);
}

.logoTitle i {
  font-size: 2.6rem;
  color: var(--primary-color);
}

.iconItem-panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.9rem;
  margin: 0.4rem 1rem;
  cursor: pointer;
}

.iconItem-panel i {
  font-size: 1.8rem;
  text-align: center;
  color: var(--primary-color);
  opacity: 0.7;
}

.iconItem-panel p {
  font-size: 1.7rem;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
  color: var(--primary-color);
  opacity: 0.9;
}

.logoList-panel a {
  text-decoration: none;
}

.logoList_show {
  display: inline-flex;
}

@media only screen and (max-width: 576px) {
  .logo {
    margin-left: 0.2rem;
  }

  .inputContainer {
    display: none;
  }

  #homeIcon,
  #blogIcon,
  #favoriteIcon,
  #profileIcon,
  #logout {
    display: none;
  }

  #menuIcon {
    display: inline-flex;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .logo {
    margin-left: 0.2rem;
  }

  #homeIcon,
  #blogIcon,
  #favoriteIcon,
  #profileIcon,
  #logout {
    display: none;
  }

  #menuIcon {
    display: inline-flex;
  }

  .inputContainer {
    display: inline-flex;
  }

  .input-group {
    padding-left: 1.6rem !important;
  }

  .input-div {
    width: 70%;
  }

  .favItem_content {
    width: 65%;
    gap: 0.6rem;
  }

  .fav-img {
    width: 50%;
  }

  .fav-img img {
    width: 5rem;
    height: 5rem;
  }

  .favText {
    width: 65%;
  }
  .favItem_btn[data-v-66049fbe] {
    padding: 1rem 1rem;
  }

  .btns2 button {
    font-size: 0.7rem !important;
    padding: 0.6rem 0.7rem !important;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .logo {
    margin-left: 0.2rem;
  }

  #homeIcon,
  #blogIcon,
  #favoriteIcon,
  #profileIcon,
  #logout {
    display: none;
  }

  #menuIcon {
    display: inline-flex;
  }

  .inputContainer {
    display: inline-flex;
  }

  .input-group {
    padding-left: 1.6rem !important;
  }

  .input-div {
    width: 70%;
  }

  .favItem_content {
    width: 65%;
    gap: 0.6rem;
  }

  .fav-img {
    width: 50%;
  }

  .fav-img img {
    width: 5rem;
    height: 5rem;
  }

  .favText {
    width: 65%;
  }
  .favItem_btn[data-v-66049fbe] {
    padding: 1rem 1rem;
  }

  .btns2 button {
    font-size: 0.7rem !important;
    padding: 0.6rem 0.7rem !important;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
  .logoList_show {
    display: none;
  }
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
  .logoList_show {
    display: none;
  }
}
</style>
