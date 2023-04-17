<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text">
                <div class="text-info5">
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
                    <br>
                    <router-link to="/setnewpassword" custom v-slot="{navigate}">
                        <button class="submit-btn" type="btn" @click="navigate" role="link">Verify</button>
                    </router-link>
                    <p class="p-2">code has been sent again! <span>Send again 1:25</span></p>
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
    name: 'verification2'
}
</script>

<style>
span {
    color: #a17a35;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 13px;
}

.text-info5 {
    margin-top: 40%;
}

@media screen and (min-width: 1200px) and (max-width: 1399.98px) {
    .text-info5 {
        margin-top: 30%;
    }

}

@media screen and (min-width: 600px) and (max-width: 999.98px) {
    .text-info5 {
        margin-top: 25%;
    }
}

@media screen and (min-width: 300px) and (max-width: 599.98px) {
    .text-info5 {
        margin-top: 65%;
    }
}
</style>
