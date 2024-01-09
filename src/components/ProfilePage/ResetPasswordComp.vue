<template>
  <div class="h-100 content-data">
    <div class="h-50">
      <h3 class="fs-1 fw-semibold mt-3 ms-3 heading">Reset Password</h3>
      <div class="d-flex mt-5 w-100">
        <div class="d-flex flex-column w-50 mt-3">
          <h4 class="fs-3 fw-semibold mb-3">Password</h4>
          <input
            class="input"
            type="text"
            name="oldPass"
            placeholder="Old Password"
          />
          <input
            class="input"
            type="text"
            name="newPass"
            placeholder="New Password"
          />
          <input
            class="input"
            type="text"
            name="confPass"
            placeholder="Confirm Password"
          />
        </div>
        <div class="w-50 d-flex align-items-center justify-content-center">
          <img
            class="w-75"
            src="./assets/password_img.jpg"
            alt="Password Image"
          />
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end h-50 pb-5 me-5">
      <button class="fs-3 password-btn mt-auto" type="button">
        Change Password
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPasswordComp",
};
</script>

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
  margin-bottom: 2rem;
}

.password-btn {
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  cursor: pointer;
}
</style>
