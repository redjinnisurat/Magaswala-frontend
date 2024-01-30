<template>
  <section class="bagItemContainer">
    <BagItemPageComp
      :i_id="product.id"
      :i_name="product.name"
      :i_price="product.price"
      :i_quantity="product.quantity"
      :i_desc="product.desc"
      :i_note="product.note"
      :i_image="product.image"
      :getQty="getQty"
      :fav_flag="fav_show"
      :getOrderData="getOrderData"
      :address_id="selected_add"
    />
    <div class="checkout_content">
      <h3>Checkout</h3>
      <br />
      <div class="checkout_content1">
        <!-- <div class="paymentDiv">
          <br />
          <h4>Payment Options</h4>
          <div class="paymentOption">
            <img src="./assets/master_card_img.png" alt="img" />
            <label for="creditCard">Credit Card/Debit card</label>
            <input
              type="radio"
              name="paymentOption"
              id="creditCard"
              value="creditCard"
              v-model="payment_option"
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
              v-model="payment_option"
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
              v-model="payment_option"
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
              v-model="payment_option"
            />
          </div>
        </div> -->
        <div class="addressDiv">
          <div class="addDivData">
            <h3>Shipping To</h3>
            <div class="adddress-container" v-if="addressArray.length > 0">
              <div
                class="addressOption active_add"
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
                    <span id="address">{{ address.address.phoneno }}</span>
                    <br />
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
                    <span id="address">{{ address.address.phoneno }}</span>
                    <br />
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
                    <span id="address">{{ address.address.phoneno }}</span>
                    <br />
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
        </div>
        <div class="chekOutDetails">
          <h3>Order Summary</h3>
          <div class="itemDetails">
            <p>Items:</p>
            <p>Rs.{{ orderData.pricetotal || 0 }}</p>
          </div>
          <div class="itemDetails">
            <p>CGST:</p>
            <p>Rs.{{ orderData.cgst || 0 }}</p>
          </div>
          <div class="itemDetails">
            <p>SGST:</p>
            <p>Rs.{{ orderData.sgst || 0 }}</p>
          </div>
          <hr />
          <div class="itemDetails">
            <p>Total:</p>
            <p>Rs.{{ totalPrice }}</p>
          </div>
          <div class="itemDetails">
            <p>Delivery:</p>
            <p>Rs.{{ orderData.total_delivery_charges || 0 }}</p>
          </div>
          <hr />
          <div class="itemDetails">
            <p>Total:</p>
            <p>Rs.{{ orderData.price || 0 }}</p>
          </div>
        </div>
      </div>
      <div class="addressBtn">
        <button type="button" @click="payNow">Make Payment</button>
      </div>
      <!-- <div class="addressDiv">
        <h3>Shipping To</h3>
        <div class="adddress-container" v-if="addressArray.length > 0">
          <div
            class="addressOption active_add"
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
        <button type="button" @click="payNow">Make Payment</button>
      </div> -->
    </div>
  </section>
  <section class="productSec">
    <h3>Recommendend products</h3>
    <hr />
    <ProductsComp />
  </section>
  <section class="productSec">
    <h3>Most bought products</h3>
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
    <input type="hidden" name="amount" v-model="orderData.price" size="64" />

    <input type="hidden" name="productinfo" v-model="productInfo" size="64" />

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
import BagItemPageComp from "./BagItemPageComp.vue";
import ProductsComp from "../HomePage/ProductsComp.vue";

import { useRoute } from "vue-router";

import axios from "@/axios";

import { mapActions, mapMutations } from "vuex";
import sha512 from "js-sha512";

import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

