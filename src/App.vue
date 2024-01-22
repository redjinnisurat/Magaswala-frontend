<template>
  <div v-if="user" class="nav_bar">
    <NavbarComp />
  </div>
  <div class="body-div">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComp from "./components/Navbar/NavbarComp.vue";

export default {
  name: "App",
  data() {
    return {
      user: false,
    };
  },
  components: {
    NavbarComp,
  },
  beforeMount() {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == undefined
    ) {
      this.user = false;
      this.$router.push({
        name: "LoginPage",
      });
    } else {
      this.user = true;
      // this.$router.push({
      //     name: 'HomePage'
      // });
    }
  },
  beforeEnter: (to, from, next) => {
    // Check if the <router-view> is empty
    const isEmpty = to.matched.every(
      (route) => route.instances.default === undefined
    );

    if (isEmpty) {
      // The <router-view> is empty, you can redirect or load a default component
      next({ path: "/" });
    } else {
      // The <router-view> is not empty, proceed with the route
      next();
    }
  },
};
</script>

<style>
#app {
  background-color: var(--background-color);
}

.nav_bar {
  position: sticky;
  z-index: 1000;
  top: 0;
}

.body-div {
  width: 95%;
  margin: 1rem auto;
}
</style>
