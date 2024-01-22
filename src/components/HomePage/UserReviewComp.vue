<template>
  <div class="reviewContainer" v-if="feedbackArray.length > 0">
    <div
      class="reviewItem"
      v-for="feedback in feedbackArray"
      :key="feedback.id"
    >
      <div class="d-flex align-items-center justify-content-center img-div">
        <img
          :src="
            feedback.user.profileimage
              ? feedback.user.profileimage
              : defaulImage
          "
          class="rounded-4"
          alt="Image"
        />
      </div>
      <div>
        <p>"{{ feedback.feedback }}."</p>
        <p>- {{ feedback.user.name }}</p>
        <!-- <p>Surat</p> -->
      </div>
    </div>
    <!-- <div class="reviewItem">
      <img src="./assets/user_img.png" alt="Image" />
      <p>
        "Those sweets were beautiful handcrafted with so much detail, and the
        test was simple heavenly."
      </p>
      <p>- Rahul Vaghani</p>
      <p>Surat</p>
    </div>
    <div class="reviewItem">
      <img src="./assets/user_img.png" alt="Image" />
      <p>
        "Those sweets were beautiful handcrafted with so much detail, and the
        test was simple heavenly."
      </p>
      <p>- Rahul Vaghani</p>
      <p>Surat</p>
    </div> -->
  </div>
  <div
    class="reviewContainer d-flex align-items-center justify-content-center"
    v-else
  >
    <h3 class="text-muted">No Reviews Found !!</h3>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserReviewComp",
  data() {
    return {
      defaulImage: require("./assets/user_img.png"),
    };
  },
  computed: {
    feedbackArray() {
      return this.$store.getters.allFeedbacks;
    },
  },
  methods: {
    ...mapActions(["getAllFeedback"]),
  },
  beforeMount() {
    this.getAllFeedback().then(() => {
      // console.log("All Feedbacks: ", this.feedbackArray);
    });
  },
};
</script>

<style scoped>
.reviewContainer {
  width: 100%;
  height: 50rem;
  display: flex;
  gap: 3rem;
  overflow: auto;
  padding: 2rem 0rem;
  margin-left: 1rem;
}

.reviewContainer::-webkit-scrollbar {
  display: none;
}
.reviewItem {
  width: 42rem;
  min-width: 42rem;
  height: 45rem;
  border: 0.2rem solid var(--border-color);
  padding: 2rem;
  text-align: center;
  gap: 2rem;
  background-color: var(--btn-font-color);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.img-div {
  width: 18rem;
  height: 18rem;
  overflow: hidden;
}

.img-div img {
  width: 100%;
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