export default {
  name: "BagItemPage",
  data() {
    return {
      id: null,
      qty: 1,
      product: {},
      totalPrice: 0,
      fav_show: false,
      payment_option: null,
      selected_add: null,
      orderData: [],

      // amount_pay: '678.64',
      hash: "",
      txnid: "",
      productInfo: "Magaswala",
      payuUrl: "https://secure.payu.in/_payment",
      mkey: "nxpvv9VZ",
      saltKey: "3oFxUMtWG2",
      // payuUrl: "https://test.payu.in/_payment",
      // mkey: "gtKFFx",
      // saltKey: "eCwWELxi",
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
    BagItemPageComp,
  },
  computed: {
    favArray() {
      return this.$store.state.module.favourite;
    },
    addressArray() {
      return this.$store.getters.allAddress;
    },
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) {
        this.id = to.params.id;
        // console.log("New Id: ", this.id);
        this.getProductById(this.id);
      }
    },
    qty(newVal, oldVal) {
      this.updateProductPrice(newVal, oldVal);
    },
  },
  methods: {
    fetchData() {
      const route = useRoute();
      this.id = route.params.id;
      this.getProductById(this.id);
      this.getAllFavourite().then(() => {
        this.checkFav(this.id);
      });
    },
    ...mapMutations(["setProduct"]),
    homeAdd(data) {
      const addData = JSON.stringify(data);
      this.$router.push({
        name: "HomeAddressComp",
        params: {
          address: CryptoJS.AES.encrypt(addData, "12345678").toString(),
        },
      });
    },
    async makeOrders(data) {
      try {
        await axios.post(`order`, data);
        // console.log("Order Placed Successfully !!");
        // console.log("Response: ", response);
      } catch (error) {
        console.error(error);
      }
    },
    getOrderData(data) {
      this.orderData = data;
      this.totalPrice =
        this.orderData.pricetotal + this.orderData.cgst + this.orderData.sgst;
      // console.log("Order Price:- ", this.orderData.price);
      this.split_id = this.orderData.order_id.toString().split("-")[1];

      // console.log(this.split_id);

      this.order_split_result = this.removeLeadingZeros(this.split_id);
      // console.log(this.order_split_result); // Output: '131'
    },

    removeLeadingZeros(inputString) {
      // Use regular expression to remove leading zeros
      const match = inputString.match(/^0*(\d+)/);
      return match ? match[1] : "0";
    },

    makePayment() {
      // console.log("Order Data: ", data);
      // this.makeOrders(data).then(() => {
      //   // alert("Your Order Placed Successfully !!");
      //   this.$router.push({ name: "CompletePage" });
      // });
    },
    ...mapActions(["getAllFavourite", "getAllAddress", "getUser"]),
    checkFav(id) {
      this.favArray.forEach((item) => {
        if (id == item.product.id) {
          this.fav_show = true;
        }
      });
    },
    getQty(qty) {
      this.qty = qty;
    },
    updateProductPrice(newQty, oldQty) {
      if (newQty > oldQty) {
        this.p_price += Number(this.product.price);
      } else {
        this.p_price -= Number(this.product.price);
      }
    },
    async getProductById(id) {
      try {
        const response = await axios.get(`showproduct/${id}`);
        this.product = response.data.data;
        // console.log("New Product: ", this.product);
        localStorage.setItem("orderItem", JSON.stringify(response.data.data));
        // this.p_price = Number(this.product.price);
        // this.userDetails = response.data.data;
        // console.log(this.product);
        // console.log(typeof this.product.quantity);
      } catch (error) {
        console.error(error);
      }
    },
    payNow() {
      if (this.orderData != null && this.selected_add != null) {
        this.generateHashAndSubmitForm();
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
        this.orderData.price +
        "|" +
        this.productInfo +
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

      document.getElementById("paymentForm").submit();
    },

    makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      this.txnid = text;
    },
  },
  beforeMount() {
    this.getAllAddress().then(() => {
      this.$store.dispatch("getAddressId").then(() => {
        // console.log("Address Id: ", this.$store.getters.homeAddId);
        this.selected_add = this.$store.getters.homeAddId;
      });
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

    this.fetchData();
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
.bagItemContainer {
  width: 100%;
  margin: 2rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.checkout_content {
  width: 50%;
  min-height: 65rem;
  display: flex;
  flex-direction: column;
  padding-left: 1.2rem;
}

.checkout_content1 {
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
}

.checkout_content h3 {
  font-size: 2.6rem;
  font-weight: 600;
  padding-top: 1.4rem;
}

.paymentDiv {
  width: 55%;
  border-right: 0.2rem solid var(--border-color);
  padding-bottom: 3rem;
}

.paymentDiv h3 {
  font-size: 2.6rem;
  font-weight: 600;
  padding-top: 1.4rem;
}

.paymentDiv h4 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.6rem;
}

.paymentOption {
  max-width: 30rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4rem 0rem;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  margin-left: 0.4rem;
}

.paymentOption img {
  max-width: 2.2rem;
}

.paymentOption label {
  width: 80%;
  font-size: 1.8rem;
  font-weight: 600;
}

.chekOutDetails {
  width: 45%;
  max-width: 32rem;
  border-radius: 1.4rem;
  padding: 0rem 1.6rem;
  margin-top: 1rem;
}

.chekOutDetails h3 {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 0.8rem;
  margin: 0.2rem 1rem;
}

.itemDetails {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem 0;
  padding: 0 1.2rem;
}

.itemDetails p {
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

.addressDiv {
  width: 55%;
}

.addDivData {
  border-right: 0.2rem solid var(--border-color);
}

.adddress-container {
  height: 43rem;
  overflow-y: auto;
}

.adddress-container::-webkit-scrollbar {
  display: none;
}

.addressDiv h3 {
  font-size: 2.2rem;
  font-weight: 600;
}

.addressOption {
  width: 90%;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  padding: 0.8rem 2rem;
  margin: 1.1rem 1rem;
}

.addressOption i {
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--border-color);
}

.addressOption label {
  font-size: 2rem;
  font-weight: 600;
}

.addressOption span {
  font-size: 1.5rem;
  font-weight: 100;
}

.addressOption #address {
  font-size: 1.8rem;
}

.addressBtn {
  width: 100%;
}

.addressBtn button {
  font-size: 2rem;
  width: 60%;
  border: none;
  border-radius: 0.6rem;
  background-color: var(--primary-color);
  color: var(--btn-font-color);
  padding: 0.8rem 1.8rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 4.6rem;
}

.active_add {
  border: 0.1rem solid var(--border-color);
  border-radius: 0.4rem;
}

.productSec {
  padding: 2rem;
  margin-top: -2rem;
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
  .bagItemContainer {
    flex-direction: column;
    margin: 2rem 0rem;
  }

  .checkout_content {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-left: 1.2rem;
  }

  .checkout_content1 {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .paymentDiv {
    width: 90%;
    border-right: none;
  }

  .chekOutDetails {
    width: 100%;
    max-width: 32rem;
    border-radius: 1.4rem;
    padding: 0rem 0rem;
    margin: 1rem auto;
  }

  .addDivData {
    border-right: none;
  }

  .addressDiv {
    width: 100%;
  }

  .addressOption {
    margin: 1.6rem 2rem;
  }

  .addressBtn button {
    width: 100%;
    margin: 2rem auto;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .bagItemContainer {
    flex-direction: column;
    margin: 2rem 0rem;
    gap: 2rem;
  }

  .checkout_content {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-left: 1.2rem;
  }

  .checkout_content1 {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .paymentDiv {
    width: 50%;
    border-right: 0.2rem solid var(--border-color);
  }

  .chekOutDetails {
    width: 90%;
    max-width: 32rem;
    border-radius: 1.4rem;
    padding: 0rem 1.2rem;
  }

  .addressDiv {
    margin: 1.6rem auto;
  }

  .addressOption {
    margin: 1.6rem 2rem;
  }

  .addressBtn button {
    width: 100%;
    margin: 2rem auto;
  }

  .productSec h3 {
    font-size: 2.6rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .bagItemContainer {
    flex-direction: column;
    margin: 2rem 0rem;
    gap: 2rem;
  }

  .checkout_content {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-left: 1.2rem;
  }

  .checkout_content1 {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .paymentDiv {
    width: 50%;
    border-right: 0.2rem solid var(--border-color);
  }

  .chekOutDetails {
    width: 90%;
    max-width: 32rem;
    border-radius: 1.4rem;
    padding: 0rem 1.2rem;
  }

  .addressDiv {
    margin: 1.6rem auto;
  }

  .addressOption {
    margin: 1.6rem 2rem;
  }

  .addressBtn button {
    width: 100%;
    margin: 2rem auto;
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
