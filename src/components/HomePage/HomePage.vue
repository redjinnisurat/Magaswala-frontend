<template>
  <div>
    <HeroSection />
  </div>
  <div>
    <section class="productSec">
      <h3>Our Products</h3>
      <hr />
      <ProductsComp />
    </section>
  </div>
  <div>
    <KnowAboutComp />
  </div>
  <div>
    <section class="userReview">
      <h3>User Review</h3>
      <hr />
      <div class="reviewContainer">
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
        <UserReviewComp />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import HeroSection from "./HeroSection.vue";
import ProductsComp from "./ProductsComp.vue";
import KnowAboutComp from "./KnowAboutComp.vue";
import UserReviewComp from "./UserReviewComp.vue";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    HeroSection,
    ProductsComp,
    KnowAboutComp,
    UserReviewComp,
  },
  computed: {},
  methods: {
    ...mapActions(["getAllProducts"]),
  },
  beforeMount() {},
};
</script>

<style>
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

.userReview {
  margin-top: 2rem;
  padding: 2rem;
}

.userReview h3 {
  font-size: 2.2rem;
  font-weight: 400;
  margin-left: 1rem;
  margin-bottom: 0.6rem;
}

.userReview hr {
  margin-bottom: 2rem;
}

.reviewContainer {
  display: flex;
  gap: 3rem;
  overflow: auto;
  padding: 2rem 0rem;
  margin-left: 1rem;
}

.reviewContainer::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 576px) {
  .userReview h3 {
    font-size: 2.6rem;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .userReview h3 {
    font-size: 2.6rem;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .userReview h3 {
    font-size: 2.6rem;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
