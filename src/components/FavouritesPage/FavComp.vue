<template>
  <div class="fav_container" v-if="allFavItems.length > 0">
    <div v-for="(favItem, index) in allFavItems" :key="index">
      <div class="favItem">
        <div class="favItem_content">
          <div class="d-flex align-items-center justify-content-center fav-img">
            <img
              :src="favItem.product.image ? favItem.product.image : defaulImage"
              class="rounded-4"
              alt="Image"
            />
          </div>
          <div class="favText">
            <h3>
              {{ favItem.product.name }}
              <span>{{ favItem.product.quantity }}</span>
            </h3>
            <h3>{{ favItem.product.desc }}</h3>
            <h4>Rs.{{ favItem.product.price }}</h4>
            <div class="favItem_star">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
        <div class="favItem_btn">
          <div class="btns2">
            <!-- <p>item added on 16th December 2022</p> -->
            <button type="button" v-on:click="addToBag(favItem.product.id)">
              Add to bag
            </button>
            <button type="button" v-on:click="buyNow(favItem.product.id)">
              Buy Now
            </button>
          </div>
          <div class="btns1">
            <i
              class="fa-regular fa-trash-can"
              v-on:click="deleteItem(favItem.product.id)"
            ></i>
            <p v-on:click="deleteItem(favItem.product.id)">Delete</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="fav_container d-flex align-items-center justify-content-center"
    v-else
  >
    <h3 class="text-muted">No Items Found in Favourites !!</h3>
  </div>
</template>

<script>
import axios from "@/axios";
import { mapActions, mapGetters } from "vuex";

import Swal from "sweetalert2";

export default {
  name: "FavComp",
  data() {
    return {
      defaulImage: require("./assets/ladoo_img_1.jpeg"),
    };
  },
  computed: {
    ...mapGetters(["allFavItems"]),
    // favArray() {
    //   return this.$store.state.module.cart;
    // },
  },
  methods: {
    buyNow(id) {
      this.$router.push({
        name: "BagItemPage",
        params: {
          id: id,
        },
      });
    },
    ...mapActions(["getAllFavourite"]),
    async deleteFromFav(id) {
      try {
        await axios.post(`addfavourites/${id}`);
      } catch (error) {
        console.error(error);
      }
    },
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
      this.$router.push({
        name: "BagPage",
      });
    },
    async deleteItem(id) {
      await Swal.fire({
        title: "Are you sure ?",
        text: "You want to remove this item from your favourites ?",
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
          this.deleteFromFav(id);

          Swal.fire({
            title: "Deleted",
            text: "Your item has been removed from your favourites.",
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
    this.getAllFavourite();
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
.fav_container {
  width: 95%;
  min-height: 49rem;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin: 1rem auto;
}

.fav_container::-webkit-scrollbar {
  display: none;
}

.favItem {
  background-color: var(--background-color);
  border: 0.2rem solid var(--border-color);
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.favItem_content {
  display: flex;
  padding: 1rem 1.8rem;
  gap: 5rem;
}

.fav-img {
  width: 16rem;
  height: 14rem;
  overflow: hidden;
}

.fav-img img {
  width: 16rem;
  height: 12rem;
}

.favText h3 {
  font-size: 2.1rem;
  font-weight: 400;
  margin: 0.6rem 0;
}

.favText h4,
span {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--price-font-color);
}

.favItem_star {
  margin: 0.3rem 0;
  color: var(--price-font-color);
}

.favItem_star i {
  font-size: 1.6rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.favItem_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.8rem;
  gap: 4.2rem;
}

.favItem_btn p {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}

.btns2 {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.4rem;
}

.btns2 button {
  font-size: 1.6rem;
  border: none;
  border-radius: 6px;
  background-color: var(--primary-color);
  color: var(--btn-font-color);
  padding: 0.6rem 5.8rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.btns1 {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  margin-right: 3rem;
}

.btns1 p {
  font-size: 1.6rem;
  font-weight: 200;
}

.btns1 i {
  cursor: pointer;
  color: var(--trash-icon-color);
}

@media only screen and (max-width: 576px) {
  .favItem_content {
    flex-direction: column;
  }

  .favItem_btn {
    flex-direction: column;
    margin-right: 1rem;
  }

  .favItem_btn p {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .btns2 {
    flex-direction: column;
  }

  .btns2 button {
    padding: 0.4rem 0.8rem;
    font-size: 1.8rem;
  }

  .btns1 {
    flex-direction: column;
    align-items: center;
    margin-left: 2.8rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .favItem_content {
    flex-direction: row;
  }

  .favItem_btn {
    flex-direction: row;
    margin-right: 1rem;
  }

  .favItem_btn p {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .btns2 {
    flex-direction: column;
  }

  .btns2 button {
    padding: 0.4rem 0.8rem;
    font-size: 1.8rem;
  }

  .btns1 {
    flex-direction: row;
    align-items: center;
    margin-left: 2.8rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .favItem_content {
    flex-direction: row;
  }

  .favItem_btn {
    flex-direction: row;
    margin-right: 1rem;
  }

  .favItem_btn p {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .btns2 {
    flex-direction: column;
  }

  .btns2 button {
    padding: 0.4rem 0.8rem;
    font-size: 1.8rem;
  }

  .btns1 {
    flex-direction: row;
    align-items: center;
    margin-left: 2.8rem;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
