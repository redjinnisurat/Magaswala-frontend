<template>
<div class="main-container" id="main-container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text" id="text">
                <div class="text-info1">
                    <h2 class="welcome-heading">welcome back!</h2>
                    <p class="p-1">please enter credentials for sign in </p>
                    <input class="email" type="text" placeholder="email">
                    <br>
                    <input class="password" type="text" placeholder="password"> <img src="../assets/Icon-eye.svg" alt="" style="margin-left: -10%;"> 
                    <br>
                    <div class=" col-lg-3 p-3">
                        <p>Remember me</p>
                    </div>
                    <button class="submit-btn" type="btn" id="submit-btn">sign in</button>
                    <br>
                    <button class="login-btn1" type="btn"> <img class="btn-img" src="../assets/icons8-google-48-removebg-preview@2x.png">login with google</button>
                    <br>
                    <p class="p-2">Don't have an account ? <router-link to="/signup" custom v-slot="{navigate}"><span @click="navigate" role="link">Sign up now</span></router-link>
                    </p>
                </div>
            </div>
        </div>

        <div class="col-lg-6" id="right-side">
            <img src="../assets/backgoundimg.png" alt="" class="img-1" id="img-1">
            <h2 class="heading-magaswala">magaswala</h2>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'userlogin'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.welcome-heading {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 35px;
}

#submit-btn {
    margin-top: 1%;
}

.p-1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 'regualar';
    font-size: 20px;
    color: #838282;
}

.password {
    margin-top: 2%;
    width: 74%;
    height: 50px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #BF9742;
    border-radius: 10px;
    opacity: 1;
    padding-left: 2%;
    text-align: left;
    font-family: 'Roboto';
    font-size: 20px;
    letter-spacing: 0px;
    color: #838282;
    opacity: 1;
    text-transform: capitalize;
}

.login-btn1 {
    margin-top: 2%;
    width: 74%;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    background: #FFFFFF;
    color: #262626;
    opacity: 1;
    text-transform: capitalize;
    font-family: 'Poppins', sans-serif;
    font-weight: 'regualar';
    font-style: 20px;
}

.p-2 {
    margin-left: -5%;
    margin-top: 1%;
    font-family: 'Poppins', sans-serif;
    font-weight: regualar;
    font-size: 20px;
}

.p-3 {
    margin-left: 10%;
    font-family: 'Poppins', sans-serif;
    font-weight: 'regualar';
    font-size: 20px;
    color: #595757;
    width: 35%;
}

span {
    color: #a17a35;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 20px;
}

#main-container {
    height: 850px;
    width: 84%;
    margin: 0 auto;
    margin-bottom: 5%;
}

.text-info1 {
    margin-top: 25%;
}

#text {
    height: 830px;
}

#img-1 {
    height: 840px;
    width: 120%;
}

@media screen and (min-width: 1200px) and (max-width: 1399.98px) {
    #main-container {
        height: auto;
        margin-bottom: 5%;
    }

    #img-1 {
        height: 837px;
        width: 103%;
    }

    .p-3 {
        width: 42%;
        font-size: 18px;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1199.98px) {
    #img-1 {
        height: 837px;
        width: 103%;
    }

    .p-3 {
        width: 42%;
        font-size: 18px;
        margin-left: 7%;
    }

    .password {
        width: 80%;
    }

    .login-btn1 {
        margin-top: 2%;
        width: 80%;
    }

    .p-2 {
        font-size: 18px;
    }

    .text-info1 {
        margin-top: 40%;
    }

}

@media screen and (min-width: 600px) and (max-width: 999.98px) {
    #main-container {
        height: auto;
        margin-bottom: 50%;
    }

    #img-1 {
        width: 100%;
    }
}

@media screen and (min-width: 300px) and (max-width: 599.98px) {

    #main-container {
        height: auto;
    }

    .welcome-heading {
        font-size: 18px;
        font-weight: bold;
    }

    .p-1 {
        font-size: 15px;
    }

    .p-2 {
        font-size: 18px;
    }

    .password {
        margin-top: 4%;
        width: 95%;
    }

    .login-btn1 {
        margin-top: 3%;
        width: 94%;
    }

    .p-3 {
        margin-left: -1%;
        width: 53%;
    }

    #img-1 {
        height: 840px;
        width: 100%;
        margin-left: -1%;
    }

    .text-info1 {
        margin-top: 55%;
    }

}
</style>
