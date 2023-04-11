<template>
  <h3 class="heading col-5 mt-4 pb-2">Users also bought this</h3>
   <div class="col-2 text-right">
    <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
      <i class="fa fa-arrow-left">
        <!-- ::before -->
      </i>
    </a>
    <a class="btn btn-primary mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
      <i class="fa fa-arrow-right">
        <!-- ::before -->
      </i>
    </a>
   </div>
  <div class="container col-12">
    <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
      
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-4 mb-3">
          <div class="card">
            <img src="@/assets/ladu.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="text pt-3 px-2">
                Kesar Magas <br />
                Rs.250/kg <br />
                Made with pure kesar <br /><a href="#" class="btn"
                  >Add to Bag</a
                >
              </p>
            </div>
          </div>
        </div>
        

        <!-- <div class="carousel-item"> -->
          <!-- <div class="row"> -->
            <div class="col-md-4 mb-3">
          <div class="card">
            <img src="@/assets/ladu.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="text pt-3 px-2">
                Kesar Magas <br />
                Rs.125/500gm <br />
                Made with pure kesar <br />
                <a href="#" class="btn">Add to Bag</a>
              </p>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <!-- </div> -->

        <!-- <div class="carousel-item"> -->
          <!-- <div class="row"> -->
            <div class="col-md-4 mb-3">
          <div class="card">
            <img src="@/assets/ladu.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="text pt-3 px-2">
                Kesar Magas <br />
                Rs.250/kg <br />
                Made with pure kesar <br />
                <a href="#" class="btn">Add to Bag</a>
              </p>
            </div>
          </div>
        </div>
          <!-- </div> -->
          <!-- ::after -->
        </div>
        </div>
        <!-- </div> -->
        
      
      <!-- <a class="left carousel-control" href="#carousel-demo" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"> </span>
      </a>
      <a class="right carousel-control" href="#carousel-demo" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"> </span>
      </a> -->
    <!-- </div> -->
    <div class="carousel-item">
            <div class="row">
              <div class="col-md-4 mb-3">
      <div class="card">
  <img src="@/assets/ladu.png" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="text pt-3 px-2">Kesar Magas <br/> Rs.250/kg <br/> Made with pure kesar <br/> <a href="#" class="btn">Add to Bag</a></p>
  </div>
</div>
</div>
</div>
</div>
</div>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "RecommandedProducts",
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
};
</script>

<style scoped>
.heading {
  margin-left: 3.8em;
  font-weight: bold;
  /* width: 20rem; */
  margin-bottom: 1rem!important;
}
.col-2{
  float: right;
  margin-top: -3.5rem;
}
.container {
  margin-left: 5.5em;
  flex: 0 0 auto;
  width: 100%;
}
.carousel{
  position: relative;
}
.carousel-inner{
  position: relative;
  width:100%;
  overflow: hidden;
}
.carousel-item.active{
  /* display: block; */
}
.carousel-item{
  position: relative;
  display: none;
  float:left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform .6s ease-in-out;
}
.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex: 1 0 100%;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x)/ -2);
    margin-left: calc(var(--bs-gutter-x)/ -2);
}
.card img {
  background-color: #edd5a4;
  width: 22em;
}

.card {
  height: 10em;
  padding: 9px;
  width: 45em;
  border-radius: 0px;
  margin-bottom: 14em;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width:0;
  word-wrap: break-word;
  background-clip: border-box;
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
.card-body .btn {
  background-color: #a17a35;
  color: white;
  margin-left: 13em;
  margin-top: -3em;
  width: 6.6em;
  height: 1.7em;
  text-align: center;
   
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
}
 .container{
  max-width: 80em;
  margin-left: 10em;
 } */
}
@media screen and (max-width: 1399px) {
  /* .heading{
  margin-left: 4em;
}
.container{
  margin-left: 6em;
  max-width: 80em;
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
  .container {
    max-width: 80rem;
  }

  .box {
    max-width: 55rem;
  }
}
@media screen and (max-width: 590px) {
  .container {
    width: 70rem;
  }
  .heading {
    font-size: 50px;
    width: 35rem;
  }
  .box {
    max-width: 70rem;
  }
  .box .card-img-top {
    width: 40rem;
  }
  .box .card-body {
    width: 40rem;
    font-size: 40px;
    /* padding: 10px; */
  }
  .box .btn {
    margin-left: 26rem;
    margin-top: -8rem;
    font-size: 30px;
  }
}
@media screen and (max-width: 490px) {
  .container {
    width: 70rem;
    /* margin-top: 20rem; */
  }
  .heading {
    font-size: 50px;
    width: 40rem;
    margin-left: 5rem;
    margin-top: 40rem;
  }
  .box {
    max-width: 37rem;
    padding-right: 0px;
    margin-right: 0px;
  }
  .box .card-img-top {
    width: 35rem;
  }
  .box .card-body {
    width: 35rem;
    font-size: 30px;
    padding: 0px;
  }
  .box .btn {
    margin-left: 25rem;
    margin-top: -8rem;
    font-size: 20px;
  }
}
@media screen and (max-width: 390px) {
  .container {
    width: 70rem;
    margin-top: 10rem;
  }
  .heading {
    font-size: 50px;
    width: 40rem;
    margin-left: 5rem;
    margin-top: 40rem;
    margin-bottom: 10rem;
  }
  .box {
    max-width: 35rem;
    margin-top: -8rem;
    margin-bottom: -8rem;
  }
  .box .card-img-top {
    width: 28rem;
  }
  .box .card-body {
    width: 28rem;
    font-size: 25px;
    padding: 0px;
  }
  .box .btn {
    margin-left: 17rem;
    margin-top: -6rem;
    font-size: 20px;
  }
}
</style>