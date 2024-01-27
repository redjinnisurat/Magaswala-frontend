<template>
  <section class="chekoutSec">
    <h2>Checkout</h2>
    <hr />
    <div class="check_container">
      <div class="checkoutMethods">
        <div class="addressDiv">
          <h3>Shipping To</h3>
          <div class="adddress-container" v-if="addressArray.length > 0">
            <div
              class="addressOption"
              :class="{ active: active_add }"
              v-for="address in addressArray"
              :key="address.address.id"
            >
              <i
                class="fa-solid fa-pen-to-square"
                v-on:click="homeAdd(address.address)"
              ></i>
              <div class="d-flex align-items-center flex-row-reverse">
                <label
                  :for="address.address.id"
                  v-if="address.address.address_type == 0"
                  >Home Address <br />
                  <span id="address">{{ address.address.phoneno }}</span> <br />
                  <span
                    >{{ address.address.Flat_no }},
                    {{ address.address.addressline1 }}</span
                  ><br />
                  <span
                    >{{ address.address.city }},
                    {{ address.address.state }}, </span
                  ><br />
                  <span>
                    {{ address.address.countries }}
                    - {{ address.address.pincode }}</span
                  >
                </label>
                <label
                  :for="address.address.id"
                  v-if="address.address.address_type == 1"
                  >Office Address <br />
                  <span id="address">{{ address.address.phoneno }}</span> <br />
                  <span
                    >{{ address.address.Flat_no }},
                    {{ address.address.addressline1 }}</span
                  ><br />
                  <span
                    >{{ address.address.city }},
                    {{ address.address.state }}, </span
                  ><br />
                  <span>
                    {{ address.address.countries }}
                    - {{ address.address.pincode }}</span
                  >
                </label>
                <label
                  :for="address.address.id"
                  v-if="address.address.address_type == 2"
                  >Other Address <br />
                  <span id="address">{{ address.address.phoneno }}</span> <br />
                  <span
                    >{{ address.address.Flat_no }},
                    {{ address.address.addressline1 }}</span
                  ><br />
                  <span
                    >{{ address.address.city }},
                    {{ address.address.state }}, </span
                  ><br />
                  <span>
                    {{ address.address.countries }}
                    - {{ address.address.pincode }}</span
                  >
                </label>
                <input
                  class="me-4"
                  type="radio"
                  :value="address.address.id"
                  :id="address.address.id"
                  name="addressOption"
                  v-model="selected_add"
                  @change="changeOnSelect()"
                />
              </div>
            </div>
          </div>
          <div
            class="adddress-container d-flex align-items-center justify-content-center"
            v-else
          >
            <h3 class="text-muted">No Address Added!!</h3>
          </div>
        </div>
        <div class="paymentDiv">
          <h3 class="paymentHeading">Payment Options</h3>
          <div class="paymentOption" :class="{ active: card_pay }">
            <img src="./assets/master_card_img.png" alt="img" />
            <label for="creditCard">Credit Card/Debit card</label>
            <input
              type="radio"
              name="paymentOption"
              id="creditCard"
              value="creditCard"
              v-model="payment_option"
              v-on:change="changeOptions()"
            />
          </div>
          <div class="paymentOption" :class="{ active: apple_pay }">
            <img src="./assets/apple_pay_img.png" alt="img" />
            <label for="applePay">Apple Pay</label>
            <input
              type="radio"
              name="paymentOption"
              id="applePay"
              value="applePay"
              v-model="payment_option"
              v-on:change="changeOptions()"
            />
          </div>
          <div class="paymentOption" :class="{ active: upi_pay }">
            <img src="./assets/bhim_upi_img.jpeg" alt="img" />
            <label for="bhimUpi">Bhim UPI</label>
            <input
              type="radio"
              name="paymentOption"
              id="bhimUpi"
              value="bhimUpi"
              v-model="payment_option"
              v-on:change="changeOptions()"
            />
          </div>
          <div class="paymentOption" :class="{ active: cash_pay }">
            <img src="./assets/cash_delivery_img.png" alt="img" />
            <label for="cashOnDelivery">Payment On Delivery</label>
            <input
              type="radio"
              name="paymentOption"
              id="cashOnDelivery"
              value="cashOnDelivery"
              v-model="payment_option"
              v-on:change="changeOptions()"
            />
          </div>
        </div>
      </div>
      <div class="checkOutContent1">
        <h3>Promo Code</h3>
        <div class="chekOut_input">
          <input type="text" placeholder="Promo code" v-model="promo_code" />
          <button>Apply</button>
        </div>
        <div class="chekOutDetails">
          <h3>Order Summary</h3>
          <div class="itemDetails">
            <p>Items:</p>
            <p>Rs.{{ order__item_price }}</p>
          </div>
          <div class="itemDetails">
            <p>CGST:</p>
            <p>Rs.{{ order_cgst }}</p>
          </div>
          <div class="itemDetails">
            <p>SGST:</p>
            <p>Rs.{{ order_sgst }}</p>
          </div>
          <hr />
          <div class="itemDetails">
            <p>Total:</p>
            <p>Rs.{{ order_total }}</p>
          </div>
          <div class="itemDetails">
            <p>Delivery:</p>
            <p>Rs.{{ order_delivery }}</p>
          </div>
          <hr />
          <div class="itemDetails">
            <p>Total:</p>
            <p>Rs.{{ order_total_amount }}</p>
          </div>
          <hr />
          <button type="button" v-on:click="payNow()">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="productSec">
    <h3>User also bought this</h3>
    <hr />
    <ProductsComp />
  </section>

  <!-- PayU form -->
  <!-- <form method="POST" class="pl-5 pr-5" id="paymentForm" :action="payuUrl"> -->
  <form
    method="POST"
    class="pl-5 pr-5"
    id="paymentForm"
    :action="payuUrl"
    @submit.prevent="generateHashAndSubmitForm"
  >
    <input type="hidden" name="key" v-model="mkey" size="64" />
    <input type="hidden" name="txnid" v-model="txnid" size="64" />

    <!-- <input type="hidden" name="amount" v-model="amount_pay" size="64" /> -->
    <input type="hidden" name="amount" v-model="order_total_amount" size="64" />

    <input type="hidden" name="productinfo" v-model="product_info" size="64" />

    <input
      type="hidden"
      name="firstname"
      v-model="userDetails.name"
      size="64"
    />
    <input type="hidden" name="service_provider" value="payu_paisa" size="64" />
    <input type="hidden" name="email" v-model="userDetails.email" size="64" />

    <input type="hidden" name="phone" v-model="userDetails.phoneno" size="64" />

    <input type="hidden" name="surl" v-model="surl" />
    <input type="hidden" name="furl" v-model="furl" />
    <input type="hidden" name="hash" id="hash" v-model="hash" size="64" />
  </form>
