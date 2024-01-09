<template>
  <div class="content-data">
    <div>
      <h3 class="fs-1 fw-semibold mt-3 ms-3 heading">Help And Support</h3>
    </div>
    <div class="mt-5 ms-3 pt-3">
      <div
        class="w-50 ms-1 me-1 input-div d-flex align-items-center justify-content-between"
      >
        <input
          class="fs-4 w-75 input"
          type="text"
          name="query"
          placeholder="Search for Queries"
        />
        <i class="fa-solid fa-magnifying-glass fs-2 pe-3 icon"></i>
      </div>
      <div class="accordion mt-1" style="width: 53%" id="accordionExample">
        <div class="accordion-item mt-1">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fs-2 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Shipping FAQs
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-4">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-2">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fs-2 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Payment FAQs
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-4">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-2">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fs-2 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Cancellation FAQs
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-4">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-2">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fs-2 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Returns FAQs
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-4">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-2">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fs-2 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Account FAQs
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-4">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-2">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fs-2 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Coupon code FAQs
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-4">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpSupportComp",
};
</script>

<style scoped>
.content-data {
  max-height: 56rem;
  overflow-y: auto;
}

.content-data::-webkit-scrollbar {
  display: none;
}

.heading {
  color: var(--heading-color);
}

.input-div {
  padding: 1rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  outline: none;
  color: grey;
  margin-bottom: 2rem;
}

.input {
  padding: 0.2rem 0.8rem;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  background: transparent;
  color: grey;
}

.icon {
  cursor: pointer;
}

.accordion-item {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.1rem solid grey;
}

.accordion-button {
  border: none;
  padding: 1.2rem 0.2rem;
}

.accordion-button:focus {
  border: none !important;
  box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
  color: var(--border-color);
  background-color: var(--background--color);
  box-shadow: none;
}

.accordion-button::after {
  width: 2rem;
  height: 2rem;
  background-size: 2rem;
}
</style>
