<template>
  <form @keyup.enter="change()" class="h-100">
    <div class="h-100 content-data">
      <div class="h-50">
        <h3 class="fs-1 fw-semibold mt-3 ms-3 heading">Reset Password</h3>
        <div class="d-flex mt-5 w-100 input-div">
          <div class="w-50 d-flex flex-column input-control">
            <h4 class="fs-3 fw-semibold mb-3">Password</h4>
            <input
              class="input"
              type="password"
              name="oldPass"
              placeholder="Old Password"
              v-model="old_pass"
            />
            <div v-if="old_pass_error" class="error">
              <span>{{ old_pass_error }}</span>
            </div>
            <input
              class="input"
              type="password"
              name="newPass"
              placeholder="New Password"
              v-model="new_pass"
            />
            <div v-if="new_pass_error" class="error">
              <span>{{ new_pass_error }}</span>
            </div>
            <input
              class="input"
              type="password"
              name="confPass"
              placeholder="Confirm Password"
              v-model="conf_pass"
            />
            <div v-if="conf_pass_error" class="error">
              <span>{{ conf_pass_error }}</span>
            </div>
          </div>
          <div
            class="w-50 d-flex align-items-center justify-content-center input-control"
          >
            <img
              class="w-75"
              src="./assets/password_img.jpg"
              alt="Password Image"
            />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end h-50 pb-5 me-5 btn-div">
        <button
          class="fs-3 password-btn mt-auto"
          type="button"
          v-on:click="change()"
        >
          Change Password
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "@/axios";
import Swal from "sweetalert2";

export default {
  name: "ResetPasswordComp",
  data() {
    return {
      old_pass: "",
      old_pass_error: "",
      new_pass: "",
      new_pass_error: "",
      conf_pass: "",
      conf_pass_error: "",
    };
  },
  methods: {
    async changePass(data) {
      try {
        const response = await axios.post(`changePassword`, data);

        if (response.data.status === true) {
          // alert("Your password changed successfully!!");
          await Swal.fire({
            title: "Password Changed",
            text: "You password has been changed successfully.",
            icon: "success",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          this.old_pass = "";
          this.new_pass = "";
          this.conf_pass = "";
        } else {
          // alert("Something went wrong!!");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async change() {
      if (this.old_pass === "") {
        this.old_pass_error = "Required field !!";
      } else {
        this.old_pass_error = "";
      }

      if (this.new_pass === "") {
        this.new_pass_error = "Required field !!";
      } else {
        this.new_pass_error = "";
      }

      if (this.conf_pass === "") {
        this.conf_pass_error = "Required field !!";
      } else {
        this.conf_pass_error = "";
      }

      if (
        this.old_pass !== "" &&
        this.new_pass !== "" &&
        this.conf_pass !== ""
      ) {
        if (this.new_pass == this.conf_pass) {
          this.old_pass_error = "";
          this.new_pass_error = "";
          this.conf_pass_error = "";

          const data = {
            old_password: this.old_pass,
            new_password: this.new_pass,
            confirm_password: this.conf_pass,
          };

          this.changePass(data);
        } else {
          await Swal.fire({
            title: "Password not changed",
            text: "Both password should be same.",
            icon: "error",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          this.new_pass_error = "Both password should be same!!";
          this.conf_pass_error = "Both password should be same!!";
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
.heading {
  color: var(--heading-color);
}

.input {
  font-size: 1.6rem;
  padding: 1rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  outline: none;
  background-color: var(--background-color);
  color: grey;
  margin-top: 2rem;
}

.password-btn {
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  cursor: pointer;
}

.error {
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: 1.4rem;
  color: red;
  font-weight: 300;
  padding: 0 0.2rem;
  margin-left: 0.6rem;
  margin-top: 0.2rem;
}

@media only screen and (max-width: 576px) {
  .input-div {
    flex-direction: column-reverse;
  }

  .input-control {
    width: 100% !important;
  }

  .btn-div {
    justify-content: center !important;
    margin-right: 0 !important;
    margin-top: 1.4rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .input-div {
    flex-direction: column-reverse;
  }

  .input-control {
    width: 100% !important;
  }

  .btn-div {
    justify-content: center !important;
    margin-right: 0 !important;
    margin-top: 1.4rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .input-control {
    width: 100% !important;
  }

  .btn-div {
    height: 25rem !important;
    margin-top: auto;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
