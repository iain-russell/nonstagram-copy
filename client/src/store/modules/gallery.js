import axios from "axios";

const state = {
  gallery: "",
  galleries: [],
  counter: 0,
  user: "",
  seedUser: ""
};

const getters = {
  getGallery: state => state.gallery,
  isGallerySelected: state => !!state.gallery,
  getGalleries: state => state.galleries,
  getCounter: state => state.counter,
  getUser: state => state.user,
  getSeedUser: state => state.seedUser
};

const actions = {
  async getSeedData({ commit }) {
    await axios.get("http://localhost:3001/getSeedUser").then(response => {
      commit("setSeedUser", response.data);
      return response.data;
    });
  },
  async createUser({ commit }) {
    await axios.post("http://localhost:3001/createUser").then(response => {
      commit("setUser", response.data);
      return response.data;
    });
  },
  async getUserData({ commit }) {
    await axios
      .post(`http://localhost:3001/userInfo`, {
          user: state.user
      })
      .then(response => {
        commit("setUser", response.data);
        return response.data;
      });
  },
  fetchGalleries({ commit }) {
    axios
      .get("http://localhost:3001/", { user: state.user })
      .then(async response => {
        commit("setGalleries", response.data);
        return response.data;
      });
  },
  resetGalleries({ commit }) {
    commit("setGalleries", []);
  },
  resetGallery({ commit }) {
    commit("setGallery", "");
  },
  incrementCounter({ commit }) {
    commit("plusCounter");
  }
};

const mutations = {
  setGallery: (state, gallery) => {
    state.gallery = gallery;
  },
  setGalleries: (state, galleries) => {
    state.galleries = galleries;
  },
  pushGallery: (state, gallery) => {
    state.galleries.push(gallery);
  },
  plusCounter: state => {
    state.counter += 1;
  },
  setUser: (state, user) => {
    state.user = user;
  },
  setSeedUser: (state, seedUser) => {
    state.seedUser = seedUser;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
