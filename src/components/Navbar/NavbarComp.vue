<template>
  <section class="navbar_comp">
    <div class="logo">Magaswala</div>
    <div class="inputContainer">
      <input type="text" placeholder="Search for food products" />
      <button type="button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div class="logoList">
      <router-link to="/">
        <div class="iconItem" id="homeIcon">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </div>
      </router-link>
      <router-link to="/bagPage">
        <div class="iconItem" id="blogIcon">
          <i class="fa-solid fa-bag-shopping"></i>
          <p>Bag</p>
        </div>
      </router-link>
      <router-link to="/favPage">
        <div class="iconItem" id="favoriteIcon">
          <i class="fa-solid fa-heart"></i>
          <p>Favorites</p>
        </div>
      </router-link>
      <router-link to="/profilePage/userData">
        <div class="iconItem" id="profileIcon">
          <i class="fa-solid fa-user"></i>
          <p>Profile</p>
        </div>
      </router-link>
      <div class="iconItem" id="logout">
        <i class="fa-solid fa-right-from-bracket" v-on:click="logout()"></i>
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

export default {
  name: "NavbarComp",
  data() {
    return {
      show: false,
      token: "",
    };
  },
  methods: {
    openPanel() {
      this.show = true;
    },
    closePanel() {
      this.show = false;
    },
    logout() {
      if (confirm("Are you sure ?\nYou want to Logout ?") === true) {
        localStorage.removeItem("token");
        this.$router
          .push({
            name: "LoginPage",
          })
          .then(() => {
            this.$router.go();
          });
      }
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

<style scoped>
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

.inputContainer {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.2rem solid var(--border-color);
  border-radius: 0.4rem;
  background-color: var(--btn-font-color);
}

.inputContainer input {
  width: 80%;
  height: 50%;
  font-size: 1.5rem;
  padding: 0.8rem 1.8rem;
  border: none;
  background: transparent;
  outline: none;
}

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
  font-size: 1.1rem;
  margin-top: 0.4rem;
  margin-bottom: 0;
  font-weight: 500;
  color: var(--border-color);
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
    width: 40%;
    display: inline-flex;
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
    width: 40%;
    display: inline-flex;
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
