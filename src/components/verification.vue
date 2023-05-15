<template>
<div class="main-container">
    <img class="main-img" src="../assets/backgoundimg.png" alt="">
    <div class="row1">
        <div class="text">
            <div class="row ">
                <div class="col-6-lg" id="second-col">
                    <h2 class="welcome-heading">verification</h2>
                    <p class="p-1">6-digit code has been sent<br>to your register email </p>
                    <br>
                    <div class="otp2">
                        <!-- <input id="partitioned" type="number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" maxlength="1" v-model="email_otp" autocomplete="off"  /> -->
                        <input type="text" id="o1" class="text1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" placeholder="" maxlength="1" v-model="email_otp" v-on:click="focus( )" required>
                        <input type="text" id="o2" class="text1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" placeholder="" maxlength="1" required>
                        <input type="text" id="o3" class="text1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" placeholder="" maxlength="1" required>
                        <input type="text" id="o4" class="text1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" placeholder="" maxlength="1" required>
                        <input type="text" id="o5" class="text1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" placeholder="" maxlength="1" required>
                        <input type="text" id="o6" class="text1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" placeholder="" maxlength="1" required>

                    </div>

                    <router-link to="/setnewpassword" custom v-slot="{navigate}">
                        <button class="submit-btn" type="btn" @click="navigate" role="link" id="sub-btn">Verify</button>
                    </router-link>
                    <p id="p-2"> Didn't receive code ? <router-link to="/verification2" custom v-slot="{navigate}"><span @click="navigate" role="link">Resend</span></router-link>
                    </p>

                </div>

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

    methods: {
        focus() {
            let otp2 = document.getElementsByClassName("otp2")[0];
            otp2.onkeyup = function (e) {
                let target = e.srcElement;
                let maxLength = parseInt(target.attributes["maxlength"].value, 10);
                let myLength = target.value.length;
                if (myLength >= maxLength) {
                    let next = target;
                    while ((next = next.nextElementSibling)) {
                        if (next == null)
                            break;
                        if (next.tagName.toLowerCase() == "input") {
                            next.focus();
                            break;
                        }
                    }
                } else if (myLength === 0) {
                    let previous = target;
                    while ((previous = previous.previousElementSibling)) {
                        if (previous == null)
                            break;
                        if (previous.tagName.toLowerCase() === "input") {
                            previous.focus();
                            break;
                        }
                    }
                }
            }
        },

        otpVerify() {
            let o1 = document.getElementById("o1").value
            let o2 = document.getElementById("o2").value
            let o3 = document.getElementById("o3").value
            let o4 = document.getElementById("o4").value
            let o5 = document.getElementById("o5").value
            let o6 = document.getElementById("o6").value

            let otp123 = o1 + o2 + o3 + o4 + o5 + o6
        }
    }
}
</script>

<style>
.digit-group {
    width: 30px;
    height: 50px;
    border: none;
    line-height: 50px;
    text-align: center;
    font-size: 24px;

}

.otp2 {
    display: flex;
    margin-left: 10%;
}

.otp2 input {
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
}
</style>
