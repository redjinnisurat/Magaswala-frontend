<template>
  <div class="w-100 d-flex align-items-center mt-5 content-div">
    <div class="w-50 mt-5 pt-5 content-data">
      <h3 class="ms-5 mb-4 fw-bold heading" style="width: 80%">
        Terms And Conditions
      </h3>
      <p class="ms-5 fs-3 text-justify" style="width: 80%">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        ullam amet ea! Nobis eius, adipisci ipsum temporibus reiciendis quidem
      </p>
      <div class="btn-div d-flex align-items-center">
        <button class="ms-5 button-lm fs-3" type="button">Learn More</button>
      </div>
    </div>
    <div
      class="w-50 pt-5 d-flex align-items-center justify-content-center content-img"
    >
      <img class="w-100" src="./assets/terms_img.jpg" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TermsCondComp",
};
</script>

<style scoped>
.heading {
  font-size: 4.5rem;
  color: var(--heading-color);
}

.button-lm {
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 5.8rem;
  color: var(--btn-font-color);
  background-color: var(--primary-color);
  margin: 1rem 1.6rem;
  cursor: pointer;
}

@media only screen and (max-width: 576px) {
  .content-div {
    flex-direction: column-reverse;
  }

  .content-data {
    width: 90% !important;
  }

  .heading {
    font-size: 3.2rem !important;
  }

  .btn-div {
    width: 90%;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem !important;
  }

  .content-img {
    width: 60% !important;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
