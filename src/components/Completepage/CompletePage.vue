<template>
  <section class="completeSec">
    <div class="complete_container">
      <div class="doneDiv">
        <img src="./assets/done_img.jpeg" alt="Img" />
        <div class="doneContent">
          <h3>Congratulations</h3>
          <h4>Your order has been placed successfully!!</h4>
        </div>
      </div>
      <div class="doneBtn">
        <button type="button" v-on:click="done()">Continue Shopping</button>
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
import axios from "@/axios";
import ProductsComp from "../HomePage/ProductsComp.vue";
// import { useRoute } from "vue-router";

export default {
  name: "CompletePage",
  data() {
    return {};
  },
  components: {
    ProductsComp,
  },
  methods: {
    done() {
      this.$router.push({ name: "HomePage" });
      localStorage.removeItem("paymentOrderData");
    },

    async updatePaymentStatus(id) {
      // console.log("Payment Status Updated: ", id);
      try {
        const response = await axios.post(`updatepaymentstatus/${id}`, {
          payment_status: "1",
        });

        if (response.data.status === true) {
          // Payment status successfully updated
          console.log("Payment status updated successfully.");
        } else {
          // Payment status update failed, show an error message
          console.error(
            "Error updating payment status:",
            response.data.message
          );
        }
      } catch (error) {
        // Handle API request error
        console.error("API request error:", error);
      }
    },
  },

  beforeMount() {
    if (localStorage.getItem("paymentOrderData")) {
      const data = JSON.parse(localStorage.getItem("paymentOrderData"));
      if (data.hashKey && data.order_id) {
        this.updatePaymentStatus(data.order_id);
      }
    }
  },
};
</script>

<style scoped>
.completeSec {
  background-color: var(--btn-font-color);
  border: 0.2rem solid var(--border-color);
  border-radius: 0.5rem;
  padding: 2.5rem 1.5rem;
  margin: 3rem 2rem;
}

.completeSec h2 {
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 1.8rem;
  margin-bottom: 0.6rem;
}

.completeSec hr {
  margin-bottom: 2rem;
}

.completeSec .complete_container {
  min-height: 46rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.doneDiv img {
  min-width: 42rem;
  margin-bottom: 1.1rem;
}

.doneContent h3 {
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 1.1rem;
  color: var(--heading-color);
}

.doneContent h4 {
  font-size: 2.2rem;
  text-align: center;
  font-weight: 400;
  margin-bottom: 2.6rem;
  color: var(--heading-color);
}

.doneBtn {
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

.doneBtn button {
  font-size: 1.9rem;
  border: none;
  padding: 0.8rem 2.8rem;
  background-color: var(--primary-color);
  color: var(--btn-font-color);
  border-radius: 0.6rem;
  cursor: pointer;
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
  .productSec {
    padding: 2rem 0.6rem;
  }
  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
