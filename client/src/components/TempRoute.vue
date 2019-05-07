<template>
  <div class="container">
    <section v-if="!getUser" class="hero" id="hero-section">
      <div class="hero-body center">
        <h1 v-if="!isLoggingIn" class="has-text-dark title">
          Log in to get started!
        </h1>
        <h1 v-if="isLoggingIn" class="has-text-dark title">
          Generating and uploading images for nonstagram!
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TempRoute",
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>

<style lang="css" scoped>
.title {
  font-family: "Karla", sans-serif;
}
#hero-section {
  height: 80vh;
}
</style>
