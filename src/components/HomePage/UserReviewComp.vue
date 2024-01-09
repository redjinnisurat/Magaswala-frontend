<template>
  <div class="reviewItem">
    <img src="./assets/user_img.png" alt="Image" />
    <p>
      "Those sweets were beautiful handcrafted with so much detail, and the test
      was simple heavenly."
    </p>
    <p>- Rahul Vaghani</p>
    <p>Surat</p>
  </div>
</template>

<script>
export default {
  name: "UserReviewComp",
};
</script>

<style scoped>
.reviewItem {
  min-width: 36rem;
  border: 0.2rem solid var(--border-color);
  padding: 2rem;
  text-align: center;
  gap: 2rem;
  background-color: var(--btn-font-color);
}

.reviewItem p {
  font-size: 1.5rem;
  margin: 2rem 0;
  font-weight: 300;
}

@media only screen and (max-width: 576px) {
  .reviewItem {
    min-width: 40rem;
    margin-left: 0.8rem;
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .reviewItem {
    min-width: 40rem;
    margin-left: 0.8rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .reviewItem {
    min-width: 40rem;
    margin-left: 0.8rem;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
