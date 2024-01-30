<template>
  <div class="login-container">
    <div class="login">
      <div class="loginContent">
        <h2>Welcome back!</h2>
        <h4>Please enter credentials for sign in</h4>
        <form @keyup.enter="login()">
          <input type="email" placeholder="Email" v-model="email" />
          <div v-if="error_email" class="error">
            <span>{{ error_email }}</span>
          </div>
          <div class="password_input">
            <input
              type="password"
              placeholder="Password"
              ref="pass_input"
              v-model="password"
            />
            <i
              v-if="visible"
              class="fa-regular fa-eye"
              v-on:click="visibleNo()"
            ></i>
            <i
              v-else
              class="fa-regular fa-eye-slash"
              v-on:click="visibleYes()"
            ></i>
          </div>
          <div v-if="error_password" class="error">
            <span>{{ error_password }}</span>
          </div>
          <div class="radio">
            <div class="radioInput">
              <label for="remember">Remember me</label>
              <div class="radio_img" id="remember" v-on:click="rememberMe()">
                <img
                  src="./assets/check_mark.png"
                  :class="{ visibility: show }"
                  alt="img"
                />
              </div>
            </div>
            <router-link to="/forgetPassword">Forget Password ?</router-link>
          </div>
          <div class="btns">
            <button type="button" v-on:click="login()">Sign In</button>
            <button type="button" id="google">
              <div class="googleContent">
                <img src="./assets/google_logo.png" alt="Image" />Login with
                Google
              </div>
            </button>
          </div>
        </form>
        <div class="signup">
          <p>Don't have an account?</p>

          <router-link to="/signup">Sign up now</router-link>
        </div>
      </div>
    </div>
    <div class="loginImg">
      <div class="logo_title">
        <h1>Magaswala</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Swal from "sweetalert2";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error_email: "",
      error_password: "",
      remember_me: "No",
      show: true,
      visible: false,
    };
  },
  methods: {
    rememberMe() {
      if (!this.show) {
        this.show = true;
        this.remember_me = "No";
      } else {
        this.show = false;
        this.remember_me = "Yes";
      }
    },
    visibleYes() {
      this.visible = true;
      this.$refs.pass_input.type = "text";
    },
    visibleNo() {
      this.visible = false;
      this.$refs.pass_input.type = "password";
    },
    async login() {
      if (this.email === "") {
        this.error_email = "Invalid Email-Id !!";
      } else {
        this.error_email = "";
      }

      if (this.password === "") {
        this.error_password = "Invalid Password !!";
      } else {
        this.error_password = "";
      }

      if (this.email !== "" && this.password !== "") {
        this.error_email = "";
        this.error_password = "";

        const response = await axios
          .post(`login?email=${this.email}&password=${this.password}`)
          .catch((e) => e.response);
        const result = response.data;
        // console.log("Response: " + JSON.stringify(result));
        // console.log("Response: " + result.message);

        if (result.status === true) {
          // alert(result.message);
          // await Swal.fire({
          //   title: "Login Successful",
          //   text: "You Loged in successfully.",
          //   icon: "success",
          //   customClass: {
          //     popup: "my-swal-popup", // Make sure this matches your CSS class name
          //   },
          // });
          localStorage.setItem("token", result.data.token);
          this.$router
            .push({
              name: "HomePage",
            })
            .then(() => {
              this.$router.go();
            });
        } else {
          await Swal.fire({
            title: "Login Failed",
            text: "Invalid Credentials.",
            icon: "error",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          if (result.message.includes("Email")) {
            this.error_email = result.message;
          } else {
            this.error_password = result.message;
          }
        }
      }
    },
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
.visibility {
  visibility: hidden;
}

.login-container {
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

.login {
  width: 50%;
  height: 100%;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.loginContent {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  border: 0.2rem solid var(--border-color);
  background-color: var(--btn-font-color);
}

.loginContent h2 {
  font-size: 2.6rem;
  font-weight: 700;
}

.loginContent h4 {
  font-size: 1.6rem;
  font-weight: 400;
  opacity: 0.6;
}

.loginContent form {
  min-width: 29rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
}

.loginContent input {
  min-width: 100%;
  padding: 0.6rem 1.2rem;
  border: 0.1rem solid var(--border-color);
  border-radius: 0.6rem;
  font-size: 1.3rem;
  outline: none;
}

.password_input {
  width: 100%;
  display: flex;
  align-items: center;
  border: 0.1rem solid var(--border-color);
  padding: 0rem;
  border-radius: 0.6rem;
  background-color: var(--btn-font-color);
}

.password_input input {
  min-width: 90%;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.3rem;
  outline: none;
}

.password_input input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
  display: none;
}

.password_input i {
  color: var(--border-color);
  cursor: pointer;
}

.radio {
  width: 100%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.6rem;
}

.radioInput {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.radio_img {
  display: flex;
  align-items: center;
  border: 0.1rem solid var(--border-color);
  border-radius: 50%;
  z-index: 5;
  cursor: pointer;
}

.radio_img img {
  width: 1.4rem;
}

.radio a {
  text-decoration: none;
  color: black;
  opacity: 0.6;
}

.btns {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-top: 3.6rem;
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

#google {
  background-color: transparent;
  border: 0.1rem solid black;
  color: black;
  padding: 0.5rem 2.6rem;
}

.googleContent img {
  width: 2rem;
}

.googleContent {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.signup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
}

.signup p {
  font-size: 1.4rem;
  margin-bottom: 0 !important;
  opacity: 0.6;
}

.signup a {
  font-size: 1.4rem;
  margin-left: 0.4rem;
  text-decoration: none;
  font-weight: bold;
  color: var(--primary-color);
}

.loginImg {
  width: 50%;
  height: 100%;
  background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo_title h1 {
  font-size: 4.4rem !important;
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
  .login-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .login {
    width: 95%;
    height: 60%;
    z-index: 5;
  }

  .loginImg {
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

  .loginContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    border-radius: 0.6rem;
    background: transparent;
  }

  .loginContent input {
    border: 0.2rem solid var(--border-color);
  }

  .password_input {
    border: 0.2rem solid var(--border-color);
  }

  .password_input input {
    border: none;
  }

  .radio a {
    color: var(--btn-font-color);
  }

  #google {
    background-color: var(--btn-font-color);
    border: 0.1rem solid var(--border-color);
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .login-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .login {
    width: 50%;
    height: 60%;
    z-index: 5;
  }

  .loginImg {
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

  .loginContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    border-radius: 0.6rem;
    background: transparent;
  }

  .loginContent input {
    border: 0.2rem solid var(--border-color);
  }

  .password_input {
    border: 0.2rem solid var(--border-color);
  }

  .password_input input {
    border: none;
  }

  .radio a {
    color: var(--btn-font-color);
  }

  #google {
    background-color: var(--btn-font-color);
    border: 0.1rem solid var(--border-color);
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .login-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .login {
    width: 50%;
    height: 70%;
    z-index: 5;
  }

  .loginImg {
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

  .loginContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    border-radius: 0.6rem;
    background: transparent;
  }

  .loginContent input {
    border: 0.2rem solid var(--border-color);
  }

  .password_input {
    border: 0.2rem solid var(--border-color);
  }

  .password_input input {
    border: none;
  }

  .radio a {
    color: var(--btn-font-color);
  }

  #google {
    background-color: var(--btn-font-color);
    border: 0.1rem solid var(--border-color);
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
