<template>
    <div class="container-xl">
    <div class="row">
    <div class="col-3">
    <img id="magas" src="../assets/image/Magaswala.png" /></div>
    <div class="col-5">
    <input id="search" type="text" placeholder="Search for food Product"></div>
    <div class="col-4">
    <img id="i" src="../assets/image/home.png" />
    <img id="i" src="../assets/image/bag.png" />
    <router-link to="/favourite"><img id="i" src="../assets/image/favourite.png" /></router-link>
    <img id="i" src="../assets/image/profile.svg" />
    <img id="i" src="../assets/image/switch.svg" /></div>
    </div> 
    </div><br>
    <br>
    <div class="container">
    <div class="row">
        <div class="col" id="bg">
            <img class="responsive" src="../assets/image/sweet.png" width="490" height="290" />
            <h4>Kesar Magas &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;<img id="heart" src="../assets/image/redheart.svg"></h4>
            <h6><span style="color: #E6B325; font-size: 24px;">₹250 Per Kg &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;<img src="../assets/image/Star.svg" id="st">
        <img src="../assets/image/Star.svg" id="st"><img src="../assets/image/Star.svg" id="st"><img src="../assets/image/Star.svg" id="st">
        <img src="../assets/image/halfstar.svg" id="st"></span></h6>
            <p>Description</p>
            <p><span style="font-size: 13px;"> ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, accusantium modi deserunt quidem, provident, nam nulla neque eum possimus aspernatur obcaecati ab! Nostrum temporibus nam praesentium quam recusandae repellendus adipisci.</span></p>
            <div class="flex items-center justify-center gap-x-4">
            <p><label for="K">1Kg </label>&emsp;&emsp;
            <button type="button" @click="inc" id="Inc"><span style="text-align: center;">+</span></button>
            {{ count }}
            <button @click="dec" id="Dec">-</button>&emsp;&emsp;&emsp;
        <input type="radio" name="select" id="K"></p>
        <label for="G">500G&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;</label> <input type="radio" name="select" id="G"><br>
        <label for="g">250G&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;</label> <input type="radio" name="select" id="g">&emsp;&emsp;&emsp;
        <button type="button" id="btn">Add to bag</button> 
    </div> 
        </div>
        <div class="col">
            <div class="verticaline">
            <br>
            <h5>Checkout</h5><br>
            <h5>Payment Options</h5><br>
            <h6><label><img id="pay" src="../assets/image/card.png"> Credit Card/Debit Card&emsp;&emsp;&emsp;</label>
            <input type="radio" id="K" name="payment">&emsp;<br></h6>
            <h6><label><img id="pay" src="../assets/image/applepay.png"> Apple Pay &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;</label>
            <input type="radio" id="K" name="payment">&emsp;<br></h6>
            <h6><label><img id="pay" src="../assets/image/upi.jpg"> UPI &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&ensp;&emsp;&emsp;&emsp;&emsp;</label>
            <input type="radio" id="K" name="payment">&emsp;<br></h6>
            <h6><label><img id="pay" src="../assets/image/cod.png"> Pay on Delivery &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</label>
            <input type="radio" id="K" name="payment">&emsp;<br></h6>
        </div> 
        <div class="col">
        <div id="right">
            <h5><span style="font-size: 17px;">Order Summary</span></h5><br>
            <p>Items:&emsp; &emsp; &emsp; &emsp;&emsp;Rs.250</p>
            <p>CGST:&emsp; &emsp; &emsp; &emsp;&emsp; Rs.10</p>
            <p>SGST:&emsp; &emsp; &emsp; &emsp;&emsp; Rs.10</p>
            <hr class="hr">
            <p>Total:&emsp; &emsp; &emsp; &emsp;&emsp; Rs.40</p>
            <p>Delivery:&emsp;&emsp; &emsp; &emsp;Rs.270</p>
            <hr class="hr">
            <p>Total:&emsp; &emsp; &emsp; &emsp;&emsp;Rs.310</p>
        </div>
      </div>
        <br>
        <br>
        <br>
        <div class="col">
        <h5> &emsp;Shipping To</h5><br>
        <div id="address">
         <p>&ensp;<span style="color: black;"> &emsp; Home Address</span><br>
         &ensp;<label><input type="radio" name="address1">&ensp;<span style="font-size: 15px;">(269) 444-6853<br>
          &ensp;&ensp; Road Number 5649 Akali</span></label></p>
        </div><br>
        <div id="address">
         <p>&ensp;<span style="color: black;"> &emsp;Office Address</span><br>
         &ensp;<label> <input type="radio" name="address1">&ensp;<span style="font-size: 15px;">(269) 444-2596<br>
          &ensp;&ensp; Road Number 2403 Blogshow</span></label></p>
        </div><br>
        <button type="button" id="mpay">Make Payment</button><br>
        </div>
      </div>
    </div><br>
    <br>
