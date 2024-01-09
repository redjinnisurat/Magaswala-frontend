<template>
  <div class="h-100">
    <div class="">
      <div class="d-flex align-items-center">
        <i
          class="fa-solid fa-arrow-left icon fs-1 pt-2"
          v-on:click="back()"
        ></i>
        <h3 class="fs-1 fw-semibold mt-3 ms-4 heading">Add Address</h3>
      </div>
      <div class="w-100 d-flex align-items-center">
        <div class="w-50 mt-5 ms-3">
          <h3 class="fs-2 fw-semibold mb-3">Contact Info</h3>
          <input
            class="fs-4 mt-1 input"
            type="text"
            name="flat_build_input"
            placeholder="Enter Name"
            style="width: 90%"
          />
          <input
            class="fs-4 input"
            type="text"
            name="flat_build_input"
            placeholder="Enter Phone Number"
            style="width: 90%"
          />
        </div>
        <div class="w-50">
          <h3 class="fs-2 fw-semibold mb-3">Type Of Address</h3>
          <div class="d-flex align-items-center add-input">
            <input
              class="mt-1 me-1"
              type="radio"
              name="add_type"
              value="home"
              id="home"
            />
            <label class="me-5 fs-3" for="home">Home</label>
            <input
              class="mt-1 me-1"
              type="radio"
              name="add_type"
              value="office"
              id="office"
            />
            <label class="me-5 fs-3" for="office">Office</label>
            <input
              class="mt-1 me-1"
              type="radio"
              name="add_type"
              value="other"
              id="other"
            />
            <label class="me-5 fs-3" for="other">Other</label>
          </div>
          <div class="mt-3">
            <input
              class="mt-1 me-2"
              type="checkbox"
              name="default_add"
              value="yes"
              id="default_add"
            />
            <label class="fs-3" for="default_add" style="color: grey"
              >Make as default address.</label
            >
          </div>
        </div>
      </div>
      <div class="w-100 ms-3">
        <h3 class="fs-2 fw-semibold">Address</h3>
        <div class="w-100 d-flex align-items-center mt-3">
          <div class="w-50">
            <input
              class="fs-4 input"
              type="text"
              name="flat_build_input"
              placeholder="Flat No./Bulding name"
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
    <div class="d-flex justify-content-end mt-5 me-5">
      <button class="fs-3 address-btn mt-5 mb-2" type="button">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddAddressComp",
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
  margin-bottom: 1rem;
}

.add-input label {
  color: gray;
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
