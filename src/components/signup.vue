<template>
<div class="main-container" id="main-container1">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text" id="text">
                <div class="text-info2">
                    <h2 class="welcome-heading">create an account</h2>
                    <p class="p-1">please enter credentials for sign in </p>
                    <input class="email" type="text" placeholder="enter your full name">
                    <br>
                    <input class="password" type="text" placeholder="email">
                    <br>
                    <input class="password" type="text" placeholder="password">
                    <br>
                    <button class="submit-btn" type="btn" id="submit-btn1">sign in</button>
                    <br>
                    <button class="login-btn1" type="btn"> <img  class= "btn-img" src="../assets/icons8-google-48-removebg-preview@2x.png">login with google</button>
                    <br>
                    <p class="p-2">Already have an account ? <router-link to="/userlogin" custom v-slot="{navigate}"> <span @click="navigate" role="link">Sign in now</span></router-link>
                    </p>
                </div>
            </div>
        </div>

        <div class="col-lg-6" id="right-side">
            <img src="../assets/backgoundimg.png" alt="" class="img-1" id="img-2">
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

#main-container1 {
    height: 850px;
    width: 84%;
    margin: 0 auto;
    margin-bottom: 5%;
}

.text-info2 {
    margin-top: 25%;
}

#submit-btn1 {
    margin-top: 5%;
}

#img-2 {
    width: 118%;
    height: 837px;
}

.btn-img{
    width: 10%;
    padding-right: 3%;
}
   
@media screen and (min-width: 1200px) and (max-width: 1399.98px) {
    #main-container1 {
        height: auto;
        margin-bottom: 5%;
    }

    #img-2 {
        height: 837px;
        width: 103%;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1199.98px) {
    #img-2 {
        height: 837px;
        width: 103%;
    }

    .text-info2 {
        margin-top: 40%;
    }
}

@media screen and (min-width: 600px) and (max-width: 999.98px) {
    #main-container1 {
        height: auto;
        margin-bottom: 50%;
    }

    #img-2 {
        width: 100%;
    }
}

@media screen and (min-width: 300px) and (max-width: 599.98px) {
    #main-container1 {
        height: auto;
        margin-bottom: 5%;
    }

    .text-info2 {
        margin-top: 50%;
    }

    #img-2 {
        width: 100%;
        margin-left: -1%;
    }
}
</style>
