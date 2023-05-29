<template>
    <h5 class="user">User Reviews</h5>
    <br>
    <div
    ref="carousel"
    class="carousel"
    @mousedown="dragStart"
    @touchstart="dragStart"
    @mousemove="dragging"
    @touchmove="dragging"
    @mouseup="dragStop"
    @mouseleave="dragStop"
    @touchend="dragStop"
  >
    <div class="container-fluid" id="boxes">
        <div class="row">
            <div class="col review1" id="review">
                <img id="profile" src="@/assets/profilecopy.png"><br>
                <br>
                <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                <p>- Rahul Vishnani</p>
                <p>Surat</p>
            </div>
            <div class="col review2" id="review">
                <img id="profile" src="@/assets/profilecopy.png"><br>
                <br>
                <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                <p>- Rahul Vishnani</p>
                <p>Surat</p>
            </div>
            <div class="col review3" id="review">
                <img id="profile" src="@/assets/profilecopy.png"><br>
                <br>
                <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                <p>- Rahul Vishnani</p>
                <p>Surat</p>
            </div>
            <div class="col review4" id="review">
                <img id="profile" src="@/assets/profilecopy.png"><br>
                <br>
                <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                <p>- Rahul Vishnani</p>
                <p>Surat</p>
            </div>
            <div class="col review5" id="review">
                <img id="profile" src="@/assets/profilecopy.png"><br>
                <br>
                <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                <p>- Rahul Vishnani</p>
                <p>Surat</p>
            </div>
            <div class="col review6" id="review">
                <img id="profile" src="@/assets/profilecopy.png"><br>
                <br>
                <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                <p>- Rahul Vishnani</p>
                <p>Surat</p>
            </div>
            <div class="col review7" id="review">
                <img id="profile" src="@/assets/profilecopy.png"><br>
                <br>
                <p>"Those sweets were beautifully handcrafted with, so much detail, and the taste was simple heavenly"</p>
                <p>- Rahul Vishnani</p>
                <p>Surat</p>
            </div>
        </div>
        <br>
    </div>
  </div>
</template>

<script>
export default {
    name: "UserReview",
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
          this.positionDiff > firstImgWidth / 3
            ? valDifference
            : -this.positionDiff);
      }
      // if user is scrolling to the left
      carousel.scrollLeft -=
        this.positionDiff > firstImgWidth / 3
          ? valDifference
          : -this.positionDiff;
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

<style scoped>

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 1em;
  margin-left: 4em;
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
.review1{
  width: 60em;
}
.user{
  margin-left: 3.5em;
  font-weight: 700;
  font-size: 1.5em;
}
#boxes{
  width: 140em;
  margin-left: 1em;
}
#profile{
    width: 80px;
    height: 80px;
    border-radius: 50%;
} 
#review{
  height: 30em;
  width: 155em;
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
#review:before{
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
#review:after{
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
@media screen and (max-width: 990px) {
  .user{
    margin-left: 1em;
  }
  .carousel{
    margin-left: -0.5em;
  }
}
@media screen and (max-width: 790px) {
  .user{
    margin-left: 2em;
  }
  #boxes{
    margin-left: 1.5em;
  }

}

@media screen and (max-width: 690px) {
  #boxes{
    width: 150em;
    margin-left: 1em;
  }
}

@media screen and (max-width: 590px) {
  .user{
    margin-left: 6em;
  }
  #boxes{
    width: 160em;
    margin-left: 7em;
  }
  #review {
    width: 150em;
  }
}

@media screen and (max-width: 490px) {
  .user{
    width: 10em;
    font-size: 3em;
    margin-left: 3em;
  }
  #boxes{
    width: 150em;
  }
}

@media screen and (max-width: 390px) {
  #boxes{
    margin-left: 7em;
    width: 150em;
  }
}
</style>