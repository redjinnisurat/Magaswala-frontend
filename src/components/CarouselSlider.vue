<template>
    <section>
        <div class="swiper mySwiper container">
            <div class="swiper-wrapper content">

                <div class="swiper-slide card">
                    <div class="card-content">
                        <div class="image">
                            <img src="@/assets/ladu.png" alt="">
                        </div>
                        <div class="card-body">
                          <p class="text">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/><button href="#" class="button">Add to Bag</button></p>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide card">
                    <div class="card-content">
                        <div class="image">
                            <img src="@/assets/ladu.png" alt="">
                        </div>
                        <div class="card-body">
                          <p class="text">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/><button href="#" class="button">Add to Bag</button></p>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide card">
                    <div class="card-content">
                        <div class="image">
                            <img src="@/assets/ladu.png" alt="">
                        </div>
                        <div class="card-body">
                          <p class="text">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/><button href="#" class="button">Add to Bag</button></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
        <div class="swiper-pagination"></div>
    </section>
</template>

<script>
export default {
    name: "CarouselSlider",

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
.swiper{
    width: 950px;
}
section .card .image{
    height: 10em;
    width: 20em;
    background: #edd5a4;
    margin-top: -2em;
}
section .card .image img{
   height: 100%;
   width: 70%;
   display: block;
  margin-left: auto;
  margin-right: auto;
}
.card{
    position: relative;
    background: #fff;
    width: 20em;
    height: 18em;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.card::before{
    content: "";
    position: absolute;
    height: 40%;
    width: 100%;
}
.card .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    position: relative;
    z-index: 100;
}
.card .card-body{
    
}
.card-body .text{
    opacity: 5;
    filter: blur(0.5px);
    padding: 10px 10px;
    width: 15em;
    margin-left: -5em;
    margin-top: -1em;
}
.text .button{
    background-color: #A17A35;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 13em;
    margin-top: -5rem;
    padding-top: 0px;
    width: 6em;
    height: 1.6em;
    transition: all 0.3s ease;
}
.button button:hover{
    background: #edd5a4;
}
</style>