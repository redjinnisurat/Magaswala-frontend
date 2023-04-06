<template>
<div class="main-container">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text">
                <div class="text-info">
                    <h2>forgotpassword no problem !!</h2>
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

        <div class="col-lg-6" id="right-side">
            <img src="../assets/backgoundimg.png" alt="" class="img-1">
            <h2 class="heading-magaswala">magaswala</h2>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'forgotpassword',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {
    background-color: #f2f2f2;
}

.main-container {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #F9F9F9;
    padding: 10px;
    width: 85%;
    height: 730px;
    background: #F9F9F9;
    opacity: 1;
    margin: 0 auto;
    margin-bottom: 5%;
    border: 2px solid #0000001F;
}

.text {
    padding: 20px;
    text-align: center;
    width: 100%;
    height: 710px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 3px solid #BF9742;
    opacity: 1;
}

.text-info {
    margin-top: 30%;
}

.text-info h2 {
    text-align: center;
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 35px;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
    text-transform: capitalize;
}

p {
    text-align: center;
    font-family: 'Roboto';
    font-size: 25px;
    letter-spacing: 0px;
    color: #838282;
    opacity: 1;
    margin-top: -1%;
}

.email {
    margin-top: 5%;
    width: 74%;
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
    margin-top: 5%;
    width: 74%;
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
    margin-top: 5%;
    text-transform: capitalize;
    font: normal normal normal 20px/24px Roboto;
    letter-spacing: 0px;
    color: #838282;
    opacity: 1;
    font-family: 'Roboto';
    font-size: 20px;
}

.img-1 {
    margin-left: -2%;
    margin-top: -1%;
    width: 122%;
    height: 718px;
    background: transparent linear-gradient(180deg, #000000 0%, #0000001F 55%, #000000D1 100%) 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    opacity: 1;
}

#right-side {
    position: relative;
}

.heading-magaswala {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    font-family: 'Courgette', 'cursive';
    font-weight: normal;
    font-size: 85px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-transform: capitalize;
}

@media screen and (min-width: 1200px) and (max-width: 1399.98px) {
    .img-1 {
        margin-top: -1%;
        width: 103%;
    }

    .heading-magaswala {
        left: 50%;
    }

    .text-info {
        margin-top: 37%;
    }
}

 @media screen and (min-width: 1000px) and (max-width: 1199.98px) {

    p {
        font-size: 18px;
    }

    .email {
        width: 80%;
    }

    .submit-btn {
        width: 80%;
    }

    .img-1 {
        width: 103%;
    }

    .heading-magaswala {
        left: 50%;
        font-size: 60px;

    }

    .text-info {
        margin-top: 40%;
    }

    .heading-magaswala {
        left: 50%;
        font-size: 50px;
    }
} 

@media screen and (min-width: 600px) and (max-width: 999.98px) {
    .main-container {
        height: auto;
        margin-bottom: 40%;
    }

    .img-1 {
        width: 100%;
        margin-top: 3%;
        margin-left: 0%;
    }

}

@media screen and (min-width: 300px) and (max-width: 599.98px) {
    .main-container {
        height: auto;
    }

    .text-info {
        margin-top: 80%;

    }

    .text-info h2 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
    }

    .email {
        width: 95%;
    }

    .submit-btn {
        width: 95%;
    }

    .img-1 {
        width: 100%;
        margin-top: 3%;
    }

    .heading-magaswala {
        left: 50%;
        font-size: 50px;
    }
}
</style>
