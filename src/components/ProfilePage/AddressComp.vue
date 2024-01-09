<template>
  <div>
    <div>
      <h3 class="fs-1 fw-semibold mt-3 ms-3 heading">Addresses</h3>
    </div>
    <div class="w-100 d-flex align-items-center mt-5">
      <div
        class="w-50 d-flex flex-column align-items-start justify-content-center"
      >
        <div
          class="w-100 ms-2 d-flex align-items-center justify-content-between border border-color p-4 mb-5"
        >
          <div class="">
            <h3 class="fs-2 fw-semibold">Home Address</h3>
            <p class="mb-0 fs-3 text-muted">(269) 444-6853</p>
            <p class="mb-0 fs-3 text-muted">Road Number 5649 Akali</p>
          </div>
          <div class="me-3">
            <i
              class="fa-solid fa-pen-to-square icon fs-2"
              v-on:click="homeAdd()"
            ></i>
          </div>
        </div>
        <div
          class="w-100 ms-2 d-flex align-items-center justify-content-between border border-color p-4"
        >
          <div class="">
            <h3 class="fs-2 fw-semibold">Office Address</h3>
            <p class="mb-0 fs-3 text-muted">(269) 444-6853</p>
            <p class="mb-0 fs-3 text-muted">Road Number 2403 Blogshow</p>
          </div>
          <div class="me-3">
            <i
              class="fa-solid fa-pen-to-square icon fs-2"
              v-on:click="officeAdd()"
            ></i>
          </div>
        </div>
      </div>
      <div class="w-50 d-flex align-items-center justify-content-center">
        <img class="w-75" src="./assets/address_img.jpg" alt="Image" />
      </div>
    </div>
    <div class="d-flex align-items-center ms-3 mt-4">
      <i
        class="fa-solid fa-plus icon icon-size"
        id="addAdd"
        v-on:click="addAddress()"
      ></i>
      <h3 class="fw-semibold ms-2 mt-2 text-size" v-on:click="addAddress()">
        Add Address
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressComp",
  methods: {
    addAddress() {
      this.$router.push({
        name: "AddAddressComp",
      });
    },
    homeAdd() {
      this.$router.push({
        name: "HomeAddressComp",
      });
    },
    officeAdd() {
      this.$router.push({
        name: "OfficeAddressComp",
      });
    },
  },
};
</script>

<style scoped>
.heading {
  color: var(--heading-color);
}

.text-size {
  font-size: 2.2rem;
  cursor: pointer;
}

.icon {
  color: var(--border-color);
  cursor: pointer;
}

.icon-size {
  font-size: 3rem;
}

.border-color {
  border-radius: 0.6rem;
  border-color: var(--border-color) !important;
}
</style>
