<template>
<div class="bagContent">
    <div class="bagItem" v-for="(item, index) in cartArray" :key="index">
        <img src="./assets/ladoo_img_1.jpeg" alt="Image">
        <div class="bagDetails">
            <div class="nameDiv">
                <h3>{{item.product_id.name}}</h3> <span>{{item.product_id.quantity}}</span>
            </div>
            <h3>{{item.product_id.desc}}</h3>
            <h4>Rs.{{item.product_id.price}}</h4>
        </div>
        <div class="bagItem_btns">
            <div class="trashIcon">
                <i class="fa-regular fa-trash-can" v-on:click="deleteItem(item.id)"></i>
            </div>
            <div class="counter">
                <div class="counter_i" id="plusBtn">
                    <i class="fa-solid fa-plus" id="plusBtn" v-on:click="add(item.id)"></i>
                </div>
                <p>{{item.qty}}</p>
                <div class="counter_i">
                    <i class="fa-solid fa-minus" v-on:click="remove(item.id)"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';

export default {
    name: 'BagItemComp',
    data() {
        return {

        }
    },
    computed: {
        cartArray() {
            return this.$store.getters.allCartItems;
        }
    },
    props: {
        get_t_price: Function
    },
    methods: {
        add(id) {
            this.cartArray.forEach(item => {
                if (id == item.id) {
                    item.qty++;
                    console.log("Item Qty: " + item.qty);
                }
            });
        },
        remove(id) {
            this.cartArray.forEach(item => {
                if (id == item.id) {
                    if(item.qty > 1) {
                        item.qty--;
                    }
                    console.log("Item Qty: " + item.qty);
                }
            });
        },
        ...mapActions(['deleteFromCart', 'getAllCartItems']),
        deleteItem(id) {
            if (confirm("Are you sure ?\nYou want to remove this item from your cart ?") == true) {
                this.deleteFromCart(id);
            }
            location.reload();
        }
    },
    beforeMount() {
        this.getAllCartItems();
    }
}
</script>

<style scoped>
.bagContent {
    width: 50%;
    height: 42rem;
    border-right: 2px solid black;
    overflow: auto;
    margin-top: 2rem;
    max-height: 46rem;
    align-items: center;
}

.bagContent::-webkit-scrollbar {
    display: none;
}

.bagItem {
    width: 45rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.8rem 2rem;
    border: 1px solid var(--border-color);
    margin-left: 4rem;
    border-radius: 0.6rem;
    margin-bottom: 1rem;
}

.bagItem img {
    max-width: 12rem;
}

.bagDetails {
    margin-left: 0.8rem;
}

.nameDiv {
    display: flex;
    align-items: center;
}

.nameDiv span {
    margin-left: 0.7rem;
    color: var(--price-font-color);
    font-weight: 400;
}

.bagDetails h3 {
    font-size: 1.5rem;
    font-weight: 400;
}

.bagDetails h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--price-font-color);
}

.bagItem_btns {
    text-align: center;
    margin-left: 5.2rem;
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
    padding: 0.1rem 0.5rem;
    border-radius: 50%;
    border: 0.5px solid var(--border-color);
    cursor: pointer;
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
        margin-left: -3.5rem;
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

@media only screen and (min-width: 993px) and (max-width: 1200px) {}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {}
</style>
