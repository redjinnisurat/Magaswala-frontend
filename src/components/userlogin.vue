<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6" id="left-side">
                <div class="text">
                    <div class="row ">
                        <div class="col-6-lg" id="second-col">
                            <h2 class="welcome-heading">welcome back!</h2>
                            <p class="p-1">please enter credentials for sign in </p>
                            <input class="email" type="text" placeholder="email" id="email">
                            <!-- <input class="password" type="password" placeholder="password" id="passwordField"><i class="fa fa-eye-slash  fa-2x" aria-hidden="true" id="togglePassword" click="togglePassword1()"></i> -->
                            <input class="password" :type="showPassword ? 'text' : 'password'" placeholder="password" id="password">
                            <img id="eye" v-show="!showPassword" src="../assets/Icon-eye.svg" v-on:click="togglePassword1()">
                            <img id="eye" v-show="showPassword" src="../assets/eye-open.svg" v-on:click="togglePassword1()">
                            <div class=" col-lg-3 p-3">
                                <p>Remember me</p>
                            </div>
                            <button class="submit-btn" type="btn" id="submit-btn">sign in</button>
                            <br>
                            <button class="login-btn1" type="btn"> <img class="btn-img" mailto:src="../assets/icons8-google-48-removebg-preview@2x.png"> login with google</button>
                            <br>
                            <p class="p-2">Don't have an account ? <router-link to="/signup" custom v-slot="{navigate}"><span @click="navigate" role="link">Sign up now</span></router-link>
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
        name: 'userlogin',
        data() {
                    return {
                    showPassword: false
                    };
                },
        methods: {
            //     togglePassword1() {
            //         var passwordField = document.getElementById("passwordField");
            //         var togglePassword = document.getElementById("togglePassword");
            //         if (passwordField.type === "password") {
            //             passwordField.type = "text";
            //             togglePassword.classList.remove("fa-eye-slash");
            //             togglePassword.classList.add("fa-eye");
            //         } else {
            //             passwordField.type = "password";
            //             togglePassword.classList.remove("fa-eye");
            //             togglePassword.classList.add("fa-eye-slash");
    
            //         }
            //     }
            // }
            togglePassword1() {
                this.showPassword = !this.showPassword;
            }
        }
    }
    </script>
    
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    
    .welcome-heading {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 30px;
    }
    
    .p-1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 'regualar';
        font-size: 20px;
        color: #838282;
        margin-top: -3%;
    }
    
    #email {
        margin-top: -3%;
    }
    
    .password {
        margin-top: 3%;
        width: 85%;
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
        text-transform: capitalize;
    }
    
    #togglePassword {
        margin-left: 72%;
        transform: translateY(-50%);
        margin-top: -4%;
        cursor: pointer;
        color: #BF9742;
    }
    
    #eye{
        margin-left: 72%;
        transform: translateY(-50%);
        margin-top: -4%;
        cursor: pointer;
    }
    
    .p-3 {
        margin-top: -6%;
        margin-left: -47%;
        font-family: 'Poppins', sans-serif;
        font-weight: 'regualar';
        font-size: 20px;
        color: #595757;
        width: 47%;
    }
    
    #submit-btn {
        margin-top: -5%;
    }
    
    .login-btn1 {
        margin-top: -3%;
        width: 85%;
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
        margin-top: -4%;
        font-family: 'Poppins', sans-serif;
        font-weight: regualar;
        font-size: 20px;
    }
    
    @media screen and (min-width: 1400px) and (max-width: 1599.98px) {
        .password {
            width: 100%;
            height: 50px;
        }
    
        .eye {
            margin-left: 84%;
            transform: translateY(-50%);
            margin-top: -6%;
        }
    
        .p-3 {
            margin-top: -1%;
            margin-left: -60%;
        }
    
        #submit-btn {
            margin-top: -3%;
        }
    
        .login-btn1 {
            margin-top: -2%;
            width: 100%;
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
    
        .btn-img {
            width: 10%;
        }
    
        .p-2 {
            margin-left: -5%;
            margin-top: -4%;
            font-family: 'Poppins', sans-serif;
            font-weight: regualar;
            font-size: 20px;
        }
    }
    
    @media screen and (min-width: 1200px) and (max-width: 1399.98px) {}
    
    @media screen and (min-width: 1000px) and (max-width: 1199.98px) {}
    
    @media screen and (min-width: 600px) and (max-width: 999.98px) {
        .p-3 {
            margin-left: -40%;
            width: auto;
        }
    
        .p-1 {
            font-size: 15px;
        }
    
        .p-2 {
            font-size: 18px;
        }
    }
    
    @media screen and (min-width: 300px) and (max-width: 599.98px) {
        .p-3 {
            margin-left: -40%;
            width: auto;
        }
    
        .p-1 {
            font-size: 15px;
        }
    
        .p-2 {
            font-size: 18px;
        }
    }
    </style>