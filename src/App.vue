<template>
  <v-app id="inspire" style="background: #eeeeee">
    <v-app-bar
      absolute
      app
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title>
        <v-container>
          <v-img
            width="15vh"
            contain
            @click.stop="$router.push({ name: 'Home' })"
            class="ma-3"
            :src="require('./assets/buzzFull.png')"
          ></v-img>
        </v-container>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        class="d-none d-lg-block"
        @click.stop="goTo(route.category, { productId: '123' })"
        v-for="route in routes"
        :key="route.title"
      >
        {{ route.title }}
      </v-btn>

      <v-btn
        outlined
        class="mr-3 d-none d-sm-block"
        color="orange"
        to="https://cms.buzz.ezyy.cloud/ghost"
      >
        Studio
      </v-btn>

      <v-btn color="purple" depressed dark class="d-none d-sm-block">
        Console
      </v-btn>

      <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer">
        <v-icon v-if="drawer">mdi-window-close</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-sheet
      v-if="drawer"
      class="d-lg-none"
      transition="scroll-x-reverse-transition"
    >
      <v-main
        id="scrolling-techniques-7"
        style="height: 100%; overflow-y: scroll; overflow-x: hidden; backface-visibility hidden; scroll-behavior: smooth"
      >
        <v-row class="pa-4">
          <v-btn
            outlined
            class="d-sm-none flex-grow-1 ma-1 flex-shrink-0"
            color="orange"
          >
            Studio
          </v-btn>
          <v-btn
            depressed
            dark
            class="d-sm-none flex-grow-1 ma-1 flex-shrink-0"
            color="purple"
          >
            Console
          </v-btn>
        </v-row>
        <v-list>
          <v-list-group
            v-for="route in routes"
            :key="route.title"
            v-model="route.active"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="route.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              @click.stop="drawer = !drawer"
              :to="{ name: route.item, params: { id: child.id } }"
              v-for="(child, i) in route.children"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-main>
    </v-sheet>
    <v-sheet
      v-else
      class="overflow-y-scroll grey lighten-3"
      style="scroll-behavior: smooth"
      max-height="100vh"
    >
      <v-main
        id="scrolling-techniques-7"
        style="height: 100%; overflow-y: scroll; backface-visibility hidden; scroll-behavior: smooth"
      >
        <transition name="fade">
          <router-view />
        </transition>
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Dictionary } from "vue-router/types/router";
import { mapGetters } from "vuex";
// import products from "./store/modules/products";

export default Vue.extend({
  name: "App",
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  },
  methods: {
    goTo(route: string, params: Dictionary<string> | undefined) {
      this.$router.push({ name: route, params: { ...params } });
    }
  },

  computed: {
    ...mapGetters({
      listedProducts: "products/getProducts",
      listedSolutions: "solutions/getSolutions",
      listedServices: "services/getServices",
      listedNetworkComponents: "network/getNetworkComponents",
      listedPlaformModules: "platform/getPlatformModules"
    }),
    routes() {
      return [
        {
          children: [...this.listedProducts],
          title: "PRODUCTS",
          category: "products",
          item: "product"
        },
        {
          children: [...this.listedSolutions],
          title: "SOLUTIONS",
          category: "solutions",
          item: "solution"
        },
        {
          children: [...this.listedServices],
          title: "SERVICES",
          category: "services",
          item: "service"
        },
        {
          children: [...this.listedNetworkComponents],
          title: "NETWORK",
          category: "network",
          item: "networkComponent"
        },
        {
          children: [...this.listedPlaformModules],
          title: "PLATFORM",
          category: "platform",
          item: "platformModule"
        }
      ];
    }
  }
});
</script>
