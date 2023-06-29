<template>
<div class="main-container">
    <div class="row1">
        <div class="text">
            <div class="row ">
                <div class="col-6-lg" id="second-col">
                    <h2 class="welcome-heading">create an account</h2>
                    <p class="p-1">please enter credentials for sign in</p>
                    <form @submit.prevent="signup()">
                        <input class="email form-control" type="text" placeholder="enter your full name" id="email1" v-model="name">
                        <br>
                        <input class="password1 form-control" type="text" placeholder="email" v-model="email">
                        <br>
                        <input class="password1 form-control" type="password" placeholder="password" v-model="password">
                        <br>
                        <!-- <input class="password1" type="number" placeholder="phoneno" v-model="phoneno"> -->
                        <br>
                        <button class="submit-btn" type="btn" id="submit-btn1">sign in</button>
                        <br>
                        <button class="login-btn1" type="btn"> <img class="btn-img" src="../assets/icons8-google-48-removebg-preview@2x.png"> login with google</button>
                        <br>
                        <p class="p-2">Already have an account ? <router-link to="/login" custom v-slot="{navigate}"> <span @click="navigate" role="link">Sign in now</span></router-link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6" id="rigth-side">
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
    name: 'signup',
    data() {
        return {
            showPassword: false,
            name: '',
            email: '',
            password: '',
            // phoneno: ''
        }
    },
    methods: {
        signup() {
            const endpoint = '/register'; // Replace with your login API endpoint
            const payload = {
                name: this.name,
                email: this.email,
                password: this.password,
                user_type: '0'
                // phoneno: this.phoneno
            };

            axios.post(endpoint, payload)
                .then(response => {
                    console.log(response.data)

                })
                .catch(error => {
                    console.log(error.message);

                });

        },
    }

}
</script>

<style>
.password1 {
    /* margin-top: 5%; */
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

#email1 {
    /* margin-top: 5%; */
}

#submit-btn1 {
    width: 100%;
    /* margin-top: 10%; */
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
