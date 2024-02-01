<template>
  <div class="order-content" v-if="orderd_products.length > 0">
    <div
      class="w-100 mb-3 d-flex align-items-center"
      v-for="order in orderd_products"
      :key="order.id"
    >
      <div
        class="d-flex align-items-center pt-1 pb-1 justify-content-center me-3 img-background"
      >
        <img
          class="rounded-4"
          style="width: 75%"
          :src="
            order.product.product.image
              ? order.product.product.image
              : defaulImage
          "
          alt="Image"
        />
      </div>
      <div class="data-div" style="width: 40%">
        <h3 class="fs-3 fw-semibold item-color">
          {{ order.product.product.name }}
          <span class="price-color">{{ order.product.product.quantity }}</span>
        </h3>
        <h3 class="fs-3 fw-semibold item-color">
          {{ order.product.product.desc }}
        </h3>
        <h3 class="fs-4 fw-bold" id="label-text">
          {{ order.order_status_text }}!!
        </h3>
      </div>
      <div class="ms-5 btn-div" style="width: 20%">
        <button class="order-btn" type="button" v-on:click="nextPage(order)">
          Track Order
        </button>
      </div>
    </div>
  </div>
  <div
    class="order-content d-flex align-items-center justify-content-center"
    v-else
  >
    <h3 class="text-muted">No Orders Found!!</h3>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CryptoJS from "crypto-js";

export default {
  name: "OrderItemComp",

  data() {
    return {
      orderd_products: [],
      defaulImage: require("./assets/ladoo_img_1.jpeg"),
    };
  },

  computed: {
    orderArray() {
      return this.$store.getters.allOrders;
    },
  },

  methods: {
    ...mapActions(["getOrder"]),
    nextPage(order) {
      localStorage.setItem("order-item", JSON.stringify(order));
      this.$router.push({
        name: "TrackOrderComp",
        params: {
          order: CryptoJS.AES.encrypt(
            JSON.stringify(order),
            "12345678"
          ).toString(),
        },
      });
    },
    async processOrderData() {
      this.orderd_products = [];
      await this.getOrder();

      if (this.orderArray) {
        this.orderArray.forEach((order) => {
          if (order.status != 5) {
            if (order.product.length == 1) {
              this.orderd_products.push({
                product: order.product[0],
                id: order.id,
                order_num: order.order_id,
                order_status: order.status,
                order_status_text: order.status_order_text,
              });
            } else {
              order.product.forEach((item) => {
                this.orderd_products.push({
                  product: item,
                  id: order.id,
                  order_num: order.order_id,
                  order_status: order.status,
                  order_status_text: order.status_order_text,
                });
              });
            }
          }
        });
      } else {
        // console.log("Order Array not found !!");
      }
    },
  },
  watch: {},
  async created() {
    await this.processOrderData();
  },
};
</script>

<style scoped>
.order-content {
  height: 22rem;
}

.img-background {
  width: 28%;
  height: 13rem;
  overflow: hidden;
  border-radius: 0.6rem;
  padding: 0.4rem 0rem;
  border: 0.1rem solid var(--border-color);
}

.item-color {
  color: grey;
}

.price-color {
  color: var(--price-font-color);
}

.order-btn {
  font-size: 1.4rem;
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  cursor: pointer;
}

@media only screen and (max-width: 576px) {
  .img-background {
    width: 30%;
    height: 10rem;
  }

  .data-div {
    width: 40%;
  }
  .data-div h3 {
    font-size: 1.4rem !important;
  }

  #label-text {
    font-size: 1.2rem !important;
  }

  .btn-div {
    width: 30% !important;
    margin-left: 0rem !important;
  }

  .order-btn {
    font-size: 1.1rem !important;
    padding: 0.8rem 1rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .data-div h3 {
    font-size: 1.8rem !important;
  }

  #label-text {
    font-size: 1.4rem !important;
  }

  .btn-div {
    width: 40% !important;
  }

  .order-btn {
    font-size: 1.4rem !important;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .data-div h3 {
    font-size: 1.8rem !important;
  }

  #label-text {
    font-size: 1.4rem !important;
  }
  .btn-div {
    width: 40% !important;
  }

  .order-btn {
    font-size: 1.4rem !important;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
