<template>
  <div class="order-content">
    <div class="w-100 mb-3 d-flex align-items-center">
      <div
        class="d-flex align-items-center pt-1 pb-1 justify-content-center me-3 img-background"
        style="width: 26%"
      >
        <img style="width: 70%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
      </div>
      <div class="data-div" style="width: 40%">
        <h3 class="fs-3 fw-semibold item-color">
          Kesar Magas <span class="price-color">1Kg</span>
        </h3>
        <h3 class="fs-3 fw-semibold item-color">Made with pure kesar</h3>
        <h3 class="fs-4 fw-bold" id="label-text">On the way!!</h3>
      </div>
      <div class="ms-5 btn-div" style="width: 20%">
        <button class="order-btn" type="button" v-on:click="nextPage()">
          Track Order
        </button>
      </div>
    </div>
    <div class="w-100 mb-3 d-flex align-items-center">
      <div
        class="d-flex align-items-center pt-1 pb-1 justify-content-center me-3 img-background"
        style="width: 26%"
      >
        <img style="width: 70%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
      </div>
      <div class="data-div" style="width: 40%">
        <h3 class="fs-3 fw-semibold item-color">
          Kesar Magas <span class="price-color">1Kg</span>
        </h3>
        <h3 class="fs-3 fw-semibold item-color">Made with pure kesar</h3>
        <h3 class="fs-4 fw-bold" id="label-text">On the way!!</h3>
      </div>
      <div class="ms-5 btn-div" style="width: 20%">
        <button class="order-btn" type="button" v-on:click="nextPage()">
          Track Order
        </button>
      </div>
    </div>
    <div class="w-100 mb-3 d-flex align-items-center">
      <div
        class="d-flex align-items-center pt-1 pb-1 justify-content-center me-3 img-background"
        style="width: 26%"
      >
        <img style="width: 70%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
      </div>
      <div class="data-div" style="width: 40%">
        <h3 class="fs-3 fw-semibold item-color">
          Kesar Magas <span class="price-color">1Kg</span>
        </h3>
        <h3 class="fs-3 fw-semibold item-color">Made with pure kesar</h3>
        <h3 class="fs-4 fw-bold" id="label-text">On the way!!</h3>
      </div>
      <div class="ms-5 btn-div" style="width: 20%">
        <button class="order-btn" type="button" v-on:click="nextPage()">
          Track Order
        </button>
      </div>
    </div>
    <div class="w-100 mb-3 d-flex align-items-center">
      <div
        class="d-flex align-items-center pt-1 pb-1 justify-content-center me-3 img-background"
        style="width: 26%"
      >
        <img style="width: 70%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
      </div>
      <div class="data-div" style="width: 40%">
        <h3 class="fs-3 fw-semibold item-color">
          Kesar Magas <span class="price-color">1Kg</span>
        </h3>
        <h3 class="fs-3 fw-semibold item-color">Made with pure kesar</h3>
        <h3 class="fs-4 fw-bold" id="label-text">On the way!!</h3>
      </div>
      <div class="ms-5 btn-div" style="width: 20%">
        <button class="order-btn" type="button" v-on:click="nextPage()">
          Track Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItemComp",
  methods: {
    nextPage() {
      this.$router.push({ name: "TrackOrderComp" });
    },
  },
};
</script>

<style scoped>
.order-content {
  height: 22rem;
}

.img-background {
  background-color: var(--primary-color);
}

.item-color {
  color: grey;
}

.price-color {
  color: var(--price-font-color);
}

.order-btn {
  font-size: 1.4rem;
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  cursor: pointer;
}

@media only screen and (max-width: 576px) {
  .data-div h3 {
    font-size: 1.4rem !important;
  }

  #label-text {
    font-size: 1.2rem !important;
  }

  .btn-div {
    width: 40% !important;
  }

  .order-btn {
    font-size: 1.4rem !important;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .data-div h3 {
    font-size: 1.8rem !important;
  }

  #label-text {
    font-size: 1.4rem !important;
  }

  .order-btn {
    font-size: 1.4rem !important;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .data-div h3 {
    font-size: 1.8rem !important;
  }

  #label-text {
    font-size: 1.4rem !important;
  }

  .order-btn {
    font-size: 1.4rem !important;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
