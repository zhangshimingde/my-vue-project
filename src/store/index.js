import Vue from "vue";
import Vuex from "vuex";
import authMiddleware from "@/nmb/middleware";
import demo from "./modules/demo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    demo
  },
  plugins: [authMiddleware]
});
