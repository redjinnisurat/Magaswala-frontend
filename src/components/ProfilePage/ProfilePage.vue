<template>
  <section class="profileSec">
    <div class="panelDiv">
      <img src="./assets/user_img.png" alt="Image" />
      <h3>Zack Gonsalves</h3>
      <span>zack@test.com</span>
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
          <i class="fa-solid fa-right-from-bracket"></i>
          <p>Logout</p>
        </div>
      </div>
      <!-- <div class="menuList_dropDwon">
            <select>
                <option>
                    <div class="menuItem active">
                        <i class="fa-solid fa-user"></i>
                        <p>Profile</p>
                    </div>
                </option>
                <option>
                    <div class="menuItem">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p>Orders</p>
                    </div>
                </option>
                <option>
                    <div class="menuItem">
                        <i class="fa-solid fa-key"></i>
                        <p>Reset Password</p>
                    </div>
                </option>
                <option>
                    <div class="menuItem">
                        <i class="fa-solid fa-wallet"></i>
                        <p>Payment Methods</p>
                    </div>
                </option>
                <option>
                    <div class="menuItem">
                        <i class="fa-solid fa-address-card"></i>
                        <p>Manage Address</p>
                    </div>
                </option>
                <option>
                    <div class="menuItem">
                        <i class="fa-solid fa-handshake-angle"></i>
                        <p>Help and Support</p>
                    </div>
                </option>
                <option>
                    <div class="menuItem">
                        <i class="fa-solid fa-file-lines"></i>
                        <p>Terms and Conditions</p>
                    </div>
                </option>
                <option>
                    <div class="menuItem">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <p>Logout</p>
                    </div>
                </option>
            </select>
        </div> -->
    </div>
    <div class="profileData">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      profile_flag: false,
      order_flag: false,
      reset_flag: false,
      payment_flag: false,
      add_flag: false,
      help_flag: false,
      terms_falg: false,
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.profileSec {
  display: flex;
  justify-content: center;
  margin: 3rem 2rem;
}

.panelDiv {
  width: 22%;
  min-height: 62rem;
  border: 0.1rem solid var(--border-color);
  padding: 1.4rem 1.8rem;
  border-radius: 0.6rem;
  background-color: var(--btn-font-color);
}

.panelDiv img {
  width: 14rem;
  margin: 1.8rem 3.6rem;
}

.panelDiv h3 {
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.panelDiv span {
  font-size: 1.4rem;
  font-weight: 300;
}

.menuList {
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
  font-size: 1.7rem;
}

.menuItem p {
  font-size: 1.5rem;
  margin-left: 0.4rem;
  font-weight: 400;
  margin-bottom: 0;
}

.active {
  color: var(--border-color);
}

.profileData {
  width: 66%;
  min-height: 62rem;
  border: 0.1rem solid var(--border-color);
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
  }

  .panelDiv {
    width: 80%;
    min-height: 32rem;
    margin: 2rem auto;
    text-align: center;
  }

  .panelDiv img {
    width: 14rem;
    margin: 1.8rem 1.6rem;
  }

  .panelDiv h3 {
    font-size: 2.6rem;
  }

  .panelDiv span {
    font-size: 1.6rem;
  }

  .menuList {
    display: flex;
    flex-wrap: wrap;
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

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .profileSec {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }

  .panelDiv {
    width: 80%;
    min-height: 32rem;
    margin: 2rem auto;
    text-align: center;
  }

  .panelDiv img {
    width: 14rem;
    margin: 1.8rem 1.6rem;
  }

  .panelDiv h3 {
    font-size: 2.6rem;
  }

  .panelDiv span {
    font-size: 1.6rem;
  }

  .menuList {
    display: flex;
    flex-wrap: wrap;
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
  }

  .panelDiv {
    width: 80%;
    min-height: 32rem;
    margin: 2rem auto;
    text-align: center;
  }

  .panelDiv img {
    width: 14rem;
    margin: 1.8rem 1.6rem;
  }

  .panelDiv h3 {
    font-size: 2.6rem;
  }

  .panelDiv span {
    font-size: 1.6rem;
  }

  .menuList {
    display: flex;
    flex-wrap: wrap;
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
