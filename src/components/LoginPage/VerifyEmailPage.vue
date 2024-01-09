<template>
<div class="container">
    <div class="verification">
        <div class="verify_content">
            <h2>Verification</h2>
            <h4>6-digit code has been sent to your register email address</h4>
            <form>
                <input type="text" placeholder="OTP" v-model="otp">
                <div v-if="error_otp" class="error">
                    <span>{{error_otp}}</span>
                </div>
                <div class="btns">
                    <button type="button" v-on:click="submit()">Verify</button>
                </div>
            </form>
            <div class="resend_sec">
                <p>Didn't receive code ? </p>
                <router-link to="#">Resend</router-link>
            </div>
        </div>
    </div>
    <div class="sideImg">
        <div class="logo_title">
            <h1>Magaswala</h1>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import {
    useRoute
} from 'vue-router';

export default {
    name: 'VerifyEmailPage',
    data() {
        return {
            otp: '',
            error_otp: '',
            email: ''
        }
    },
    mounted() {
        const route = useRoute();
        this.email = route.params.email;
        console.log("After Mounted: " + route.params.email);
    },
    methods: {
        async submit() {
            if (this.otp === '') {
                this.error_otp = 'Required field !!';
            } else {
                this.error_otp = '';
            }

            if (this.otp !== '') {
                this.error_otp = '';

                const response = await axios.post(`https://uatapi.magaswala.com/public/api/emailverify?otp=${this.otp}&email=${this.email}`).catch((e) => e.response);
                const result = response.data;
                console.log("Response: " + JSON.stringify(result));
                // console.log("Response: " + result.data.id);

                if (result.status === true) {
                    alert(result.message);
                    localStorage.setItem('token', result.data.token);
                    this.$router.push({
                        name: 'HomePage'
                    }).then(() => {
                        this.$router.go()
                    });
                } else {
                    this.error_otp = result.message;
                }
            }
        }
    },
}
</script>

<style>
.container {
    width: 100%;
    height: 90vh;
    margin: 2rem 0;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    overflow: hidden;
    background-color: var(--background-color);
}

.verification {
    width: 50%;
    height: 100%;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
}

.verify_content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 0.2rem solid var(--border-color);
    padding: 2rem;
    background-color: var(--btn-font-color);
}

.verify_content h2 {
    font-size: 2.6rem;
    font-weight: 700;
}

.verify_content h4 {
    font-size: 1.6rem;
    font-weight: 400;
    opacity: 0.6;
}

.verify_content form {
    min-width: 28rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
    gap: 1rem;
}

.verify_content input {
    min-width: 100%;
    padding: 0.6rem 1.2rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 0.6rem;
    font-size: 1.3rem;
}

.btns {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
}

.btns button {
    border: 0.1rem solid var(--primary-color);
    border-radius: 0.6rem;
    padding: 0.7rem 2.6rem;
    color: white;
    font-size: 1.4rem;
    background-color: var(--primary-color);
    cursor: pointer;

}

.resend_sec {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.2rem;
}

.resend_sec p {
    font-size: 1.4rem;
    opacity: 0.6;
}

.resend_sec a {
    font-size: 1.4rem;
    margin-left: 0.4rem;
    text-decoration: none;
    font-weight: light;
    color: var(--primary-color);
}

.sideImg {
    width: 50%;
    height: 100%;
    background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo_title {
    font-size: 2.4rem;
    font-weight: 900;
    color: white;
    font-family: 'Merienda', cursive;
    font-style: italic;
    margin-bottom: 2rem;
}

.error {
    width: 100%;
    display: flex;
    align-items: flex-start;
    font-size: 1.3rem;
    color: red;
    font-weight: 300;
    padding: 0 0.2rem;
}

@media only screen and (max-width: 576px) {
    .container {
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
        margin: 0;
        overflow: hidden;
    }

    .verification {
        width: 95%;
        height: 60%;
    }

    .sideImg {
        width: 90%;
        height: 20vh;
        display: none;
    }

    .verify_content {
        color: var(--btn-font-color);
        border: 0.3rem solid var(--border-color);
    }

    .verify_content input {
        border: 0.2rem solid var(--border-color);
    }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
    .container {
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
        margin: 0;
        overflow: hidden;
    }

    .verification {
        width: 60%;
        height: 60%;
    }

    .sideImg {
        width: 90%;
        height: 20vh;
        display: none;
    }

    .verify_content {
        color: var(--btn-font-color);
        border: 0.3rem solid var(--border-color);
    }

    .verify_content input {
        border: 0.2rem solid var(--border-color);
    }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
    .container {
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
        margin: 0;
        overflow: hidden;
    }

    .verification {
        width: 60%;
        height: 65%;
    }

    .sideImg {
        width: 90%;
        height: 20vh;
        display: none;
    }

    .verify_content {
        color: var(--btn-font-color);
        border: 0.3rem solid var(--border-color);
    }

    .verify_content input {
        border: 0.2rem solid var(--border-color);
    }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {}
</style>
