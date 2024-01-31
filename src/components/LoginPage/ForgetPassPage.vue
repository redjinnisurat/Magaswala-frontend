<template>
  <div class="forget-container">
    <div class="forget_pass">
      <div class="forget_passContent">
        <h2>Forget password No problem!!</h2>
        <h4>Please enter email-id for verification</h4>
        <form @submit.prevent="submit()">
          <input
            type="email"
            placeholder="Email-Id"
            v-model="email"
            ref="firstInput"
          />
          <div v-if="error_email" class="error">
            <span>{{ error_email }}</span>
          </div>
          <div class="btns">
            <button type="button" @click="submit()">Submit</button>
          </div>
        </form>
        <div class="forget_passSignin">
          <router-link to="/login">Back to sign in</router-link>
        </div>
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
import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

export default {
  name: "ForgetPassPage",
  data() {
    return {
      email: "",
      otp: null,
      error_email: "",
    };
  },
  methods: {
    async submit() {
      if (this.email === "") {
        this.error_email = "Required field !!";
        setTimeout(() => {
          this.error_email = "";
        }, 3000);
      } else {
        this.error_email = "";
      }

      if (this.email !== "") {
        this.error_email = "";

        const response = await axios
          .post(`ForgetPassword?email=${this.email}`)
          .catch((e) => e.response);
        const result = response.data;

        if (result.status === true) {
          const data = {
            id: result.data.id,
            email: result.data.email,
            otp: result.data.email_otp,
            verify_status: result.data.status,
          };
          await Swal.fire({
            title: "OTP Sent Successfully",
            text: "6-digit code has been sent to your registered email address",
            icon: "success",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          this.$router.push({
            name: "ForgetPassOTPVerify",
            params: {
              object: CryptoJS.AES.encrypt(
                JSON.stringify(data),
                "12345678"
              ).toString(),
            },
          });
        } else {
          await Swal.fire({
            title: "Invalid Credentials",
            text: "Your Email-Id not found..",
            icon: "error",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          this.error_email = result.message;
        }
      }
    },
  },
  mounted() {
    this.$refs.firstInput.focus();
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
.forget-container {
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

.forget_pass {
  width: 50%;
  height: 100%;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.forget_passContent {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0.2rem solid var(--border-color);
  padding: 2rem;
  background-color: var(--btn-font-color);
}

.forget_passContent h2 {
  font-size: 2.6rem;
  font-weight: 700;
}

.forget_passContent h4 {
  font-size: 1.6rem;
  font-weight: 400;
  opacity: 0.6;
}

.forget_passContent form {
  min-width: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
}

.forget_passContent input {
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

.forget_passSignin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
}

.forget_passSignin a {
  font-size: 1.4rem;
  margin-left: 0.4rem;
  text-decoration: none;
  font-weight: light;
  color: black;
  opacity: 0.6;
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
  .forget-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .forget_pass {
    width: 95%;
    height: 60%;
    z-index: 5;
  }

  .forget_passContent h2 {
    font-size: 2.4rem;
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

  .forget_passContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .forget_passContent input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .forget-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .forget_pass {
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

  .forget_passContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .forget_passContent input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .forget-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .forget_pass {
    width: 60%;
    height: 65%;
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

  .forget_passContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .forget_passContent input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
