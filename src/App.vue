<template>
  <Navbar />
  <SideBar />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    SideBar,
  },
};
</script>

<style>
</style>
