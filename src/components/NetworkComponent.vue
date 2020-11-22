<template>
  <div id="scroll-threshold-example">
    <v-container class="">
      <v-container class="">
        <v-row align="start" justify="space-between">
          <v-container class="pa-0 col-lg-4">
            <v-responsive aspect-ratio="1">
              <v-img
                :src="
                  images($route.params.id).find(
                    image => image.color === selection
                  ).link
                "
                lazy-src="https://picsum.photos/id/11/100/60"
                contain
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-responsive>
          </v-container>
        </v-row>
        <v-row> </v-row>
        <div class="ml-lg-15 mr-lg-15 mt-4 mb-4">
          <div class="text-h6 font-weight-medium">
            About this network
          </div>
          <ul class="text-justify mt-2">
            <li v-for="(item, i) in about($route.params.id)" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
        <v-divider></v-divider>
        <div class="ml-lg-15 mr-lg-15 mt-4 mb-4">
          <div class="text-h6 font-weight-medium">
            Requirements:
          </div>
          <ul class="text-justify mt-2">
            <li v-for="(item, i) in requirements($route.params.id)" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
        <v-divider></v-divider>
        <div class="ml-lg-15 mr-lg-15 mt-4 mb-4">
          <div class="text-h6 font-weight-medium">
            Specifications:
          </div>
          <ul class="text-justify mt-2">
            <li v-for="(item, i) in specifications($route.params.id)" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>

        <v-divider></v-divider>
        <div class="ml-lg-15 mr-lg-15 mt-4 mb-4">
          <div class="text-h6 font-weight-medium">
            Terms and Conditions:
          </div>

          <ul class="text-justify mt-2">
            <li v-for="(item, i) in tAndCs($route.params.id)" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default Vue.extend({
  data: () => ({
    selection: "black",
    sheet: false,
    model: null
  }),
  methods: {
    cartTotal(itemArray: any[]) {
      let sum = 0;
      itemArray.forEach(
        item => (sum += this.network(item.id).price * item.quantity)
      );
      return sum;
    },
    ...mapActions({
      addItem: "carts/addItem",
      removeItem: "carts/removeItem"
    })
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      network: "network/getNetwork",
      rating: "network/getRating",
      about: "network/getAbout",
      requirements: "network/getRequirements",
      specifications: "network/getSpecifications",
      tAndCs: "network/getTandCs",
      images: "network/getImages",
      cart: "carts/getCart",
      itemQuantityInCart: "carts/getItemQuantity"
    })
  }
});
</script>
