<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text">
                <div class="row ">
                    <div class="col-6-lg" id="second-col">
                        <h2>set new password</h2>
                        <p class="p-1">please enter new password </p>
                        <input class="email" type="text" placeholder="password">
                        <br>
                        <input class="email" type="text" placeholder=" confirm password" id="email2">
                        <br>
                        <button class="submit-btn" type="btn">submit</button>
                    </div>

                </div>
            </div>

        </div>

        <div class="col-lg-6" id="rigth-side">
            <img src="../assets/backgoundimg.png" alt="">
            <h2 class="heading-magaswala">magaswala</h2>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "setnewpassword"
}
</script>

<style>
#email2{
    margin-top: -3%;
}
</style>
