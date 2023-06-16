<template>
    <h2 class="heading">Our products</h2>
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
      <div class="product-card" v-for="(image, index) in images" :key="index">
        <div class="product-image">
          <img :src="image.src" />
        </div>
        <div class="product-info">
          <p class="product-name">Kesar magas</p>
          <span class="price">Rs. 250/kg</span>
          <p class="product-short-description">Made with pure kesar</p>
          <button href="#" class="btn" v-on:click="AddBag">Add to Bag</button>
        </div>
      </div>
      <!-- <div class="carousel-controls">
            <button @click="slide(-1)">Previous</button>
            <button @click="slide(1)">Next</button>
          </div> -->
    </div>
</template>
      
<script>
export default {
    name: "OurProducts",
    data() {
      return {
        images: [
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
          { src: "./img/ladu.0fc7d26a.png" },
        ],
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
      AddBag() {
        
      }
    },
  };
  </script>
  
  <style scoped>
  .heading {
    font-weight: bold;
    /* margin-top: 3em; */
    margin-left: 3em;
  }
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
    width: 100%;
    height: 320px;
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
  
  .product-card {
    width: 100%;
    margin-left: 1em;
  }
  
  .product-image {
    width: 21em;
    background-color: #edd5a4;
  }
  .product-image img {
    width: 17em;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .price {
    color: orange;
  }
  .product-info {
    background-color: #fff;
    width: 21em;
    height: 6em;
    /* opacity: 5; */
    /* filter: blur(0.5px); */
    padding: 10px 10px;
  }
  .product-name {
    margin-bottom: 0;
  }
  .product-info .product-short-description {
    width: 10em;
    margin-right: 0;
  }
  .product-info .btn {
    background-color: #a17a35;
    color: white;
    /* border: none; */
    border-radius: 5px;
    margin-left: 13em;
    margin-top: -5rem;
    padding: 0px;
    width: 6em;
    height: 1.6em;
    text-align: center;
    /* transition: all 0.3s ease; */
    letter-spacing: 0px;
  }

@media screen and (max-width: 1490px) {
  .carousel{
    width: 150em;
  }
}

  @media screen and (max-width: 990px) {
    .product-card {
      width: 14em;
      margin-right: 8em;
    }
    .heading {
      font-size: 50px;
      margin-left: 1em;
      margin-top: 3em;
    }
    .carousel {
      width: 140em;
      margin-left: 1em;
    }
  }
  @media screen and (max-width: 890px) {
    .carousel{
      width: 100em;
    }
  }
  @media screen and (max-width: 790px) {
    .carousel {
      width: 60em;
    }
  }
  @media screen and (max-width: 690px) {
    .carousel {
      width: 70em;
    }
  }
  @media screen and (max-width: 590px){
    .heading{
      margin-left: 6em;
    }
    .carousel{
      width: 80em;
      margin-left: 8em;
    }
  }
  /* @media screen and (max-width: 590px) {
    .heading {
      width: 100%;
      margin-left: 6em;
      margin-top: 3em;
    }
    .carousel {
      width: 100em;
      margin-left: 8em;
    }
    .product-image{
      width: 50em;
    }
    .product-image img{
      width: 40em;
    }
    .product-card{
      width: 80em;
    }
    .product-info{
      height: 300px;
      width: 100%;
      font-size: 20px;
    }
  }
  
  @media screen and (max-width: 490px) {
    .heading {
      width: 15em;
      font-size: 3em;
      margin-left: 4em;
    }
    .carousel {
      width: 80em;
      margin-top: 5em;
      margin-left: 8em;
    }
  }
  @media screen and (max-width: 390px) {
    .heading {
      width: 50em;
      margin-left: -2em;
    }
    .carousel {
      font-size: 1em;
      width: 50em;
      margin-left: 2em;
    }
    .product-card{
      width: 60em;
    }
  } */
  </style>