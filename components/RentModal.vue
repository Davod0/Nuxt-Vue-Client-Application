<template>
  <div>
    <b-button
      class="button2"
      id="show-btn"
      @click="showModal"
      :class="{ 'button-gray': isRented }"
      :disabled="isRented"
    >
      Rent
    </b-button>

    <button class="button2" @click="goHome">Back to Home</button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="calendar-container">
        <div class="text-container">
          <p>
            Please select the rental period from the calendar <br />
            to continue. Once you’ve chosen your dates, click
            <strong>Order</strong> to confirm your rental.
          </p>
        </div>
        <vc-date-picker
          v-model="selectedDates"
          color="indigo"
          is-dark
          is-range
        />
      </div>

      <div class="button-container">
        <button
          class="button"
          :disabled="!selectedDates || !selectedDates.start || !selectedDates.end"
          :class="{ 'button-disabled': !selectedDates || !selectedDates.start || !selectedDates.end }"
          @click="
            () => {
              addItem(product.id);
              hideModal();
              isRented = true;
            }
          "
        >
          Order
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["product"],
  data() {
    return {
      isRented: false,
      selectedDates: null,
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    goHome() {
      this.$router.push("/");
    },
    ...mapMutations(["addItem"]),
  },
};
</script>

<style scoped>
.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 25rem;
  font-weight: 700;
  transition: width 0.5s, background-color 0.5s, box-shadow 0.5s;
  border: none;
  cursor: pointer;
  transform-origin: left;
}

.button:hover {
  width: 30rem;
  background-color: rgb(255, 95, 57);
  box-shadow: 0 4px 16px rgba(231, 81, 43, 0.25);
}

.button-disabled {
  background-color: gray !important;
  cursor: not-allowed !important;
  box-shadow: none !important;
  opacity: 0.8;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.calendar-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

p {
  color: grey;
}

.text-container {
  padding: 0.5rem;
}

.button2 {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
  display: block;
  margin: 1rem auto;
  border: none;
  cursor: pointer;
}

.button2:hover {
  width: 23rem;
  background-color: rgb(255, 95, 57);
  box-shadow: 0 4px 16px rgba(231, 81, 43, 0.25);
}

.button-gray {
  background-color: gray !important;
  cursor: not-allowed !important;
  box-shadow: none !important;
  opacity: 0.8;
}

.button-gray:hover {
  background-color: gray !important;
  width: 20rem !important;
  box-shadow: none !important;
}
</style>
