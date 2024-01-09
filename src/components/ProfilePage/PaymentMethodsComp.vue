<template>
  <div class="d-flex flex-column w-100 content-data">
    <div>
      <h3 class="fs-1 fw-semibold mt-3 ms-3 heading">Payment Methods</h3>
    </div>
    <div class="mt-4 ms-3">
      <h3 class="fs-2 fw-semibold">Cards</h3>
      <div class="d-flex mt-4 align-items-center">
        <div
          class="w-25 d-flex align-items-center justify-content-center pt-2 pb-2"
        >
          <img class="w-100" src="./assets/card_img.jpg" alt="Card Image" />
        </div>
        <div class="w-75 ms-4">
          <h3 class="border-3 border-start ps-1 border-color fw-bold mb-4">
            Cards
          </h3>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/master_card_img.png"
              alt="Rupay Image"
            />
            <h3 class="ms-2 mb-0 fs-4 fw-semibold">
              Add Credit, Debit & ATM Cards
            </h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 ms-3">
      <h3 class="fs-2 fw-semibold">Upi</h3>
      <div class="d-flex mt-4 align-items-center">
        <div
          class="w-25 d-flex align-items-center justify-content-center pt-2 pb-2"
        >
          <img class="w-100" src="./assets/qr_img.jpg" alt="Card Image" />
        </div>
        <div class="w-75 ms-4">
          <h3 class="border-3 border-start ps-1 border-color fw-bold mb-4">
            UPI
          </h3>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/paytm_img.jpg"
              alt="Rupay Image"
            />
            <h3 class="w-25 ms-2 mb-0 fs-4 fw-semibold">Paytm UPI</h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/gpay_img.jpeg"
              alt="Rupay Image"
            />
            <h3 class="w-25 ms-2 mb-0 fs-4 fw-semibold">Google UPI</h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/phonepay_img.jpg"
              alt="Rupay Image"
            />
            <h3 class="w-25 ms-2 mb-0 fs-4 fw-semibold">Phone Pay</h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/bhim_upi_img.jpeg"
              alt="Rupay Image"
            />
            <h3 class="w-25 ms-2 mb-0 fs-4 fw-semibold">Pay Via UPI</h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
          <p class="w-50 p-size fw-semibold text-muted mt-3 ms-4">
            You Need to Have A Registered UPI ID.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 ms-3 mb-5">
      <h3 class="fs-2 fw-semibold">Net Banking</h3>
      <div class="d-flex mt-4 align-items-center">
        <div
          class="w-25 d-flex align-items-center justify-content-center pt-2 pb-2"
        >
          <img class="w-100" src="./assets/net_banking.jpg" alt="Card Image" />
        </div>
        <div class="w-75 ms-4">
          <h3 class="border-3 border-start ps-1 border-color fw-bold mb-4">
            Net Banking
          </h3>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/sbi_img.png"
              alt="Rupay Image"
            />
            <h3 class="w-25 ms-2 mb-0 fs-4 fw-semibold">State Bank Of India</h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/bob_img.png"
              alt="Rupay Image"
            />
            <h3 class="w-25 ms-2 mb-0 fs-4 fw-semibold">Bank of Baroda</h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/kotak_img.png"
              alt="Rupay Image"
            />
            <h3 class="w-25 ms-2 mb-0 fs-4 fw-semibold">Kotak Bank</h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
          <div class="d-flex mt-4 align-items-center">
            <img
              class="img shadow"
              src="./assets/axis_img.png"
              alt="Rupay Image"
            />
            <h3 class="w-25 ms-2 mb-0 fs-4 fw-semibold">Axis Bank</h3>
            <i class="fa-regular fa-circle-right fs-2 icon ms-4"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentMethodsComp",
};
</script>

<style scoped>
.content-data {
  max-height: 56rem;
  overflow-y: auto;
}

.content-data::-webkit-scrollbar {
  display: none;
}

.heading {
  color: var(--heading-color);
}

.border-color {
  border-color: var(--border-color) !important;
}

.icon {
  color: var(--border-color);
  cursor: pointer;
}

.img {
  width: 3rem;
}

.p-size {
  font-size: 1rem;
}
</style>
