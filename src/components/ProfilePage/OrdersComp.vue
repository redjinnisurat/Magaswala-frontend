<template>
  <div class="content-data">
    <h3 class="fs-1 fw-semibold mt-3 ms-3 mb-2 heading">Orders</h3>
    <div class="mt-1 ms-3 me-3 order-container">
      <OrderItemComp />
    </div>
    <div
      class="ms-3 mt-5 me-3 d-flex align-items-center justify-content-between"
      style="width: 90%"
    >
      <h5 class="heading heading-size mt-1">Recently ordered</h5>
      <select
        class="w-25 fw-semibold text-center fs-4 me-5 select-days"
        id="sort_days"
        v-model="select_option"
        v-on:change="sortByDay"
      >
        <option value="10">Last 10 days</option>
        <option value="20">Last 20 days</option>
        <option value="30">Last 30 days</option>
      </select>
    </div>
    <div
      class="ms-3 me-3 mt-3"
      v-if="Object.keys(sortedProductsByDate).length > 0"
    >
      <div v-for="(group, date) in sortedProductsByDate" :key="date">
        <div class="w-25 mt-3 mb-2 d-flex justify-content-center order-date">
          <p class="fs-5 fw-semibold mb-0">{{ date }}</p>
        </div>
        <div
          class="w-100 mt-3 mb-3 d-flex align-items-center"
          v-for="order in group"
          :key="order.id"
        >
          <div
            class="d-flex align-items-center pt-1 pb-1 ms-2 justify-content-center me-3 img-background"
          >
            <img
              class="rounded-4"
              style="width: 70%"
              :src="
                order.product.product.image
                  ? order.product.product.image
                  : defaulImage
              "
              alt="Image"
            />
          </div>
          <div class="data-div" style="width: 45%">
            <h3 class="fs-4 fw-semibold item-color mb-3">
              {{ order.product.product.name }}
              <span class="price-color ms-4">{{
                order.product.product.quantity
              }}</span>
            </h3>
            <div class="d-flex align-items-center">
              <h3
                class="fs-4 fw-semibold item-color pb-1 color-green border-class"
              >
                Delivered
              </h3>
              <i class="fa-solid fa-check ms-2 fs-4 fw-semibold mb-1 icon"></i>
            </div>
          </div>
          <div class="ms-5 btn-div" style="width: 20%">
            <button
              class="fs-4 order-btn"
              type="button"
              v-on:click="orderAgain(order.product.product.id)"
            >
              Order again
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="ms-3 me-3 mt-5 d-flex align-items-center justify-content-center"
      v-else
    >
      <h3 class="text-muted mt-5">No Recently Delivered Orders Found!!</h3>
    </div>
  </div>
</template>

<script>
import OrderItemComp from "./OrderItemComp.vue";
import { mapActions } from "vuex";

export default {
  name: "OrdersComp",
  components: {
    OrderItemComp,
  },
  data() {
    return {
      orderd_products: [],
      delivered_products: [],
      defaulImage: require("./assets/ladoo_img_1.jpeg"),
      productsByDate: {},
      select_option: "10",
    };
  },
  computed: {
    orderArray() {
      return this.$store.getters.allOrders;
    },
    sortedProductsByDate() {
      return this.sortProductsByDay();
    },
  },
  methods: {
    sortProductsByDay() {
      const sortedProducts = { ...this.productsByDate };

      const sortedKeys = Object.keys(sortedProducts).filter((date) => {
        const currentDate = new Date();
        const formattedDate = new Date(date.split(", ")[0]);

        return (
          formattedDate >=
          new Date(
            currentDate.getTime() -
              Number(this.select_option) * 24 * 60 * 60 * 1000
          )
        );
      });

      const result = {};
      sortedKeys.forEach((key) => {
        result[key] = sortedProducts[key];
      });

      return result;
    },
    groupedProducts() {
      this.delivered_products.forEach((item) => {
        const dateObject = new Date(item.update_at);

        const day = dateObject.getDate();
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const monthIndex = dateObject.getMonth();
        const formattedMonth = monthNames[monthIndex];
        const year = dateObject.getFullYear();

        const dayIndex = dateObject.getDay();
        const dayNames = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const formattedDay = dayNames[dayIndex];

        const formattedDate = `${day}-${formattedMonth}-${year}, ${formattedDay}`;

        if (!this.productsByDate[formattedDate]) {
          this.productsByDate[formattedDate] = [];
        }

        // Add the current item to the array corresponding to the date
        this.productsByDate[formattedDate].push(item);
      });
    },
    orderAgain(id) {
      this.$router.push({
        name: "BagItemPage",
        params: {
          id: id,
        },
      });
    },
    ...mapActions(["getOrder"]),
    async getDeliveredOrders() {
      if (this.orderd_products) {
        this.orderd_products.forEach((item) => {
          if (item.order_status == 5) {
            this.delivered_products.push(item);
          }
        });
      } else {
        // console.log("Ordered Products not found!!", this.orderd_products);
      }
    },
    async processOrderData() {
      this.orderd_products = [];
      await this.getOrder();

      if (this.orderArray) {
        this.orderArray.forEach((order) => {
          if (order.product.length == 1) {
            this.orderd_products.push({
              product: order.product[0],
              id: order.id,
              order_num: order.order_id,
              order_status: order.status,
              order_status_text: order.status_order_text,
              update_at: order.updated_at,
            });
          } else {
            order.product.forEach((item) => {
              this.orderd_products.push({
                product: item,
                id: order.id,
                order_num: order.order_id,
                order_status: order.status,
                order_status_text: order.status_order_text,
                update_at: order.updated_at,
              });
            });
          }
        });
      } else {
        // console.log("Order Array not found !!");
      }
    },
  },
  async created() {
    await this.processOrderData();
    await this.getDeliveredOrders();
    this.groupedProducts();
  },
  watch: {
    selectedSortOption: "sortProductsByDay",
  },
  beforeMount() {},
};
</script>

