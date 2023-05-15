<template>
<div class="main-container">
    <img class="main-img" src="../assets/backgoundimg.png" alt="">
    <div class="row1">
        <div class="text">
            <div class="row">
                <div class="col-lg-12" id="second-col">
                    <h2>Set New Password</h2>
                    <p class="p-1">Please enter new password</p>
                    <input class="email" type="text" placeholder="password">
                    <br>
                    <input class="email" type="text" placeholder=" confirm password">
                    <br>
                    <button class="submit-btn" type="btn">submit</button>

                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-6 " id="right-side">
        <h2 class="heading-magaswala" id="heading-magaswala">Magaswala</h2>
    </div>
</div>
</template>

<script>
export default {
    name: "setnewpassword"
}
</script>

<style>
#heading-magaswala{
    left: 23%;
}
@media screen and (min-width: 1400px) and (max-width: 1599.98px) {
    .submit-btn {
        width: 100%;
    }
}
</style>
