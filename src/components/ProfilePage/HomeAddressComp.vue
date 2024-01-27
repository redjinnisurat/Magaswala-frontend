<template>
  <div class="h-100">
    <div class="h-50">
      <div class="d-flex align-items-center">
        <i
          class="fa-solid fa-arrow-left icon fs-1 pt-2"
          v-on:click="back()"
        ></i>
        <h3
          class="fs-1 fw-semibold mt-3 ms-4 heading"
          v-if="address.address_type == 0"
        >
          Home Address
        </h3>
        <h3
          class="fs-1 fw-semibold mt-3 ms-4 heading"
          v-if="address.address_type == 1"
        >
          Offfice Address
        </h3>
        <h3
          class="fs-1 fw-semibold mt-3 ms-4 heading"
          v-if="address.address_type == 2"
        >
          Other Address
        </h3>
      </div>
      <div class="w-100 mt-5 ms-3 content-div">
        <h3 class="fs-2 fw-semibold">Address</h3>
        <div class="w-100 d-flex align-items-center mt-3 data-div">
          <div class="w-50 input-div">
            <input
              class="fs-4 input"
              type="text"
              name="flat_build_input"
              placeholder="Flat No./Bulding name"
              style="width: 90%"
              v-model="form_data.flat_no"
            />
            <div class="w-100">
              <input
                class="fs-4 input me-4"
                type="text"
                name="landmark_input"
                placeholder="Nr. By Landmark"
                style="width: 43%"
                v-model="form_data.landmark"
              />
              <input
                class="fs-4 input"
                type="text"
                name="pincode_input"
                placeholder="Pincode"
                style="width: 43%"
                v-model="form_data.pincode"
              />
            </div>
            <div class="w-100">
              <select
                class="fs-4 input me-4"
                name="state"
                id="state"
                style="width: 43%"
                v-model="form_data.state"
                v-on:change="loadCities()"
              >
                <option disabled value="null">State</option>
                <option
                  v-for="state in states"
                  :key="state.id"
                  :value="state.id"
                >
                  {{ state.name }}
                </option>
              </select>
              <select
                class="fs-4 input me-4"
                name="city"
                id="city"
                style="width: 43%"
                v-model="form_data.city"
              >
                <option disabled value="null">City</option>
                <option v-for="city in cities" :key="city.id" :value="city.id">
                  {{ city.name }}
                </option>
              </select>
            </div>
            <select
              class="fs-4 input me-4"
              name="country"
              id="country"
              style="width: 90%"
              v-model="form_data.country"
              v-on:change="loadStates()"
            >
              <option disabled value="">Country</option>
              <option
                v-for="country in countries"
                :key="country.id"
                :value="country.id"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
          <div
            class="w-50 pe-4 d-flex align-items-center justify-content-center img-div"
          >
            <img class="w-100" src="./assets/address_img1.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end h-50 pb-5 me-5 btn-div">
      <button
        class="fs-3 address-btn mt-auto"
        type="button"
        v-on:click="update()"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

