<template>
  <div class="content-data">
    <h3 class="fs-1 fw-semibold mt-3 ms-3 mb-2 heading">Orders</h3>
    <div class="mt-1 ms-3 me-3 order-container">
      <OrderItemComp />
    </div>
    <div
      class="ms-3 mt-5 me-3 d-flex align-items-center justify-content-between"
      style="width: 90%"
    >
      <h5 class="heading heading-size mt-1">Recently ordered</h5>
      <select
        class="w-25 fw-semibold text-center fs-4 me-5 select-days"
        id="sort_days"
      >
        <option value="last_10">Last 10 days</option>
        <option value="last_25">Last 20 days</option>
        <option value="last_20">Last 30 days</option>
      </select>
    </div>
    <div class="ms-3 me-3 mt-3">
      <div class="w-25 mt-3 mb-2 d-flex justify-content-center order-date">
        <p class="fs-4 fw-semibold mb-0 ms-2">10/12/2022, Saturday</p>
      </div>
      <div class="w-100 mt-3 mb-3 d-flex align-items-center">
        <div
          class="d-flex align-items-center pt-1 pb-1 ms-2 justify-content-center me-3 img-background"
          style="width: 20%"
        >
          <img style="width: 80%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
        </div>
        <div class="" style="width: 45%">
          <h3 class="fs-4 fw-semibold item-color mb-3">
            Kesar Magas <span class="price-color ms-4">1Kg</span>
          </h3>
          <div class="d-flex align-items-center">
            <h3
              class="fs-4 fw-semibold item-color pb-1 color-green border-class"
            >
              Delivered
            </h3>
            <i class="fa-solid fa-check ms-2 fs-4 fw-semibold mb-1 icon"></i>
          </div>
        </div>
        <div class="ms-5" style="width: 20%">
          <button class="fs-3 order-btn" type="button">Order again</button>
        </div>
      </div>
      <div class="w-100 mt-3 mb-3 d-flex align-items-center">
        <div
          class="d-flex align-items-center pt-1 pb-1 ms-2 justify-content-center me-3 img-background"
          style="width: 20%"
        >
          <img style="width: 80%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
        </div>
        <div class="" style="width: 45%">
          <h3 class="fs-4 fw-semibold item-color mb-3">
            Kesar Magas <span class="price-color ms-4">1Kg</span>
          </h3>
          <div class="d-flex align-items-center">
            <h3
              class="fs-4 fw-semibold item-color pb-1 color-green border-class"
            >
              Delivered
            </h3>
            <i class="fa-solid fa-check ms-2 fs-4 fw-semibold mb-1 icon"></i>
          </div>
        </div>
        <div class="ms-5" style="width: 20%">
          <button class="fs-3 order-btn" type="button">Order again</button>
        </div>
      </div>
      <div class="w-25 mt-5 mb-2 d-flex justify-content-center order-date">
        <p class="fs-4 fw-semibold mb-0 ms-2">01/12/2022, Thursday</p>
      </div>
      <div class="w-100 mt-3 mb-3 d-flex align-items-center">
        <div
          class="d-flex align-items-center pt-1 pb-1 ms-2 justify-content-center me-3 img-background"
          style="width: 20%"
        >
          <img style="width: 80%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
        </div>
        <div class="" style="width: 45%">
          <h3 class="fs-4 fw-semibold item-color mb-3">
            Kesar Magas <span class="price-color ms-4">1Kg</span>
          </h3>
          <div class="d-flex align-items-center">
            <h3
              class="fs-4 fw-semibold item-color pb-1 color-green border-class"
            >
              Delivered
            </h3>
            <i class="fa-solid fa-check ms-2 fs-4 fw-semibold mb-1 icon"></i>
          </div>
        </div>
        <div class="ms-5" style="width: 20%">
          <button class="fs-3 order-btn" type="button">Order again</button>
        </div>
      </div>
      <div class="w-100 mt-3 mb-3 d-flex align-items-center">
        <div
          class="d-flex align-items-center pt-1 pb-1 ms-2 justify-content-center me-3 img-background"
          style="width: 20%"
        >
          <img style="width: 80%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
        </div>
        <div class="" style="width: 45%">
          <h3 class="fs-4 fw-semibold item-color mb-3">
            Kesar Magas <span class="price-color ms-4">1Kg</span>
          </h3>
          <div class="d-flex align-items-center">
            <h3
              class="fs-4 fw-semibold item-color pb-1 color-green border-class"
            >
              Delivered
            </h3>
            <i class="fa-solid fa-check ms-2 fs-4 fw-semibold mb-1 icon"></i>
          </div>
        </div>
        <div class="ms-5" style="width: 20%">
          <button class="fs-3 order-btn" type="button">Order again</button>
        </div>
      </div>
      <div class="w-100 mt-3 mb-3 d-flex align-items-center">
        <div
          class="d-flex align-items-center pt-1 pb-1 ms-2 justify-content-center me-3 img-background"
          style="width: 20%"
        >
          <img style="width: 80%" src="./assets/ladoo_img_1.jpeg" alt="Image" />
        </div>
        <div class="" style="width: 45%">
          <h3 class="fs-4 fw-semibold item-color mb-3">
            Kesar Magas <span class="price-color ms-4">1Kg</span>
          </h3>
          <div class="d-flex align-items-center">
            <h3
              class="fs-4 fw-semibold item-color pb-1 color-green border-class"
            >
              Delivered
            </h3>
            <i class="fa-solid fa-check ms-2 fs-4 fw-semibold mb-1 icon"></i>
          </div>
        </div>
        <div class="ms-5" style="width: 20%">
          <button class="fs-3 order-btn" type="button">Order again</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItemComp from "./OrderItemComp.vue";

export default {
  name: "OrdersComp",
  components: {
    OrderItemComp,
  },
};
</script>

<style scoped>
.content-data {
  max-height: 56rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.content-data::-webkit-scrollbar {
  display: none;
}

.order-container {
  min-height: 22rem;
  padding: 1.4rem 1.6rem;
  overflow-y: auto;
  border-radius: 0.6rem;
}

.order-container::-webkit-scrollbar {
  display: none;
}

.heading {
  color: var(--heading-color);
}

.heading-size {
  font-size: 2.5rem;
}

.select-days {
  border: 0.2rem solid var(--border-color);
  border-radius: 0.8rem;
  padding: 0.6rem 1.9rem;
  background: transparent;
  color: grey;
  outline: none;
}

.order-date {
  border: 0.2rem solid var(--border-color);
  border-radius: 0.8rem;
  padding: 0.6rem 0.8rem;
  color: grey;
}

.price-color {
  color: var(--price-font-color);
}

.img-background {
  background-color: var(--primary-color);
}

.color-green {
  color: green;
}

.border-class {
  border-bottom: 0.2rem solid green;
}

.icon {
  color: green;
  font-weight: 600;
}

.order-btn {
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  cursor: pointer;
}
</style>
