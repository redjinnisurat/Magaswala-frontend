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
        <h3 class="fs-3 mb-0">Order No.: #124578</h3>
        <div class="w-100 mt-0 d-flex align-items-center">
          <div class="w-25">
            <h3 class="fw-bold mb-0">Magas</h3>
            <h4 class="text-muted mb-0">1Kg</h4>
          </div>
          <div class="w-50 ms-5">
            <img class="w-75" src="./assets/ladoo_img_1.jpeg" alt="Image" />
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
        <div class="w-100 d-flex align-items-center track-container">
          <div class="tracking-container" style="width: 10%">
            <div class="tracking-drop rounded-circle color-orange"></div>
            <div class="tracking-line color-orange"></div>
          </div>
          <div class="" style="width: 80%">
            <h4 class="fs-4 fw-semibold mb-0">Order Placed</h4>
            <p class="fs-5 text-muted mb-0">We have received your order</p>
          </div>
        </div>
        <div class="w-100 d-flex align-items-center track-container">
          <div class="tracking-container" style="width: 10%">
            <div class="tracking-drop rounded-circle color-green"></div>
            <div class="tracking-line color-grey"></div>
          </div>
          <div class="" style="width: 80%">
            <h4 class="fs-4 fw-semibold mb-0">Confirmed</h4>
            <p class="fs-5 text-muted mb-0">Your order has been confirmed</p>
          </div>
        </div>
        <div class="w-100 d-flex align-items-center track-container">
          <div class="tracking-container" style="width: 10%">
            <div class="tracking-drop rounded-circle color-grey"></div>
            <div class="tracking-line color-grey"></div>
          </div>
          <div class="" style="width: 80%">
            <h4 class="fs-4 fw-semibold mb-0">Order Shipped</h4>
            <p class="fs-5 text-muted mb-0">Estimated for 10 January, 2024</p>
          </div>
        </div>
        <div class="w-100 d-flex align-items-center track-container">
          <div class="tracking-container" style="width: 10%">
            <div class="tracking-drop rounded-circle color-grey"></div>
            <div class="tracking-line color-grey"></div>
          </div>
          <div class="" style="width: 80%">
            <h4 class="fs-4 fw-semibold mb-0">Out of Delivery</h4>
            <p class="fs-5 text-muted mb-0">Estimated for 11 January, 2024</p>
          </div>
        </div>
        <div class="w-100 d-flex align-items-center track-container">
          <div class="tracking-container" style="width: 10%">
            <div class="tracking-drop rounded-circle color-grey"></div>
          </div>
          <div class="" style="width: 80%">
            <h4 class="fs-4 fw-semibold mb-0">Delivered</h4>
            <p class="fs-5 text-muted mb-0">Estimated for 14 January, 2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackOrderComp",
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
  top: -0.8rem;
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
