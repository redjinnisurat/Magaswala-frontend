<template>
<div class="main-container">
    <img class="main-img" src="../assets/backgoundimg.png" alt="">
    <div class="row1">
        <div class="text">
            <div class="row">
                <div class="col-6-lg" id="second-col">
                    <h2 class="welcome-heading">verification</h2>
                    <p class="p-1">6-digit code has been sent<br>to your registered email</p>
                    <br>
                    <div class="input-group">
                        <input v-for="(digit, index) in otpDigits" :ref="`otpInput${index}`" :key="index" v-model="otp[index]" type="text" min="0" max="9" @input="handleInput(index)" @keydown.backspace="handleBackspace(index)" @paste="handlePaste($event, index)" class="otp-input" />
                    </div>
                </div>
                <router-link to="/setnewpassword" custom v-slot="{navigate}">
                    <button class="submit-btn" type="btn" @click="navigate" role="link" id="sub-btn">Verify</button>
                </router-link>
                <!-- <p id="p-2" :type="showtext ? 'text' : 'text'" v-show="!showtext">
                    Didn't receive code? <span @click="resendCode" :disabled="resendDisabled" v-on:click="toggletext()">Resend</span>
                </p> -->
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
        <h2 class="heading-magaswala">magaswala</h2>
    </div>
</div>
</template>

<script>
export default {
    name: 'verification',
    data() {
        return {
            showtext: false,
            otpDigits: 6,
            otp: Array(6).fill(''),
            resendTimer: 0, // Countdown timer in seconds
            resendDisabled: false, // Disable the button during the countdown
        };
    },
    methods: {
        handleInput(index) {
            // Move focus to the next input field
            if (index < this.otpDigits - 1) {
                this.$refs[`otpInput${index + 1}`][0].focus();
            }
        },
        handleBackspace(index) {
            // Move focus to the previous input field and clear current value
            if (index > 0) {
                this.otp[index] = ''; // Clear the value of the current input field
                this.$refs[`otpInput${index - 1}`][0].focus();
            }
        },
        handlePaste(event, index) {
            event.preventDefault(); // Prevent default paste behavior
            const pastedData = event.clipboardData.getData('text/plain');
            const digits = pastedData.split('').slice(0, this.otpDigits);

            digits.forEach((digit, i) => {
                this.otp[index + i] = digit; // Update OTP values with pasted digits
                if (index + i < this.otpDigits - 1) {
                    this.$refs[`otpInput${index + i + 1}`][0].focus(); // Move focus to the next input field
                }
            });
        },

        resendCode() {
            // Disable the button and start the countdown
            this.resendDisabled = true;
            this.resendTimer = 85; // Set the initial timer value to 85 seconds (1:25)

            // Start the countdown timer
            const timer = setInterval(() => {
                if (this.resendTimer > 0) {
                    this.resendTimer--;
                } else {
                    // Enable the button after the countdown is finished
                    this.resendDisabled = false;
                    clearInterval(timer);
                }
            }, 1000);
        },

        toggletext() {
            this.showtext = !this.showtext;
        },
    }
}
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
