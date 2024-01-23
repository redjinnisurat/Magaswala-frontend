<template>
  <div class="verify-container">
    <div class="verification">
      <div class="verify_content">
        <h2>Verification</h2>
        <h4>6-digit code has been sent to your registered email address</h4>
        <form>
          <input type="text" placeholder="OTP" v-model="otp" />
          <div v-if="error_otp" class="error">
            <span>{{ error_otp }}</span>
          </div>
          <div class="btns">
            <button type="button" v-on:click="submit()">Verify</button>
          </div>
        </form>
        <div class="resend_sec" v-if="!resend_flag">
          <p>Didn't receive code ?</p>
          <router-link to="#" v-on:click="resend()">Resend</router-link>
        </div>
        <div class="resend_sec" v-else>
          <p>Code has been sent again!</p>
          <router-link to="#">Send again {{ countdown }}</router-link>
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
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

export default {
  name: "VerifyEmailPage",
  data() {
    return {
      otp: "",
      error_otp: "",
      email: "",
      old_otp: null,
      new_otp: null,
      resend_flag: false,
      timer: "",
      countdown: "1:25",
    };
  },
  methods: {
    async verifyEmail(otp, email) {
      const response = await axios
        .post(`emailverify?otp=${otp}&email=${email}`)
        .catch((e) => e.response);
      const result = response.data;
      // console.log("Response: ", result);
      // console.log("Response: " + result.data.id);

      if (result.status === true) {
        // alert(result.message);
        await Swal.fire({
          title: "OTP Verification",
          text: "Your Email has benn verified.",
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
          title: "OTP Verification",
          text: "Invalid OTP.",
          icon: "error",
          customClass: {
            popup: "my-swal-popup", // Make sure this matches your CSS class name
          },
        });
        this.error_otp = result.message;
      }
    },
    async resendOTP() {
      try {
        const response = await axios.post(`ForgetPassword?email=${this.email}`);
        // console.log("Response: ", response);
        this.new_otp = response.data.data.email_otp;
        // console.log("New Otp: ", this.new_otp);
      } catch (error) {
        console.error(error);
      }
    },
    async resend() {
      this.resend_flag = true;

      this.resendOTP();

      let totalTime = 86;

      this.timer = setInterval(() => {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        this.countdown = `${String(minutes).padStart(2, "")}:${String(
          seconds
        ).padStart(2, "0")}`;

        totalTime--;

        if (totalTime < 0) {
          clearInterval(this.timer);
          this.resend_flag = false;
          this.countdown = "1:25";
        }
      }, 1000);
    },
    async submit() {
      if (this.otp === "") {
        this.error_otp = "Required field !!";
      } else {
        this.error_otp = "";
      }

      if (this.otp !== "") {
        this.error_otp = "";
        if (this.resend_flag == true) {
          if (this.new_otp == this.otp) {
            this.verifyEmail(this.otp, this.email);
          } else {
            this.error_otp = "Invalid OTP!!";
          }
        } else {
          if (this.old_otp == this.otp) {
            this.verifyEmail(this.otp, this.email);
          } else {
            this.error_otp = "Invalid OTP!!";
          }
        }
      }
    },
  },
  mounted() {
    const route = useRoute();
    const encryptData = CryptoJS.AES.decrypt(
      route.params.object,
      "12345678"
    ).toString(CryptoJS.enc.Utf8);
    // console.log("Route: ", JSON.parse(encryptData));
    this.email = JSON.parse(encryptData).email;
    this.old_otp = JSON.parse(encryptData).otp;
    // console.log(this.email);
    // console.log(this.old_otp);
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

<style>
.verify-container {
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

.verification {
  width: 50%;
  height: 100%;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.verify_content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0.2rem solid var(--border-color);
  padding: 2rem;
  background-color: var(--btn-font-color);
}

.verify_content h2 {
  font-size: 2.6rem;
  font-weight: 700;
}

.verify_content h4 {
  font-size: 1.6rem;
  font-weight: 400;
  opacity: 0.6;
}

.verify_content form {
  min-width: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
}

.verify_content input {
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

.resend_sec {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
}

.resend_sec p {
  font-size: 1.4rem;
  margin-bottom: 0 !important;
  opacity: 0.6;
}

.resend_sec a {
  font-size: 1.4rem;
  margin-left: 0.4rem;
  text-decoration: none;
  font-weight: bold;
  color: var(--primary-color);
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
  .verify-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .verification {
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

  .verify_content {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .verify_content input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .verify-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
    margin: 0;
    overflow: hidden;
  }

  .verification {
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

  .verify_content {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .verify_content input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .verify-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
    margin: 0;
    overflow: hidden;
  }

  .verification {
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

  .verify_content {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .verify_content input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
