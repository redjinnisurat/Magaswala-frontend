<template>
  <div class="titleDiv">
    <h3>My Profile</h3>
    <i class="fa-solid fa-pen-to-square" v-on:click="editData()"></i>
  </div>
  <form @keyup.enter="updateData()">
    <div class="formDiv">
      <div class="firstDiv">
        <label for="name">Name</label>
        <div class="nameDiv">
          <div class="nameDiv_item">
            <input
              type="text"
              placeholder="First Name"
              id="name"
              :readonly="edit_flag"
              v-model="form_data.f_name"
            />
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
          <div class="nameDiv_item" id="nameDiv_1">
            <input
              type="text"
              placeholder="Last Name"
              id="name"
              :readonly="edit_flag"
              v-model="form_data.l_name"
            />
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
        </div>
      </div>
      <div class="secondDiv">
        <div class="mobile-input">
          <label for="mobile">Mobile Number</label>
          <div class="mobileDiv">
            <!-- <div class="numDiv">
              <input
                type="text"
                id="mobile"
                :readonly="edit_flag"
                v-model="phone_code"
              />
            </div> -->
            <div class="numDiv2">
              <input
                type="text"
                placeholder="Phone No"
                id="mobile"
                :readonly="edit_flag"
                v-model="form_data.phoneno"
              />
              <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
            </div>
          </div>
        </div>
        <div>
          <label for="gender">Gender</label>
          <div class="selectDiv">
            <select
              name="gender"
              id="gender"
              v-model="form_data.gender"
              :disabled="edit_flag"
            >
              <option disabled value="null">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <div class="date_title">
            <label for="birthDate">Birthday</label>
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
          <div class="datetDiv">
            <input
              type="date"
              :readonly="edit_flag"
              v-model="form_data.birth_date"
            />
          </div>
        </div>
      </div>
      <div class="thirdDiv">
        <div class="w-50 mb-3 thirdDiv-1">
          <label for="email">Email-Id</label>
          <div class="emailDiv">
            <input
              type="email"
              placeholder="Email-Id"
              id="email"
              :readonly="edit_flag"
              v-model="form_data.email_id"
            />
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
        </div>
        <div class="w-50 ms-5 thirdDiv-2">
          <div class="w-50 d-flex align-items-center justify-content-between">
            <label for="profile">Profile Image</label>
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
          <div class="profileDiv">
            <input
              type="file"
              id="profile"
              accept="image/*"
              :disabled="edit_flag"
              v-on:change="imgUpload"
            />
          </div>
        </div>
      </div>
      <div class="fourthDiv">
        <label for="address">Address</label>
        <div class="addressDiv">
          <div class="flexClass">
            <div class="add_1">
              <input
                type="text"
                placeholder="Flat No."
                id="address"
                v-model="flat_no"
                :readonly="edit_flag"
              />
              <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
            </div>
            <div class="add_2">
              <input
                type="text"
                placeholder="Bulding Name"
                id="address"
                :readonly="edit_flag"
                v-model="bulding_name"
              />
              <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
            </div>
          </div>
          <div class="flexClass">
            <div class="add_3">
              <input
                type="text"
                placeholder="Nr. By Landmark"
                id="address"
                :readonly="edit_flag"
                v-model="landmark"
              />
              <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
            </div>
            <div class="add_7">
              <select
                name="country"
                id="country"
                v-model="form_data.country"
                :disabled="edit_flag"
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
              <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
            </div>
          </div>
          <div class="flexClass">
            <div class="add_5">
              <select
                name="state"
                id="state"
                v-model="form_data.state"
                v-on:change="loadCities()"
                :disabled="edit_flag"
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
              <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
            </div>
            <div class="add_6">
              <select
                name="city"
                id="city"
                v-model="form_data.city"
                :disabled="edit_flag"
              >
                <option disabled value="null">City</option>
                <option v-for="city in cities" :key="city.id" :value="city.id">
                  {{ city.name }}
                </option>
              </select>
              <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
            </div>
            <div class="add_4">
              <input
                type="text"
                placeholder="Pincode"
                id="address"
                :readonly="edit_flag"
                v-model="form_data.pin_code"
              />
              <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="fifthDiv">
        <div class="addAddress">
          <i class="fa-solid fa-plus" id="addAdd" v-on:click="addAddress()"></i>
          <label for="addAdd" v-on:click="addAddress()">Add Address</label>
        </div>
      </div>
      <div class="sixthDiv">
        <div class="saveBtn" :class="{ show_btn: edit_flag }">
          <button v-on:click="updateData()">Save Chnages</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "@/axios";
import { mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "ProfileDataComp.vue",
  data() {
    return {
      edit_flag: true,
      countries: [],
      states: [],
      cities: [],
      flat_no: "",
      bulding_name: "",
      landmark: "",
      phone_code: "+",
      // country: "",
      // country_extra: [],
      // state: "",
      // state_extra: [],
      // city: "",
      // city_extra: [],
      form_data: {
        f_name: "",
        l_name: "",
        phoneno: "",
        gender: null,
        birth_date: "",
        email_id: "",
        address: "",
        pin_code: "",
        city: null,
        state: null,
        country: "101",
        profile_img: null,
      },
    };
  },
  methods: {
    ...mapActions(["getUser"]),
    imgUpload(event) {
      if (!this.edit_flag) {
        this.form_data.profile_img = event.target.files[0];
        // console.log("Image: ", this.form_data.profile_img);
      }
    },
    async loadCountries() {
      try {
        let allCountries = [];
        let shouldContinue = true;
        let page = 1;

        while (shouldContinue) {
          const response = await axios.get(
            `https://api.garbajockey.com/api/countries?page=${page}`
          );
          // console.log("Response:", response.data); // Log the response

          const countries = response.data && response.data.data;

          if (!countries || countries.length === 0) {
            // No more countries to fetch, break the loop
            shouldContinue = false;
          } else {
            allCountries = [...allCountries, ...countries];
            page++;
          }
        }

        this.countries = allCountries;
        // this.countries.forEach((country) => {
        //   if (this.form_data.country == country.id) {
        //     this.country = country.name;
        //     return;
        //   }
        // });
        // console.log("Selected Country: ", this.country);
        // console.log("All Countries:", this.countries); // Log the final list of countries
        // const response = await axios.get(`country`);
        // // console.log("Response: ", response.data);
        // this.countries = response.data;
        // console.log("countries: ", this.countries);
      } catch (error) {
        console.error("Error loading countries:", error);
      }
    },
    // getCountryName(id) {
    //   this.countries.forEach((country) => {
    //     if (id == country.id) {
    //       this.country = country.name;
    //       return;
    //     }
    //   });
    // console.log("Selected Country: ", this.country);
    // },
    async loadStates() {
      try {
        const response = await axios.get(
          `https://api.garbajockey.com/api/states_of_country?country_id=${this.form_data.country}`
        );
        this.states = response.data.data || []; // Update states array
        // console.log("States = ", this.states);
        // this.form_data.state = ""; // Reset state value
        // this.gcData.gcCity = ""; // Reset city value
        // this.getPhoneCode();
        // const response = await axios.get(
        //   `states-of-country?country_id=${this.form_data.country}`
        // );
        // this.states = response.data.data; // Update states array
        // console.log("reponse: ", response.data.data[0].name);
        // console.log("States = ", this.states);

        // this.states.forEach((state) => {
        //   if (this.form_data.state == state.id) {
        //     this.state = state.name;
        //     // console.log("Selected State Name: ", this.state);
        //   }
        // });
        // this.getCountryName(this.form_data.country);
      } catch (error) {
        console.error("Error loading states:", error);
      }
    },
    // getStateName(id) {
    //   this.states.forEach((state) => {
    //     if (id == state.id) {
    //       this.state = state.name;
    //       // console.log("Selected State Name: ", this.state);
    //     }
    //   });
    // },
    async loadCities() {
      try {
        const response = await axios.get(
          `https://api.garbajockey.com/api/cities_of_state?state_id=${this.form_data.state}`
        );
        this.cities = response.data.data || []; // Update cities array
        // console.log("Cities = ", this.cities);
        // this.gcData.gcCity = ""; // Reset city value
        // const response = await axios.get(
        //   `city-of-states?state_id=${this.form_data.state}`
        // );
        // this.cities = response.data.data; // Update cities array
        // console.log("Cities = ", this.cities);
        // this.cities.forEach((city) => {
        //   // console.log("City Id: ", this.form_data.city);
        //   if (this.form_data.city == city.id) {
        //     this.city = city.name;
        //     // console.log("Selected CIty Name: ", this.city);
        //   }
        // });
        // this.getStateName(this.form_data.state);
        // this.getCityName(this.form_data.city);
      } catch (error) {
        console.error("Error loading cities:", error);
      }
    },
    // getCityName(id) {
    //   // console.log("City Id: ", id);
    //   this.cities.forEach((city) => {
    //     if (id == city.id) {
    //       this.city = city.name;
    //       // console.log("Selected City Name: ", this.city);
    //     }
    //   });
    // },
    async updateUser(data) {
      try {
        await axios.post(`updateprofile`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // console.log("User Data: ", data);
        // console.log("Response: ", response);
      } catch (error) {
        console.error(error);
      }
    },
    setUserData(data) {
      // console.log("Data: ", data);

      let firstName = null;
      let lastName = null;
      // let Number = null;
      // let phoneNo = null;
      let date = null;
      let newDate = null;
      let flatNo = null;
      let bulidingName = null;
      let landMark = null;

      if (data.name != null) {
        const FullName = data.name.split(" ");
        firstName = FullName[0].trim();
        lastName = FullName[1].trim();
      }

      if (data.address != null) {
        const fullAddress = data.address.split(",");
        flatNo = fullAddress[0].trim();
        bulidingName = fullAddress[1].trim();
        landMark = fullAddress[2].trim();
      }

      // if (data.phoneno != null) {
      //   Number = data.phoneno.split(" ");
      //   phoneNo = Number[1].trim();
      // }

      if (data.birthdate != null) {
        date = new Date(data.birthdate);
        newDate = date.toISOString().split("T")[0];
      }

      this.form_data = {
        f_name: firstName,
        l_name: lastName,
        phoneno: data.phoneno,
        gender: data.gender,
        birth_date: newDate,
        email_id: data.email,
        pin_code: data.pincode,
        city: data.city_id,
        state: data.state_id,
        country: data.country_id == null ? "101" : data.country_id,
      };

      // console.log("Form Data: ", this.form_data);

      this.flat_no = flatNo;
      this.bulding_name = bulidingName;
      this.landmark = landMark;
    },
    // getPhoneCode() {
    //   this.countries.forEach((item) => {
    //     if (this.form_data.country == item.id) {
    //       this.phone_code = "+" + item.phonecode;
    //       return;
    //     }
    //   });
    // },
    async updateData() {
      const name = this.form_data.f_name + " " + this.form_data.l_name;

      this.form_data.address =
        this.flat_no + ", " + this.bulding_name + ", " + this.landmark;

      // this.form_data.phoneno = this.phone_code + " " + this.form_data.phoneno;

      const data = {
        name: name,
        email: this.form_data.email_id,
        phoneno: this.form_data.phoneno,
        address: this.form_data.address,
        country_id: Number(this.form_data.country),
        state_id: Number(this.form_data.state),
        city_id: Number(this.form_data.city),
        pincode: this.form_data.pin_code,
        birthdate: this.form_data.birth_date,
        gender: this.form_data.gender,
        profileimage: this.form_data.profile_img,
      };

      // console.log("Data: ", data);

      this.updateUser(data);

      await Swal.fire({
        title: "User Profile Updated",
        text: "This profile has been updated.",
        icon: "success",
        customClass: {
          popup: "my-swal-popup", // Make sure this matches your CSS class name
        },
      }).then(() => {
        this.edit_flag = true;
        location.reload();
      });
    },
    addAddress() {
      this.$router.push({
        name: "AddAddressComp",
      });
    },
    editData() {
      this.edit_flag = !this.edit_flag;
    },
  },
  computed: {
    userData() {
      return this.$store.getters.newUser;
    },
  },
  watch: {
    "form_data.country": "loadStates",
    "form_data.state": "loadCities",
  },
  mounted() {
    this.loadCountries().then(() => {
      // this.getPhoneCode();
    });
    this.loadStates();
  },
  beforeMount() {
    this.getUser().then(() => {
      this.setUserData(this.userData);
      // console.log("User Data: ", this.userData);
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
.show_btn {
  visibility: hidden;
}

.titleDiv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.8rem;
}

.titleDiv h3 {
  font-size: 3rem;
  font-weight: 600;
  color: var(--heading-color);
}

.titleDiv i {
  font-size: 2.3rem;
  font-weight: 400;
  cursor: pointer;
  color: var(--border-color);
}

.formDiv {
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.8rem;
}

.formDiv label {
  font-size: 1.5rem;
  font-weight: 600;
}

.formDiv input,
select {
  font-size: 1.4rem;
  font-weight: 600;
  background-color: var(--background-color);
  color: grey;
  outline: none;
}

.formDiv i {
  color: var(--border-color);
}

.firstDiv {
  margin-bottom: 1rem;
}

.nameDiv {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
}

.nameDiv_item {
  width: 47%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-color);
}

.nameDiv_item input {
  width: 100%;
  border: none;
}

#nameDiv_1 {
  margin-left: 3.7rem;
}

.secondDiv {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3.7rem;
  margin-bottom: 1rem;
}

.mobile-input {
  width: 47%;
}

.mobileDiv {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.numDiv {
  width: 18%;
}

.numDiv input {
  width: 100%;
  padding: 0.6rem 0.9rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
}

.numDiv2 {
  width: 100%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-color);
}

.numDiv2 input {
  width: 100%;
  border: none;
}

.selectDiv select {
  width: 12rem;
  padding: 0.6rem 0.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.date_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date_title {
  padding-right: 1.4rem;
}

.datetDiv input {
  padding: 0.6rem 0.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
}

.mobileDiv,
.selectDiv,
.datetDiv {
  margin-top: 0.6rem;
}

.thirdDiv {
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.emailDiv {
  width: 98%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
  background-color: var(--background-color);
}

.profileDiv {
  width: 60%;
  display: flex;
  align-items: center;
  border: 0.1rem solid transparent;
  border-radius: 0.6rem;
  margin-top: 0.6rem;
  background-color: var(--background-color);
}

.emailDiv input {
  width: 100%;
  border: none;
}

.fourthDiv {
  margin-bottom: 1rem;
}

.addressDiv {
  width: 100%;
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
}

.flexClass {
  width: 50%;
  display: flex;
  align-items: center;
}

.add_1 {
  width: 35%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  margin-right: 1.8rem;
  margin-bottom: 0.6rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
}

.add_1 input {
  width: 100%;
  border: none;
}

.add_2 {
  width: 55%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  margin-right: 1.8rem;
  margin-bottom: 0.6rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
}

.add_2 input {
  width: 100%;
  border: none;
}

.add_3 {
  width: 50%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  margin-right: 1.8rem;
  margin-bottom: 0.6rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
}

.add_3 input {
  width: 100%;
  border: none;
}

.add_7 {
  width: 40%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  margin-right: 1.8rem;
  margin-bottom: 0.6rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
}

.add_7 select {
  width: 100%;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.add_4 {
  width: 26%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  margin-right: 1.8rem;
  margin-bottom: 0.6rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
}

.add_4 input {
  width: 100%;
  border: none;
}

.add_5 {
  width: 30%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  margin-right: 1.8rem;
  margin-bottom: 0.6rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
}

.add_5 select {
  width: 100%;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.add_6 {
  width: 30%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  margin-right: 1.8rem;
  margin-bottom: 0.6rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
}

.add_6 select {
  width: 100%;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.fifthDiv {
  margin-bottom: 1rem;
  margin-top: 0.6rem;
}

.addAddress {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.addAddress i {
  font-size: 2.6rem;
  cursor: pointer;
}

.addAddress label {
  font-size: 2.1rem;
}

.sixthDiv {
  margin-bottom: 1rem;
  margin-top: 0.6rem;
}

.saveBtn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.saveBtn button {
  font-size: 1.6rem;
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 2.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  margin-top: 1rem;
  cursor: pointer;
}

@media only screen and (max-width: 576px) {
  .nameDiv {
    flex-direction: column;
    align-items: flex-start;
  }

  .nameDiv_item {
    width: 100%;
    min-width: 0rem;
  }

  #nameDiv_1 {
    width: 100%;
    margin-left: 0;
    margin-top: 0.6rem;
  }

  .secondDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .mobile-input {
    width: 100%;
  }

  .numDiv {
    width: 20%;
  }

  .numDiv2 {
    width: 100%;
    min-width: 0rem;
  }

  .thirdDiv {
    flex-direction: column;
    align-items: flex-start;
  }

  .thirdDiv-1 {
    width: 100% !important;
  }

  .thirdDiv-2 {
    width: 100% !important;
    margin-left: 0 !important;
  }

  .profileDiv {
    width: 100%;
  }

  .emailDiv {
    width: 100%;
  }

  .flexClass {
    width: 100%;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .nameDiv {
    display: flex;
    gap: 0.2rem;
  }

  .secondDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .mobile-input {
    width: 60%;
  }

  .numDiv {
    width: 20%;
  }

  .numDiv2 {
    width: 100%;
    min-width: 0rem;
  }

  .thirdDiv {
    flex-direction: column;
    align-items: flex-start;
  }

  .thirdDiv-1 {
    width: 60% !important;
  }

  .thirdDiv-2 {
    width: 60% !important;
    margin-left: 0 !important;
  }

  .profileDiv {
    width: 100%;
  }

  .emailDiv {
    width: 100%;
  }

  .flexClass {
    width: 65%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .nameDiv {
    display: flex;
    gap: 0.2rem;
  }

  .secondDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .mobile-input {
    width: 60%;
  }

  .numDiv {
    width: 20%;
  }

  .numDiv2 {
    width: 100%;
    min-width: 0rem;
  }

  .thirdDiv {
    flex-direction: column;
    align-items: flex-start;
  }

  .thirdDiv-1 {
    width: 60% !important;
  }

  .thirdDiv-2 {
    width: 60% !important;
    margin-left: 0 !important;
  }

  .profileDiv {
    width: 100%;
  }

  .emailDiv {
    width: 100%;
  }

  .flexClass {
    width: 65%;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
