<template>
  <nav class="navbar " role="navigation" aria-label="main navigation">
    <!-- .brand -->
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/galleries">
          <p class="subtitle">
            <i class="fas fa-camera"></i>
            Nonstagram
          </p>
        </router-link>
      </div>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- /.brand -->

    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <!-- .galleries -->
        <div class="right">
          <div class="navbar-item" v-if="getUser">
            <router-link to="/galleries">
              <a class="button" @click="toggleNavbar()">Galleries</a>
            </router-link>
          </div>
        </div>
        <!-- /.galleries -->
        <!-- .upload-images -->
        <div class="right">
          <div class="navbar-item" v-if="getUser">
            <button class="button" @click="openUploadModal()">Upload</button>
          </div>
        </div>
        <!-- /.upload-images -->

        <!-- .about -->
        <div class="right">
          <div class="navbar-item">
            <router-link to="/about">
              <a class="button" @click="toggleNavbar()">About </a>
            </router-link>
          </div>
        </div>
        <!-- /.about -->

        <!-- .about -->
        <div class="right">
          <div class="navbar-item" v-if="!getUser">
            <router-link to="/login">
              <a class="button" @click="toggleNavbar()">Log in </a>
            </router-link>
          </div>
        </div>
        <!-- /.about -->

        <!-- .logout -->
        <div class="right">
          <div class="navbar-item" v-if="getUser">
            <router-link to="/">
              <button class="button" @click="logout">
                Logout
              </button>
            </router-link>
          </div>
        </div>
        <!-- /.logout -->
      </div>
    </div>
  </nav>
</template>

<script>
import { router } from "../main.js";
import UploadImageModal from "./UploadImageModal";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      showNav: false
    };
  },
  computed: mapGetters(["isLoggedIn", "isGallerySelected", "getUser"]),
  methods: {
    ...mapActions([
      "logout",
    ]),
    openUploadModal() {
      router.push("/temp");
      this.toggleNavbar();
      this.$modal.open({
        parent: this,
        component: UploadImageModal,
        scroll: "keep",
        hasModalCard: true,
        props: {},
        onClose: router.push("galleries")
      });
    },
    toggleNavbar() {
      this.showNav = !this.showNav;
    }
  }
};
</script>

<style scoped>
a {
  color: #363636;
}
.fa-camera {
  padding-left: 10px;
  padding-right: 10px;
}
.subtitle {
  font-family: "Karla", sans-serif;
}
@media (min-width: 1024px) {
  .navbar {
    padding-left: 19.5%;
    padding-right: 20%;
  }
}
</style>
