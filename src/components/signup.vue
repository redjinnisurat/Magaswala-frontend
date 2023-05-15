<template>
<div class="main-container">
    <img class="main-img" src="../assets/backgoundimg.png" alt="">
    <div class="row1">
        <div class="text">
            <div class="row ">
                <div class="col-6-lg" id="second-col">
                    <h2 class="welcome-heading">create an account</h2>
                    <p class="p-1">please enter credentials for sign in </p>
                    <input class="email" type="text" placeholder="enter your full name" id="email1">
                    <br>
                    <input class="password1" type="text" placeholder="email">
                    <br>
                    <input class="password1" type="text" placeholder="password">
                    <br>
                    <button class="submit-btn" type="btn" id="submit-btn1">sign in</button>
                    <br>
                    <button class="login-btn1" type="btn"> <img class="btn-img" src="../assets/icons8-google-48-removebg-preview@2x.png"> login with google</button>
                    <br>
                    <p class="p-2">Already have an account ? <router-link to="/userlogin" custom v-slot="{navigate}"> <span @click="navigate" role="link">Sign in now</span></router-link>
                    </p>

                </div>

            </div>
        </div>

    </div>

    <div class="col-lg-6" id="rigth-side">
        <h2 class="heading-magaswala">magaswala</h2>
    </div>
</div>
</template>

<script>
export default {
    name: 'signup'
}
</script>

<style>
.password1 {
    margin-top: -3%;
    width: 100%;
    height: 50px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #BF9742;
    border-radius: 10px;
    opacity: 1;
    padding-left: 2%;
    text-align: left;
    font-family: 'Roboto';
    font-size: 1rem;
    letter-spacing: 0px;
    color: #838282;
    text-transform: capitalize;
}

#email1 {
    margin-top: -3%;
}

#submit-btn1 {
    width: 100%;
}

@media screen and (min-width: 320px) and (max-width: 999.98px) {

    .welcome-heading {
        font-size: 1rem;
    }

    #email1 {
        width: 85%;
    }

    .password1 {
        width: 85%;
    }

    #submit-btn1 {
        width: 100%;
    }

    .login-btn1 {
        width: 85%;
    }

    .p-2 {
        font-size: 1rem;
    }
}
</style>
