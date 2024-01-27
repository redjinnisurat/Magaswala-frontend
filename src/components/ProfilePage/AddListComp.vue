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
    // getCity(id) {
    //   this.cities.forEach((city) => {
    //     if (id == city.id) {
    //       console.log("City Name: ", city.name);
    //       // this.city_name = city.name;
    //       return;
    //     }
    //   });
    // },
    // getState(id) {
    //   this.states.forEach((state) => {
    //     if (id == state.id) {
    //       console.log("City Name: ", state.name);
    //       // this.state_name = state.name;
    //       return;
    //     }
    //   });
    // },
    // getCountry(id) {
    //   this.countries.forEach((country) => {
    //     if (id == country.id) {
    //       console.log("City Name: ", country.name);
    //       // this.city_name = country.name;
    //       return;
    //     }
    //   });
    // },
    // async loadCountries() {
    //   try {
    //     let allCountries = [];
    //     let shouldContinue = true;
    //     let page = 1;

    //     while (shouldContinue) {
    //       const response = await axios.get(
    //         `https://api.garbajockey.com/api/countries?page=${page}`
    //       );
    //       // console.log("Response:", response.data); // Log the response

    //       const countries = response.data && response.data.data;

    //       if (!countries || countries.length === 0) {
    //         // No more countries to fetch, break the loop
    //         shouldContinue = false;
    //       } else {
    //         allCountries = [...allCountries, ...countries];
    //         page++;
    //       }
    //     }

    //     this.countries = allCountries;
    //     // console.log("All Countries:", this.countries); // Log the final list of countries
    //   } catch (error) {
    //     console.error("Error loading countries:", error);
    //   }
    // },
    // async loadStates() {
    //   try {
    //     const response = await axios.get(
    //       `https://api.garbajockey.com/api/states_of_country?country_id=${this.form_data.country}`
    //     );
    //     this.states = response.data.data || []; // Update states array
    //     // console.log("States = ", this.states);
    //     // this.form_data.state = ""; // Reset state value
    //     // this.gcData.gcCity = ""; // Reset city value
    //   } catch (error) {
    //     console.error("Error loading states:", error);
    //   }
    // },
    // async loadCities() {
    //   try {
    //     const response = await axios.get(
    //       `https://api.garbajockey.com/api/cities_of_state?state_id=${this.form_data.state}`
    //     );
    //     this.cities = response.data.data || []; // Update cities array
    //     // console.log("Cities = ", this.cities);
    //     // this.gcData.gcCity = ""; // Reset city value
    //   } catch (error) {
    //     console.error("Error loading cities:", error);
    //   }
    // },
    async delete(id) {
      try {
        await axios.delete(`deleteaddress/${id}`);
        // console.log("Response: ", response);
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions(["getAllAddress"]),
    async deleteAdd(id) {
      // if (
      //   confirm("Are you sure ?\nYou want to remove this address ?") == true
      // ) {
      //   this.delete(id);
      // }
      // location.reload();
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
    this.getAllAddress().then(() => {
      // console.log(this.addressArray);
    });
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
