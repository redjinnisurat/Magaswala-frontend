<template>
    <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img class="card-img" src="@/assets/ladu.png" alt="">
                        </div>
                    </div>

                    <div class="card-content">
                        <p class="description">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <button href="#" class="button">Add to Bag</button></p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img class="card-img" src="@/assets/ladu.png" alt="">
                        </div>
                    </div>

                    <div class="card-content">
                        <p class="description">Kesar Magas <br/> Rs. 125/500gm <br/> Made with pure kesar <button href="#" class="button">Add to Bag</button></p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img class="card-img" src="@/assets/ladu.png" alt="">
                        </div>
                    </div>

                    <div class="card-content">
                        <p class="description">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <button href="#" class="button">Add to Bag</button></p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img class="card-img" src="@/assets/ladu.png" alt="">
                        </div>
                    </div>

                    <div class="card-content">
                        <p class="description">Kesar Magas <br/> Rs.125/500gm <br/> Made with pure kesar <button href="#" class="button">Add to Bag</button></p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img class="card-img" src="@/assets/ladu.png" alt="">
                        </div>
                    </div>

                    <div class="card-content">
                        <p class="description">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <button href="#" class="button">Add to Bag</button></p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img class="card-img" src="@/assets/ladu.png" alt="">
                        </div>
                    </div>

                    <div class="card-content">
                        <p class="description">Kesar Magas <br/> Rs.125/500gm <br/> Made with pure kesar <button href="#" class="button">Add to Bag</button></p>
                    </div>
                </div>

            </div>
        </div>

        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    name: "ImageSlider",

    card() {
    var swiper = new swiper(".slide-content", {
        slidePerview: 3,
        spaceBetween: 25,
        // slidePerGroup: 3,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextE1: ".swiper-button-next",
            prevE1: ".swiper-button-prev",
        },
        
        breakpoints:{
            0: {
                slidesPreview: 1,
            },
            520: {
                slidesPreview: 2,
            },
            950: {
                slidesPreview: 3,
            },
        }
    })

    },
}

</script>


<style scoped>

*{
    /* margin: 0; */
    /* padding: 0; */
    /* box-sizing: border-box; */
    /* font-family: 'Poppins', sans-serif; */
}
/* body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EFEFEF;
    padding: 3px;
} */
.slide-container{
    max-width: 1120px;
    width: 100%;
    /* background-color: grey; */
   /* padding: 40px 0; */
}
.slide-content{
    margin: 0 40px;
    overflow: hidden;
    padding: 10px;
}
.card{
    width: 20em;
    height: 17em;
    border-radius: 0px;
    background-color: #FFF;
    margin-left: 15px;
    
}
.card-content{
    opacity: 5;
    filter: blur(0.5px);
    padding: 10px 10px;
    /* height: 5em; */
}
.card-image{
    height: 10em;
    width: 20em;
    background: #edd5a4;
}

.card-image .card-img{
    height: 10em;
    width: 15em;
    margin-left: 2.5em;
}
.card-content .description{
    padding: 0px;
}
.description .button{
    background-color: #A17A35;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 12em;
    margin-top: -5rem;
    padding-top: 0px;
    width: 6em;
    height: 1.6em;
}

.swiper-navBtn{
    color:#edd5a4;
    transition: color 0.3s ease;
}
.swiper-navBtn:hover{
    color:#A17A35;
}
.swiper-navBtn::before,
.swiper-navBtn::after{
    font-size: 40px;
}
.swiper-button-next{
    right: 0;
}
.swiper-button-prev{
    left: 0;
}
.swiper-pagination-bullet{
    background-color: #edd5a4;
    opacity: 1;
}
.swiper-pagination-bulle-activet{
    background-color: #A17A35;
    opacity: 1;
}

@media screen and (max-width: 768px) {
    .slide-content{
        margin: 0 10px;
    }
    .swiper-navBtn{
        display: none;
    }
}
</style>