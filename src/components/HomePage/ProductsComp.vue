<template>
  <div class="productContainer" v-if="allProducts.length > 0">
    <div v-for="(product, index) in allProducts" :key="index">
      <div class="productItem">
        <div class="productImg">
          <img
            :src="product.image ? product.image : defaulImage"
            class="rounded-4"
            alt="ladoo"
          />
        </div>
        <div class="productContent">
          <p>{{ product.name }}</p>
          <p id="price">Rs.{{ product.price }}/{{ product.quantity }}</p>
          <div id="cartClass">
            <p>{{ product.desc }}</p>
            <button v-on:click="nextPage(product.id)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="productContainer d-flex align-items-center justify-content-center"
    v-else
  >
    <h3 class="text-muted">No Products Found!!</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductsComp",
  data() {
    return { defaulImage: require("./assets/ladoo_img_1.jpeg") };
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["getAllProducts"]),
    nextPage(id) {
      this.$router.push({
        name: "BagItemPage",
        params: {
          id: id,
        },
      });
    },
  },
  beforeMount() {
    this.getAllProducts();
  },
};
</script>

<style scoped>
.productContainer {
  display: flex;
  gap: 3rem;
  overflow: auto;
  padding: 2rem 0rem;
  margin-left: 1rem;
}

.productContainer::-webkit-scrollbar {
  display: none;
}

.productItem {
  width: 40rem;
  border: 0.1rem solid var(--border-color);
  display: flex;
  flex-direction: column;
  background-color: var(--btn-font-color);
  padding: 0.2rem 0.2rem;
}

.productImg {
  width: 100%;
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.productImg img {
  width: 100%;
  height: 26rem;
}

.productContent {
  padding: 1rem 1.6rem;
  margin-top: 1rem;
}

.productContent #cartClass {
  display: flex;
  justify-content: space-between;
}

.productContent p {
  font-size: 1.8rem;
  font-weight: 300;
}

.productContent #price {
  color: var(--price-font-color);
  margin: 0.2rem 0;
  font-weight: 600;
}

.productContent button {
  font-size: 1.6rem;
  border: none;
  border-radius: 0.6rem;
  background-color: var(--primary-color);
  color: var(--btn-font-color);
  padding: 0.4rem 1.6rem;
  font-weight: 500;
  cursor: pointer;
}

@media only screen and (max-width: 576px) {
  .productItem {
    min-width: 40rem;
    margin-left: 0.8rem;
  }

  .productImg img {
    width: 80%;
  }

  .productContent p {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 0.6rem;
  }

  .productContent #price {
    margin: 0.8rem 0;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .productItem {
    min-width: 40rem;
    margin-left: 0.8rem;
  }

  .productImg img {
    width: 80%;
  }

  .productContent p {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 0.6rem;
  }

  .productContent #price {
    margin: 0.8rem 0;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .productItem {
    min-width: 40rem;
    margin-left: 0.8rem;
  }

  .productImg img {
    width: 80%;
  }

  .productContent p {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 0.6rem;
  }

  .productContent #price {
    margin: 0.8rem 0;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
