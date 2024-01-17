<template>
  <div>
    <div>
      <h3 class="fs-1 fw-semibold mt-3 ms-3 heading">Addresses</h3>
    </div>
    <div class="w-100 d-flex align-items-center mt-5 address-data">
      <div
        class="w-50 d-flex flex-column align-items-start justify-content-center add-div"
      >
        <AddListComp />
      </div>
      <div
        class="w-50 d-flex align-items-center justify-content-center img-div"
      >
        <img class="w-75" src="./assets/address_img.jpg" alt="Image" />
      </div>
    </div>
    <div class="d-flex align-items-center ms-3 mt-4 add-icon-div">
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
import AddListComp from "./AddListComp.vue";

export default {
  name: "AddressComp",
  components: {
    AddListComp,
  },
  methods: {
    addAddress() {
      this.$router.push({
        name: "AddAddressComp",
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

.add-div {
}

.icon {
  color: var(--border-color);
  cursor: pointer;
}

.icon-size {
  font-size: 3rem;
}

@media only screen and (max-width: 576px) {
  .address-data {
    flex-direction: column-reverse;
  }

  .add-div {
    width: 90% !important;
  }

  .img-div {
    width: 90% !important;
  }

  .add-icon-div {
    margin-left: 2rem !important;
    margin-bottom: 2rem !important;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
