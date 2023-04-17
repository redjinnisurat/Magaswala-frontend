<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text">
                <div class="row ">
                    <div class="col-6-lg" id="second-col">
                        <h2>forgot password no problem !!</h2>
                        <p>please enter email id for verification</p>
                        <input class="email" type="text" placeholder="email">
                        <br>
                        <router-link to="/verification" custom v-slot="{navigate}">
                            <button class="submit-btn" type="btn" @click="navigate" role="link">submit</button>
                        </router-link>
                        <br>
                        <router-link to="/userlogin" custom v-slot="{navigate}">
                            <button class="btn" type="btn" @click="navigate" role="link">back to sign in</button>
                        </router-link>
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
    name: 'forgetpassword'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');

* {
    margin: 0;
    padding: 0;
    bottom: 0%;
    box-sizing: border-box;

    /* height: 100%; */
}

.container {
    height: 100vh;
    display: flex;
    padding: 10px;
    width: 95%;
    background: #F9F9F9;
    opacity: 1;
    margin: 0 auto;
    border: 2px solid #0000001F;
    bottom: 0;

}

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

#second-col {
    margin: 0 auto;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

h2 {
    text-align: center;
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 30px;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
    text-transform: capitalize;
}

p {
    text-align: center;
    font-family: 'Roboto';
    font-size: 20px;
    letter-spacing: 0px;
    color: #838282;
    opacity: 1;
    margin-top: -1%;
}

.email {
    margin-top: 3%;
    width: 100%;
    height: 50px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #BF9742;
    border-radius: 10px;
    opacity: 1;
    padding-left: 2%;
    text-align: left;
    font-family: 'Roboto';
    font-size: 20px;
    letter-spacing: 0px;
    color: #838282;
    opacity: 1;
    text-transform: capitalize;
}

.submit-btn {
    margin-top: 3%;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    text-align: center;
    font-family: 'Roboto';
    font-size: 20px;
    color: #FAFAFA;
    background-color: #A17A35;
    opacity: 1;
}

.btn {
    margin-top: 3%;
    text-transform: capitalize;
    font: normal normal normal 20px/24px Roboto;
    letter-spacing: 0px;
    color: #838282;
    opacity: 1;
    font-family: 'Roboto';
    font-size: 20px;
}

#right-side {
    position: relative;
}

#rigth-side img {
    width: 100%;
    height: 100%;
    background: transparent linear-gradient(180deg, #000000 0%, #0000001F 55%, #000000D1 100%) 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    opacity: 1;
}

.heading-magaswala {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 65%;
    color: white;
    font-size: 40px;
    font-family: 'Courgette', 'cursive';
    font-weight: normal;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-transform: capitalize;
}
</style>
