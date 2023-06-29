<template>
<div class="main-container">
    <div class="row1">
        <div class="text">
            <div class="row">
                <div class="col-lg-12" id="second-col">
                    <form>
                        <h2>forgot password no problem !!</h2>
                        <p>please enter email id for verification</p>
                        <input class="email form-control" type="text" placeholder="email" v-model="email">
                        <br>
                        <!-- <router-link to="/verification" custom v-slot="{navigate}">
                            <button class="submit-btn " type="button" @click="navigate, forgetpassword()" role="link">submit</button>
                        </router-link> -->
                        <router-link :to="{ path: '/verification', query: { email: email } }" custom v-slot="{ navigate }">
                            <button class="submit-btn" type="button" @click="navigate, forgetpassword()" role="link">submit</button>
                        </router-link>
                        <br>
                        <router-link to="/login" custom v-slot="{navigate}">
                            <button class="btn" type="button" @click="navigate" role="link">back to sign in</button>
                        </router-link>
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
    name: 'forgetpassword',
    data() {
        return {
            email: '',
        };
    },
    methods: {
        forgetpassword() {
            const email = this.email;

            const endpoint = '/ForgetPassword';
            const payload = {
                email: email,
            };

            axios
                .post(endpoint, payload)
                .then(response => {
                    console.log('Email:', email);
                    console.log('API Response:', response.data);
                    this.$router.push({ path: '/verification', query: { email: email } });

                })
                .catch(error => {
                    console.log('Error:', error.message);
                    // Handle the error here
                });
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');

* {
    margin: 0;
    padding: 0;
    bottom: 0%;
    box-sizing: border-box;
}

.row1 {
    width: 48%;
}

.main-container {
    width: 100%;
    height: 100vh;
    display: flex;
    background: #F9F9F9;
    opacity: 1;
    margin: 0 auto;
    border: 2px solid #0000001F;
    bottom: 0;
    position: relative;

}

/* .main-img {
        background: transparent linear-gradient(180deg, #000000 0%, #0000001F 55%, #000000D1 100%) 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        opacity: 1;
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
    } */

.text {
    width: 100%;
    margin-top: 2%;
    margin-left: 2%;
    height: 96vh;
    border: 3px solid #BF9742;
    opacity: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#second-col {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

h2 {
    text-align: center;
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 2rem;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
    text-transform: capitalize;
}

p {
    text-align: center;
    font-family: 'Roboto';
    font-size: 1rem;
    letter-spacing: 0px;
    color: #838282;
    opacity: 1;
    margin-top: -1%;
}

.email {
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
    opacity: 1;

}

.submit-btn {
    margin-top: 2%;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    text-transform: capitalize;
    font: normal normal normal 20px/24px Roboto;
    letter-spacing: 0px;
    color: white;
    background-color: #A17A35;
    opacity: 1;
    font-family: 'Roboto';
    font-size: 1rem;
}

#right-side {
    position: relative;
}

.btn {
    margin-top: 5%;
    border-radius: 10px;
    text-align: center;
    text-transform: capitalize;
    font: normal normal normal 20px/24px Roboto;
    letter-spacing: 0px;
    color: #838282;
    opacity: 1;
    font-family: 'Roboto';
    font-size: 1.3rem;
}

.heading-magaswala {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 30%;
    color: white;
    font-size: 3rem;
    font-family: 'Courgette', 'cursive';
    font-weight: normal;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-transform: capitalize;
}

.image-container {
    margin: 15px;
    position: relative;
    width: 98.5%;
    height: 99%;

}

.background-image {
    object-fit: cover;
    margin-top: -1%;
    margin-left: 2%;
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 1400px) and (max-width: 1699.98px) {

    .main-container {
        width: 80%;
        height: 100vh;
    }

    .heading-magaswala {
        font-size: 3rem;
        left: 40%;
        text-align: center;
    }
}

@media screen and (min-width: 1200px) and (max-width: 1399.98px) {
    /* .heading-magaswala {
            left: 0;
            margin-left: 10%;
        } */
}

@media screen and (min-width: 992px) and (max-width: 1199.98px) {}

@media screen and (min-width: 768px) and (max-width: 991.98px) {
    .row1 {
        width: 95%;
    }

    .background-image {
        display: none;
    }

    .heading-magaswala {
        display: none;
    }

    .text {
        margin-left: 5%;
        margin-top: 4%;
    }
}

/* @media screen and (min-width: 576px) and (max-width: 767.98px) {}

    @media screen and (min-width: 425px) and (max-width: 575.98px) {} */

@media screen and (min-width: 320px) and (max-width: 999.98px) {
    .row1 {
        width: 95%;
    }

    .background-image {
        display: none;
    }

    .heading-magaswala {
        display: none;
    }

    h2 {
        font-size: 1rem;
    }

    .text {
        margin-left: 5%;
        margin-top: 4%;
    }
}

@media screen and (max-width: 280px) {
    .row1 {
        width: 95%;
    }

    .background-image {
        display: none;
    }

    .heading-magaswala {
        display: none;
    }

    h2 {
        font-size: 1rem;
    }

    .email {
        width: 85%;
    }

    .submit-btn {
        width: 85%;
    }
}
</style>
