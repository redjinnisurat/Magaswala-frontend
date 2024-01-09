<template>
<section class="bagItemContainer">
    <BagItemPageComp :i_id="product.id" :i_name="product.name" :i_price="product.price" :i_quantity="product.quantity" :i_desc="product.desc" :i_note="product.note" :getQty="getQty" :fav_flag="fav_show"/>
    <div class="checkout_content">
        <div class="checkout_content1">
            <div class="paymentDiv">
                <h3>Checkout</h3>
                <br>
                <h4>Payment Options</h4>
                <div class="paymentOption">
                    <img src="./assets/master_card_img.png" alt="img">
                    <label for="creditCard">Credit Card/Debit card</label>
                    <input type="radio" name="paymentOption" id="creditCard" value="creditCard">
                </div>
                <div class="paymentOption">
                    <img src="./assets/apple_pay_img.png" alt="img">
                    <label for="applePay">Apple Pay</label>
                    <input type="radio" name="paymentOption" id="applePay" value="applePay">
                </div>
                <div class="paymentOption">
                    <img src="./assets/bhim_upi_img.jpeg" alt="img">
                    <label for="bhimUpi">Bhim UPI</label>
                    <input type="radio" name="paymentOption" id="bhimUpi" value="bhimUpi">
                </div>
                <div class="paymentOption">
                    <img src="./assets/cash_delivery_img.png" alt="img">
                    <label for="cashOnDelivery">Payment On Delivery</label>
                    <input type="radio" name="paymentOption" id="cashOnDelivery" value="cashOnDelivery">
                </div>
            </div>
            <div class="chekOutDetails">
                <h3>Order Summary</h3>
                <div class="itemDetails">
                    <p>Items: </p>
                    <p>Rs.{{p_price}}</p>
                </div>
                <div class="itemDetails">
                    <p>CGST: </p>
                    <p>Rs.20</p>
                </div>
                <div class="itemDetails">
                    <p>SGST: </p>
                    <p>Rs.20</p>
                </div>
                <hr>
                <div class="itemDetails">
                    <p>Total: </p>
                    <p>Rs.{{Number(p_price) + 20 + 20}}</p>
                </div>
                <div class="itemDetails">
                    <p>Delivery: </p>
                    <p>Rs.45</p>
                </div>
                <hr>
                <div class="itemDetails">
                    <p>Total: </p>
                    <p>Rs.{{Number(p_price) + 40 + 45}}</p>
                </div>
            </div>
        </div>
        <div class="addressDiv">
            <h3>Shipping To</h3>
            <div class="addressOption">
                <i class="fa-solid fa-pen-to-square"></i>
                <label for="homeAddress">Home Address
                    <br> <span id="address">(269) 444-6893</span> <br>
                    <span>Road Number 5689 Akali</span>
                </label>
                <input type="radio" value="home" id="homeAddress" name="addressOption">
            </div>
            <div class="addressOption active_add">
                <i class="fa-solid fa-pen-to-square"></i>
                <label for="officeAddress">Office Address
                    <br> <span id="office">(269) 444-2568</span> <br>
                    <span>Road Number 2409 Blogshow</span>
                </label>
                <input type="radio" value="office" id="officeAddress" name="addressOption">
            </div>
            <button type="button">Make Payment</button>
        </div>
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
</template>

<script>
import BagItemPageComp from "./BagItemPageComp.vue"
import ProductsComp from "../HomePage/ProductsComp.vue";

import {
    useRoute
} from 'vue-router';

import axios from '@/axios';

import {
    mapActions
} from 'vuex';

export default {
    name: "BagItemPage",
    data() {
        return {
            id: null,
            qty: 1,
            product: {},
            p_price: 0,
            fav_show: false
        }
    },
    components: {
        ProductsComp,
        BagItemPageComp
    },
    computed: {
        favArray() {
            return this.$store.state.module.favourite;
        }
    },
    watch: {
        qty(newVal, oldVal) {
            this.updateProductPrice(newVal, oldVal);
        }
    },
    methods: {
        ...mapActions(['getAllFavourite']),
        checkFav(id) {
            this.favArray.forEach(item => {
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
                this.p_price = Number(this.product.price);
            } catch (error) {
                console.error(error);
            }
        }
    },
    beforeMount() {
        const route = useRoute();
        this.id = route.params.id;
        this.getProductById(this.id);
        this.getAllFavourite().then(() => {
            this.checkFav(this.id);
        });
    },
};
</script>

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
    width: 40%;
    max-width: 32rem;
    border-radius: 1.4rem;
    padding: 0rem 1.6rem;
    margin-top: auto;
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
    width: 50%;
}

.addressDiv h3 {
    font-size: 2rem;
    font-weight: 600;
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
    margin: 1.6rem auto;
}

.addressOption i {
    font-size: 1.3rem;
    font-weight: 400;
    margin-left: 4rem;
    color: var(--border-color);
}

.addressOption label span {
    font-size: 1.3rem;
    font-weight: 100;
}

.addressDiv button {
    width: 100%;
    border: none;
    border-radius: 0.6rem;
    background-color: var(--primary-color);
    color: var(--btn-font-color);
    padding: 0.8rem 1.8rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 1.6rem;
    margin-bottom: 1.2rem;
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
        width: 90%;
        max-width: 32rem;
        border-radius: 1.4rem;
        padding: 0rem 0rem;
        margin-top: auto;
    }

    .addressDiv {
        width: 90%;
    }

    .addressOption {
        margin: 1.6rem 2rem;
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
        margin-top: auto;
    }

    .addressDiv {
        margin: 1.6rem auto;

    }

    .addressOption {
        margin: 1.6rem 2rem;
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
        margin-top: auto;
    }

    .addressDiv {
        margin: 1.6rem auto;
    }

    .addressOption {
        margin: 1.6rem 2rem;
    }

    .productSec h3 {
        font-size: 2.6rem;
    }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {}
</style>
