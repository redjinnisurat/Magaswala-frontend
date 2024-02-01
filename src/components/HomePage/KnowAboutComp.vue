<template>
  <section class="aboutSec">
    <h3>Know about us</h3>
    <hr />
    <div class="aboutContainer">
      <div class="aboutImg">
        <div class="about_title">
          <h1>Magaswala</h1>
        </div>
      </div>
      <div class="aboutContent">
        <p>
          Welcome to Magaswala, your premier destination for indulging in the
          divine taste of traditional Magas. As your one-stop shop for authentic
          Indian sweets, we invite you to experience the rich flavors and
          cultural heritage woven into each masterpiece. Our mouth-watering
          selection, featuring classic and saffron-infused Magas, promises to
          transport your taste buds straight to the heart of India. With
          Magaswala, your sweet desires are met with a commitment to quality and
          tradition, ensuring an unparalleled culinary journey. From the moment
          you place your order to the first delightful bite, our focus is on
          delivering an experience that captures the essence of India's sweet
          heritage. Track your Magaswala order seamlessly, knowing exactly when
          your sweet treats will arrive, allowing you to indulge worry-free.
          Immerse yourself in the rich tapestry of Indian sweets, where every
          Magas tells a story of craftsmanship, tradition, and pure indulgence.
          Magaswala – where passion meets sweetness. Order now and let the magic
          of Magaswala unfold, bringing the authentic taste of India to your
          doorstep.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "KnowAboutComp",
};
</script>

<style scoped>
.aboutSec {
  margin-top: 2rem;
  padding: 2rem;
}

.aboutSec h3 {
  font-size: 2.2rem;
  font-weight: 400;
  margin-left: 1rem;
  margin-bottom: 0.6rem;
}

.aboutSec hr {
  margin-bottom: 2rem;
}

.aboutContainer {
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.aboutImg {
  width: 45%;
  height: 100rem;
  background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about_title h1 {
  font-size: 5.4rem !important;
  font-weight: 700;
  color: white;
  font-family: "Merienda", cursive;
  font-style: italic;
  margin-bottom: 2rem;
}

.aboutContent {
  width: 53%;
}

.aboutContent p {
  padding: 1rem;
  font-size: 3rem;
  text-align: justify;
  font-weight: 300;
}

@media only screen and (max-width: 576px) {
  .aboutSec {
    padding: 2rem 0.6rem;
  }
  .aboutSec h3 {
    font-size: 2.6rem;
  }

  .aboutContainer {
    flex-direction: column;
  }

  .aboutImg {
    width: 95%;
  }

  .aboutContent {
    width: 95%;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .aboutSec h3 {
    font-size: 2.6rem;
  }

  .aboutContainer {
    flex-direction: column;
  }

  .aboutImg {
    width: 86%;
  }

  .aboutContent {
    width: 95%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .aboutSec h3 {
    font-size: 2.6rem;
  }

  .aboutContainer {
    flex-direction: column;
  }

  .aboutImg {
    width: 86%;
  }

  .aboutContent {
    width: 95%;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>