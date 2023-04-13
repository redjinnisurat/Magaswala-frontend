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
            <img class="p" src="../assets/image/sweet.png" />
            <h4>Kesar Magas &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;<img id="heart" src="../assets/image/redheart.svg"></h4>
            <h6><span style="color: #E6B325; font-size: 24px;">₹250 Per Kg &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</span></h6>
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
            <h4>Checkout</h4><br>
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
        <div id="right">
            <h5><span style="font-size: 18px;">Order Summary</span></h5><br>
            <p>Items:&emsp; &emsp; &emsp; &emsp; &emsp;Rs.250</p>
            <p>CGST:&emsp; &emsp; &emsp; &emsp; &emsp; Rs.10</p>
            <p>SGST:&emsp; &emsp; &emsp; &emsp; &emsp; Rs.10</p>
            <hr class="hr">
            <p>Total:&emsp; &emsp; &emsp; &emsp; &emsp; Rs.40</p>
            <p>Delivery:&emsp;&emsp; &emsp; &emsp; Rs.270</p>
            <hr class="hr">
            <p>Total:&emsp; &emsp; &emsp; &emsp; &emsp;Rs.310</p>
        </div>
        <br>
        <br>
        <br>
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
    </div><br>
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