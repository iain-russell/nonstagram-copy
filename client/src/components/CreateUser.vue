<template lang="html"> </template>

<script>
import { router } from "../main.js";
import { mapActions } from "vuex";
export default {
  name: "CreateUser",
  created: function() {
    this.createUser();
  },
  methods: {
    ...mapActions(["createUser"])
  }
};
</script>

<style lang="css" scoped></style>
