import Vue from "vue";
import Vuex from "vuex";
import Carts from "./modules/carts";
import Products from "./modules/products";
import Solutions from "./modules/solutions";
import Services from "./modules/services";
import Platform from "./modules/platform";
import Network from "./modules/network";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    carts: Carts,
    products: Products,
    solutions: Solutions,
    services: Services,
    network: Network,
    platform: Platform
  }
});

export default store;
