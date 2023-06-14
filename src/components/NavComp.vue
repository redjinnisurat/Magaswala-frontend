<template>
<nav>
    <div class="logo"><img src="../assets/Magaswala.png"></div>
    <form class="search-bar">
      <input type="text" placeholder="Search...">
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
    <input type="checkbox" id="click"/>
   <label for="click" class="menu-btn" >
      <i class="fas fa-bars"></i>
   </label>
    <ul :class="{'navbar-collapse': isNavbarOpen}">
      
      <li :class="{active: activeLink === 'home'}" >
          <a><span class="nav-icon" id="home-icon" ></span>Home</a>
          </li>

      <li :class="{active: activeLink === 'bag'}">
        <a ><span class="nav-icon" id="bag-icon"></span>Bag</a>
      </li>
      <li :class="{active: activeLink === 'favorites'}" >
        <a><span class="nav-icon" id="fav-icon"></span>Favourites</a>
      </li>
      <li :class="{active: activeLink === 'profile'}">
        <a href="./"><span class="nav-icon" id="profile-icon"></span>Profile</a>
      </li>
      <li :class="{active: activeLink === 'logout'}" >
        <a href="./test"><span class="nav-icon" id="logout-icon"></span>Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "navComp",

};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 font: normal normal medium 20px/30px Poppins;
}

.navbar-toggle {
  display: none; /* Hide the button by default */
}
.navbar-toggle-icon {
  display: inline-block;
  width: 20px;
  height: 2px;
  background-color: #fff;
  margin: 4px 0;
}
@media (min-width: 940px) {
  .menu-btn{
      display: none;
  }
  nav ul {
      display: flex;
  }

  nav ul li{
      display: grid;
      
          margin: 0 20px;
      color: #707070;

  }

  #click{

display: none;
}

}

/* Media query for screens smaller than 900px */
@media (max-width: 940px) {

  .menu-btn{
display: block;
font-size: 22px;
cursor: pointer;
transition: 0.2s ease-out;
}

nav .menu-btn i{
color: #B1622A;
}

nav .search-bar {
display: none;

}
#click{
  display: none;
}

#click:checked ~ ul{

  left: 0%;

  
}
#click:checked ~ .menu-btn i::before{
  content: "\f00d     ";
}
nav ul {
position: fixed;
top: 150px;
left: -100%;
height: 100vh;
width: 100%;
display: block;
text-align: center;
transition:all 0.3s ease; /* Add transition */
}

#logout-icon ,#profile-icon ,#fav-icon ,#bag-icon,#home-icon{
display: none;
}

.navbar-toggle {
display: block; /* Show the button */
}

nav ul li {
margin:  40px 0;
height: 10%;
margin-top: 10%;
align-items: center;
display: flex;
justify-content: center;
color: #707070;
transition: 0.9s ease-in-out;
}

 
  
}
/* Define the background images for each icon */
nav ul li.active #home-icon {
background-image: url('../assets/homeUpdate.png');
}

nav ul li.active #bag-icon {
background-image: url('../assets/bagUpdated.png');
}

nav ul li.active #fav-icon {
background-image: url('../assets/loveupdate.png');
}

nav ul li.active #profile-icon {
background-image: url('../assets/profileImage1.png');
}

nav ul li.active #logout-icon {
background-image: url('../assets/home.png');
}
#bag-icon {
background-image: url('../assets/bag.png');
}

#home-icon {
background-image: url('../assets/home.png');
}

#fav-icon {
background-image: url('../assets/favourite.png');
}

#profile-icon {
background-image: url('../assets/profile1.png');
}

#logout-icon {
background-image: url('../assets/home.png');
}

nav ul li:nth-child(1):hover #home-icon,
nav ul li:nth-child(1):active #home-icon {
background-image: url('../assets/homeUpdate.png');
}

nav ul li:nth-child(2):hover #bag-icon,
nav ul li:nth-child(2):active #bag-icon {
background-image: url('../assets/bagUpdated.png');
}

nav ul li:nth-child(3):hover #fav-icon,
nav ul li:nth-child(3):active #fav-icon {
background-image: url('../assets/loveupdate.png');
}

nav ul li:nth-child(4):hover #profile-icon,
nav ul li:nth-child(4):active #profile-icon {
background-image: url('../assets/profileImage1.png');
}

nav ul li:nth-child(5):hover #logout-icon,
nav ul li:nth-child(5):active #logout-icon {
background-image: url('../assets/home.png');
}


/* Define the styles for the nav icons */
.nav-icon {
display: grid;
width: 29px;
height: 29px;
background-size: contain;
margin: 0 auto;
background-repeat: no-repeat;
}

/* Define the styles for the nav links */
nav ul {

list-style: none; 
}

nav ul li {
margin: 0 20px;
cursor: pointer;

}
nav ul :hover {

cursor: pointer;
color: #B1622A;
}


nav ul li a {
color: #838282;
text-decoration: none;
font-size: 18px;


}
nav ul li.active {
color: #B1622A;
}
ul {
list-style: none;
padding: 0;
margin: 0;
}

.search-bar {
display: flex;
align-items: center;
margin-right: 1rem;
}

.search-bar input[type="text"] {
  border:0.5px solid #CEB070;
  border-radius:10px ;
padding: 0.7rem;
margin-right: 0.5rem;
font-size: 1rem;
margin-left: 5%;
width: 30rem;
}

.search-bar input[type="text"]:focus {

border: 1px solid  #CEB070;
}

.search-bar button[type="submit"] {
border: none;
background-color: transparent;
cursor: pointer;
margin-left:-10% ;
}

.search-bar button[type="submit"] i {
color: #707070;
font-size: 1.5rem;

}

nav{
  
  height: 100px;
  background: #F9F9F9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font: normal normal medium 20px/30px Poppins;
  width: 100%;
  max-width: 100%;

  
}
nav ul {
  /* display: flex; */
  list-style: none; 
}

nav ul li a{

  color: #838282;
  text-decoration: none;
  font: normal normal medium 20px/30px Poppins;
letter-spacing: 0px;
font-weight: 450;
}
nav {
position: sticky;
top: 0;

padding: 50px;
width: 100%;
z-index: 999;
}

nav a {
color: #333;
text-decoration: none;
margin-right: 10px;
font-size: 16px;
}

nav a:hover {
color: #BF9742;
}
</style>
