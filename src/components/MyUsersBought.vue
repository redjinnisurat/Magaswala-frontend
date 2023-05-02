<template>
     <h2 class="heading">User also Bought</h2>
    <div ref="carousel" class="carousel" @mousedown="dragStart" @touchstart="dragStart"
           @mousemove="dragging" @touchmove="dragging"
           @mouseup="dragStop" @mouseleave="dragStop" @touchend="dragStop">
        <div class="product-card" v-for="(image, index) in images" :key="index">
           
          <div class="product-image">
            <img style="width: 40vh; height:40vh;" :src="image.src" />
          </div>
            <div class="product-info">
                        <p class="product-name">Kesar magas</p>
                        <span class="price">Rs. 250/kg</span>
                        <p class="product-short-description">Made with pure kesar</p>
                        <button href="#" class="btn">Add to Bag</button>
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
      data() {
        return {
          images: [
            { src: './img/ladu.0fc7d26a.png' },
            { src: './img/ladu.0fc7d26a.png' },
            { src: './img/ladu.0fc7d26a.png' },
            { src: './img/ladu.0fc7d26a.png' },
            { src: './img/ladu.0fc7d26a.png' },
            { src: './img/ladu.0fc7d26a.png' },
            { src: './img/ladu.0fc7d26a.png' },
             { src: './img/ladu.0fc7d26a.png' },
              { src: './img/ladu.0fc7d26a.png' },
               { src: './img/ladu.0fc7d26a.png' },
               { src: './img/ladu.0fc7d26a.png' },
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
      arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
      arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? 'none' : 'block';
    },
    
        autoSlide() {
          const carousel = this.$refs.carousel;
          if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth) {
            return;
          }
    
          let firstImgWidth = carousel.querySelectorAll('img')[0].clientWidth + 14;
          // getting difference value that needs to add or reduce from carousel left to take middle img center
          let valDifference = firstImgWidth - this.positionDiff;
    
          if (carousel.scrollLeft > this.prevScrollLeft) {
            // if user is scrolling to the right
            return carousel.scrollLeft += this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
          }
          // if user is scrolling to the left
          carousel.scrollLeft -= this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
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
          this.$refs.carousel.classList.add('dragging');
          this.positionDiff = (e.pageX || e.touches[0].pageX) - this.prevPageX;
          this.$refs.carousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
          this.showHideIcons();
        },
        dragStop() {
          this.isDragStart = false;
          this.$refs.carousel.classList.remove('dragging');
    
          if(this.isDragging) {
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
    };
    </script>

    <style>

.heading{
 margin-top: 15px;
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
    }
    
    .carousel::-webkit-scrollbar {
    display: none;
    }
    
    .carousel img {
    width: 100%;
    height: auto;
    scroll-snap-align: center;
    }
    
    .carousel.dragging {
    cursor: grabbing;
    cursor: -webkit-grabbing;
    }
    
    .product-card{
        width: 22em;
        margin-left: 0.5em;
    }
    
    .product-image{
        width: 21em;
        background-color: #edd5a4;
    }
    .product-image img{
        width: 16em;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    
    .product-info{
        background-color: #fff;
        height: 7em;
        opacity: 5;
        filter: blur(0.5px);
        padding: 10px 10px;
    }
    .product-name{
        margin-bottom: 0;
    }
    .product-info .product-short-description{
        width: 10em;
       margin-right: 0;
    }
    .product-info .btn{
        background-color: #A17A35;
        color: white;
        border: none;
        border-radius: 5px;
        margin-left: 12em;
        margin-top: -2rem;
        padding-top:0;
        width: 6.5em;
        height: 1.6em;
        transition: all 0.3s ease;
    }
    </style>