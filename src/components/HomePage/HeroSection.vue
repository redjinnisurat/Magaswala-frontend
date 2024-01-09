<template>
  <section class="heroSec">
    <div class="heroContent">
      <h1>The Best Magas in the town</h1>
      <h3>Made with pure ingredients</h3>
      <h4>Price=Rs.250 for 1kg</h4>
      <button>Add to basket</button>
    </div>
    <div class="heroImage">
      <img src="./assets/laddo_img_2.jpeg" alt="Image" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {};
  },
};
</script>

<style scoped>
.heroSec {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 5rem 4.6rem;
}

.heroContent h1 {
  font-size: 5.2rem;
  margin: 2rem 0;
  font-weight: 600;
  color: var(--heading-color);
}

.heroSec h3 {
  font-size: 4.2rem;
  font-weight: 400;
  margin: 2rem 0;
  color: var(--heading-color);
}

.heroSec h4 {
  font-size: 3.8rem;
  font-weight: 300;
  margin: 2rem 0;
  color: var(--heading-color);
}

.heroSec button {
  font-size: 2.2rem;
  border: none;
  border-radius: 0.6rem;
  background-color: var(--primary-color);
  padding: 0.6rem 2.8rem;
  margin-top: 3.4rem;
  color: var(--btn-font-color);
  font-weight: 500;
  cursor: pointer;
}

.heroImage img {
  max-width: 54rem;
}

@media only screen and (max-width: 576px) {
  .heroSec {
    flex-direction: column-reverse;
    margin-top: 0.5rem;
  }

  .heroImage img {
    max-width: 100%;
  }

  .heroContent {
    margin-top: 1rem;
  }

  .heroContent h1 {
    font-size: 3.2rem;
  }

  .heroSec h3 {
    font-size: 2.4rem;
  }

  .heroSec h4 {
    font-size: 2rem;
  }

  .heroSec button {
    margin-top: 2rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .heroSec {
    flex-direction: column-reverse;
    margin-top: 0.5rem;
  }

  .heroImage img {
    max-width: 100%;
  }

  .heroContent {
    margin-top: 1rem;
  }

  .heroContent h1 {
    font-size: 3.2rem;
  }

  .heroSec h3 {
    font-size: 2.4rem;
  }

  .heroSec h4 {
    font-size: 2rem;
  }

  .heroSec button {
    margin-top: 2rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .heroSec {
    flex-direction: column-reverse;
    margin-top: 0.5rem;
  }

  .heroImage img {
    max-width: 100%;
  }

  .heroContent {
    margin-top: 1rem;
  }

  .heroContent h1 {
    font-size: 3.2rem;
  }

  .heroSec h3 {
    font-size: 2.4rem;
  }

  .heroSec h4 {
    font-size: 2rem;
  }

  .heroSec button {
    margin-top: 2rem;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
