<template>
<div class="main-container">
    <div class="row1">
        <div class="text">
            <div class="row">
                <div class="col-6-lg" id="second-col">
                    <h2 class="welcome-heading">verification</h2>
                    <p class="p-1" style="margin-top: 2%;">6-digit code has been sent<br>to your registered email</p>
                    <br>
                    <div class="input-group">
                        <!-- Loop through otpDigits and create an input for each digit -->
                        <input v-for="(digit, index) in otpDigits" :ref="`otpInput${index}`" :key="index" v-model="otp[index]" type="text" min="0" max="9" @input="handleInput(index)" @keydown.backspace="handleBackspace(index)" @paste="handlePaste($event, index)" class="otp-input" />
                    </div>
                </div>
                <!-- Use router-link to navigate to '/setnewpassword' and callAPI method on button click -->
                <router-link :to="{ path: '/setnewpassword' }" custom v-slot="{ navigate }">
                    <button class="submit-btn" type="btn" @click="navigate, callAPI()" role="link" id="sub-btn">Verify</button>
                </router-link>
                <p id="p-2" :type="showtext ? 'text' : 'text'" v-show="!showtext || resendTimer === 0">
                    Didn't receive code? <span @click="resendCode" :disabled="resendDisabled" v-on:click="toggletext()">Resend</span>
                </p>
                <p class="second-p" :type="showtext ? 'text' : 'text'" v-show="showtext" v-if="resendTimer > 0">
                    Code has been sent again! <span> Send again {{ Math.floor(resendTimer / 60) }}:{{ ("0" + (resendTimer % 60)).slice(-2) }}</span>
                </p>
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
    name: 'Verification',
    data() {
        return {
            showtext: false,
            otpDigits: 6,
            otp: Array(6).fill(''),
            resendTimer: 0,
            resendDisabled: false,
            email: '',
        };
    },
    created() {
        // Retrieve the email from the query parameter
        this.email = this.$route.query.email;
        console.log('Email:', this.email);
    },
    methods: {
        async callAPI() {
            const otpValue = this.otp.join(''); // Convert the array of OTP digits to a single string
            try {
                const response = await axios.post('emailverify', { otp: otpValue, email: this.email });
                // Handle the API response
                console.log(response.data);
                this.$router.push('/setnewpassword'); // Navigate to '/setnewpassword' route
            } catch (error) {
                // Handle the API error
                console.error(error);
            }
        },
        handleInput(index) {
            if (index < this.otpDigits - 1) {
                this.$refs[`otpInput${index + 1}`][0].focus();
            }
        },
        handleBackspace(index) {
            if (index > 0) {
                this.otp[index] = '';
                this.$refs[`otpInput${index - 1}`][0].focus();
            }
        },
        handlePaste(event, index) {
            event.preventDefault();
            const pastedData = event.clipboardData.getData('text/plain');
            const digits = pastedData.split('').slice(0, this.otpDigits);

            digits.forEach((digit, i) => {
                this.otp[index + i] = digit;
                if (index + i < this.otpDigits - 1) {
                    this.$refs[`otpInput${index + i + 1}`][0].focus();
                }
            });
        },
        resendCode() {
            this.resendDisabled = true;
            this.resendTimer = 85;

            const timer = setInterval(() => {
                if (this.resendTimer > 0) {
                    this.resendTimer--;
                } else {
                    this.resendDisabled = false;
                    clearInterval(timer);
                }
            }, 1000);
        },
        toggletext() {
            this.showtext = !this.showtext;
        },
    },
};
</script>

<style>
.input-group {
    border: none;
    line-height: 50px;
    text-align: center;
    font-size: 24px;

}

.input-group {
    display: flex;
    margin-left: 29%;
}

.otp-input {
    overflow: hidden;
    text-decoration: none;
    width: 10%;
    margin: 10px;
    border: none;
    border-bottom: 3px solid #BF9742;
    text-align: center;
    outline: none;
    transition: all 0.1s;
}

#p-2 {
    margin-top: 2%;
}

#sub-btn {
    width: 85%;
    margin-left: 8%;
}

span {
    color: #BF9742;
    font-weight: bold;
}

.second-p {
    margin-top: 3%;
}

@media screen and (min-width: 1400px) and (max-width: 1699.98px) {
    .p-1 {
        margin-top: 0%;
    }
}
</style>
