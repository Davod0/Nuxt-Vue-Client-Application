<template>
  <div>
    <h3>Customer Views</h3>
    <div v-if="!$fetchState.pending">
      <ReviewCard v-for="review in reviewers.results" :key="review.login.uuid" :review="review" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";

export default {
  data() {
    return {
      reviewers: [],
    };
  },
  async fetch() {
    this.reviewers = await fetch("https://randomuser.me/api/?results=5").then(
      (res) => res.json()
    );
  },
};
</script>

<style scoped></style>
