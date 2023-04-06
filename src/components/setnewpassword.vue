<template>
<div class="main-container" id="main-container2">
    <div class="row">
        <div class="col-lg-6" id="left-side">
            <div class="text" id="text-set">
                <div class="text-info3">
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

        <div class="col-lg-6" id="right-side">
            <img src="../assets/backgoundimg.png" alt="" class="img-2">
            <h2 class="heading-magaswala2">magaswala</h2>
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
#text-set {
    height: 710px;
}

.text-info3 {
    margin-top: 40%;
}

.setpass {
    font-size: 35px;
    font-weight: bold;
}

#right-side .img-2 {
    width: 101%;
    height: 719px;
    margin-top: -1%;
    margin-left: -2%;
}

.heading-magaswala2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Courgette', 'cursive';
    font-weight: normal;
    font-size: 65px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-transform: capitalize;
}

@media screen and (min-width: 1200px) and (max-width: 1399.98px) {
    #right-side .img-2 {
        width: 111%;
        height: 715px;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1199.98px) {
    #text-set {
        height: 710px;
    }

    .text-info3 {
        margin-top: 40%;
    }

    .setpass {
        font-size: 35px;
        font-weight: bold;
    }

    #right-side .img-2 {
        width: 103%;
        height: 719px;
        margin-top: -1%;
        margin-left: -2%;
    }

    .heading-magaswala2 {
        top: 50%;
        left: 50%;
        font-size: 65px;

    }
}

@media screen and (min-width: 600px) and (max-width: 999.98px) {
    .text-info3 {
        margin-top: 27%;
    }

    #right-side .img-2 {
        width: 100%;
        margin-top: 3%;
        margin-left: 0%;
    }

}

@media screen and (min-width: 300px) and (max-width: 599.98px) {
    .text-info3 {
        margin-top: 80%;
    }

    .setpass {
        font-size: 18px;
        font-weight: bold;
    }

    #right-side .img-2 {
        width: 100%;
        margin-top: 3%;
        margin-left: 0%;
    }

    .heading-magaswala2 {
        font-size: 45px;
    }
}
</style>
