<template>
<navbar />
<div class="container">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <br><br>
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="heading">
                    <h2 class="first-heading">The best Magas in town</h2>
                    <h3 class="second-heading">Made with pure ingredients<br>Price = Rs.250 for 1kg</h3>
                    <br>
                    <br>
                    <button type="button" class="btn btn-warning">Add To Bag</button>
                </div>
                <div>
                    <img class="ladu" src="../assets/sweet.png" alt="">
                </div>
            </div>
            <div class="carousel-item">
                <div class="heading">
                    <h2 class="third-heading">Now get 25% discount</h2>
                    <h3 class="fourth-heading">On order of 1kg of Magas<br>Price = Rs.250 for 1kg</h3>
                    <br>
                    <br>
                    <button type="button" class="btn btn-warning">Add To Bag</button>
                </div>
                <div>
                    <img class="ladu2" src="../assets/magas.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- our product-->
<div class="product-container">
    <div class="row">
        <h2 class="product-heading">our products</h2>
    </div>
    <div class="row">
        <div class="col">
            <div id="product1">
                <img id="product" src="../assets/sweet.png" />
                <p class="product-p">&emsp;Kesar Magas<br>
                    &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
                    &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
                    &ensp;</p>
            </div>
        </div>
        <div class="col">
            <div id="product1">
                <img id="product" src="../assets/sweet.png" />
                <p class="product-p">&emsp;Kesar Magas<br>
                    &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
                    &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
                    &ensp;</p>
            </div>
        </div>
        <div class="col">
            <div id="product1">
                <img id="product" src="../assets/sweet.png" />
                <p class="product-p">&emsp;Kesar Magas<br>
                    &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
                    &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
                    &ensp;</p>
            </div>
        </div>
    </div>
</div>

<!-- abouyt as -->
<div class="about-container">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="about-heading">Know about us</h2>
        </div>
        <div class="col-lg-6">
            <img id="know" src="../assets/know.png" alt="">
        </div>
        <div class="col-lg-6">
            <p class="a"><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Maiores odio ullam voluptatibus, voluptates earum, accusamus cupiditate blanditiis eos incidunt, aspernatur quidem quisquam explicabo facilis itaque maxime illum cumque omnis architecto obcaecati ducimus culpa praesentium repellendus aliquam.<br /> Quo aspernatur tempore quia libero expedita, temporibus blanditiis unde eveniet ea saepe excepturi illo! Vero, <br />amet quod. Animi ipsum esse hic praesentium <br /> accusamus, quis, eaque cupiditate officia possimus, nostrum a in. <br /> Suscipit possimus porro natus incidunt? Aut labore iusto praesentium ducimus optio! Voluptatum, accusantium magni? <br /> Ad aperiam ab quae veritatis possimus excepturi at laborum quasi, eum nobis recusandae illum, <br /> quo eos optio perferendis quam.</b></p>
        </div>
    </div>

</div>

<!--  -->
<div class="user-container">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="about-heading">User Review</h2>
        </div>
        <div ref="carousel" class="carousel1" @mousedown="dragStart" @touchstart="dragStart" @mousemove="dragging" @touchmove="dragging" @mouseup="dragStop" @mouseleave="dragStop" @touchend="dragStop">
            <div class="container-fluid" id="boxes">
                <div class="row">
                    <div class="col review1" id="review">
                        <img id="profile" src="../assets/profile.png"><br>
                        <br>
                        <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                        <p>- Rahul Vishnani</p>
                        <p>Surat</p>
                    </div>
                    <div class="col review2" id="review">
                        <img id="profile" src="../assets/profile.png"><br>
                        <br>
                        <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                        <p>- Rahul Vishnani</p>
                        <p>Surat</p>
                    </div>
                    <div class="col review3" id="review">
                        <img id="profile" src="../assets/profile.png"><br>
                        <br>
                        <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                        <p>- Rahul Vishnani</p>
                        <p>Surat</p>
                    </div>
                    <div class="col review4" id="review">
                        <img id="profile" src="../assets/profile.png"><br>
                        <br>
                        <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                        <p>- Rahul Vishnani</p>
                        <p>Surat</p>
                    </div>
                    <div class="col review5" id="review">
                        <img id="profile" src="../assets/profile.png"><br>
                        <br>
                        <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                        <p>- Rahul Vishnani</p>
                        <p>Surat</p>
                    </div>
                    <div class="col review6" id="review">
                        <img id="profile" src="../assets/profile.png"><br>
                        <br>
                        <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                        <p>- Rahul Vishnani</p>
                        <p>Surat</p>
                    </div>
                    <!--  <div class="col review7" id="review">
                <img id="profile" src="@/assets/profilecopy.png"><br>
                <br>
                <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                <p>- Rahul Vishnani</p>
                <p>Surat</p>
            </div> -->
                </div>
                <br>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navbar from './navbar.vue'

