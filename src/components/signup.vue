<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text">
                <div class="row ">
                    <div class="col-6-lg" id="second-col">
                        <h2 class="welcome-heading">create an account</h2>
                        <p class="p-1">please enter credentials for sign in </p>
                        <input class="email" type="text" placeholder="enter your full name">
                        <!-- <br>
                        <input class="password" type="text" placeholder="email">
                        <br>
                        <input class="password" type="text" placeholder="password">
                        <br>
                        <button class="submit-btn" type="btn" id="submit-btn1">sign in</button>
                        <br>
                        <button class="login-btn1" type="btn"> <img class="btn-img" src="../assets/icons8-google-48-removebg-preview@2x.png">login with google</button>
                        <br>
                        <p class="p-2">Already have an account ? <router-link to="/userlogin" custom v-slot="{navigate}"> <span @click="navigate" role="link">Sign in now</span></router-link>
                        </p> -->

                    </div>

                </div>
            </div>

        </div>

        <div class="col-lg-6" id="rigth-side">
            <img src="../assets/backgoundimg.png" alt="">
            <h2 class="heading-magaswala">magaswala</h2>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'signup'
}
</script>

<style>
</style>
