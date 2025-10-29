<template>
  <div>
    <h3>Customer Views</h3>
<div v-if="!loading">
  <ReviewCard
    v-for="review in reviewers.results"
    :key="review.login.uuid"
    :review="review"
    :text="review.text"
  />
</div>
<div v-else>Loading...</div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";

export default {
  components: { ReviewCard },
  data() {
    return {
      reviewers: { results: [] },
      loading: true,
    };
  },
  async mounted() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();

      const texts = [
        "Renting a fire extinguisher saved us money and ensured safety at our event.",
        "The rental process was quick, and the extinguisher came fully serviced and ready to use.",
        "Great option for short-term needs, the extinguisher was reliable and easy to operate.",
        "Customer support explained the right extinguisher type for our space—very professional.",
        "Affordable rental with peace of mind, I’ll definitely use this service again.",
      ];

      data.results = data.results.map((r, i) => ({
        ...r,
        text: texts[i % texts.length],
      }));

      this.reviewers = data;
    } catch (error) {
      console.error("Failed to fetch reviewers:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
