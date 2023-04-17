<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text">
                <div class="row">
                    <div class="col-lg-6" id="second-col2">
                        <h2 class="setpass">set new password</h2>
                        <p>please enter new password </p>
                        <input class="email" type="text" placeholder="password">
                        <br>
                        <input class="email" type="text" placeholder=" confirm password">
                        <br>
                        <button class="submit-btn" type="btn">submit</button>
                        <br>
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
    name: 'setnewpassword'
}
</script>

<style>
.text {
    border: 3px solid #BF9742;
    opacity: 1;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#second-col2 {
    margin: 0 auto;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.setpass {
    font-size: 30px;
    font-weight: bold;
}
</style>
