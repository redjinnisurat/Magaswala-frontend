<template>
    <div class="sidebar-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light sidebar-nav">
        <div class="navbar-collapse" id="navbarNav">
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <div class="user-details">
                <img src="../assets/useprofile.jpg" alt="" />
                <h2>Zack Gonsalves</h2>
                <p>ZackGonsalves@gmail.com</p>
              </div>
            </li>
            <li class="nav-item laptop">
              <a
                class="nav-link side-nav-ele"
                href="#"
                id="side-profile"
                @click="resetPRofileColorChange()"
              >
                <img src="../assets/side_profile.svg" alt="" />
                <p>profile</p>
              </a>
            </li>
  
            <li class="nav-item">
              <a
                class="nav-link side-nav-ele"
                href="#"
                v-on:click="orderColorChange()"
                id="order-ele"
              >
                <img src="../assets/side_bag.svg" alt="" />
                <p>Orders</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link side-nav-ele"
                id="reset-password-id"
                href="#"
                @click="resetPasswordColorChange()"
              >
                <img src="../assets/side_changepassword.png" alt="" />
                <p>Reset Password</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link side-nav-ele"
                href="#"
                id="payment-method"
                v-on:click="paymentColorChange()"
              >
                <img src="../assets/side_changepassword.png" alt="" />
                <p>Payment methods</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link side-nav-ele"
                href="#"
                id="manage-addres"
                v-on:click="manageAdressColorChange()"
              >
                <img src="../assets/side_manage.png" alt="" />
                <p>Manage Address</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link side-nav-ele"
                href="#"
                id="help-support-ele"
                @click="helpSupportColorChange()"
              >
                <img src="../assets/help.svg" alt="" />
                <p>Help Support</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link side-nav-ele"
                href="#"
                id="term-id"
                @click="termColorChange()"
              >
                <img src="../assets/side_term.png" alt="" />
                <p>Term And Conditions</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle drop-down-menu-button"
        id="drop-down-menu-button-id"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        @click="showMobileSidebar()"
      ></button>
      <div class="dropdown-menu dropdown-menu-right">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
    <div class="sidebar-container-mobile" id="side-bar-mobile-id">
      <nav class="navbar navbar-expand-lg navbar-light bg-light sidebar-nav">
        <div class="navbar-collapse" id="navbarNav">
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <div class="user-details">
                <img src="../assets/useprofile.jpg" alt="" />
                <h2>Zack Gonsalves</h2>
                <p 
>ZackGonsalves@gmail.com</p>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mobile-ele"
                href="./components/profileComp.vue"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/side_profile.svg" alt="" />
                <p>profile</p>
              </a>
  
              <div class="dropdown-menu">profile</div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mobile-ele"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/side_bag.svg" alt="" />
                <p>Orders</p>
              </a>
  
              <div class="dropdown-menu">order</div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mobile-ele"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/side_changepassword.png" alt="" />
                <p>Reset Password</p>
              </a>
  
              <div class="dropdown-menu">Reset Password</div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mobile-ele"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/side_changepassword.png" alt="" />
                <p>Payment methods</p>
              </a>
  
              <div class="dropdown-menu">Reset Password</div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mobile-ele"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/side_manage.png" alt="" />
                <p>Manage Address</p>
              </a>
  
              <div class="dropdown-menu">Reset Password</div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mobile-ele"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/help.svg" alt="" />
                <p>Help Support</p>
              </a>
  
              <div class="dropdown-menu">Reset Password</div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle mobile-ele"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/side_term.png" alt="" />
                <p>Term Conditions</p>
              </a>
  
              <div class="dropdown-menu">Reset Password</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
 <script>
 export default{
    name:"myprofileComp"
 }
 </script>
  <style>
  .sidebar-nav {
    margin: 0;
    background: #ffffff;
  }
  .sidebar-container {
    top: 238px;
    margin-left: 140px;
    width: 405px;
    height: 837px;
    background: #f9f9f9 0% 0% no-repeat padding-box;
    border: 1px solid #bf9742;
    opacity: 1;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }
  .drop-down-menu-button {
    display: none;
  }
  .user-details {
    margin-left: 32px;
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
    text-align: left;
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
      background-color: #f9fcff;
      border-color: var(--bs-btn-hover-border-color);
    }
    .user-details {
      margin-left: 70px;
    }
  }
  </style>