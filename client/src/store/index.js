import Vuex from 'vuex';
import Vue from 'vue';
import gallery from './modules/gallery';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gallery,
  }
});
