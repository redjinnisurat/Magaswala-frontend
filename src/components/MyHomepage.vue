<template>
    <MyNavbar />
    <br>
    <div class="container">
    <div id="carouselExampleSlidesOnly"  class="carousel slide" data-bs-ride="carousel">
      <br><br>
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
    </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div>
                <h2 class="first-heading">The best Magas in the town</h2>
                <h3 class="second-heading">Made with pure ingredients<br>Price=Rs.250 for 1kg</h3>
                <br>
                <br>
                <button type="button" class="btn btn-warning">Add To bag</button>
                </div>

                <img class="ladu" src="@/assets/ladu.png" alt="">
            </div>

            <div class="carousel-item">
              <div>
                <h2 class="third-heading">Now get 25% discount</h2>
                <h3 class="fourth-heading">On order of 1kg of magas<br>Price=Rs.250 for 1kg</h3>
                <br>
                <br>
                <button type="button" class="btn btn-warning">Add To bag</button>
              </div>

              <img class="ladu2" src="@/assets/ladu2.png" alt="">
            </div>

        </div>
    </div>
  </div>
    <OurProducts />
   <br>
   
  <KnowAboutUs />
   <br>
   <UserReview />

</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import OurProducts from "@/components/OurProducts.vue";
import KnowAboutUs from "@/components/KnowAboutUs.vue";
import UserReview from "@/components/UserReview.vue";

export default{
    name: "MyHomepage",
    components: { MyNavbar, OurProducts, KnowAboutUs, UserReview },
    
};

</script>

<style scoped>

.first-heading{
    color: #B1622A;
    font-weight: bold;
}
.second-heading{
    color: #B1622A;
}
.ladu{
    width: 25em;
    margin-left: 24em;
    margin-top: -13em;
}
.third-heading{
    color: #B1622A;
    font-weight: bold;
}
.fourth-heading{
    color: #B1622A;
}
.ladu2{
  width: 25em;
  margin-left: 24em;
  margin-top: -13em;
}
.btn{
  background-color: #A17A35;
  width: 11em;
  height: 2.3em;
  color: white;
}
/* .content{
  margin-top: -0.5em;
  font: normal normal medium 55px/83px Poppins;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;

  --fs-xl: 5rem;
  --fs-600: 1.5rem;
  --fs-500: 1,25rem;
  --fs-400: 1rem;
}
content::before {
  content: open-quote;
}

content::after {
  content: close-quote;
} */

@media screen and (max-width: 990px) {
  .container{
    margin-left: 1em;
    width: 100%;
  }
  .ladu{
    width: 20em;
  }
}

@media screen and (max-width: 790px) {
  .user{
    margin-left: 2em;
  }
}

@media screen and (max-width: 690px) {
  .container{
    margin-top: -1em;
    width: 60em;
 }
 .first-heading{
  font-size: 3em;
 }
 .second-heading{
  font-size: 2em;
 }
 .ladu{
  margin-left: 39em;
 }
 .third-heading{
  font-size: 3em;
 }
 .fourth-heading{
  font-size: 2em;
 }
 .ladu{
  margin-left: 39em;
 }
}

@media screen and (max-width: 590px) {
  .container{
    margin-top: -2em;
  }
  .ladu2{
    width: 20em;
    margin-top: -15em;
    margin-left: 45em;
  }
}
@media screen and (max-width: 490px) {
  .second-heading{
    font-size: 3em;
  }
  .fourth-heading{
    font-size: 3em;
  }
  .ladu{
    width: 20em;
    margin-top: -15em;
    margin-left: 45em;
  }
  .ladu2{
    width: 20em;
    margin-top: -15em;
    margin-left: 45em;
  }
  .btn{
    font-size: 2em;
  }
}
@media screen and (max-width: 390px){
  .container{
    margin-top: 1em;
    margin-left: 1em;
  }
  .first-heading{
    font-size: 3em;
  }
  .second-heading{
    font-size: 2.5em;
  }
  .third-heading{
    font-size: 3em;
  }
  .fourth-heading{
    font-size: 2.5em;
  }
  .btn{
    width: 10em;
    font-size: 2em;
  }
  .ladu{
    width: 22em;
    margin-top: -14em;
    margin-left: 45em;
  }
  .ladu2{
    width: 22em;
    margin-top: -14em;
    margin-left: 45em;
  }
}
</style>


