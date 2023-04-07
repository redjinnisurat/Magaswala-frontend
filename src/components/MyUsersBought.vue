<template>
  <h3 class="heading mt-4 pb-2">Users also Bought this</h3>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" ref="myCarousel">
  <div class="container d-flex">
    <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/><a href="#" class="btn">Add to Bag</a></p>
      
    </div>
  </div>
  
  <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.125/500gm <br/> Made with pure kesar <br/> <a href="#" class="btn">Add to Bag</a></p>
      
    </div>
  </div>
  
  <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/> <a href="#" class="btn">Add to Bag</a></p>
    </div>
  </div>

  <div class="box">
    <img src="@/assets/ladu.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="text pt-3 px-2">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/> <a href="#" class="btn">Add to Bag</a></p>
    </div>
  </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
        @sliding-start="onSlideStart(this.slide)"
        
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden" ref="myCarousel">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
        @sliding-end="onSlideEnd(this.slide)"
        
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden" ref="myCarousel">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyUsersBought",
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    prev() {
      this.$refs.myCarousel.prev()
    },
    next() {
      this.$refs.myCarousel.next()
    }
  }
  // methods: {
    
  //   onSlideStart(slide) {
  //     // alert("clicked");
  //     this.sliding = true
  //   },
  //   onSlideEnd(slide) {
  //     this.sliding = false
  //   }
  // }
};
</script>

<style scoped>
.heading {
  margin-left: 3.5em;
  font-weight: bold;
}
.container {
  margin-left: 5em;
}

.box img {
  background-color: #edd5a4;
  width: 22em;
}

.box {
  height: 10em;
  padding: 10px;
  width: 45em;
  border-radius: 0px;
}

.card-img-top {
  background: none;
}
.card-body {
  width: 22em;
  background-color: white;
}
/* .card2{
  height: 10em;
  width: 20em;
  padding: 10px;
}

.card3{
  height: 10em;
  width: 20em;
  padding: 10px;
} */
.box .btn {
  background-color: #a17a35;
  color: white;
  margin-left: 11em;
  margin-top: -3em;
  width: 7em;
}

.carousel-control-prev{
  margin-top: 10rem;
}
.carousel-control-next{
  margin-top: 10rem;
  margin-right: -5rem;
}
/* .card2 .btn{
  background-color: #A17A35;
  color: white;
  margin-left: 11em;
  margin-top: -5em;
  width: 7em;
}
.card3 .btn{
  background-color: #A17A35;
  color: white;
  margin-left: 11em;
  margin-top: -5em;
  width: 7em;
} */

@media screen and (max-width: 1800px) {
  /* .heading{
    margin-left: 6.5em;
  } */
  /* .container{
    max-width: 80em;
    margin-left: 10em;
   } */
}

@media screen and (max-width: 993px) {
  .container {
    margin-left: 3em;
    padding-right: 10px;
    width: 50em;
  }

  .card {
    width: 18em;
    padding: 10px;
  }

  /* .card2{
    width: 18em;
  }

  .card3{
    width: 18em;
  } */
}

@media screen and (max-width: 690px) {
  .container{
    max-width: 80em;

    /* padding: 10px; */
  }

  .box{
    padding: 20px;
  }
  .card-img-top{
    padding: 20px;
  }

  .card-body{
    padding-left: 10px;
  }
}

@media screen and (max-width: 438px) {
  .heading {
    width: 12em;
  }
}
</style>