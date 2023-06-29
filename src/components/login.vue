<template>
<div class="main-container">
    <div class="row1">
        <div class="text">
            <div class="row">
                <div class="col-lg-12" id="second-col">
                    <h2 class="welcome-heading">welcome back!</h2>
                    <p class="p-1">please enter credentials for sign in</p>
                    <form @submit.prevent="login()">
                        <input class="email form-control" type="text" placeholder="email" v-model="email">
                        <input class="password  form-control" :type="showPassword ? 'text' : 'password'" placeholder="password" v-model="password" autocomplete="current-password">
                        <img id="eye" v-show="!showPassword" src="../assets/Icon-eye.svg" v-on:click="togglePassword1()">
                        <img id="eye" v-show="showPassword" src="../assets/eye-open.svg" v-on:click="togglePassword1()" style="width:10%">
                        <div class="col-lg-6" id="p-3">
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                            <router-link to="/forgetpassword" custom v-slot="{navigate}">
                                <label class="form-check-label" for="rememberMe" id="forget-label" @click="navigate" role="link">Forget password?</label>
                            </router-link>

                            <!-- <input type="checkbox" class="form-check-input" id="rememberMe"> -->
                        </div>
                        <button class="submit-btn" type="btn" id="submit-btn">Login</button>
                        <br>
                        <button class="login-btn1" type="btn" id="login-btn1"> <img class="btn-img" src="../assets/icons8-google-48-removebg-preview@2x.png"> login with google</button>
                        <br>
                        <p class="p-2">Don't have an account ? <router-link to="/signup" custom v-slot="{navigate}"><span @click="navigate" role="link">Sign up now</span></router-link>
                        </p>
                    </form>
                    <!-- <button class="btn btn-primary submit-btn" type="button" id="submit-btn">Sign In</button>
                                        <br>
                                        <button class="btn btn-light login-btn1" type="button">
                                            <img class="btn-img" src="../assets/icons8-google-48-removebg-preview@2x.png" alt=""> Login with Google
                                        </button>
                                        <br>
                                        <p class="p-2">Don't have an account? <router-link to="/signup" custom v-slot="{navigate}"><span @click="navigate" role="link">Sign up now</span></router-link>
                                        </p> -->
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6" id="rigth-side1">
        <figure class="image-container">
            <img src="../assets/backgoundimg.png" alt="Background Image" class="background-image">
            <figcaption class="heading-magaswala">magaswala</figcaption>
        </figure>
    </div>

</div>
</template>

<script>
import axios from '../axios';

export default {
    name: 'login',

    data() {
        return {
            showPassword: false,
            email: "",
            password: "",
            wrongPassword: false,
        }
    },
    methods: {
        login() {
            const endpoint = '/login'; // Replace with your login API endpoint
            const payload = {
                email: this.email,
                password: this.password,
            };

            axios.post(endpoint, payload)
                .then(response => {
                    console.log(response.data)
                    // Display the API response in the console
                    // Handle the response data here
                })
                .catch(error => {
                    console.log(error.message);

                    // Handle the error here
                });
        },
        togglePassword1() {
            this.showPassword = !this.showPassword;
        }

    }

}
</script>

<style>
.welcome-heading {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2rem;
}

.p-1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 'regualar';
    font-size: 1rem;
    color: #838282;
    margin-top: -3%;
}

.email {
    width: 100%;
}

.password {
    margin-top: 3%;
    width: 100%;
    height: 40px;
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

/* #togglePassword {
                margin-left: 83%;
                transform: translateY(-50%);
                margin-top: -6%;
                cursor: pointer;
                color: #BF9742;
            } */

#eye {
    width: 10%;
    margin-left: 83%;
    transform: translateY(-50%);
    margin-top: -11%;
    cursor: pointer;
}

#p-3 {
    margin-left: -5%;
    margin-top: -3%;

}

#submit-btn {
    margin-top: 10%;
}

.login-btn1 {
    position: relative;
    margin-top: 5%;
    width: 100%;
    height: 40px;
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

.btn-img {
    width: 10%;

}

.p-2 {
    margin-left: -5%;
    margin-top: 5%;
    font-family: 'Poppins', sans-serif;
    font-weight: regualar;
    font-size: 1rem;
}

#forget-label {
    float: right;
    margin-right: -100%;
}

/* .heading-magaswala {
                position: absolute;
                text-align: center;
                top: 50%;
                left: 65%;
                color: white;
                font-size: 4rem;
                font-family: 'Courgette', 'cursive';
                font-weight: normal;
                letter-spacing: 0px;
                color: #FFFFFF;
                opacity: 1;
                text-transform: capitalize;
            }  */

@media screen and (min-width: 1200px) and (max-width: 1399.98px) {}

@media screen and (min-width: 992px) and (max-width: 1199.98px) {}

@media screen and (min-width: 320px) and (max-width: 990.98px) {
    #login-btn1 {
        width: 100%;
    }

    #eye {
        margin-top: -12%;
    }

    #forget-label {
        float: right;
        margin-right: 4%;

    }

    #p-3 {
        margin-left: -10%;
    }
}

@media screen and (max-width: 280px) {
    .welcome-heading {
        font-size: 1rem;
    }

    .p-2 {
        font-size: 10px;
    }

    .login-btn1 {
        width: 85%;
    }

    .email {
        width: 85%;
    }

    .password {
        width: 85%;
    }

    #eye {
        margin-left: 65%;
    }

    #p-3 {
        margin-left: -35%;
    }
}
</style>