<style scoped>
.content-data {
  max-height: 56rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.content-data::-webkit-scrollbar {
  display: none;
}

.order-container {
  min-height: 22rem;
  padding: 1.4rem 1.6rem;
  overflow-y: auto;
  border-radius: 0.6rem;
}

.order-container::-webkit-scrollbar {
  display: none;
}

.heading {
  color: var(--heading-color);
}

.heading-size {
  font-size: 2.5rem;
}

.select-days {
  border: 0.2rem solid var(--border-color);
  border-radius: 0.8rem;
  padding: 0.6rem 1.9rem;
  background: transparent;
  color: grey;
  outline: none;
}

.order-date {
  border: 0.2rem solid var(--border-color);
  border-radius: 0.8rem;
  padding: 0.6rem 0.8rem;
  color: grey;
}

.order-date p {
  font-size: 1.5rem !important;
}

.price-color {
  color: var(--price-font-color);
}

.img-background {
  width: 20%;
  height: 9rem;
  overflow: hidden;
  border-radius: 0.6rem;
  padding: 0.4rem 0rem;
  border: 0.1rem solid var(--border-color);
}

.color-green {
  color: green;
}

.border-class {
  border-bottom: 0.2rem solid green;
}

.icon {
  color: green;
  font-weight: 600;
}

.order-btn {
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  cursor: pointer;
}

@media only screen and (max-width: 576px) {
  .heading-size {
    font-size: 2rem;
  }
  .select-days {
    width: 40% !important;
    padding: 0.6rem 1.6rem !important;
    font-size: 1.2rem !important;
    margin-right: 0rem !important;
  }

  .order-date {
    width: 43% !important;
  }

  .order-date p {
    font-size: 1.2rem !important;
  }

  .img-background {
    width: 30%;
    height: 9rem;
  }

  .data-div {
    width: 40%;
    font-size: 1.2rem !important;
  }

  .btn-div {
    width: 30% !important;
    margin-left: 0rem !important;
  }

  .order-btn {
    font-size: 1.2rem !important;
    padding: 0.8rem 1rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .heading-size {
    font-size: 2rem;
  }
  .select-days {
    width: 30% !important;
    padding: 0.6rem 1.6rem !important;
    font-size: 1.6rem !important;
    margin-right: 0rem !important;
  }

  .order-date {
    width: 40% !important;
  }

  .order-date p {
    font-size: 1.3rem !important;
  }

  .img-background {
    width: 30%;
    height: 9rem;
  }

  .data-div {
    width: 40%;
    font-size: 1.2rem !important;
  }

  .btn-div {
    width: 30% !important;
    margin-left: 0rem !important;
  }

  .order-btn {
    font-size: 1.5rem !important;
    padding: 0.8rem 1rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .select-days {
    width: 30% !important;
    padding: 0.6rem 1.6rem !important;
    font-size: 1.3rem !important;
    margin-right: 0rem !important;
  }

  .order-date {
    width: 40% !important;
  }

  .order-date p {
    font-size: 1.3rem !important;
  }

  .order-btn {
    font-size: 1.2rem !important;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
