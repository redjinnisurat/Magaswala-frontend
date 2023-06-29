<template>
    <div class="gg">
      <div class="sidebar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light sidebar-nav">
          <div class="smenu navbar-collapse" id="navbarNav">
            <ul class="navbar-nav flex-column" style="    height: 0px;">
              <li class="nav-item ">
                <div class="user-details ">
                  <img src="../assets/useprofile.jpg" alt="" />
                  <h2>Zack Gonsalves</h2>
                  <p>ZackGonsalves@gmail.com</p>
                </div>
              </li>
  
              <li class="nav-item">
                <a class="nav-link side-nav-ele t" id="reset-password-id" href="./">
                  <img class="img"  src="../assets/side-profile.png" alt="" />
                  <p>Profile</p>
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link side-nav-ele t" id="reset-password-id" href="./order">
                  <img class="img" src="../assets/side_bag.svg" alt="" />
                  <p>Order</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link side-nav-ele t" id="reset-password-id" href="./reset">
                  <img class="img" src="../assets/side_changepassword.png" alt="" />
                  <p>Reset Password</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link side-nav-ele t" href="./payment" id="payment-method">
                  <img class="img" src="../assets/side_changepassword.png" alt="" />
                  <p>Payment methods</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link side-nav-ele t" href="./manageaddress" id="manage-addres">
                  <img class="img" src="../assets/side_manage.png" alt="" />
                  <p>Manage Address</p>
                </a>
              </li>
              <li class="nav-item">                                                                                                                                                                                                                                                                                                                                                                                                                                               
                <a class="nav-link side-nav-ele t" href="./help" id="help-support-ele">
                  <img class="img" src="../assets/help.svg" alt="" />
                  <p>Help & Support</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link side-nav-ele t" href="./term" id="help-support-ele">
                  <img class="img" src="../assets/side_term.png" alt="" />
                  <p>Term & Condition</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link side-nav-ele t" href="#                                                                                                                                                                                                                                                                                                                            " id="help-support-ele">
                  <img class="img" src="../assets/logoutt.png" alt="" />
                  <p>LogOut</p>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "testComp",
  };
  </script>
  
  <style scoped>
 .t{
  padding: 2px;
 }
 .img{
 
    width: 13px;
    height: 13px;
    margin-bottom: 15px;
 }
  .gg {
  height: 536px;
    width: 239px;
 
    position: relative;
    overflow: hidden;
    border: solid 3px #bf9742;
    border-right: none;
    text-align: start;
}

.gg:before,
.gg:after {
  content: "";
    display: block;
    height: 100%;
    width: 147%;
    transform: rotate(75deg);
    box-shadow: 4px 0 0 3px #bf9742;
    position: absolute;
    top: 90px;
    right: -170%;
}

.gg:after {
  transform: rotate(106deg);
    left: 123%;
    box-shadow: -4px 0 0 3px #bf9742;
    top: -100px;
    top: -99px;
}
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
          width: 345px; 
          
          height: 687px;
      
         
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
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-left: 60px;
      }
      
      .user-details h2 {
        font: normal normal 600 17px/43px Poppins;
      letter-spacing: 0px;
      color: #262626;
      text-align: center;
      }
      
      .user-details p {
      
          
      font: normal normal normal 10px/0px Poppins;
      letter-spacing: 0px;
      color: #262626;
      
    text-align: center;

  
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
          margin-left: 12px;
      
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
  
      }
      
      .response-get {
          background-color: #bf9742;
      }
      
      .side-nav-ele img {
          margin-left: 15px;
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
  