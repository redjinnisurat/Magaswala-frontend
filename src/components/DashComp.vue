<template>
   
    <div class="mainContainer">
       
        <div class="sidebar">
            <myprofileComp/>
        </div>
       
    </div>
    </template>
    
    <script>
    import myprofileComp from './myprofileComp.vue';
 
    export default{
        name: "supadminComp",
        components: {  myprofileComp }
    };
    </script>
    
    <style scoped>
    .mainContainer{
        display:grid;
        grid-template-columns: 15% 85%;
    }
    </style>