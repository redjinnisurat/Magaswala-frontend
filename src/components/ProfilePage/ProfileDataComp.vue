<template>
  <div class="titleDiv">
    <h3>My Profile</h3>
    <i class="fa-solid fa-pen-to-square" v-on:click="editData()"></i>
  </div>
  <div class="formDiv">
    <div class="firstDiv">
      <label for="name">Name</label>
      <div class="nameDiv">
        <div class="nameDiv_item">
          <input
            type="text"
            placeholder="Zack"
            id="name"
            :readonly="edit_flag"
          />
          <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
        </div>
        <div class="nameDiv_item" id="nameDiv_1">
          <input
            type="text"
            placeholder="Gonsalves"
            id="name"
            :readonly="edit_flag"
          />
          <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
        </div>
      </div>
    </div>
    <div class="secondDiv">
      <div>
        <label for="mobile">Mobile Number</label>
        <div class="mobileDiv">
          <div class="numDiv">
            <input
              type="text"
              placeholder="+91"
              id="mobile"
              :readonly="edit_flag"
            />
          </div>
          <div class="numDiv2">
            <input
              type="text"
              placeholder="9955442266"
              id="mobile"
              :readonly="edit_flag"
            />
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
        </div>
      </div>
      <div>
        <label for="gender">Gender</label>
        <div class="selectDiv">
          <select name="gender" id="gender" :disabled="edit_flag">
            <option value="not selected">Select Gender</option>
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
          <input type="date" :readonly="edit_flag" />
        </div>
      </div>
    </div>
    <div class="thirdDiv">
      <label for="email">Email-Id</label>
      <div class="emailDiv">
        <input
          type="email"
          placeholder="zack@test.com"
          id="email"
          :readonly="edit_flag"
        />
        <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
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
            />
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
          <div class="add_4">
            <input
              type="text"
              placeholder="Pincode"
              id="address"
              :readonly="edit_flag"
            />
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
        </div>
        <div class="flexClass">
          <div class="add_5">
            <input
              type="text"
              placeholder="State"
              id="address"
              :readonly="edit_flag"
            />
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
          <div class="add_6">
            <input
              type="text"
              placeholder="Country"
              id="address"
              :readonly="edit_flag"
            />
            <i class="fa-solid fa-pen" v-if="!edit_flag"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="fifthDiv">
      <div class="addAddress">
        <i class="fa-solid fa-plus" id="addAdd"></i>
        <label for="addAdd">Add Address</label>
      </div>
    </div>
    <div class="sixthDiv">
      <div class="saveBtn" :class="{ show_btn: edit_flag }">
        <button>Save Chnages</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDataComp.vue",
  data() {
    return {
      edit_flag: true,
    };
  },
  methods: {
    editData() {
      this.edit_flag = !this.edit_flag;
      if (this.edit_flag == true) {
        // this.$refs.input.outline = "none";
      }
    },
  },
};
</script>

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
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--heading-color);
}

.titleDiv i {
  font-size: 1.7rem;
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
  width: 50%;
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

.mobileDiv {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.numDiv {
  width: 16%;
}

.numDiv input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
}

.numDiv2 {
  width: 75%;
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
  padding: 0.6rem 0.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
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
  margin-bottom: 1rem;
}

.emailDiv {
  width: 48%;
  padding: 0.6rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  margin-right: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.add_3 input {
  width: 100%;
  border: none;
}

.add_4 {
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

.add_4 input {
  width: 100%;
  border: none;
}

.add_5 {
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

.add_5 input {
  width: 100%;
  border: none;
}

.add_6 {
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

.add_6 input {
  width: 100%;
  border: none;
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
  font-size: 1.8rem;
  cursor: pointer;
}

.addAddress label {
  font-size: 1.7rem;
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
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 2.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  margin-top: 2rem;
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

  .numDiv2 {
    width: 100%;
    min-width: 0rem;
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

  .numDiv2 {
    width: 80%;
    min-width: 0rem;
  }

  .emailDiv {
    width: 60%;
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

  .numDiv2 {
    width: 80%;
    min-width: 0rem;
  }

  .emailDiv {
    width: 60%;
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
