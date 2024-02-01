<template>
  <section class="profileSec">
    <div class="panel-bcg-div">
      <div class="panel-bcg-img">
        <img src="./assets/panel_bcg_img.png" alt="Image" />
      </div>
      <div class="panelDiv">
        <div class="user-data">
          <div class="img-div ms-3">
            <img
              :src="user_profile ? user_profile : defaulImage"
              class="rounded-circle"
              alt="Image"
            />
          </div>
          <div class="user-details">
            <h3>{{ user_name }}</h3>
            <h2>{{ user_email }}</h2>
          </div>
        </div>
        <div class="menuList">
          <router-link to="/profilePage/userData">
            <div
              class="menuItem"
              :class="{ active: isActive('/profilePage/userData') }"
            >
              <i class="fa-solid fa-user"></i>
              <p>Profile</p>
            </div>
          </router-link>
          <router-link to="/profilePage/orders">
            <div
              class="menuItem"
              :class="{ active: isActive('/profilePage/orders') }"
            >
              <i class="fa-solid fa-bag-shopping"></i>
              <p>Orders</p>
            </div>
          </router-link>
          <router-link to="/profilePage/resetPassword">
            <div
              class="menuItem"
              :class="{ active: isActive('/profilePage/resetPassword') }"
            >
              <i class="fa-solid fa-key"></i>
              <p>Reset Password</p>
            </div>
          </router-link>
          <router-link to="/profilePage/paymentMethods">
            <div
              class="menuItem"
              :class="{ active: isActive('/profilePage/paymentMethods') }"
            >
              <i class="fa-solid fa-wallet"></i>
              <p>Payment Methods</p>
            </div>
          </router-link>
          <router-link to="/profilePage/manageAddress">
            <div
              class="menuItem"
              :class="{ active: isActive('/profilePage/manageAddress') }"
            >
              <i class="fa-solid fa-address-card"></i>
              <p>Manage Address</p>
            </div>
          </router-link>
          <router-link to="/profilePage/helpSupport">
            <div
              class="menuItem"
              :class="{ active: isActive('/profilePage/helpSupport') }"
            >
              <i class="fa-solid fa-handshake-angle"></i>
              <p>Help and Support</p>
            </div>
          </router-link>
          <router-link to="/profilePage/termsCondition">
            <div
              class="menuItem"
              :class="{ active: isActive('/profilePage/termsCondition') }"
            >
              <i class="fa-solid fa-file-lines"></i>
              <p>Terms and Conditions</p>
            </div>
          </router-link>
          <div class="menuItem">
            <i class="fa-solid fa-right-from-bracket" v-on:click="logout()"></i>
            <p v-on:click="logout()">Logout</p>
          </div>
        </div>
      </div>
    </div>
    <div class="profileData">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "ProfilePage",
  data() {
    return {
      user_name: "",
      user_email: "",
      user_profile: "",
      defaulImage: require("./assets/user_img.png"),
    };
  },
  computed: {
    userData() {
      return this.$store.getters.newUser;
    },
  },
  watch: {
    user_profile: "getUser",
  },
  methods: {
    ...mapActions(["getUser"]),
    isActive(route) {
      const currentRoute = this.$route.path;
      return currentRoute === route || currentRoute.startsWith(route + "/");
    },
    setUserData(data) {
      this.user_name = data.name;
      this.user_email = data.email;
      this.user_profile = data.profileimage;
    },
    async logout() {
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
  },
  beforeMount() {
    this.getUser().then(() => {
      this.setUserData(this.userData);
    });
    const path = this.$route.path;
    this.isActive(path);
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
.profileSec {
  display: flex;
  justify-content: center;
  margin: 3rem 2rem;
}

.panel-bcg-div {
  width: 30%;
  position: relative;
}

.panel-bcg-img {
  width: 100%;
  z-index: 1;
}

.panel-bcg-img img {
  width: 100%;
  height: 66rem;
}

.panelDiv {
  width: 100%;
  min-height: 60rem;
  padding: 1.4rem 1.8rem;
  border-radius: 0.6rem;
  background-color: transparent;
  position: absolute; /* Set position to absolute */
  top: 0px; /* Adjust the top position */
  z-index: 2;
  margin-left: 0.6rem;
}

.img-div {
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2.6rem auto;
  overflow: hidden;
}

.user-data {
  width: 70%;
}

.img-div img {
  width: 70%;
  height: 100%;
}

.user-details {
  width: 80%;
}

.user-details h3 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.user-details h2 {
  font-size: 1.3rem;
  font-weight: 600;
}

.menuList {
  width: 70%;
  margin-top: 1.8rem;
  padding: 0 0.2rem;
}

.menuList a {
  text-decoration: none;
  margin-bottom: 1rem;
  color: black;
}

.menuItem {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1.2rem 0;
}

.menuItem i {
  font-size: 1.8rem;
  cursor: pointer;
}

.menuItem p {
  font-size: 1.6rem;
  margin-left: 0.4rem;
  font-weight: 400;
  margin-bottom: 0;
  cursor: pointer;
}

.active {
  color: var(--border-color);
}

.profileData {
  width: 73%;
  min-height: 62rem;
  border: 0.2rem solid var(--border-color);
  padding: 1.4rem 1.8rem;
  border-radius: 0.6rem;
  margin-left: 3.1rem;
  background-color: var(--btn-font-color);
}

@media only screen and (max-width: 576px) {
  .profileSec {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    gap: 2rem;
  }

  .panel-bcg-div {
    width: 90%;
    min-height: 30rem;
    background: none;
    margin: 0 auto;
    background-color: var(--btn-font-color);
    border: 0.2rem solid var(--border-color);
  }

  .panel-bcg-img {
    display: none;
  }

  .panelDiv {
    min-height: 30rem;
    margin: 2rem auto;
    text-align: center;
    position: relative;
  }

  .img-div {
    justify-content: center;
  }

  .panelDiv img {
    width: 14rem;
    margin: 1.8rem 1.6rem;
  }

  .user-data {
    margin: 0rem auto;
  }

  .user-details {
    margin: 0rem auto;
  }

  .user-details h3 {
    font-size: 2.6rem;
  }

  .user-details h2 {
    font-size: 1.6rem;
  }

  .menuList {
    display: flex;
    flex-wrap: wrap;
    margin: 1.6rem auto;
  }

  .menuItem {
    gap: 0.4rem;
    margin-left: 1.8rem;
  }

  .profileData {
    width: 90%;
    margin: 0 auto;
    padding: 1.4rem 0.8rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .profileSec {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    gap: 2rem;
  }

  .panel-bcg-div {
    width: 90%;
    min-height: 30rem;
    background: none;
    margin: 0 auto;
    background-color: var(--btn-font-color);
    border: 0.2rem solid var(--border-color);
  }

  .panel-bcg-img {
    display: none;
  }

  .panelDiv {
    min-height: 30rem;
    margin: 2rem auto;
    text-align: center;
    position: relative;
  }

  .img-div {
    justify-content: center;
  }

  .panelDiv img {
    width: 18rem;
    margin: 1.8rem 1.6rem;
  }

  .user-data {
    margin: 0rem auto;
  }

  .user-details {
    margin: 0rem auto;
  }

  .user-details h3 {
    font-size: 2.6rem;
  }

  .user-details h2 {
    font-size: 1.6rem;
  }

  .menuList {
    display: flex;
    flex-wrap: wrap;
    margin: 1.8rem auto;
  }

  .menuItem {
    gap: 0.4rem;
    margin-left: 1.8rem;
  }

  .profileData {
    width: 90%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .profileSec {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    gap: 2rem;
  }

  .panel-bcg-div {
    width: 90%;
    min-height: 30rem;
    background: none;
    margin: 0 auto;
    background-color: var(--btn-font-color);
    border: 0.2rem solid var(--border-color);
  }

  .panel-bcg-img {
    display: none;
  }

  .panelDiv {
    min-height: 30rem;
    margin: 2rem auto;
    text-align: center;
    position: relative;
  }

  .img-div {
    justify-content: center;
  }

  .panelDiv img {
    width: 18rem;
    margin: 1.8rem 1.6rem;
  }

  .user-data {
    margin: 0rem auto;
  }

  .user-details {
    margin: 0rem auto;
  }

  .user-details h3 {
    font-size: 2.6rem;
  }

  .user-details h2 {
    font-size: 1.6rem;
  }

  .menuList {
    display: flex;
    flex-wrap: wrap;
    margin: 1.8rem auto;
  }

  .menuItem {
    gap: 0.4rem;
    margin-left: 1.8rem;
  }

  .profileData {
    width: 90%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
