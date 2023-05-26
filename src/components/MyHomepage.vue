<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div>
                <h2 class="first-heading">The best Magas in the town</h2>
                <h3 class="second-heading">Made with pure ingredients<br>Price=Rs.250 for 1kg</h3>
                <br>
                <br>
                <button type="button" class="btn btn-warning">Add To bag</button>
                </div>

                <img class="ladu" src="@/assets/ladu.png" alt="" style="width: 25em;">
            </div>

            <div class="carousel-item">
              <div>
                <h2>Now get 25% discount</h2>
                <h3>On order of 1kg of magas<br>Price=Rs.250 for 1kg</h3>
                <br>
                <br>
                <button type="button" class="btn btn-warning">Add To bag</button>
              </div>

              <img src="@/assets/ladu2.png" alt="" style="width: 25em;">
            </div>

        </div>

    </div>
</template>

<script>
export default{
    name: "MyHomepage",
}
</script>

<style scoped>
.first-heading{
    color: #B1622A;
}
.second-heading{
    color: #B1622A;
}
.ladu{
    margin-left: 24em;
    margin-top: -13em;
}
</style>