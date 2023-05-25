<template>
    <nav class="navbar navbar-expand-sm">
        <a href="#" class="navbar-brand">
            <img src="@/assets/Magaswala.png" alt="">
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="myMenu">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="#" class="nav-link"><img src="@/assets/home.png" alt=""></a>Home</li>
            <li class="nav-item"><a href="#" class="nav-link"><img src="@/assets/bag.png" alt=""></a>Bag</li>
            <li class="nav-item"><a href="#" class="nav-link"><img src="@/assets/favorite.png" alt=""></a>Favourites</li>
            <li class="nav-item"><a href="#" class="nav-link"><img src="@/assets/profile.png" alt=""></a>Profile</li>
            <li class="nav-item"><a href="#" class="nav-link"><img src="@/assets/logout.png" alt=""></a>Logout</li>
            
        </ul>
      </div>
    </nav>
    


</template>

<script>
  export default{
    name: "ResponsiveNavbar",
  }
</script>