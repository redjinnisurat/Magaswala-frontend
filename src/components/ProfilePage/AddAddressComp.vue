<template>
  <div class="h-100">
    <div class="d-flex align-items-center">
      <i class="fa-solid fa-arrow-left icon fs-1 pt-2" v-on:click="back()"></i>
      <h3 class="fs-1 fw-semibold mt-3 ms-4 heading">Add Address</h3>
    </div>
    <div class="content-div">
      <div class="w-100 d-flex align-items-center data-div">
        <div class="w-50 mt-5 ms-3 input-div">
          <h3 class="fs-2 fw-semibold mb-3">Contact Info</h3>
          <input
            class="fs-4 mt-1 input"
            type="text"
            name="flat_build_input"
            placeholder="Enter Name"
            style="width: 90%"
            v-model="form_data.name"
          />
          <input
            class="fs-4 input"
            type="text"
            name="flat_build_input"
            placeholder="Enter Phone Number"
            style="width: 90%"
            v-model="form_data.phoneno"
          />
        </div>
        <div class="w-50 input-div type-add-div">
          <h3 class="fs-2 fw-semibold mb-3">Type Of Address</h3>
          <div class="d-flex align-items-center add-input">
            <input
              class="mt-1 me-1"
              type="radio"
              name="add_type"
              value="0"
              id="home"
              v-model="form_data.add_type"
            />
            <label class="me-5 fs-3" for="home">Home</label>
            <input
              class="mt-1 me-1"
              type="radio"
              name="add_type"
              value="1"
              id="office"
              v-model="form_data.add_type"
            />
            <label class="me-5 fs-3" for="office">Office</label>
            <input
              class="mt-1 me-1"
              type="radio"
              name="add_type"
              value="2"
              id="other"
              v-model="form_data.add_type"
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
              v-model="form_data.default"
            />
            <label class="fs-3" for="default_add" style="color: grey"
              >Make as default address.</label
            >
          </div>
        </div>
      </div>
      <div class="w-100 ms-3">
        <div class="w-100 d-flex align-items-center data-div">
          <div class="w-50">
            <h3 class="fs-2 mb-3 fw-semibold">Address</h3>
            <div class="input-div">
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
                  <option
                    v-for="city in cities"
                    :key="city.id"
                    :value="city.id"
                  >
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
          </div>
          <div
            class="w-50 pe-4 d-flex align-items-center justify-content-center img-div"
          >
            <img class="w-100" src="./assets/address_img1.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-5 me-5 btn-div">
      <button
        class="fs-3 address-btn mt-5 mb-2"
        type="button"
        v-on:click="add()"
      >
        Add Address
      </button>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  name: "AddAddressComp",
  data() {
    return {
      countries: [],
      states: [],
      cities: [],
      form_data: {
        name: "",
        phoneno: "",
        add_type: "0",
        // default: "",
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
    async addAddress(data) {
      try {
        console.log("Data: ", data);
        const response = await axios.post(`Addaddress`, data);
        console.log("Response: ", response);
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
        // console.log("All Countries:", this.countries); // Log the final list of countries
        const response = await axios.get(`country`);
        // console.log("Response: ", response.data);
        this.countries = response.data;
        // console.log("countries: ", this.countries);
      } catch (error) {
        console.error("Error loading countries:", error);
      }
    },
    async loadStates() {
      try {
        // const response = await axios.get(
        //   `https://api.garbajockey.com/api/states_of_country?country_id=${this.form_data.country}`
        // );
        // this.states = response.data.data || []; // Update states array
        // console.log("States = ", this.states);
        // this.form_data.state = ""; // Reset state value
        // this.gcData.gcCity = ""; // Reset city value
        const response = await axios.get(
          `states-of-country?country_id=${this.form_data.country}`
        );
        this.states = response.data.data; // Update states array
        // console.log("reponse: ", response.data.data[0].name);
        // console.log("States = ", this.states);
      } catch (error) {
        console.error("Error loading states:", error);
      }
    },
    async loadCities() {
      try {
        // const response = await axios.get(
        //   `https://api.garbajockey.com/api/cities_of_state?state_id=${this.form_data.state}`
        // );
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
    add() {
      let result = this.form_data.flat_no.split(" ");
      const flat = result[0];
      const address =
        result.slice(1).join(" ") + ", " + this.form_data.landmark;

      const data = {
        name: this.form_data.name,
        phoneno: this.form_data.phoneno,
        pincode: this.form_data.pincode,
        city: this.form_data.city,
        state: this.form_data.state,
        countries: this.form_data.country,
        address_type: this.form_data.add_type,
        Flat_no: flat,
        addressline1: address,
        Locality: "not entered",
      };

      this.addAddress(data).then(() => {
        this.$router.push({
          name: "AddressComp",
        });
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

  .type-add-div {
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1.6rem;
  }

  .img-div {
    width: 80% !important;
  }

  .btn-div {
    justify-content: center !important;
    margin-top: 1.8rem !important;
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

  .type-add-div {
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1.6rem;
  }

  .img-div {
    width: 80% !important;
  }

  .btn-div {
    justify-content: center !important;
    margin-top: 1.8rem !important;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
