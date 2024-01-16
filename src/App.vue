<template>
  <div v-if="user" class="nav_bar">
    <NavbarComp />
  </div>
  <div>
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
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined
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
  // beforeRouteEnter(to, from, next) {
  //     const isAuthenticated = localStorage.getItem('token') !== null;

  //     if (isAuthenticated) {
  //         next(vm => {
  //             vm.user = true;
  //             vm.$router.push({
  //                 name: 'HomePage'
  //             });
  //         })
  //     } else {
  //         next(vm => {
  //             vm.user = false;
  //             vm.$router.push({
  //                 name: 'LoginPage'
  //             });
  //         })
  //     }
  // }
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
</style>
