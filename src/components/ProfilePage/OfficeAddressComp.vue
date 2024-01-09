<template>
  <div class="h-100">
    <div class="h-50">
      <div class="d-flex align-items-center">
        <i
          class="fa-solid fa-arrow-left icon fs-1 pt-2"
          v-on:click="back()"
        ></i>
        <h3 class="fs-1 fw-semibold mt-3 ms-4 heading">Office Address</h3>
      </div>
      <div class="w-100 mt-5 ms-3">
        <h3 class="fs-2 fw-semibold">Address</h3>
        <div class="w-100 d-flex mt-3">
          <div class="w-50">
            <input
              class="fs-4 input"
              type="text"
              name="flat_build_input"
              placeholder="Office No./Bulding name"
              style="width: 90%"
            />
            <div class="w-100">
              <input
                class="fs-4 input me-4"
                type="text"
                name="landmark_input"
                placeholder="Nr. By Landmark"
                style="width: 43%"
              />
              <input
                class="fs-4 input"
                type="text"
                name="pincode_input"
                placeholder="Pincode"
                style="width: 43%"
              />
            </div>
            <div class="w-100">
              <input
                class="fs-4 input me-4"
                type="text"
                name="state_input"
                placeholder="State"
                style="width: 43%"
              />
              <input
                class="fs-4 input"
                type="text"
                name="city_input"
                placeholder="City"
                style="width: 43%"
              />
            </div>
            <input
              class="fs-4 input"
              type="text"
              name="country_input"
              placeholder="Country"
              style="width: 90%"
            />
          </div>
          <div class="w-50 pe-4">
            <img class="w-100" src="./assets/address_img1.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end h-50 pb-5 me-5">
      <button class="fs-3 address-btn mt-auto" type="button">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfficeAddressComp",
  methods: {
    back() {
      this.$router.push({
        name: "AddressComp",
      });
    },
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

.input {
  padding: 0.6rem 1rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  outline: none;
  background-color: var(--background-color);
  color: grey;
  margin-bottom: 1.8rem;
}

.address-btn {
  border: none;
  font-weight: 600;
  border-radius: 0.6rem;
  padding: 0.7rem 4rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  cursor: pointer;
}
</style>
