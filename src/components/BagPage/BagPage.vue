<template>
  <section class="bagSec">
    <h2>Shoping Bag</h2>
    <hr />
    <div class="bag_container">
      <BagItemComp />
      <div class="checkOutContent">
        <div class="chekOut_img">
          <img src="./assets/checkout_img.png" alt="img" />
        </div>
        <div class="chekOut_details">
          <h3>Item Summary</h3>
          <p>
            Items: <span>Rs.{{ total_price }}</span>
          </p>
          <hr />
          <button type="button" v-on:click="done()">Proceed to checkout</button>
        </div>
      </div>
    </div>
  </section>
  <section class="productSec">
    <h3>User also bought this</h3>
    <hr />
    <ProductsComp />
  </section>
</template>

<script>
import BagItemComp from "./BagItemComp.vue";
import ProductsComp from "../HomePage/ProductsComp.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "BagPage",
  data() {
    return {
      total_price: 0,
    };
  },
  components: {
    BagItemComp,
    ProductsComp,
  },
  computed: {
    ...mapGetters(["allProducts"]),
    cartArray() {
      return this.$store.state.module.cart;
    },
  },
  methods: {
    ...mapActions(["getAllCartItems"]),
    done() {
      this.$router.push({
        name: "CheckoutPage",
        params: {
          total: this.total_price,
        },
      });
    },
  },
  mounted() {},
  beforeMount() {
    this.getAllCartItems().then(() => {
      if (this.cartArray && this.cartArray.length > 0) {
        this.total_price = this.cartArray[0].Total_price || 0;
      } else {
        this.total_price = 0;
      }
    });
  },
};
</script>

<style scoped>
.bagSec {
  background-color: var(--btn-font-color);
  border: 0.2rem solid var(--border-color);
  border-radius: 0.5rem;
  padding: 2.5rem 1.5rem;
  margin: 3rem 2rem;
}

.bagSec h2 {
  font-size: 2.3rem;
  font-weight: 600;
  margin-left: 1.8rem;
  margin-bottom: 0.6rem;
  color: var(--heading-color);
}

.bagSec h3 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
}

.bagSec hr {
  margin-bottom: 2rem;
}

.bagSec .bag_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 46rem;
}

/*.bagContent {
    width: 50%;
    height: 42rem;
    border-right: 2px solid black;
    overflow: auto;
    margin-top: 2rem;
    max-height: 46rem;
    align-items: center;
}

.bagContent::-webkit-scrollbar {
    display: none;
}*/

.checkOutContent {
  width: 50%;
  margin: 2.6rem 3.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}

.chekOut_img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkOutContent img {
  width: 28rem;
}

.chekOut_details {
  border: 0.4rem solid var(--border-color);
  border-radius: 1.4rem;
  padding: 1rem 1.6rem;
  margin-bottom: 2.2rem;
}

.chekOut_details h3 {
  font-size: 3.9rem;
  font-weight: 400;
  text-align: center;
  margin: 1.6rem 2rem;
}

.chekOut_details p {
  font-size: 2rem;
  margin-top: 1.6rem;
  margin-bottom: 0.6rem;
  padding: 0 2rem;
}

.chekOut_details p span {
  margin-left: 16rem;
}

.chekOut_details button {
  width: 100%;
  padding: 1.2rem 2.8rem;
  border: none;
  border-radius: 0.4rem;
  background-color: var(--primary-color);
  color: var(--btn-font-color);
  font-size: 1.6rem;
  cursor: pointer;
}

.productSec {
  padding: 2rem;
  margin-top: -2.8rem;
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
  .bagSec .bag_container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }

  /*.bagContent {
        width: 100%;
        height: 42rem;
        border-right: none;
        margin-top: 2rem;
        margin-left: -3.5rem;
        max-height: 28rem;
    }*/

  .checkOutContent {
    width: 100%;
    margin-top: 1.2rem;
    margin-left: 2.8em;
  }

  .checkOutContent img {
    width: 24rem;
  }

  .chekOut_details {
    min-width: 36rem;
    margin-top: 2.2rem;
  }

  .chekOut_details h3 {
    font-size: 2.9rem;
  }

  .chekOut_details p {
    font-size: 1.8rem;
  }

  .chekOut_details p span {
    margin-left: 16rem;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .bagSec .bag_container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }

  /*.bagContent {
        width: 100%;
        height: 42rem;
        border-right: none;
        margin-top: 2rem;
        margin-left: 0rem;
        max-height: 28rem;
    }*/

  .checkOutContent {
    width: 100%;
    margin-top: 1.2rem;
    margin-left: 2.8em;
  }

  .checkOutContent img {
    width: 24rem;
  }

  .chekOut_details {
    min-width: 36rem;
    margin-top: 2.2rem;
  }

  .chekOut_details h3 {
    font-size: 2.9rem;
  }

  .chekOut_details p {
    font-size: 1.8rem;
  }

  .chekOut_details p span {
    margin-left: 16rem;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .bagSec .bag_container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }

  /*.bagContent {
        width: 100%;
        height: 42rem;
        border-right: none;
        margin-top: 2rem;
        margin-left: -1rem;
        max-height: 28rem;
    }*/

  .checkOutContent {
    width: 100%;
    margin-top: 1.2rem;
    margin-left: 2.8em;
  }

  .checkOutContent img {
    width: 24rem;
  }

  .chekOut_details {
    min-width: 36rem;
    margin-top: 2.2rem;
  }

  .chekOut_details h3 {
    font-size: 2.9rem;
  }

  .chekOut_details p {
    font-size: 1.8rem;
  }

  .chekOut_details p span {
    margin-left: 16rem;
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
