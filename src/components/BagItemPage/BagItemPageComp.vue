<template>
  <div class="bagItem_content">
    <div class="bagItem_img">
      <img
        :src="i_image ? i_image : defaulImage"
        class="rounded-4"
        alt="Item Image"
      />
    </div>
    <div class="bagItem_data">
      <div class="bagItem_title">
        <h3>{{ i_name }}</h3>
        <i
          class="fa-regular fa-heart"
          :class="{ fav_dark: fav_show }"
          v-on:click="addFav(i_id)"
        ></i>
      </div>
      <div class="bagItem_data1">
        <h3>Rs. {{ i_price }} per {{ i_quantity }}</h3>
        <h4>{{ i_desc }}</h4>
        <p>{{ i_note }}</p>
      </div>
    </div>
    <div class="bagItem_qty">
      <div class="bagItem_qty1">
        <div class="bagItem_qty_item">
          <label for="kg" :class="{ active: kg_show }">1Kg</label>
          <div class="counter" v-if="kg_show">
            <div
              class="counter_i d-flex align-items-center justify-content-center"
              id="plusBtn"
            >
              <i class="fa-solid fa-plus" id="plusBtn" v-on:click="add()"></i>
            </div>
            <p>{{ i_qty }}</p>
            <div
              class="counter_i d-flex align-items-center justify-content-center"
            >
              <i class="fa-solid fa-minus" v-on:click="remove()"></i>
            </div>
          </div>
          <input type="radio" name="quantity" value="1kg" ref="kg_input" />
        </div>
        <div class="bagItem_qty_item">
          <label for="5gm" :class="{ active: gm1_show }">500gm</label>
          <div class="counter" v-if="gm1_show">
            <div
              class="counter_i d-flex align-items-center justify-content-center"
              id="plusBtn"
            >
              <i class="fa-solid fa-plus" id="plusBtn" v-on:click="add()"></i>
            </div>
            <p>{{ i_qty }}</p>
            <div
              class="counter_i d-flex align-items-center justify-content-center"
            >
              <i class="fa-solid fa-minus" v-on:click="remove()"></i>
            </div>
          </div>
          <input type="radio" name="quantity" value="500gm" ref="gm1_input" />
        </div>
        <div class="bagItem_qty_item">
          <label for="2gm" :class="{ active: gm2_show }">250gm</label>
          <div class="counter" v-if="gm2_show">
            <div
              class="counter_i d-flex align-items-center justify-content-center"
              id="plusBtn"
            >
              <i class="fa-solid fa-plus" id="plusBtn" v-on:click="add()"></i>
            </div>
            <p>{{ i_qty }}</p>
            <div
              class="counter_i d-flex align-items-center justify-content-center"
            >
              <i class="fa-solid fa-minus" v-on:click="remove()"></i>
            </div>
          </div>
          <input type="radio" name="quantity" value="250gm" ref="gm2_input" />
        </div>
      </div>
      <div class="bagItem_btn">
        <button type="button" v-on:click="addToBag(this.i_id, this.i_qty)">
          Add to bag
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import { mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "BagItemPageComp",
  data() {
    return {
      product: {},
      i_qty: 1,
      kg_show: false,
      gm1_show: false,
      gm2_show: false,
      fav_show: false,
      defaulImage: require("./assets/ladoo_img_1.jpeg"),
      add_id: null,
    };
  },
  props: {
    i_id: Number,
    i_name: String,
    i_price: String,
    i_quantity: String,
    i_desc: String,
    i_note: String,
    i_image: String,
    getQty: Function,
    fav_flag: Boolean,
    getOrderData: Function,
    address_id: Number,
  },
  watch: {
    i_quantity(newVal) {
      this.handleQuntityChanges(newVal);
    },
    fav_flag(newVal) {
      this.changeFavShow(newVal);
    },
  },
  computed: {},
  methods: {
    ...mapActions(["getAllAddress"]),
    async makeOrders(data) {
      try {
        const response = await axios.post(`order`, data);
        const orderData = {
          pricetotal: response.data.data.pricetotal,
          sgst: response.data.data.sgst,
          cgst: response.data.data.cgst,
          total_delivery_charges: response.data.data.total_delivery_charges,
          order_id: response.data.data.order.order_id,
          price: response.data.data.order.price,
        };
        this.getOrderData(orderData);
      } catch (error) {
        console.error(error);
      }
    },
    changeFavShow(val) {
      this.fav_show = val;
    },
    async addToFav(id) {
      try {
        await axios.post(`addfavourites/${id}`);
      } catch (error) {
        console.error(error);
      }
    },
    addFav(id) {
      this.fav_show = !this.fav_show;
      if (this.fav_show === true) {
        this.addToFav(id);
      } else {
        this.addToFav(id);
      }
    },
    async addToBag(id, qty) {
      this.$store.dispatch("addToCart", {
        product_id: id,
        qty: qty,
      });
      await Swal.fire({
        title: "Added Successfully.",
        text: "This item added in your cart.",
        icon: "success",
        customClass: {
          popup: "my-swal-popup", // Make sure this matches your CSS class name
        },
      });

      this.$router.push({ name: "BagPage" });
    },
    add() {
      this.i_qty += 1;
      this.getQty(this.i_qty);
      const data = {
        product_id: [
          {
            product_id: this.i_id != undefined ? this.i_id : this.product.id,
            value: this.i_qty,
          },
        ],
        address_id: this.address_id || null,
      };

      this.makeOrders(data);
    },
    remove() {
      if (this.i_qty > 1) {
        this.i_qty -= 1;
        this.getQty(this.i_qty);
        const data = {
          product_id: [
            {
              product_id: this.i_id != undefined ? this.i_id : this.product.id,
              value: this.i_qty,
            },
          ],
          address_id: this.address_id || null,
        };

        this.makeOrders(data);
      }
    },
    handleQuntityChanges(newQuntity) {
      if (newQuntity != undefined) {
        const quantity = newQuntity.replace(/"/g, "").split(" ").join("");

        if (quantity == "1kg" || quantity == "1") {
          this.kg_show = true;
          this.gm1_show = false;
          this.gm2_show = false;
          this.$refs.kg_input.checked = true;
        } else if (quantity == "500gm" || quantity == "500") {
          this.kg_show = false;
          this.gm1_show = true;
          this.gm2_show = false;
          this.$refs.gm1_input.checked = true;
        } else if (quantity == "250gm" || quantity == "250") {
          this.kg_show = false;
          this.gm1_show = false;
          this.gm2_show = true;
          this.$refs.gm2_input.checked = true;
        }
      }
    },
  },
  mounted() {
    this.product = JSON.parse(localStorage.getItem("orderItem"));
    this.handleQuntityChanges(
      this.i_quantity != undefined ? this.i_quantity : this.product.quantity
    );
    this.getAllAddress().then(() => {
      this.$store.dispatch("getAddressId").then(() => {
        this.add_id = this.$store.getters.homeAddId;
        const data = {
          product_id: [
            {
              product_id: this.i_id != undefined ? this.i_id : this.product.id,
              value: this.i_qty,
            },
          ],
          address_id: this.address_id == null ? this.add_id : this.address_id,
        };

        if (this.add_id != null || this.add_id != undefined) {
          this.makeOrders(data);
        } else {
          Swal.fire({
            title: "Important Note",
            text:
              "Please Add Address First !!" +
              "\n" +
              "Without Address you are not able to make order !!",
            icon: "info",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
        }
      });
    });
  },
  beforeMount() {},
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
.fav_dark {
  font-weight: 900;
  color: red;
}

.bagItem_content {
  width: 50%;
  min-height: 62rem;
  border: 0.2rem solid var(--border-color);
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 2rem;
  background-color: var(--btn-font-color);
}

.bagItem_img {
  height: 36rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  overflow: hidden;
  background-color: var(--btn-font-color);
}

.bagItem_img img {
  width: 40rem;
}

.bagItem_title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 0.6rem;
}

.bagItem_title h3 {
  font-size: 2.7rem;
  font-weight: 600;
}

.bagItem_title i {
  font-size: 3rem;
  color: red;
}

.bagItem_data1 {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.bagItem_data1 h3 {
  font-size: 2.9rem;
  font-weight: 500;
  color: var(--price-font-color);
}

.bagItem_data1 h4 {
  font-size: 1.6rem;
  color: #b5b5b5;
}

.bagItem_data1 p {
  font-size: 1.2rem;
  color: #b5b5b5;
  text-align: justify;
  margin-bottom: 0.8rem;
}

.bagItem_qty {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
}

.bagItem_qty1 {
  width: 50%;
}

.bagItem_qty_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.bagItem_qty_item label {
  font-size: 1.9rem;
  font-weight: 500;
}

.counter {
  display: flex;
  margin-left: -4.6rem;
}

.counter_i {
  padding: 0.2rem 0.6rem;
  border-radius: 50%;
  border: 0.5px solid var(--border-color);
  cursor: pointer;
}

.counter_i i {
  font-size: 2rem;
}

.counter p {
  text-align: center;
  font-size: 2.2rem;
  margin: 0 0.5rem;
  color: var(--price-font-color);
}

.counter #plusBtn {
  background-color: var(--primary-color);
  color: var(--btn-font-color);
}

.bagItem_qty_item input {
  font-size: 1.9rem;
}

.active {
  color: var(--primary-color);
}

.bagItem_btn {
  width: 40%;
  display: flex;
  align-items: flex-end;
}

.bagItem_btn button {
  width: 100%;
  font-size: 2rem;
  border: none;
  border-radius: 0.6rem;
  background-color: var(--primary-color);
  color: var(--btn-font-color);
  padding: 0.8rem 1.8rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 576px) {
  .bagItem_content {
    width: 90%;
  }

  .bagItem_img img {
    width: 100%;
  }

  .counter {
    margin-left: -0.8rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .bagItem_content {
    width: 90%;
  }

  .bagItem_img img {
    width: 70%;
  }

  .counter {
    margin-left: -0.8rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .bagItem_content {
    width: 90%;
  }

  .bagItem_img img {
    width: 50%;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
