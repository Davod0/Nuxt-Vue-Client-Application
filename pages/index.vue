<template>
  <div>
    <div class="container">
      <Hero />
      <LargCardDisplay
        v-for="cardInfo in largeCardInfo"
        :key="cardInfo.id"
        :cardsSection="cardInfo"
      />
      <SmallCardDisplay
        v-for="cardInfo in smallCardSections"
        :key="cardInfo.id"
        :cardsSection="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "../assets/data.js";
import Nav from "../components/Nav.vue";
import SmallCardDisplay from "../components/SmallCardDisplay.vue";
export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections
    };
  },
};
</script>
