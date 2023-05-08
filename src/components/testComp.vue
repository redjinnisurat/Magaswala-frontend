<template>

 <div class="trengel">
  <div class="sidebar-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light sidebar-nav ">
        <div class="smenu navbar-collapse" id="navbarNav">
            <ul class="navbar-nav flex-column">
                <li class="nav-item">
                    <div class="user-details">
                        <img src="../assets/useprofile.jpg" alt="" />
                        <h2>Zack Gonsalves</h2>
                        <p>ZackGonsalves@gmail.com</p>
                    </div>
                </li>
                
         
                <li class="nav-item">
                    <a class="nav-link side-nav-ele" id="reset-password-id" href="./">
                        <img src="../assets/side_profile.svg" alt="" />
                        <p>Profile</p>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link side-nav-ele" id="reset-password-id" href="./order">
                        <img src="../assets/side_bag.svg" alt="" />
                        <p>Order</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link side-nav-ele" id="reset-password-id" href="./reset">
                        <img src="../assets/side_changepassword.png" alt="" />
                        <p>Reset Password</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link side-nav-ele" href="./payment" id="payment-method">
                        <img src="../assets/side_changepassword.png" alt="" />
                        <p>Payment methods</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link side-nav-ele" href="./manageaddress" id="manage-addres">
                        <img src="../assets/side_manage.png" alt="" />
                        <p>Manage Address</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link side-nav-ele" href="#" id="help-support-ele">
                        <img src="../assets/help.svg" alt="" />
                        <p>Help Support</p>
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link side-nav-ele" href="#" id="term-id">
                        <img src="../assets/side_term.png" alt="" />
                        <p>Term And Conditions</p>
                    </a>
                </li> -->
            </ul>
        </div>
    </nav>
</div>
 <div class="shape">
 
 </div>

 </div>
</template>
<script>
export default {
 name: "testComp",
};
</script>
<style scoped>
.trengel{
position: relative;
height: 561px;
margin-left: 126px;
width: 405px;
background: white;
border: solid 2px #BF9742;
border-right: none;
}
.shape{
 position: absolute;
   width: 289px;
   height: 122px;
   background:red#F9F9F9;
   border: solid 2px #BF9742;
   top: 218px;
   left: 257px;
   transform: skew(295deg);
   rotate: 102.5deg;
   border-left: none;
   border-top: none; 
}
/* .shape2{
 position: absolute;
   width: 269px;
   height: 0px;
   background: white;
   border: solid 2px #BF9742;
   transform: rotate(70deg);
   top: 434px;
   left: 79px;
   border-right: none;
   border-top: none;
} */

</style>
