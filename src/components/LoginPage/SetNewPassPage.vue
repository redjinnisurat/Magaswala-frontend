<template>
  <div class="set-container">
    <div class="set_pass">
      <div class="set_passContent">
        <h2>Set New Password</h2>
        <h4>Please enter new password</h4>
        <form @submit.prevent="submit()">
          <input
            type="password"
            placeholder="Password"
            v-model="new_pass"
            ref="firstInput"
          />
          <div v-if="error_newPass" class="error">
            <span>{{ error_newPass }}</span>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            v-model="confirm_pass"
          />
          <div v-if="error_confirmPass" class="error">
            <span>{{ error_confirmPass }}</span>
          </div>
          <div class="btns">
            <button type="button" @click="submit()">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="sideImg">
      <div class="logo_title">
        <h1>Magaswala</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";

export default {
  name: "SetNewPassPage",
  data() {
    return {
      new_pass: "",
      error_newPass: "",
      confirm_pass: "",
      error_confirmPass: "",
      id: "",
    };
  },
  methods: {
    async submit() {
      if (this.new_pass === "") {
        this.error_newPass = "Required field !!";
        setTimeout(() => {
          this.error_newPass = "";
        }, 3000);
      } else {
        this.error_newPass = "";
      }

      if (this.confirm_pass === "") {
        this.error_confirmPass = "Required field !!";
        setTimeout(() => {
          this.error_confirmPass = "";
        }, 3000);
      } else {
        this.error_confirmPass = "";
      }

      if (
        this.new_pass !== "" &&
        this.confirm_pass !== "" &&
        this.new_pass == this.confirm_pass
      ) {
        this.error_newPass = "";
        this.error_confirmPass = "";

        const response = await axios
          .post(
            `forgotchangepassword/${this.id}?new_password=${this.new_pass}&confirm_password=${this.confirm_pass}`
          )
          .catch((e) => e.response);
        const result = response.data;

        if (result.status === true) {
          await Swal.fire({
            title: "Password changed",
            text: "Your password changed successfully.",
            icon: "success",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          this.$router.push({
            name: "LoginPage",
          });
        } else {
          await Swal.fire({
            title: "Password not changed",
            text: "Something get wrong.",
            icon: "error",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          this.error_newPass = result.message;
        }
      } else {
        await Swal.fire({
          title: "Password not changed",
          text: "Both password should be same.",
          icon: "error",
          customClass: {
            popup: "my-swal-popup", // Make sure this matches your CSS class name
          },
        });
        this.error_newPass = "Both password should be same !!";
        this.error_confirmPass = "Both password should be same !!";
      }
    },
  },
  mounted() {
    this.$refs.firstInput.focus();
    const route = useRoute();

    this.id = route.params.id;
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
.set-container {
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow: hidden;
  background-color: var(--background-color);
}

.set_pass {
  width: 50%;
  height: 100%;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.set_passContent {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0.2rem solid var(--border-color);
  padding: 2rem;
  background-color: var(--btn-font-color);
}

.set_passContent h2 {
  font-size: 2.6rem;
  font-weight: 700;
}

.set_passContent h4 {
  font-size: 1.6rem;
  font-weight: 400;
  opacity: 0.6;
}

.set_passContent form {
  min-width: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
}

.set_passContent input {
  min-width: 100%;
  padding: 0.6rem 1.2rem;
  border: 0.1rem solid var(--border-color);
  border-radius: 0.6rem;
  font-size: 1.3rem;
}

.btns {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
}

.btns button {
  border: 0.1rem solid var(--primary-color);
  border-radius: 0.6rem;
  padding: 0.7rem 2.6rem;
  color: white;
  font-size: 1.4rem;
  background-color: var(--primary-color);
  cursor: pointer;
}

.sideImg {
  width: 50%;
  height: 100%;
  background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo_title h1 {
  font-size: 4.4rem;
  font-weight: 700;
  color: white;
  font-family: "Merienda", cursive;
  font-style: italic;
  margin-bottom: 2rem;
}

.error {
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: 1.3rem;
  color: red;
  font-weight: 300;
  padding: 0 0.2rem;
}

@media only screen and (max-width: 576px) {
  .set-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .set_pass {
    width: 95%;
    height: 60%;
    z-index: 5;
  }

  .sideImg {
    width: 90%;
    height: 20vh;
    position: absolute;
    width: 100%;
    height: inherit;
    z-index: 0;
    filter: blur(8px);
    -webkit-filter: blur(4px);
  }

  .logo_title {
    display: none;
  }

  .set_passContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .set_passContent input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .set-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .set_pass {
    width: 60%;
    height: 60%;
    z-index: 5;
  }

  .sideImg {
    width: 90%;
    height: 20vh;
    position: absolute;
    width: 100%;
    height: inherit;
    z-index: 0;
    filter: blur(8px);
    -webkit-filter: blur(4px);
  }

  .logo_title {
    display: none;
  }

  .set_passContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .set_passContent input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .set-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .set_pass {
    width: 60%;
    height: 70%;
    z-index: 5;
  }

  .sideImg {
    width: 90%;
    height: 20vh;
    position: absolute;
    width: 100%;
    height: inherit;
    z-index: 0;
    filter: blur(8px);
    -webkit-filter: blur(4px);
  }

  .logo_title {
    display: none;
  }

  .set_passContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .set_passContent input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
