<template>
  <section class="chekoutSec">
    <h2>Checkout</h2>
    <hr />
    <div class="check_container">
      <div class="checkoutMethods">
        <div class="addressDiv">
          <h3>Shipping To</h3>
          <div class="addressOption active">
            <i class="fa-solid fa-pen-to-square"></i>
            <label for="homeAddress"
              >Home Address <br />
              <span id="address">(269) 444-6893</span> <br />
              <span>Road Number 5689 Akali</span>
            </label>
            <input
              type="radio"
              value="home"
              id="homeAddress"
              name="addressOption"
            />
          </div>
          <div class="addressOption">
            <label for="officeAddress"
              >Office Address <br />
              <span id="office">(269) 444-2568</span> <br />
              <span>Road Number 2409 Blogshow</span>
            </label>
            <input
              type="radio"
              value="office"
              id="officeAddress"
              name="addressOption"
            />
          </div>
        </div>
        <div class="paymentDiv">
          <h3 class="paymentHeading">Payment Options</h3>
          <div class="paymentOption active">
            <img src="./assets/master_card_img.png" alt="img" />
            <label for="creditCard">Credit Card/Debit card</label>
            <input
              type="radio"
              name="paymentOption"
              id="creditCard"
              value="creditCard"
            />
          </div>
          <div class="paymentOption">
            <img src="./assets/apple_pay_img.png" alt="img" />
            <label for="applePay">Apple Pay</label>
            <input
              type="radio"
              name="paymentOption"
              id="applePay"
              value="applePay"
            />
          </div>
          <div class="paymentOption">
            <img src="./assets/bhim_upi_img.jpeg" alt="img" />
            <label for="bhimUpi">Bhim UPI</label>
            <input
              type="radio"
              name="paymentOption"
              id="bhimUpi"
              value="bhimUpi"
            />
          </div>
          <div class="paymentOption">
            <img src="./assets/cash_delivery_img.png" alt="img" />
            <label for="cashOnDelivery">Payment On Delivery</label>
            <input
              type="radio"
              name="paymentOption"
              id="cashOnDelivery"
              value="cashOnDelivery"
            />
          </div>
        </div>
      </div>
      <div class="checkOutContent1">
        <h3>Promo Code</h3>
        <div class="chekOut_input">
          <input type="text" placeholder="Promo code.." />
          <button>Apply</button>
        </div>
        <div class="chekOutDetails">
          <h3>Order Summary</h3>
          <div class="itemDetails">
            <p>Items:</p>
            <p>Rs.875</p>
          </div>
          <div class="itemDetails">
            <p>CGST:</p>
            <p>Rs.20</p>
          </div>
          <div class="itemDetails">
            <p>SGST:</p>
            <p>Rs.20</p>
          </div>
          <hr />
          <div class="itemDetails">
            <p>Total:</p>
            <p>Rs.915</p>
          </div>
          <div class="itemDetails">
            <p>Delivery:</p>
            <p>Rs.45</p>
          </div>
          <hr />
          <div class="itemDetails">
            <p>Total:</p>
            <p>Rs.960</p>
          </div>
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
import ProductsComp from "../HomePage/ProductsComp.vue";

export default {
  name: "CheckoutPage",
  components: {
    ProductsComp,
  },
  methods: {
    done() {
      this.$router.push({
        name: "CompletePage",
      });
    },
  },
};
</script>

<style scoped>
.chekoutSec {
  background-color: var(--btn-font-color);
  border: 0.2rem solid var(--border-color);
  border-radius: 0.5rem;
  padding: 2.5rem 1.5rem;
  margin: 3rem 2rem;
}

.chekoutSec h2 {
  font-size: 2.3rem;
  font-weight: 600;
  margin-left: 1.8rem;
  margin-bottom: 0.6rem;
  color: var(--heading-color);
}

.chekoutSec h3 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2.6rem;
}

.chekoutSec hr {
  margin-bottom: 2rem;
}

.chekoutSec .check_container {
  display: flex;
  flex-direction: row;
  min-height: 46rem;
}

.checkoutMethods {
  width: 50%;
  border-right: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  margin-left: 4rem;
}

.checkoutMethods input[type="radio"]:checked {
  background-color: var(--border-color);
}

.addressOption {
  max-width: 28rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  padding: 0.8rem 2rem;
  margin: 2rem 0.6rem;
}

.addressOption i {
  font-size: 1.3rem;
  font-weight: 400;
  margin-left: 4rem;
  color: var(--border-color);
}

.addressOption label {
  font-size: 1.6rem;
}

.addressOption span {
  font-size: 1.3rem;
  font-weight: 100;
}

.paymentOption {
  max-width: 30rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.6rem 0.6rem;
  padding: 0.6rem 1.8rem;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
}

.paymentOption img {
  max-width: 2.2rem;
}

.paymentOption label {
  width: 80%;
  font-size: 1.5rem;
  font-weight: 400;
}

.paymentHeading {
  margin-top: 2rem;
}

.active {
  border: 0.1rem solid var(--border-color);
  border-radius: 0.4rem;
}

.checkOutContent1 {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 1.2rem 4rem;
  padding: 1.2rem 0rem;
}

.checkOutContent1 h3 {
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
}

.chekOut_input {
  max-width: 42rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.chekOut_input input {
  width: 70%;
  font-size: 1.6rem;
  border: 0.2rem solid var(--border-color);
  border-radius: 0.6rem;
  padding: 0.4rem 1.2rem;
  margin-left: 1.6rem;
}

.chekOut_input button {
  font-size: 1.6rem;
  border: none;
  border-radius: 0.6rem;
  padding: 0.4rem 1.2rem;
  color: var(--btn-font-color);
  font-weight: 400;
  background-color: var(--primary-color);
  cursor: pointer;
}

.chekOutDetails {
  max-width: 32rem;
  border-radius: 1.4rem;
  padding: 1rem 1.6rem;
  margin-bottom: 2.2rem;
}

.chekOutDetails h3 {
  font-size: 1.9rem;
  font-weight: 400;
  text-align: center;
  padding-bottom: 0.8rem;
  margin: 1.6rem 2rem;
}

.itemDetails {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0;
  padding: 0 1.2rem;
}

.itemDetails p {
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

.chekOutDetails button {
  width: 100%;
  padding: 0.8rem 2.8rem;
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
  .chekoutSec .check_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .checkoutMethods {
    width: 70%;
    border-right: none;
    align-items: flex-start;
    margin-top: 2rem;
    margin-left: 6rem;
  }

  .checkOutContent1 {
    width: 70%;
    align-items: flex-start;
    margin-left: 6rem;
  }

  .chekOut_input input {
    margin-left: 0.4rem;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .chekoutSec .check_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .checkoutMethods {
    width: 70%;
    border-right: none;
    align-items: flex-start;
    margin-top: 2rem;
    margin-left: 12rem;
  }

  .checkOutContent1 {
    width: 70%;
    align-items: flex-start;
    margin-left: 12rem;
  }

  .chekOut_input input {
    margin-left: 0.4rem;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .chekoutSec .check_container {
    display: flex;
    justify-content: center;
  }

  .checkoutMethods {
    width: 70%;
    border-right: 2px solid black;
    align-items: flex-start;
    margin-top: 2rem;
    margin-left: 4rem;
    padding-right: 2rem;
  }

  .checkOutContent1 {
    width: 70%;
    align-items: flex-start;
    margin-left: 4rem;
  }

  .chekOut_input input {
    margin-left: 0.4rem;
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
