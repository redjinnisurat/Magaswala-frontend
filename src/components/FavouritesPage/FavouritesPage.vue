<template>
  <section class="favSec">
    <h3>Favourites</h3>
    <hr />
    <FavComp />
  </section>
  <section class="productSec">
    <h3>Most bought in December</h3>
    <hr />
    <ProductsComp />
  </section>
</template>

<script>
import FavComp from "./FavComp.vue";
import ProductsComp from "../HomePage/ProductsComp.vue";

export default {
  name: "FavouritesPage",
  components: {
    FavComp,
    ProductsComp,
  },
};
</script>

<style scoped>
.favSec {
  background-color: var(--btn-font-color);
  border: 0.2rem solid var(--border-color);
  border-radius: 0.5rem;
  padding: 2.5rem 1.5rem;
  margin: 3rem 2rem;
}

.favSec h3 {
  font-size: 2.9rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--heading-color);
}

.favSec hr {
  margin-bottom: 2rem;
}

.productSec {
  padding: 2rem;
}

.productSec h3 {
  font-size: 2.2rem;
  font-weight: 400;
  margin-left: 1rem;
  margin-bottom: 0.6rem;
}

.productSec hr {
  margin-bottom: 2rem;
}

@media only screen and (max-width: 576px) {
  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