export default {
    name: "home",
    components: { navbar },
    data() {
        return {
            isDragStart: false,
            isDragging: false,
            prevPageX: 0,
            prevScrollLeft: 0,
            positionDiff: 0,
        };
    },
    mounted() {
        this.showHideIcons();
    },
    methods: {
        showHideIcons() {
            const carousel = this.$refs.carousel;
            const arrowIcons = this.$refs.arrowIcons;
            // Check if arrowIcons is defined
            if (!arrowIcons) return;
            // showing and hiding prev/next icon according to carousel scroll left value
            const scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
            arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
            arrowIcons[1].style.display =
                carousel.scrollLeft == scrollWidth ? "none" : "block";
        },
        autoSlide() {
            const carousel = this.$refs.carousel;
            if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth) {
                return;
            }

            let firstImgWidth = carousel.querySelectorAll("img")[0].clientWidth + 14;
            // getting difference value that needs to add or reduce from carousel left to take middle img center
            let valDifference = firstImgWidth - this.positionDiff;

            if (carousel.scrollLeft > this.prevScrollLeft) {
                // if user is scrolling to the right
                return (carousel.scrollLeft +=
                    this.positionDiff > firstImgWidth / 3 ?
                    valDifference :
                    -this.positionDiff);
            }
            // if user is scrolling to the left
            carousel.scrollLeft -=
                this.positionDiff > firstImgWidth / 3 ?
                valDifference :
                -this.positionDiff;
        },
        dragStart(e) {
            // updating global variables value on mouse down event
            this.isDragStart = true;
            this.prevPageX = e.pageX || e.touches[0].pageX;
            this.prevScrollLeft = this.$refs.carousel.scrollLeft;
        },
        dragging(e) {
            // scrolling images/carousel to left according to mouse pointer
            if (!this.isDragStart) return;
            e.preventDefault();
            this.isDragging = true;
            this.$refs.carousel.classList.add("dragging");
            this.positionDiff = (e.pageX || e.touches[0].pageX) - this.prevPageX;
            this.$refs.carousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
            this.showHideIcons();
        },
        dragStop() {
            this.isDragStart = false;
            this.$refs.carousel.classList.remove("dragging");

            if (this.isDragging) {
                // if user has dragged image/carousel, then start auto-slide after 1s
                setTimeout(() => {
                    this.isDragging = false;
                    this.autoSlide();
                }, 1000);
            } else {
                // if user has not dragged image/carousel, then start auto-slide immediately
                this.autoSlide();
            }
        },

    },
}
</script>

<style>
.carousel {
    display: flex;
    overflow-x: none;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-top: 5%;
    margin-left: -5%;
    height: 100%;
}

/* .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1rem;
    margin-left: 15%;
    list-style: none;
} */

/* .carousel-indicators button {
    background-color: #A17A35;
    padding-top: 25px;
    border-radius: 50%;

} */

/* .carousel-indicators button {
    background-color: transparent;
    border: none;
    width: 30px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    background: #b4b4b4;
}

.carousel-indicators button.active {
    background-color: #A17A35;
    width: 30px;
    height: 20px;
    margin-bottom: -10rem;
} */
.heading {
    float: left;
    margin-top: 3%;
    text-align: left;
}

.first-heading {
    font-size: 40px;
    color: #B1622A;
    font-weight: bold;

}

.second-heading {
    font-size: 30px;
    color: #B1622A;

}