export default {
  name: "HomeAddressComp",
  data() {
    return {
      address: {},
      countries: [],
      states: [],
      cities: [],
      form_data: {
        addressline1: "",
        flat_no: "",
        landmark: "",
        pincode: "",
        state: null,
        city: null,
        country: "101",
      },
    };
  },
  methods: {
    async updateAddress(data) {
      try {
        await axios.post(`updateaddress/${this.address.id}`, data);
        // console.log("Response: ", response);
      } catch (error) {
        console.error(error);
      }
    },
    async loadCountries() {
      try {
        // let allCountries = [];
        // let shouldContinue = true;
        // let page = 1;
        // while (shouldContinue) {
        //   const response = await axios.get(
        //     `https://api.garbajockey.com/api/countries?page=${page}`
        //   );
        //   // console.log("Response:", response.data); // Log the response
        //   const countries = response.data && response.data.data;
        //   if (!countries || countries.length === 0) {
        //     // No more countries to fetch, break the loop
        //     shouldContinue = false;
        //   } else {
        //     allCountries = [...allCountries, ...countries];
        //     page++;
        //   }
        // }
        // this.countries = allCountries;
        const response = await axios.get(`country`);
        // console.log("Response: ", response.data);
        this.countries = response.data;
        // console.log("countries: ", this.countries);
        // console.log("All Countries:", this.countries); // Log the final list of countries
      } catch (error) {
        console.error("Error loading countries:", error);
      }
    },
    async loadStates() {
      try {
        // const response = await axios.get(
        //   `https://api.garbajockey.com/api/states_of_country?country_id=${this.form_data.country}`
        // // );
        // this.states = response.data || []; // Update states array
        // console.log("States = ", this.states);
        // this.form_data.state = ""; // Reset state value
        // // this.gcData.gcCity = ""; // Reset city value
        // // console.log("Response: ", response.data);
        // this.states = response.data;
        const response = await axios.get(
          `states-of-country?country_id=${this.form_data.country}`
        );
        this.states = response.data.data; // Update states array
        // console.log("reponse: ", response.data);
        // console.log("States = ", this.states);
      } catch (error) {
        console.error("Error loading states:", error);
      }
    },
    async loadCities() {
      try {
        // // const response = await axios.get(
        // //   `https://api.garbajockey.com/api/cities_of_state?state_id=${this.form_data.state}`
        // // );
        // this.cities = response.data.data || []; // Update cities array
        // console.log("Cities = ", this.cities);
        // this.gcData.gcCity = ""; // Reset city value
        const response = await axios.get(
          `city-of-states?state_id=${this.form_data.state}`
        );
        this.cities = response.data.data; // Update cities array
        // console.log("Cities = ", this.cities);
      } catch (error) {
        console.error("Error loading cities:", error);
      }
    },
    setData(data) {
      // console.log("Data: ", data);
      const landmark12 = data.addressline1.split(",")[1].trim();
      const flatNo =
        data.Flat_no + " " + data.addressline1.split(",")[0].trim();

      this.form_data = {
        flat_no: flatNo,
        landmark: landmark12,
        pincode: data.pincode,
        state: data.state,
        city: data.city,
        country: data.countries,
      };
    },
    async update() {
      let result = this.form_data.flat_no.split(" ");
      const flat = result[0];
      const address =
        result.slice(1).join(" ") + ", " + this.form_data.landmark;

      const data = {
        pincode: this.form_data.pincode,
        city: this.form_data.city,
        state: this.form_data.state,
        countries: this.form_data.country,
        Flat_no: flat,
        addressline1: address,
      };

      // console.log("Data 12: ", data);

      this.updateAddress(data);
      localStorage.removeItem("address");
      await Swal.fire({
        title: "Address Updated Successfully",
        text: "This address has been updated.",
        icon: "success",
        customClass: {
          popup: "my-swal-popup", // Make sure this matches your CSS class name
        },
      });
      this.$router
        .push({
          name: "AddressComp",
        })
        .then(() => {
          this.$router.go();
        });
    },
    back() {
      this.$router.push({
        name: "AddressComp",
      });
    },
  },
  watch: {
    "form_data.country": "loadStates",
    "form_data.state": "loadCities",
  },
  mounted() {
    this.loadCountries();
    this.loadStates();
  },
  beforeMount() {
    const route = useRoute();
    const encryptData = CryptoJS.AES.decrypt(
      route.params.address,
      "12345678"
    ).toString(CryptoJS.enc.Utf8);
    if (encryptData != undefined) {
      this.address = JSON.parse(encryptData);
      localStorage.setItem("address", JSON.parse(encryptData));
      this.setData(this.address);
    } else {
      this.address = JSON.parse(localStorage.getItem("address"));
      this.setData(this.address);
    }
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
.heading {
  color: var(--heading-color);
}

.icon {
  color: var(--border-color);
  cursor: pointer;
}

.input-div select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
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

@media only screen and (max-width: 576px) {
  .content-div {
    margin-left: 3rem !important;
  }

  .data-div {
    align-items: flex-start !important;
    flex-direction: column;
  }

  .input-div {
    width: 80% !important;
  }

  .img-div {
    width: 80% !important;
  }

  .btn-div {
    justify-content: center !important;
    margin-top: 2.8rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .content-div {
    margin-left: 3rem !important;
  }

  .data-div {
    align-items: flex-start !important;
    flex-direction: column;
  }

  .input-div {
    width: 80% !important;
  }

  .img-div {
    width: 80% !important;
  }

  .btn-div {
    justify-content: center !important;
    margin-top: 2.8rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .img-div {
    width: 50% !important;
  }

  .btn-div {
    height: 22rem !important;
    margin-top: 2.8rem;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
