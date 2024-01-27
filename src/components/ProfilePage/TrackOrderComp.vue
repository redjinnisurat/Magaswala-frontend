<template>
  <div>
    <h3 class="fs-1 fw-semibold mt-3 ms-3 mb-0 heading">Track Order</h3>
  </div>
  <div class="w-100 d-flex align-items-center track-content">
    <div class="w-50 d-flex align-items-center justify-content-center">
      <img class="w-100 ms-5" src="./assets/track_img.jpg" alt="Image" />
    </div>
    <div class="ms-5 ps-5 h-100 track-data" style="width: 40%">
      <div class="item-div">
        <h3 class="fs-3 mb-0">Order Details</h3>
        <hr class="mb-1 mt-1" style="width: 75%" />
        <h3 class="fs-3 mb-0">Order No.: #{{ order_data.order_num }}</h3>
        <div class="w-100 mt-0 d-flex align-items-center">
          <div class="w-25">
            <h3 class="fw-bold mb-0">{{ order_data.product.product.name }}</h3>
            <h4 class="text-muted mb-0">
              {{ order_data.product.product.quantity }}
            </h4>
          </div>
          <div
            class="w-50 ms-5 d-flex align-items-center justify-content-center"
            style="height: 10rem"
          >
            <img
              class="w-75 rounded-4"
              :src="
                order_data.product.product.image
                  ? order_data.product.product.image
                  : defaulImage
              "
              alt="Image"
            />
          </div>
        </div>
        <div class="w-100 d-flex align-items-center mt-2">
          <div class="w-25">
            <h4 class="text-muted mb-0">Rating</h4>
          </div>
          <div class="w-50 ms-5 ps-5">
            <i class="fa-regular fa-star me-1 fs-5 icon"></i>
            <i class="fa-regular fa-star me-1 fs-5 icon"></i>
            <i class="fa-regular fa-star me-1 fs-5 icon"></i>
            <i class="fa-regular fa-star me-1 fs-5 icon"></i>
            <i class="fa-regular fa-star me-1 fs-5 icon"></i>
          </div>
        </div>
      </div>
      <div class="mt-3 trackitem-line">
        <h3 class="fs-1 mb-4">Track Order</h3>
        <div
          v-for="step in orderSteps"
          :key="step.id"
          class="w-100 d-flex align-items-center track-container"
        >
          <div :class="getTrackingClass(step.id)" style="width: 10%">
            <div :class="getTrackingDotClass(step.id)"></div>
            <div
              :class="getTrackingLineClass(step.id)"
              v-if="step.id != 5"
            ></div>
          </div>
          <div class="" style="width: 80%">
            <h4 class="fs-4 fw-semibold mb-0">{{ step.title }}</h4>
            <p class="fs-5 text-muted mb-0">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import { useRoute } from "vue-router";
import CryptoJS from "crypto-js";

export default {
  name: "TrackOrderComp",
  data() {
    return {
      order_data: {},
      order_status: 1,
      defaulImage: require("./assets/ladoo_img_1.jpeg"),
    };
  },
  computed: {
    orderSteps() {
      return [
        {
          id: 1,
          title: "Order Placed",
          description: "We have received your order",
        },
        {
          id: 2,
          title: "Confirmed",
          description: "Your order has been confirmed",
        },
        {
          id: 3,
          title: "Order Shipped",
          description: "Estimated for 10 January, 2024",
        },
        {
          id: 4,
          title: "Out of Delivery",
          description: "Estimated for 11 January, 2024",
        },
        {
          id: 5,
          title: "Delivered",
          description: "Estimated for 14 January, 2024",
        },
      ];
    },
  },
  methods: {
    async getStatus() {
      const response = await axios.get(`showorderstatus/${this.order_data.id}`);
      // console.log("Response: ", response.data);
      this.order_status = response.data.order_status;
      // console.log("Status: ", this.order_status);
    },
    getTrackingClass(stepId) {
      const classes = ["tracking-container"];
      if (stepId < this.order_status) {
        classes.push("color-orange");
      } else if (stepId == this.order_status) {
        classes.push("color-orange");
      } else {
        classes.push("color-grey");
      }
      return classes;
    },

    getTrackingDotClass(stepId) {
      if (stepId < this.order_status) {
        return "tracking-drop rounded-circle color-orange";
      } else if (stepId == this.order_status) {
        return "tracking-drop rounded-circle color-green";
      } else {
        return "tracking-drop rounded-circle color-grey";
      }
    },

    getTrackingLineClass(stepId) {
      if (stepId < this.order_status) {
        return "tracking-line color-orange";
      } else {
        return "tracking-line color-grey";
      }
    },
  },
  beforeMount() {
    const route = useRoute();
    const encryptData = CryptoJS.AES.decrypt(
      route.params.order,
      "12345678"
    ).toString(CryptoJS.enc.Utf8);
    if (encryptData == undefined) {
      this.order_data = JSON.parse(localStorage.getItem("order-item"));
      // console.log("Order Data: ", this.order_data);
    } else {
      this.order_data = JSON.parse(encryptData);
    }
    // console.log("Order Data: ", this.order_data);

    this.getStatus();
  },
};
</script>

<style scoped>
.heading {
  color: var(--heading-color);
}

.icon {
  color: var(--border-color);
  cursor: pointer;
}

.track-container {
  margin-bottom: 2.6rem;
}

.tracking-container {
  margin-left: 0;
  margin-right: 1rem;
  position: relative;
}

.tracking-line {
  width: 2.2px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 0;
  transform: translateX(-50%);
}

.tracking-drop {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  top: -0.5rem;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}

.color-orange {
  background-color: orange;
}

.color-green {
  background-color: green;
}

.color-grey {
  background-color: grey;
}

@media only screen and (max-width: 576px) {
  .track-content {
    flex-direction: column;
  }

  .track-data {
    width: 90% !important;
    display: flex;
    margin-left: 0 !important;
    padding-left: 0 !important;
  }

  .item-div {
    margin-top: 5rem;
  }

  .trackitem-line {
    width: 80% !important;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .track-content {
    flex-direction: column;
  }

  .track-data {
    width: 90% !important;
    display: flex;
    margin-left: 0 !important;
    padding-left: 0 !important;
  }

  .item-div {
    margin-top: 5rem;
  }

  .trackitem-line {
    width: 50% !important;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .track-content {
    flex-direction: column;
  }

  .track-data {
    width: 90% !important;
    display: flex;
    margin-left: 0 !important;
    padding-left: 0 !important;
  }

  .item-div {
    margin-top: 5rem;
  }

  .trackitem-line {
    width: 50% !important;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
