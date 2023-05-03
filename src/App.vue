<template>
  <router-view/>
  <myprofileComp/>
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   // components: {
//   //   HelloWorld
//   // }
// }
import myprofileComp from "./components/myprofileComp.vue";

export default {
  name: "App",
  components: {
    myprofileComp,
    

   
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #F9F9F9;
}
</style>