<div class="row">
      <h5>Recommended Products</h5>
    </div><br>
    <div class="row">
    <div class="col-4">
        <div id="product1">
        <img id="product" src="../assets/image/sweet.png" />
        <p>&emsp;Kesar Magas<br>
        &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
        &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
        &ensp;</p>
    </div>  
    </div>
    <div class="col-4">
        <div id="product1">
        <img id="product" src="../assets/image/sweet.png" />
        <p>&emsp;Kesar Magas<br>
        &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
        &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
        &ensp;</p>
    </div>
</div>
    <div class="col-4">
        <div id="product1">
        <img id="product" src="../assets/image/sweet.png" />
        <p>&emsp;Kesar Magas<br>
        &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
        &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
        &ensp;</p>
    </div>
</div>
</div><br>
<div class="row">
      <h5>Most Bought Products</h5>
    </div><br>
    <div class="row">  
    <div class="col-4"> 
        <div id="product1">
        <img id="product" src="../assets/image/sweet.png" />
        <p>&emsp;Kesar Magas<br>
        &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
        &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
        &ensp;</p>
    </div>  
    </div>
    <div class="col-4">
        <div id="product1">
        <img id="product" src="../assets/image/sweet.png" />
        <p>&emsp;Kesar Magas<br>
        &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
        &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
        &ensp;</p>
    </div>
</div>
    <div class="col-4">
        <div id="product1">
        <img id="product" src="../assets/image/sweet.png" />
        <p>&emsp;Kesar Magas<br>
        &emsp;<span style="color: #E6B325;">Rs.250/kg</span><br>
        &emsp;Made with pure kesar &emsp;&emsp;&emsp;&emsp;<button id="add">Add to bag</button><br>
        &ensp;</p>
    </div>
</div>
</div>
    <div class="row">
      <div class="col">
        <h5>Customer Reviews</h5><br>
        <h5><img src="../assets/image/Star.svg">
        <img src="../assets/image/Star.svg"><img src="../assets/image/Star.svg"><img src="../assets/image/Star.svg">
        <img src="../assets/image/halfstar.svg"> &emsp; 4.5 Stars out of 5</h5><br>
        <h5><textarea placeholder="Add your Review" rows="4" cols="50"></textarea></h5>
        <p><img src="../assets/image/Star5.svg" id="star">
        <img src="../assets/image/Star5.svg" id="star"><img src="../assets/image/Star5.svg" id="star"><img src="../assets/image/Star5.svg" id="star">
        <img src="../assets/image/Star5.svg" id="star"> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <button type="button" id="submit">Submit</button></p>
      </div>
    </div>
    <div class="row">
      <hr class="horizon">
       <div class="col">
        <div class="vl">
        <h5>Top Reviews</h5>
        <br>
        <p><img src="../assets/image/profile.png" id="prop"> Rahul <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg">
          <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star5.svg"><img id="st" src="../assets/image/Star5.svg"></p>
        <p class="rev">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of
           the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is 
          pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again 
          is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and 
          pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain 
          some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain 
          that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and</p>
          <p><img src="../assets/image/profile.png" id="prop"> Rahul <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg">
          <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star5.svg"></p>
        <p class="rev">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of
           the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is 
          pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again 
          is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and 
          pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain 
          some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain 
          that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and</p>
          <p><img src="../assets/image/profile.png" id="prop"> Rahul <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg">
          <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg"></p>
        <p class="rev">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of
           the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is 
          pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again 
          is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and 
          pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain 
          some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain 
          that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and</p>
        <a href=""><b>See all review</b></a>
        </div> 
        </div>
       <div class="col">
        <h5>Reviews with same ratings</h5>
        <br>
        <p><img src="../assets/image/profile.png" id="prop"> Rahul <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg">
          <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star5.svg"><img id="st" src="../assets/image/Star5.svg"></p>
        <p class="rev">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of
           the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is 
          pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again 
          is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and 
          pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain 
          some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain 
          that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and</p>
          <p><img src="../assets/image/profile.png" id="prop"> Rahul <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg">
          <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star5.svg"><img id="st" src="../assets/image/Star5.svg"></p>
        <p class="rev">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of
           the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is 
          pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again 
          is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and 
          pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain 
          some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain 
          that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and</p>
          <p><img src="../assets/image/profile.png" id="prop"> Rahul <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star.svg">
          <img id="st" src="../assets/image/Star.svg"><img id="st" src="../assets/image/Star5.svg"><img id="st" src="../assets/image/Star5.svg"></p>
        <p class="rev">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of
           the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is 
          pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again 
          is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and 
          pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain 
          some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain 
          that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and</p>
          <a href=""><b>See all review</b></a>
        </div>
    </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
          count:1,
        };
    },
    methods:{
      inc(){
        this.count++;
      },
      dec(){
        this.count--;
      },
    },
};
</script>

<style scoped src="../style.css">

</style>