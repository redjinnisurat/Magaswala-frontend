<template>
  <div
    v-if="
      product1 != undefined || product2 != undefined || product3 != undefined
    "
  >
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
          v-if="product1 != undefined"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          v-if="product2 != undefined"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          v-if="product3 != undefined"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" v-if="product1 != undefined">
          <section class="heroSec">
            <div class="heroContent">
              <h1>The Best Magas in the town</h1>
              <h3>Made with pure ingredients</h3>
              <h4>
                Price=Rs.{{ product1.price }} for
                {{ product1.quantity }}
              </h4>
              <button v-on:click="addToBag(product1.id)">Add to basket</button>
            </div>
            <div
              class="d-flex align-items-center justify-content-end heroImage"
            >
              <img
                :src="product1.image ? product1.image : defaulImage"
                class="d-block w-100 rounded-5"
                alt="Image"
              />
            </div>
          </section>
        </div>
        <div class="carousel-item" v-if="product2 != undefined">
          <section class="heroSec">
            <div class="heroContent">
              <h1>Now get 25% discount</h1>
              <h3>On order of 1Kg of magas</h3>
              <h4>
                Price=Rs.{{ product2.price }} for
                {{ product2.quantity }}
              </h4>
              <button v-on:click="addToBag(product2.id)">Add to basket</button>
            </div>
            <div
              class="d-flex align-items-center justify-content-end heroImage"
            >
              <img
                :src="product2.image ? product1.image : defaulImage"
                class="d-block w-100 rounded-5"
                alt="Image"
              />
            </div>
          </section>
        </div>
        <div class="carousel-item" v-if="product3 != undefined">
          <section class="heroSec">
            <div class="heroContent">
              <h1>The Best Magas in the town</h1>
              <h3>Made with pure ingredients</h3>
              <h4>
                Price=Rs.{{ product3.price }} for
                {{ product3.quantity }}
              </h4>
              <button v-on:click="addToBag(product3.id)">Add to basket</button>
            </div>
            <div
              class="d-flex align-items-center justify-content-end heroImage"
            >
              <img
                :src="product3.image ? product3.image : defaulImage"
                class="d-block w-100 rounded-5"
                alt="Image"
              />
            </div>
          </section>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 40rem"
    v-else
  >
    <h3 class="text-muted">No Items Found !!</h3>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "HeroSection",
  data() {
    return {
      products: [],
      last_index: 0,
      product1: undefined,
      product2: undefined,
      product3: undefined,
      defaulImage: require("./assets/laddo_img_2.jpeg"),
    };
  },
  computed: {
    productArray() {
      return this.$store.state.module.products;
    },
  },
  methods: {
    ...mapActions(["getAllProducts"]),
    async addToBag(id) {
      this.$store.dispatch("addToCart", {
        product_id: id,
        qty: 1,
      });
      await Swal.fire({
        title: "Added Successfully",
        text: "This item added in your cart.",
        icon: "success",
        customClass: {
          popup: "my-swal-popup", // Make sure this matches your CSS class name
        },
      });
      // alert("Product added to your Bag!!");
      this.$router.push({ name: "BagPage" });
    },
  },
  mounted() {},
  beforeMount() {
    this.getAllProducts().then(() => {
      this.products = this.productArray;
      this.last_index = this.products.length;
      this.product1 =
        this.products[this.last_index - 1] != undefined
          ? this.products[this.last_index - 1]
          : undefined;
      this.product2 =
        this.products[this.last_index - 2] != undefined
          ? this.products[this.last_index - 2]
          : undefined;
      this.product3 =
        this.products[this.last_index - 3] != undefined
          ? this.products[this.last_index - 3]
          : undefined;
      // console.log("Product 1: ", this.product1);
      // console.log("Product 2: ", this.product2);
      // console.log("Product 3: ", this.product3);
    });
  },
};
</script>

<style>
.my-swal-popup {
  width: 500px; /* Set the desired width */
  max-width: 60%; /* Set the maximum width if needed */
  font-size: 1.6rem; /* Adjust font size if needed */
}
</style>

<style scoped>
.carousel {
  min-height: 45rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.carousel-control-prev,
.carousel-control-next {
  width: 4%;
  color: var(--border-color);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 4rem !important;
  height: 4rem !important;
}

.carousel-indicators [data-bs-target] {
  background-color: var(--border-color);
  margin-bottom: -3rem !important;
}

.heroSec {
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 2rem 4.6rem;
}

.heroContent h1 {
  font-size: 4.6rem;
  margin: 2rem 0;
  font-weight: 600;
  color: var(--heading-color);
}

.heroSec h3 {
  font-size: 3.8rem;
  font-weight: 400;
  margin: 2rem 0;
  color: var(--heading-color);
}

.heroSec h4 {
  font-size: 3.2rem;
  font-weight: 300;
  margin: 2rem 0;
  color: var(--heading-color);
}

.heroSec button {
  font-size: 2.2rem;
  border: none;
  border-radius: 0.6rem;
  background-color: var(--primary-color);
  padding: 0.6rem 2.8rem;
  margin-top: 3.4rem;
  color: var(--btn-font-color);
  font-weight: 500;
  cursor: pointer;
}

.heroImage {
  width: 45%;
  height: 36rem;
}

.heroImage img {
  max-width: 44rem;
  height: 36rem;
}

@media only screen and (max-width: 576px) {
  .heroSec {
    flex-direction: column-reverse;
    margin-top: 0.5rem;
  }

  .heroImage {
    width: 100%;
    justify-content: center !important;
  }

  .heroImage img {
    width: 60%;
  }

  .heroContent {
    margin-top: 1rem;
  }

  .heroContent h1 {
    font-size: 3.2rem;
  }

  .heroSec h3 {
    font-size: 2.4rem;
  }

  .heroSec h4 {
    font-size: 2rem;
  }

  .heroSec button {
    margin-top: 2rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .heroSec {
    flex-direction: column-reverse;
    margin-top: 0.5rem;
  }

  .heroImage {
    width: 100%;
    justify-content: flex-start !important;
    margin-bottom: 2rem;
  }

  .heroImage img {
    max-width: 65%;
  }

  .heroContent {
    margin-top: 1rem;
  }

  .heroContent h1 {
    font-size: 3.2rem;
  }

  .heroSec h3 {
    font-size: 2.4rem;
  }

  .heroSec h4 {
    font-size: 2rem;
  }

  .heroSec button {
    margin-top: 2rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .heroSec {
    flex-direction: column-reverse;
    margin-top: 0.5rem;
  }

  .heroImage {
    width: 65%;
    justify-content: flex-start !important;
    margin-bottom: 2rem;
  }

  .heroImage img {
    max-width: 100%;
  }

  .heroContent {
    margin-top: 1rem;
  }

  .heroContent h1 {
    font-size: 3.2rem;
  }

  .heroSec h3 {
    font-size: 2.4rem;
  }

  .heroSec h4 {
    font-size: 2rem;
  }

  .heroSec button {
    margin-top: 2rem;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
