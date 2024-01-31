<template>
  <div class="add-container ms-2" v-if="addressArray.length > 0">
    <div
      class="ms-2 d-flex align-items-center justify-content-between border border-color p-4 mb-4"
      v-for="address in addressArray"
      :key="address.address.id"
    >
      <div class="">
        <h3
          class="h3-size fw-semibold"
          v-if="address.address.address_type == 0"
        >
          Home Address
        </h3>
        <h3
          class="h3-size fw-semibold"
          v-if="address.address.address_type == 1"
        >
          Office Address
        </h3>
        <h3
          class="h3-size fw-semibold"
          v-if="address.address.address_type == 2"
        >
          Other Address
        </h3>
        <p class="mb-0 p-phone-size text-muted">
          {{ address.address.phoneno }}
        </p>
        <p class="mb-0 p-size text-muted">
          {{ address.address.Flat_no }}, {{ address.address.addressline1 }},
        </p>
        <p class="mb-0 p-size text-muted">
          {{ address.address.city }}, {{ address.address.state }},
        </p>
        <p class="mb-0 p-size text-muted">
          {{ address.address.countries }} -
          {{ address.address.pincode }}
        </p>
      </div>
      <div class="me-3 d-flex flex-column">
        <i
          class="fa-regular fa-trash-can fs-2 trash-icon"
          v-on:click="deleteAdd(address.address.id)"
        ></i>
        <i
          class="fa-solid fa-pen-to-square icon fs-2"
          v-on:click="homeAdd(address.address)"
        ></i>
      </div>
    </div>
  </div>
  <div
    class="add-container d-flex align-items-center justify-content-center"
    v-else
  >
    <h3 class="text-muted">No Address Added!!</h3>
  </div>
</template>

<script>
import axios from "@/axios";
import { mapActions } from "vuex";
import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

export default {
  name: "AddListComp",
  data() {
    return {
      countries: [],
      states: [],
      cities: [],
      add_title: "",
      state_name: null,
      city_name: null,
      country_name: null,
    };
  },
  computed: {
    addressArray() {
      return this.$store.getters.allAddress;
    },
  },
  methods: {
    async delete(id) {
      try {
        await axios.delete(`deleteaddress/${id}`);
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions(["getAllAddress"]),
    async deleteAdd(id) {
      await Swal.fire({
        title: "Are you sure ?",
        text: "You want to remove this address ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
        customClass: {
          popup: "my-swal-popup", // Make sure this matches your CSS class name
        },
      }).then((result) => {
        if (result.isConfirmed) {
          this.delete(id);

          Swal.fire({
            title: "Deleted",
            text: "Your address has been removed.",
            icon: "success",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          }).then(() => {
            location.reload();
          });
        }
      });
    },
    homeAdd(data) {
      const addData = JSON.stringify(data);
      this.$router.push({
        name: "HomeAddressComp",
        params: {
          address: CryptoJS.AES.encrypt(addData, "12345678").toString(),
        },
      });
    },
  },
  beforeMount() {
    this.getAllAddress();
  },
};
</script>

<style>
.my-swal-popup {
  width: 500px; /* Set the desired width */
  max-width: 60%; /* Set the maximum width if needed */
  font-size: 1.6rem; /* Adjust font size if needed */
}
</style>

<style scoped>
.add-container {
  width: 100%;
  max-height: 36rem;
  overflow-y: auto;
}

.add-container::-webkit-scrollbar {
  display: none;
}

.h3-size {
  font-size: 2.8rem;
}

.p-phone-size {
  font-size: 2.4rem;
}

.p-size {
  font-size: 2rem;
}

.trash-icon {
  cursor: pointer;
  color: var(--trash-icon-color);
  margin-bottom: 1.2rem;
}

.icon {
  color: var(--border-color);
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 4rem;
}

.border-color {
  border-radius: 0.6rem;
  border-color: var(--border-color) !important;
}

@media only screen and (max-width: 576px) {
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
