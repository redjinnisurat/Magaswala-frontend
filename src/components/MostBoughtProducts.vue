<template>
  <section>
       <h2 class="heading">Most Bought Product</h2>
       <button class="pre-btn" @click="prebtn">
           <img src="@/assets/right_arrow.png" alt="">
       </button>
       <button class="nxt-btn">
           <img src="@/assets/right_arrow.png" alt="">
       </button>

       <div class="product-container d-flex">
           <div class="product-card">
               <div class="product-image">
                   <img src="@/assets/ladu.png" alt="">
               </div>
               <div class="product-info">
                   <p class="product-name">Kesar magas</p>
                   <span class="price">Rs. 250/kg</span>
                   <p class="product-short-description">Made with pure kesar</p>
                   <a href="#" class="btn">Add to Bag</a>
               </div>
           </div>

           <div class="product-card">
               <div class="product-image">
                   <img src="@/assets/ladu.png" alt="">
               </div>
               <div class="product-info">
                   <p class="product-name">Kesar magas</p>
                   <span class="price">Rs. 125/500gm</span>
                   <p class="product-short-description">Made with pure kesar</p>
                   <button href="#" class="btn">Add to Bag</button>
               </div>
           </div>

           <div class="product-card">
               <div class="product-image">
                   <img src="@/assets/ladu.png" alt="">
               </div>
               <div class="product-info">
                   <p class="product-name">Kesar magas</p>
                   <span class="price">Rs. 250/kg</span>
                   <p class="product-short-description">Made with pure kesar</p>
                   <button href="#" class="btn">Add to Bag</button>
               </div>
           </div>

           <div class="product-card">
               <div class="product-image">
                   <img src="@/assets/ladu.png" alt="">
               </div>
               <div class="product-info">
                   <p class="product-name">Kesar magas</p>
                   <span class="price">Rs. 125/500gm</span>
                   <p class="product-short-description">Made with pure kesar</p>
                   <button href="#" class="btn">Add to Bag</button>
               </div>
           </div>

           <div class="product-card">
               <div class="product-image">
                   <img src="@/assets/ladu.png" alt="">
               </div>
               <div class="product-info">
                   <p class="product-name">Kesar magas</p>
                   <span class="price">Rs. 250/kg</span>
                   <p class="product-short-description">Made with pure kesar</p>
                   <button href="#" class="btn">Add to Bag</button>
               </div>
           </div>

       </div>
   </section>
</template>

<script>
import { ref } from "vue";
 export default{
   name: "RecommandedProducts",
   setup() {
   const isOpen = ref(false);
   return { isOpen };
 },

 prebtn() {
   const productContainers = [...document.querySelectorAll('.product-container')];
   const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
   const preBtn = [...document.querySelectorAll('.pre-btn')];

   productContainers.forEach((item, i) => {
       let containerDimensions = item.getBoundingClientRect();
       let containerWidth = containerDimensions.width;

       nxtBtn[i].addEventListener('click', () => {
           item.scrollLeft += containerWidth;
       })

       preBtn[i].addEventListener('click', () => {
           item.scrollLeft -= containerWidth;
       })
   })
 },
 };
</script>

<style scoped>
.heading{
 margin-top: -13em;
 margin-left: 100px;
}
.product-container{
 margin-top: 25px;
 width: 30em;
 margin-left: 5em;
 overflow:initial;
}
.product-card{
   width: 22em;
   margin-left: 1em;
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
   height: 6em;
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
   margin-left: 13em;
   margin-top: -5rem;
   padding-top:0;
   width: 6.5em;
   height: 1.6em;
   transition: all 0.3s ease;
}
.pre-btn,
.nxt-btn {
   border: none;
   width: 2vw;
   height: 8vh;
   position: absolute;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff, 100%);
   cursor: pointer;
   z-index: 9;
   margin-top: 54em;
   /* background: #edd5a4; */
}
.pre-btn{
  margin-left: 3em;
   transform: rotate(180deg);
}
.nxt-btn{
   margin-left: 73em;
   /* float: right; */
}
/* .pre-btn img{
   width: 1.5em;
}
.nxt-btn img{
   width: 1.5em;
} */
.pre-btn img,
.nxt-btn img {
   width: 1.3em;
   opacity: 0.2;
   background: none;
}

.pre-btn:hover img,
.nxt-btn:hover img {
   opacity: 1;
}

@media screen and (max-width: 990px) {
    .pre-btn,
    .nxt-btn{
        margin-top: 84em;
    }
}

@media screen and (max-width: 690px) {
    .heading{
        margin-top: -16em;
    }
    .pre-btn,
    .nxt-btn{
        margin-top: 126em;
    }
}

@media screen and (max-width: 490px) {
    .pre-btn,
    .nxt-btn{
        margin-top: 205em;
    }
}


</style>