<template>
<div class="main-container">
    <img class="main-img" src="../assets/backgoundimg.png" alt="">
    <div class="row1">
        <div class="text">
            <div class="row">
                <div class="col-6-lg" id="second-col">
                    <h2 class="welcome-heading">verification</h2>
                    <p class="p-1">6-digit code has been sent<br>to your register email </p>
                    <br>

                    <div class="input-group ">
                        <input v-for="(value, index) in code" :key="index" v-model="code[index]" @paste="handlePaste($event, index)" type="text" inputmode="numeric" pattern="[0-9]*" required id="input">
                    </div>

                </div>
                <router-link to="/setnewpassword" custom v-slot="{navigate}">
                    <button class="submit-btn" type="btn" @click="navigate" role="link" id="sub-btn">Verify</button>
                </router-link>
                <p id="p-2" :type="showtext ? 'text' : 'text'" v-show="!showtext">Didn't receive code? <span v-on:click="toggletext()">Resend</span></p>
                <p class="second-p" :type="showtext ? 'text' : 'text'" v-show="showtext">Code has been sent again! <span @click="startTimer" v-if="!timerRunning">Send again 00</span></p>
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
            code: ['', '', '', '', '', ''], // Assuming a 6-digit OTP
        };
    },
    methods: {
        handlePaste(event, index) {
            event.preventDefault();
            const pastedText = event.clipboardData.getData('text/plain');
            const otpDigits = pastedText.match(/\d/g);
            if (otpDigits && otpDigits.length === 6) {
                for (let i = 0; i < otpDigits.length; i++) {
                    this.code[index + i] = otpDigits[i];
                }
            }
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

.input-group input {
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

@media screen and (min-width: 1400px) and (max-width: 1599.98px) {
    .p-1 {
        margin-top: 0%;
    }
}
</style>
