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
            <h5>Kesar Magas</h5>
            <h6>₹250 Per Kg</h6>
            <p>Description</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, accusantium modi deserunt quidem, provident, nam nulla neque eum possimus aspernatur obcaecati ab! Nostrum temporibus nam praesentium quam recusandae repellendus adipisci.</p>
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
            <h4>Checkout</h4>
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
            <h5>Order Summary</h5>
            <p>Items:&emsp;Rs.250</p>
            <p>CGST:&emsp;Rs.10</p>
            <p>SGST:&emsp;Rs.10</p>
            <hr class="hr">
            <p>Total:&emsp;Rs.40</p>
            <p>Delivery:&emsp;Rs.270</p>
            <hr class="hr">
            <p>Total:&emsp;Rs.310</p>
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