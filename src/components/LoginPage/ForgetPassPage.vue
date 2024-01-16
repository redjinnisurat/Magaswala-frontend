<template>
  <div class="forget-container">
    <div class="forget_pass">
      <div class="forget_passContent">
        <h2>Forget password No problem!!</h2>
        <h4>Please enter email-id for verification</h4>
        <form>
          <input type="email" placeholder="Email-Id" v-model="email" />
          <div v-if="error_email" class="error">
            <span>{{ error_email }}</span>
          </div>
          <div class="btns">
            <button type="button" v-on:click="submit()">Submit</button>
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
      } else {
        this.error_email = "";
      }

      if (this.email !== "") {
        this.error_email = "";

        const response = await axios
          .post(`ForgetPassword?email=${this.email}`)
          .catch((e) => e.response);
        const result = response.data;
        // console.log("Response: " + JSON.stringify(result));
        // console.log("Response: " + result.data.id);

        if (result.status === true) {
          this.$router.push({
            name: "ForgetPassOTPVerify",
            params: {
              id: result.data.id,
              email: result.data.email,
              otp: result.data.email_otp,
            },
          });
        } else {
          this.error_email = result.message;
        }
      }
    },
  },
};
</script>

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
  .container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
    margin: 0;
    overflow: hidden;
  }

  .forget_pass {
    width: 95%;
    height: 60%;
  }

  .forget_passContent h2 {
    font-size: 2.4rem;
  }

  .sideImg {
    width: 90%;
    height: 20vh;
    display: none;
  }

  .forget_passContent {
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
  }

  .forget_passContent input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
    margin: 0;
    overflow: hidden;
  }

  .forget_pass {
    width: 60%;
    height: 60%;
  }

  .sideImg {
    width: 90%;
    height: 20vh;
    display: none;
  }

  .forget_passContent {
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
  }

  .forget_passContent input {
    border: 0.2rem solid var(--border-color);
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
    margin: 0;
    overflow: hidden;
  }

  .forget_pass {
    width: 60%;
    height: 65%;
  }

  .sideImg {
    width: 90%;
    height: 20vh;
    display: none;
  }

  .forget_passContent {
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
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