</template>

<script>
import axios from "@/axios";
import { mapActions } from "vuex";
import ProductsComp from "../HomePage/ProductsComp.vue";
import { useRoute } from "vue-router";

import sha512 from "js-sha512";

import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

export default {
  name: "CheckoutPage",
  data() {
    return {
      active_add: true,
      selected_add: null,
      card_pay: false,
      apple_pay: false,
      upi_pay: false,
      cash_pay: false,
      payment_option: null,
      promo_code: null,
      // total_amount: null,
      order_data: {},
      new_order_data: {},
      order__item_price: "",
      order_cgst: "",
      order_sgst: "",
      order_total: "",
      order_delivery: "",
      order_total_amount: "",

      // amount_pay: '678.64',
      hash: "",
      txnid: "",
      product_info: "Magaswala",
      payuUrl: "https://secure.payu.in/_payment",
      mkey: "nxpvv9VZ",
      saltKey: "3oFxUMtWG2",
      // surl: 'https://restroworld.com/blueticksuccess',
      surl: `${window.location.origin}/completePage/${this.order_split_result}`,
      // furl: 'https://restroworld.com/home/User/Fail',
      furl: `${window.location.origin}/`,
      userDetails: [],
      split_id: "",
      order_split_result: "",
    };
  },
  components: {
    ProductsComp,
  },
  computed: {
    cartArray() {
      return this.$store.getters.allCartItems;
    },
    addressArray() {
      return this.$store.getters.allAddress;
    },
  },
  methods: {
    async makeOrders(data) {
      try {
        const response = await axios.post(`order`, data);
        // console.log("Order Placed Successfully !!");
        // console.log("Response: ", response);
        this.order_data = response.data.data || [];
        this.setData(this.order_data);
        // console.log("New Order Data: ", this.order_data);
      } catch (error) {
        console.error(error);
      }
    },
    changeOnSelect() {
      const productList = [];
      this.cartArray.forEach((item) => {
        const productObj = { product_id: null, value: null };
        productObj.product_id = item.product_id.id;
        productObj.value = item.qty;
        productList.unshift(productObj);
      });

      this.new_order_data = {
        product_id: productList,
        address_id: this.selected_add,
      };

      // console.log("New Order Data: ", this.new_order_data);

      this.makeOrders(this.new_order_data);
    },
    setData(data) {
      // console.log("Order Data: ", data);
      this.order__item_price = data.pricetotal || 0;
      this.order_cgst = data.cgst || 0;
      this.order_sgst = data.sgst || 0;
      this.order_total =
        this.order__item_price + this.order_cgst + this.order_sgst;
      this.order_delivery = data.total_delivery_charges || 0;
      this.order_total_amount = data.order.price || 0;

      // console.log("Total Amount: ", this.order_total_amount);

      // console.log("Order Id: ", data.order.order_id);

      this.split_id = data.order.order_id.toString().split("-")[1];

      // console.log(this.split_id);

      this.order_split_result = this.removeLeadingZeros(this.split_id);
      // console.log(this.order_split_result);
    },
    removeLeadingZeros(inputString) {
      // Use regular expression to remove leading zeros
      const match = inputString.match(/^0*(\d+)/);
      return match ? match[1] : "0";
    },
    payNow() {
      if (this.order_data != null && this.selected_add != null) {
        this.generateHashAndSubmitForm();
        localStorage.removeItem("order");
      } else {
        // alert(
        //   "Please Add Address First !!" +
        //     "\n" +
        //     "Without Address you are not able to make order !!"
        // );
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
    },

    generateHashAndSubmitForm() {
      const data =
        this.mkey +
        "|" +
        this.txnid +
        "|" +
        // this.amount_pay +
        this.order_total_amount +
        "|" +
        this.product_info +
        "|" +
        this.userDetails.name +
        "|" +
        this.userDetails.email +
        "|||||||||||";

      this.hash = sha512(data + this.saltKey);

      if (this.hash) {
        localStorage.setItem("hash", this.hash);
        localStorage.setItem("expireSession", "sesion12dgtdb");
      }

      // console.log(this.hash);
      // console.log(data);

      document.getElementById("hash").value = this.hash;

      // const paymentSuccessful = true; // Replace this with your actual check

      // if (paymentSuccessful) {
      //   // Call the method to update the payment status
      //   this.updatePaymentStatus();
      // }

      // if (this.surl) {
      //   this.$router.push({
      //     name: "CompletePage",
      //     params: {
      //       order_id: this.order_split_result,
      //     },
      //   });
      // }

      document.getElementById("paymentForm").submit();
    },

    // async updatePaymentStatus() {
    //   try {
    //     const response = await axios.post(
    //       `https://uat2-api.magaswala.com/public/api/updatepaymentstatus/${this.order_split_result}`,
    //       {
    //         payment_status: "1",
    //       }
    //     );

    //     if (response.data.status === true) {
    //       // Payment status successfully updated
    //       console.log("Payment status updated successfully.");
    //     } else {
    //       // Payment status update failed, show an error message
    //       console.error(
    //         "Error updating payment status:",
    //         response.data.message
    //       );
    //     }
    //   } catch (error) {
    //     // Handle API request error
    //     console.error("API request error:", error);
    //   }
    // },

    makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      this.txnid = text;
    },
    homeAdd(data) {
      const addData = JSON.stringify(data);
      this.$router.push({
        name: "HomeAddressComp",
        params: {
          address: CryptoJS.AES.encrypt(addData, "12345678").toString(),
        },
      });
    },
    ...mapActions(["getAllAddress", "getAllCartItems", "getUser"]),
    changeOptions() {
      if (this.payment_option == "creditCard") {
        this.card_pay = true;
        this.apple_pay = false;
        this.upi_pay = false;
        this.cash_pay = false;
      } else if (this.payment_option == "applePay") {
        this.card_pay = false;
        this.apple_pay = true;
        this.upi_pay = false;
        this.cash_pay = false;
      } else if (this.payment_option == "bhimUpi") {
        this.card_pay = false;
        this.apple_pay = false;
        this.upi_pay = true;
        this.cash_pay = false;
      } else if (this.payment_option == "cashOnDelivery") {
        this.card_pay = false;
        this.apple_pay = false;
        this.upi_pay = false;
        this.cash_pay = true;
      } else {
        this.card_pay = false;
        this.apple_pay = false;
        this.upi_pay = false;
        this.cash_pay = false;
      }
    },
    done() {},
  },
  beforeMount() {
    this.getAllAddress().then(() => {
      this.$store.dispatch("getAddressId").then(() => {
        // console.log("Address Id: ", this.$store.getters.homeAddId);
        this.selected_add = this.$store.getters.homeAddId;
        // const data = {
        //   product_id: [{ product_id: this.i_id, value: this.i_qty }],
        //   address_id: this.address_id == null ? this.add_id : this.address_id,
        // };
        // // console.log("Order Data: ", data);
        // this.makeOrders(data);
      });
    });
    this.getAllCartItems().then(() => {
      // console.log("Cart Array: ", this.cartArray);
      if (this.cartArray && this.cartArray.length > 0) {
        this.total_amount = this.cartArray[0].Total_price || 0;
      } else {
        this.total_amount = 0;
      }
    });

    this.getUser()
      .then(() => {
        this.userDetails = this.$store.getters.newUser;
        // console.log("User Name", this.userDetails.name);
        // console.log("User Phone Number", this.userDetails.phoneno);
        // console.log("User Email", this.userDetails.email);
      })
      .catch((err) => {
        console.log(err);
      });

    const route = useRoute();
    const encryptData = CryptoJS.AES.decrypt(
      route.params.order,
      "12345678"
    ).toString(CryptoJS.enc.Utf8);
    if (encryptData != undefined) {
      this.order_data = JSON.parse(encryptData);
      localStorage.setItem("order", JSON.parse(encryptData));
      this.setData(this.order_data);
    } else {
      this.order_data = JSON.parse(localStorage.getItem("order"));
      this.setData(this.order_data);
    }
  },
  mounted() {
    this.makeid();
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
.chekoutSec {
  background-color: var(--btn-font-color);
  border: 0.2rem solid var(--border-color);
  border-radius: 0.5rem;
  padding: 2.5rem 1.5rem;
  margin: 3rem 2rem;
}

.chekoutSec h2 {
  font-size: 2.6rem;
  font-weight: 600;
  margin-left: 1.8rem;
  margin-bottom: 0.6rem;
  color: var(--heading-color);
}

.chekoutSec h3 {
  font-size: 2.3rem;
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

.addressDiv {
  width: 75%;
}

.adddress-container {
  height: 25.5rem;
  overflow-y: auto;
}

.adddress-container::-webkit-scrollbar {
  display: none;
}

.addressOption {
  width: 70%;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  padding: 0.8rem 2rem;
  margin: 2rem 0.6rem;
}

.addressOption i {
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--border-color);
}

.addressOption label {
  font-size: 1.9rem;
  font-weight: 600;
}

.addressOption span {
  font-size: 1.4rem;
  font-weight: 100;
}

.addressOption #address {
  font-size: 1.6rem;
}

.paymentDiv {
  width: 75%;
}

.paymentOption {
  width: 65%;
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
  width: 90%;
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
  font-size: 2.4rem;
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
  font-size: 1.9rem;
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
