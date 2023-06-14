<template>
    <MyNavbar />
    <br>
    <div class="container">
    <div id="carouselExampleDark"  class="carousel carousel-dark slide" data-bs-ride="carousel">
      <br><br>
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
    </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="heading">
                <h2 class="first-heading">The best Magas in the town</h2>
                <h3 class="second-heading">Made with pure ingredients<br>Price=Rs.250 for 1kg</h3>
                <br>
                <br>
                <button type="button" class="btn btn-warning">Add To bag</button>
                </div>
                 <div>
                <img class="ladu" src="@/assets/ladu.png" alt="">
              </div>
            </div>

            <div class="carousel-item">
              <div class="heading">
                <h2 class="third-heading">Now get 25% discount</h2>
                <h3 class="fourth-heading">On order of 1kg of magas<br>Price=Rs.250 for 1kg</h3>
                <br>
                <br>
                <button type="button" class="btn btn-warning">Add To bag</button>
              </div>
              <div>
              <img class="ladu2" src="@/assets/ladu2.png" alt="">
            </div>
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
.body{
  max-width:100%;
}
.container{
  width: 160em;
  height: 35em;
}
.first-heading{
  font-size: 40px;
  color: #B1622A;
  font-weight: bold;
}
.second-heading{
  font-size: 30px;
  color: #B1622A;
}
.ladu{
    max-width: 30em;
    margin-left: 35em;
    margin-top: -27em;
}
.third-heading{
  font-size: 40px;
    color: #B1622A;
    font-weight: bold;
}
.fourth-heading{
  font-size: 30px;
    color: #B1622A;
}
.ladu2{
  width: 30em;
  margin-left: 35em;
  margin-top: -15em;
}
.btn{
  background-color: #A17A35;
  width: 11em;
  height: 2.3em;
  color: white;
}
/* .carousel-indicators button{
  background-color: #A17A35;
  margin-top: 10em;
  padding: 5px;
} */
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
@media screen and (max-width: 2340px){
  .container{
    max-width: 100%;
    height: 28em;
    margin-left: 15em;
  }
  
  /* .heading{
    margin-left: 10em;
  } */
  .first-heading{
    font-size: 60px;
  }
  .second-heading{
    font-size: 50px;
  }
  .ladu{
    width: 50em;
    margin-top: -20em;
    margin-left: 70em;
  }
  .ladu2{
    width: 40em;
    margin-top: -20em;
    margin-left: 70em;
  }
  .third-heading{
    font-size: 60px;
  }
  .fourth-heading{
    font-size: 50px;
  }
  .btn{
    font-size: 25px;
  }
}
@media screen and (max-width: 1390px){
  .container{
    max-width: 120%;
  }
}
@media screen and (max-width: 990px) {
  .container{
    margin-left: 1em;
    width: 130em;
    margin-top: 5em;
  }
  .ladu{
    width: 30em;
    margin-left: 50em;
    margin-top: -17em;
  }
}
@media screen and (max-width: 890px) {
  .container{
    margin-left: 1em;
    width: 150em;
    height: 30em;
    margin-top: 5em;
  }
  .carousel-inner{
    width: 60em;
  }
}
@media screen and (max-width: 790px) {
  .user{
    margin-left: 2em;
  }
}

@media screen and (max-width: 690px) {
  .container{
    margin-top: 4em;
    width: 100em;
 }
 .first-heading{
  font-size: 3em;
 }
 .second-heading{
  font-size: 2em;
 }
 .ladu{
  margin-left: 39em;
  width: 25em;
 }
 .third-heading{
  font-size: 3em;
 }
 .fourth-heading{
  font-size: 2em;
 }
 
}

@media screen and (max-width: 590px) {
  .container{
    margin-top: 5em;
    width: 100em;
  }
  .ladu{
    width: 27em;
    margin-top: -18em;
  }
  .ladu2{
    width: 25em;
    margin-top: -20em;
    margin-left: 45em;
  }
}
@media screen and (max-width: 490px) {
  .container{
    height: 400px;
    width: 100em;
  }
  .second-heading{
    font-size: 3em;
  }
  .fourth-heading{
    font-size: 3em;
  }
  .ladu{
    width: 35em;
    margin-top: -24em;
    margin-left: 45em;
  }
  .ladu2{
    width: 30em;
    margin-top: -20em;
    margin-left: 45em;
  }
  .btn{
    font-size: 2em;
    align-items: center;
    /* height: 200px; */
  }
}
@media screen and (max-width: 390px){
  .container{
    margin-top: 5em;
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
    width: 30em;
    margin-top: -22em;
    margin-left: 45em;
  }
  .ladu2{
    width: 30em;
    margin-top: -20em;
    margin-left: 45em;
  }
}
</style>


