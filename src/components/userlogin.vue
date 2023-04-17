<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text">
                <div class="row ">
                    <div class="col-6-lg" id="second-col">
                        <h2 class="welcome-heading">welcome back!</h2>
                        <p class="p-1">please enter credentials for sign in </p>
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
    name: 'userlogin'
}
</script>

<style>
.welcome-heading {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 30px;
}

.p-1 {
    margin-top: -3%;
    font-family: 'Poppins', sans-serif;
    font-weight: 'regualar';
    font-size: 20px;
    color: #838282;
}

</style>
