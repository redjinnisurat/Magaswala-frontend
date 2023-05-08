<template>
<div class="sidebar-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light sidebar-nav  ">
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

</template>

<script>
export default {
    name: "myprofileComp"
}
</script >

<style scopped>
.lmenu {
    padding: 10px;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
}
 

li:hover {

    color: #10b6e9;
    font-weight: 700;
    
}
p:hover{
    color: #BF9742;
}
/* .smenu {
    background-color: #06bcf5;
    height: 570px;
    color: white;
} */
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
    background:#F9F9F9;
    border: solid 2px #BF9742;
    top: 218px;
    left: 257px;
    transform: skew(295deg);
    rotate: 102.5deg;
    border-left: none;
    border-top: none; 
}
.sidebar-nav {
    margin: 0;
    background: #ffffff;
}

.sidebar-container {
    top: 238px;
    margin-left: 140px;
    width: 330px;
    height: 815px;
   
    border: 2px solid #bf9742;
    opacity: 1;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
}

.drop-down-menu-button {
    display: none;
}

.user-details {
    
    background: #f9f9f9;
}

.user-details img {
    margin-top: 33px;
    width: 151px;
    height: 151px;
    border-radius: 50%;
}

.user-details h2 {
    font: normal normal 600 29px/43px Poppins;
    letter-spacing: 0px;
    color: #262626;
}

.user-details p {

    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    color: #262626;
}

.right-bordr {
    content: "";
    margin-left: 12px;
    margin-top: 21px;
}

.right-bordr::after {
    margin-top: 20px;
    margin-bottom: 29px;
    margin-left: 30px;
}

.navbar-collapse {
    background: #f9f9f9 0% 0% no-repeat padding-box;
}

.side-nav-ele {
    display: flex;
    align-items: center;
}

.side-nav-ele p {
    margin-left: 21px;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
}

.response-get {
    background-color: #bf9742;
}

.side-nav-ele img {
    margin-left: 21px;
}

.sidebar-container-mobile {
    display: none;
}

@media (max-width: 600px) {
    .sidebar-container {
        display: none;
    }

    .form-div {
        margin-left: 0;
        width: 344px;
    }

    .sidebar-container-mobile {
        margin-left: 6%;
        display: none;
        width: 320px;
        height: 837px;
        background: #f9f9f9 0% 0% no-repeat padding-box;
        border: 1px solid #bf9742;
        opacity: 1;
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
    }

    .mobile-ele {
        display: flex;
        margin-left: 25px;
    }

    .dropdown-toggle::after {
        margin-top: 10px;
    }

    .mobile-ele p {
        margin-left: 20px;
    }

    link.show {
        color: #bf9742;
    }

    .drop-down-menu-button {
        display: block;
        background-color: #f9f9f9;
        color: #bf9742;
        border: none;
        transform: rotate(270deg);
        height: 10%;
    }

    .btn:hover {
        color: #bf9742;
        background-color: #bf9742;
        border-color: var(--bs-btn-hover-border-color);
    }

    .user-details {
        margin-left: 70px;
    }
}
</style>
