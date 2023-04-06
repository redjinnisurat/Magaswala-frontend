<template>
<div class="main-container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text">
                <div class="text-info4">
                    <h2>verification</h2>
                    <p>6-digit code has been sent<br>to your register email </p>
                    <br>
                    <div class="otp-field">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                    </div>
                    <router-link to="/setnewpassword" custom v-slot="{navigate}">
                        <button class="submit-btn" type="btn" @click="navigate" role="link">Verify</button>
                    </router-link>
                    <p class="p-2"> Didn't receive code ? <router-link to="/verification2" custom v-slot="{navigate}"><span @click="navigate" role="link">Resend</span></router-link>
                    </p>
                </div>
            </div>
        </div>

        <div class="col-lg-6" id="right-side">
            <img src="../assets/backgoundimg.png" alt="" class="img-1">
            <h2 class="heading-magaswala">magaswala</h2>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'verification'
}
</script>

<style>

.text-info4{
    margin-top: 40%;
}
.digit-group {
    width: 30px;
    height: 50px;
    border: none;
    line-height: 50px;
    text-align: center;
    font-size: 24px;

}

.otp-field {
    display: flex;
    margin-left: 5%;
}

.otp-field input {
    width: 10%;
    margin: 10px;
    border: none;
    border-bottom: 3px solid #BF9742;
    text-align: center;
    outline: none;
    transition: all 0.1s;
}

@media screen and (min-width: 600px) and (max-width: 999.98px) {
    .text-info4{
        margin-top: 25%;
    }
}



@media screen and (min-width: 300px) and (max-width: 599.98px) {
    .text-info4{
        margin-top: 65%;
    }
}




</style>
