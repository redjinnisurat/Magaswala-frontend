<template>
  <div class="bagContent" v-if="cartArray.length > 0">
    <div class="bagItem" v-for="(item, index) in cartArray" :key="index">
      <div class="d-flex align-items-center justify-content-between">
        <div
          class="d-flex align-items-center justify-content-center bagItem-img"
        >
          <img
            :src="item.product_id.image ? item.product_id.image : defaulImage"
            class="rounded-4"
            alt="Image"
          />
        </div>
        <div class="bagDetails">
          <div class="nameDiv">
            <h3>{{ item.product_id.name }}</h3>
            <span>{{ item.product_id.quantity }}</span>
          </div>
          <h3>{{ item.product_id.desc }}</h3>
          <h4>Rs.{{ item.product_id.price }}</h4>
        </div>
      </div>
      <div class="bagItem_btns">
        <div class="trashIcon">
          <i
            class="fa-regular fa-trash-can"
            v-on:click="deleteItem(item.id)"
          ></i>
        </div>
        <div class="counter">
          <div class="counter_i" id="plusBtn">
            <i
              class="fa-solid fa-plus"
              id="plusBtn"
              v-on:click="add(item.id)"
            ></i>
          </div>
          <p>{{ item.qty }}</p>
          <div class="counter_i">
            <i class="fa-solid fa-minus" v-on:click="remove(item.id)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="bagContent d-flex align-items-center justify-content-center"
    v-else
  >
    <h3 class="text-muted">No Items Found in Cart !!</h3>
  </div>
</template>

<script>
import axios from "@/axios";
import { mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "BagItemComp",
  data() {
    return {
      defaulImage: require("./assets/ladoo_img_1.jpeg"),
    };
  },
  computed: {
    cartArray() {
      return this.$store.getters.allCartItems;
    },
  },
  props: {},
  methods: {
    async updateCart(id, qty) {
      try {
        await axios.post(`updatecart/${id}`, { quantity: qty });
      } catch (error) {
        console.error(error);
      }
    },
    add(id) {
      this.cartArray.forEach((item) => {
        if (id == item.id) {
          item.qty++;
          // console.log("Item Qty: " + item.qty);
          this.updateCart(id, item.qty);
        }
      });
    },
    remove(id) {
      this.cartArray.forEach((item) => {
        if (id == item.id) {
          if (item.qty > 1) {
            item.qty--;
          }
          // console.log("Item Qty: " + item.qty);
          this.updateCart(id, item.qty);
        }
      });
    },
    ...mapActions(["deleteFromCart", "getAllCartItems"]),
    async deleteItem(id) {
      // if (
      //   confirm(
      //     "Are you sure ?\nYou want to remove this item from your cart ?"
      //   ) == true
      // ) {
      //   // console.log("Id: " + id);
      //   this.deleteFromCart(id);
      // }
      await Swal.fire({
        title: "Are you sure ?",
        text: "You want to remove this item from your cart ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
        customClass: {
          popup: "my-swal-popup", // Make sure this matches your CSS class name
        },
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteFromCart(id);

          Swal.fire({
            title: "Deleted",
            text: "Your item has been removed from your cart.",
            icon: "success",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          }).then(() => {
            location.reload();
          });
        }
      });
    },
  },
  beforeMount() {
    this.getAllCartItems();
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
.bagContent {
  width: 50%;
  height: 42rem;
  border-right: 2px solid black;
  overflow: auto;
  margin-top: 2rem;
  max-height: 46rem;
}

.bagContent::-webkit-scrollbar {
  display: none;
}

.bagItem {
  width: 50rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  border: 1px solid var(--border-color);
  border-radius: 0.6rem;
  margin: 1rem auto;
}

.bagItem-img {
  width: 12rem;
  height: 12rem;
  overflow: hidden;
}

.bagItem img {
  width: 80%;
}

.bagDetails {
  margin-left: 0.8rem;
}

.nameDiv {
  display: flex;
  align-items: center;
}

.nameDiv span {
  font-size: 1.4rem;
  margin-left: 0.7rem;
  color: var(--price-font-color);
  font-weight: 400;
}

.bagDetails h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

.bagDetails h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0.6rem;
  color: var(--price-font-color);
}

.bagItem_btns {
  text-align: center;
  margin-right: 1rem;
}

.bagItem_btns .trashIcon i {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  color: var(--trash-icon-color);
}

.counter {
  display: flex;
}

.counter_i {
  padding: 0.1rem 0.6rem;
  border-radius: 50%;
  border: 0.5px solid var(--border-color);
  cursor: pointer;
}

.counter_i i {
  font-size: 1.6rem;
}

.counter p {
  text-align: center;
  font-size: 1.8rem;
  margin: 0 0.5rem;
  color: var(--price-font-color);
}

.counter #plusBtn {
  background-color: var(--primary-color);
  color: var(--btn-font-color);
}

@media only screen and (max-width: 576px) {
  .bagContent {
    width: 100%;
    height: 42rem;
    border-right: none;
    margin-top: 2rem;
    max-height: 28rem;
  }

  .bagItem {
    width: 90%;
    padding: 0.6rem 1.9rem;
    border-radius: 0.6rem;
    margin-bottom: 1rem;
  }

  .bagItem_btns {
    margin-left: 2.6rem;
  }

  .bagItem_btns .trashIcon i {
    margin-bottom: 1.4rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .bagContent {
    width: 100%;
    height: 42rem;
    border-right: none;
    margin-top: 2rem;
    margin-left: 0rem;
    max-height: 28rem;
  }

  .bagItem {
    width: 90%;
    padding: 0.6rem 1.9rem;
    border-radius: 0.6rem;
    margin-bottom: 1rem;
  }

  .bagItem_btns {
    margin-left: 2.6rem;
  }

  .bagItem_btns .trashIcon i {
    margin-bottom: 1.4rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .bagContent {
    width: 100%;
    height: 42rem;
    border-right: none;
    margin-top: 2rem;
    margin-left: -1rem;
    max-height: 28rem;
  }

  .bagItem {
    width: 90%;
    padding: 0.6rem 1.9rem;
    border-radius: 0.6rem;
    margin-bottom: 1rem;
  }

  .bagItem_btns {
    margin-left: 2.6rem;
  }

  .bagItem_btns .trashIcon i {
    margin-bottom: 1.4rem;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
