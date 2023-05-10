<template>
<!-- <div>
  <input type="password" v-model="password">
  <button @click="toggleVisibility">
    {{ showPassword ? 'Hide' : 'Show' }} Password
  </button>
  <div v-if="showPassword">
    {{ password }}
  </div> 
</div> -->

<!-- <div>
    <input type="password" v-model="password">
    <button @click="toggleVisibility">
        <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" />
    </button>
    <div v-if="showPassword">
        {{ password }}
    </div>
</div> -->

<!-- <input type="password" v-model="password">
<button @click="toggleVisibility">
    <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" />
</button> -->
<div>
    
   
</div>
</template>

<script>
export default {
    name: "abc",
    //     data() {
    //         return {
    //             password: '',
    //             showPassword: false
    //         };
    //     },
    //     methods: {
    //         toggleVisibility() {
    //             this.showPassword = !this.showPassword;
    //         }
    //     }
    // setup() {
    //     const password = ref('');
    //     const showPassword = ref(false);

    //     function toggleVisibility() {
    //         showPassword.value = !showPassword.value;
    //     }

    //     return {
    //         password,
    //         showPassword,
    //         toggleVisibility
    //     };
    // }
    data() {
        return {
            password: '',
            showPassword: false
        };
    },
    methods: {
        toggleVisibility() {
            this.showPassword = !this.showPassword;
        }
    }
};
</script>

<style>

</style>
