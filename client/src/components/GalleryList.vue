<template>
  <div class="container">
    <section class="section center">
      <div class="columns is-mobile is-multiline" id="main-column">
        <div
          class="column is-4"
          id="image-box"
          v-for="(gallery, index) in getUserGalleries"
          v-bind:key="gallery._id"
          v-if="gallery.visible"
          @mouseover="gallery.deleteVisible = true"
          @mouseleave="gallery.deleteVisible = false"
        >
          <div id="gallery-delete-div" v-if="gallery.deleteVisible">
            <button
              class="delete"
              id="delete-button"
              @click="deleteGallery(gallery)"
            ></button>
          </div>
          <figure class="image is-square" @click="openCloseUp(gallery, index)">
            <img
              id="gallery-list-name"
              :src="
                'https://s3.eu-west-2.amazonaws.com/django-static-practice1939/' +
                  gallery.images[0].key
              "
            />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import CloseUp from "./CloseUp";

import { mapActions, mapGetters } from "vuex";

export default {
  Name: "GalleryList",
  data() {
    return {};
  },
  created: function() {
    this.getSeedData();
  },
  computed: {
    getUserGalleries() {
      return this.$store.getters.getUser.galleries;
    },
    initUser() {
      if (this.getUser === "") {
        this.createUser();
      }
    },
    getSeedGalleries() {
      return this.$store.getters.getSeedUser;
    },
    dataNeedsSeeds() {
      if (this.getUser === "") {
        return true;
      } else {
        return false;
      }
    },
    // compareGalleries() {
    //   if (
    //     !this.dataNeedsSeeds &&
    //     this.reverseGalleries.length !=
    //       this.$store.getters.getUser.galleries.length
    //   ) {
    //     this.fetchGalleries();
    //     this.getUserData();
    //     this.incrementCounter();
    //   }
    // },
    ...mapGetters(["getGalleries", "getCounter", "getUser", "getSeedUser"])
  },
  watch: {
    getCounter() {
      this.getUserData();
      this.getSeedData();
      setTimeout(() => {
        this.getUserData();
        this.getSeedData();
      }, 3500);
    }
  },
  methods: {
    ...mapActions([
      "getSeedData",
      "createUser",
      "getUserData",
      "incrementCounter"
    ]),
    openCloseUp(gallery, index) {
      this.$modal.open({
        parent: this,
        component: CloseUp,
        scroll: "keep",
        hasModalCard: false,
        props: { gallery: gallery }
      });
    },
    async deleteGallery(gallery) {
      gallery.visible = false;
      if (gallery.user._id === this.getUser._id) {
        axios.delete(`http://localhost:3001/${gallery._id}`);
      } else {
        axios.post(`http://localhost:3001/${gallery._id}/pull`, {
          user: this.getUser._id
        });
      }
    }
    // async seedDatabase() {
    //   this.incrementCounter();
    //   this.fetchGalleries();
    //   this.getUserData();
    // }
  }
};
</script>

<style scoped>
.title {
  font-family: "Karla", sans-serif;
}
#image-box {
  cursor: pointer;
  padding: 15px;
}
#main-column {
  min-width: 60vw;
}
img {
  height: 300px;
  object-fit: cover;
}
#gallery-list-name {
  font-family: "Nunito", sans-serif;
}
#hero-section {
  height: 80vh;
}
#gallery-delete-div {
  position: absolute;
  z-index: 10;
}
#delete-button {
  margin: 5px;
}
@media (max-width: 768px) {
  #main-column {
    min-width: 96vw;
    padding-left: 4px;
  }
  #image-box {
    padding: 2px;
  }
}
@media (min-width: 768px) {
  #main-column {
    min-width: 96vw;
    padding-left: 10px;
    padding-left: 10px;
  }
  #image-box {
    padding: 15px;
  }
}
@media (min-width: 1024px) {
  #main-column {
    min-width: 60vw;
  }
}
</style>