.ladu {
    width: 45%;
    height: 100%;
    margin-left: 50%;
    margin-top: -25%;

}

.third-heading {
    font-size: 40px;
    color: #B1622A;
    font-weight: bold;
}

.fourth-heading {
    font-size: 30px;
    color: #B1622A;
}

.ladu2 {
    width: 30em;
    margin-left: 35em;
    margin-top: -15em;
}

.btn {
    background-color: #A17A35;
    width: 11em;
    height: 2.3em;
    color: white;
    border: none;
    margin-top: -5%;
}

.product-heading {
    text-align: left;
    margin-top: 5%;
    margin-left: 2%;
    text-transform: capitalize;

}

.col {
    margin-left: 2%;
    margin-top: 3%;
}

#product {
    margin-left: auto;
    width: 100%;
    height: 100%;
}

#product1 {
    background: linear-gradient(to top, white 0%, white 36%, #BF9742 36%, #BF9742 100%);
}

#i {
    margin-top: 20px;
    margin-left: 30px;
}

#magas {
    top: 91px;
    left: 140px;
    width: 180px;
    height: 60px;
    opacity: 1;
}

#search {
    margin-top: 20px;
    width: 400px;
    height: 30px;
}

#know {
    width: 100%;
    height: 100%;
    margin-top: 3%;
    margin-left: 4%;
}

#add {
    margin-left: -4%;
    background-color: #A17A35;
    color: white;
    border-color: #A17A35;
    border-radius: 5px;
}

#btn {
    background-color: #A17A35;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    border-radius: 10px;
    width: 200px;
    margin-left: 80px;
}

#data {
    color: #B1622A;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 80px;
    font-size: 30px;
}

#body {
    margin-top: 100px;
    margin-left: 80px;
    color: #B1622A;
    font-size: 35px;
    font-family: Arial, Helvetica, sans-serif;
}

#sweet {
    width: 100%;
    height: 100%;
}

p.a {
    text-align: left;
    font-size: 20px;
    width: 100%;
    margin-top: 3%;
    height: 100%;
    margin-left: 2%;
}

#fav {
    width: 110px;
    height: 90px;
}

#bttn {
    background-color: #A17A35;
    border-radius: 10px;
    color: white;
    border-color: #A17A35;
    width: 150px;
    margin-top: 5px;
    text-align: center;
}

#delete {
    width: 20px;
    height: 20px;
}

#row {
    border: 1px solid #707070;
    background-color: #F9F9F9;
    align-items: center;
    padding: 5px 5px 5px 5px;
}

#star {
    color: #E6B325;
    margin-left: 2px;
}

#bg {
    background-color: white;
    border: 2px solid #BF9742;
    padding: 25px 25px 25px 25px;
    border-radius: 5px;
}

#text {
    font-size: 15px;
    padding-left: 5px;
    margin-top: 20px;
}

#del {
    display: flex;
    align-items: center;
    justify-content: center;
}

.responsive {
    width: 100%;
    height: auto;
}

#Inc {
    background-color: #BF9742;
    color: white;
    border: 1px solid #BF9742;
    text-align: center;
    height: 25px;
    border-radius: 50%;
    margin: auto;
}

#Dec {
    background-color: white;
    color: #BF9742;
    border: 1px solid #BF9742;
    align-items: center;
    text-align: center;
    height: 25px;
    border-radius: 50%;
}

#K,
#G,
#g {
    accent-color: #BF9742;
    outline: none;
}

.verticaline {
    height: 240px;
    border-right: 1px solid #E6B325;
    position: absolute;
    right: 25%;
}

#pay {
    width: 15px;
    height: 15px;
}

hr.hr {
    border: 1px solid #838282;
    width: 125px;
}

#right {
    margin-top: 50px;
    margin-left: 320px;
    font-size: 11px;
    line-height: 40%;
}

#profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

