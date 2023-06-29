<template>
<div class="main-container">
    <div class="row1">
        <div class="text">
            <div class="row">
                <div class="col-lg-12" id="second-col">
                    <h2>Set New Password</h2>
                    <p class="p-1">Please enter new password</p>
                    <input class="email form-control" type="password" placeholder="old password">
                    <br>
                    <input class="email form-control" type="password" placeholder=" new password">
                    <br>
                    <input class="email form-control" type="password" placeholder=" confirm password">
                    <br>
                    <router-link :to="{path: '/login'}" custom v-slot="{navigate}">
                        <button class="submit-btn" @click="navigate, changepassword()" role="link" type="btn">submit</button>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-6 " id="right-side">
        <figure class="image-container">
            <img src="../assets/backgoundimg.png" alt="Background Image" class="background-image">
            <figcaption class="heading-magaswala">magaswala</figcaption>
        </figure>
    </div>
</div>
</template>

<script>
import axios from "../axios"
export default {
    name: "setnewpassword",
    data() {
        return {
            oldpassword: "",
            newpassword: "",
            confirmpassword: ""
        }
    },
    methods: {
        changepassword() {
            const endpoint = '/changepassword'; // Replace with your login API endpoint
            const payload = {
                oldpassword: this.oldpassword,
                newpassword: this.newpassword,
                confirmpassword: this.confirmpassword,

            };

            axios.post(endpoint, payload)
                .then(response => {
                    console.log(response.data),
                        this.$router.push('/login');

                })
                .catch(error => {
                    console.log(error.message);
                    // Handle the error here
                });

        }

    }
}
</script>

<style>
#heading-magaswala {
    left: 23%;
}

@media screen and (min-width: 1400px) and (max-width: 1599.98px) {
    .submit-btn {
        width: 100%;
    }
}
</style>
