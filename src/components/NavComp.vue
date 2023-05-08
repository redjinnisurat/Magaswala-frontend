<template>
<nav class="navbar bg-#F9F9F9 row  " style="margin-top: 3px; ">
    <div class="col-sm-2">
        <a class="container navbar-brand " href="#">
            <img src="../assets/Magaswala.svg" alt="" class="d-inline-block align-text-top" style="    width: 276px;
    height: 76px;">
        </a>
    </div>
    <div class="col col-md-5">
        <form class="d-flex " role="search">
            <div class="form-div" style="    background: white;">
                <input class="nav-input " type="text" placeholder="Search for food peoducts" />
                <button class="btn" type="submit">
                    <img src="../assets/input_search.svg" alt="" />
                </button>
            </div>
        </form>
    </div>

    <div class="col-md-1 col-xl-1 px-sm-1">

        <!-- <img src="../assets/home.svg" />

        <a class="home" href="#"><br>Home</a> -->
        <p><a href="#"><img src="../assets/home.svg"><br>Home</a></p>
    </div>
    <div class="col-md-1 col-xl-1 px-sm-1">

        <!-- <img src="../assets/bag.svg" />

        <a class="home" href="#"><br>Bag</a> -->
        <p><a href="#"><img src="../assets/bag.svg"><br>Bag</a></p>
    </div>
    <div class="col-md-1 col-xl-1 px-sm-1">

        <p><a href="#"><img src="../assets/favourite.svg"><br>Favourite</a></p>

    </div>
    <div class="col-md-1 col-xl-1 px-sm-1">

        <p><a href="#"><img src="../assets/profile.svg"><br>Profile</a></p>

    </div>
    <div class="col-md-1 col-xl-1 px-sm-1">

        <p><a href="#"><img src="../assets/logout.svg"><br>Logout</a></p>
    </div>

</nav>
</template>

<script>
export default {
    name: "navComp",

};
</script>

<style>
.link {
    color: #FFF;
}

.link:hover {
    color: #00F
}

.nav-input {
    outline: 0;
    border: none;
    margin-left: 20px;
}

a {
    text-decoration: none;
    color: black;
}

a:link {
    color: black;
    background-color: transparent;
    text-decoration: none;
}

.nav-ali-bar {
    margin: 0;
    content: "";
    padding: 0;
    display: flex;
}

.form-div {
    margin-left: 140px;
    width: 537px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #ceb070;
    border-radius: 10px;
}

.nav-li {
    margin-top: 29px;
    margin-left: 108px;

    cursor: pointer;
}

.nav-li p {
    margin-left: -5px;
}

nav {
    margin-top: 91px;
    margin-left: 146px;
    margin-right: 140px;
}

p {
    text-align: center;
}

@media (max-width: 600px) {
    nav {
        margin: 0;
    }

    .nav-li {
        display: flex;
        flex-direction: row;
    }

    .nav-li p {
        margin: 1rem;
    }

    .bag-container {
        padding-left: 30px;
    }
}
</style>