/* #review {
    margin-top: 3%;
    height: 500px;
     width: 100px; 
    position: relative;
    border-left: 2px solid #BF9742;
    border-top: 2px solid #BF9742;
    border-right: 2px solid #BF9742;
    text-align: center;
    font-size: 15px;
    margin-left: 5%;
    padding-top: 100px;
}

#review:before {
    content: "";
    position: absolute;
    height: 51%;
    width: 51%;
    left: -2px;
    bottom: -30px;
    z-index: -2;
    -webkit-transform: skewY(-37deg);
    transform: skewY(-37deg);
    border-bottom: 2px solid #BF9742;
    border-left: 2px solid #BF9742;
}

#review:after {
    content: "";
    position: absolute;
    height: 51%;
    width: 51%;
    right: -2px;
    bottom: -30px;
    z-index: -2;
    -webkit-transform: skewY(37deg);
    transform: skewY(37deg);
    border-bottom: 2px solid #BF9742;
    border-right: 2px solid #BF9742;
} */

.carousel1 {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-top: 1em;
    margin-left: 1em;
    width: 100%;
    height: 700px;
}

.carousel::-webkit-scrollbar {
    display: none;
}

/* .carousel img {
  width: 100%;
  height: auto;
  scroll-snap-align: center;
} */

.carousel.dragging {
    cursor: grabbing;
    cursor: -webkit-grabbing;
}

.review1 {
    width: 60em;
}

.heading {
    margin-left: 1.5em;
    font-weight: 700;
    font-size: 2em;
}

#boxes {
    width: 100em;
    margin-left: 1em;
    margin-top: -3%
}

#profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

#review {
    height: 34em;
    width: 175em;
    position: relative;
    border-left: 2px solid #BF9742;
    border-top: 2px solid #BF9742;
    border-right: 2px solid #BF9742;
    text-align: center;
    font-size: 15px;
    margin-left: 15px;
    padding-top: 100px;
    /* background: #FFFFFF; */
}

#review:before {
    content: "";
    position: absolute;
    height: 51%;
    width: 51%;
    left: -2px;
    bottom: -30px;
    z-index: -2;
    -webkit-transform: skewY(-37deg);
    transform: skewY(-37deg);
    border-bottom: 2px solid #BF9742;
    border-left: 2px solid #BF9742;
}

#review:after {
    content: "";
    position: absolute;
    height: 51%;
    width: 51%;
    right: -2px;
    bottom: -30px;
    z-index: -2;
    -webkit-transform: skewY(37deg);
    transform: skewY(37deg);
    border-bottom: 2px solid #BF9742;
    border-right: 2px solid #BF9742;
}

#star {
    height: 30px;
}

#address {
    width: 250px;
    height: 90px;
    background-color: white;
    accent-color: #BF9742;
    border: 1px solid #BF9742;
    color: #828A89;
    margin-left: 14px;
    padding-top: 5px;
}

#mpay {
    background-color: #A17A35;
    margin-left: 15px;
    border-radius: 10px;
    color: white;
    border-color: #A17A35;
    width: 250px;
    height: 34px;
    text-align: center;
}

#submit {
    background-color: #A17A35;
    margin-left: 35px;
    border-radius: 10px;
    color: white;
    border-color: #A17A35;
    width: 120px;
    height: 34px;
    text-align: center;
}

#prop {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

p.rev {
    display: -webkit-box;
    max-width: 500px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 13px;
    text-overflow: ellipsis;
}

#st {
    width: 15px;
    height: 15px;
}

.vl {
    height: 500px;
    border-right: 1px solid #A17A35;
    right: 50%;
}

.horizon {
    border: 1px solid #A17A35;
}

a {
    color: black;
    font-size: 13px;
}

#heart {
    height: 25px;
    width: 25px;
}

#st {
    height: 20px;
    width: 20px;
}

#itemadd {
    color: #707070;
    font-size: 9px;
}

input[type='radio'] {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    outline: none;
    box-shadow: 0 0 0 1px #BF9742;
}

input[type='radio']:before {
    content: '';
    display: block;
    width: 60%;
    height: 60%;
    margin: 20% auto;
    border-radius: 50%;
}

input[type='radio']:checked:before {
    background: #BF9742;
}

.product-p {
    text-align: left;
}

.about-heading {
    text-align: left;
    margin-top: 5%;
    margin-left: 2%;
    text-transform: capitalize;

}
</style>
