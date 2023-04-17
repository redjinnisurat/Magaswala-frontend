<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text" id="text-1">
                <div class="row">
                    <div class="col-lg-12" id="sign-up">
                        <h2 class="welcome-heading">create an account</h2>
                        <input class="email" type="text" placeholder="enter your full name">
                        <br>
                        <input class="password" type="text" placeholder="email">
                        <br>
                        <input class="password" type="text" placeholder="password">
                        <br>
                        <button class="submit-btn" type="btn" id="submit-btn1">sign in</button>
                        <br>
                        <button class="login-btn1" type="btn"> <img class="btn-img" src="../assets/icons8-google-48-removebg-preview@2x.png">login with google</button>
                        <br>
                        <p class="p-2">Already have an account ? <router-link to="/userlogin" custom v-slot="{navigate}"> <span @click="navigate" role="link">Sign in now</span></router-link>
                        </p>
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
#sign-up{
    width: 100%;
    margin-top: -9%;
    
   
}
 .welcome-heading {
    margin-top: 20%;
    text-align: center;
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 30px;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
    text-transform: capitalize;
}

.btn-img {
    width: 10%;
    padding-right: 3%;
}


</style>
