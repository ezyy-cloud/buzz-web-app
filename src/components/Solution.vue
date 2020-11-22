<template>
  <div id="scroll-threshold-example">
    <v-container class="pa-0 d-flex align-start pb-8">
      <v-container class="col-lg-9 col-md-10 col-sm-10 col-11 pa-0">
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
          <v-container class="col-lg-6 col-md-12 col-sm-12 col-sm-12">
            <v-row
              class="d-flex pa-0 ma-0 align-center justify-space-between mt-lg-4"
            >
              <div
                class="text-lg-h3 text-md-h4 text-sm-h4 text-h4 font-weight-light"
              >
                {{ solution($route.params.id).title }}
              </div>
              <v-rating
                :value="rating($route.params.id)"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="mdi-circle-outline"
                full-icon="mdi-star"
                hover
                :x-small="$vuetify.breakpoint.xsOnly"
                :small="$vuetify.breakpoint.smallOnly"
                :medium="$vuetify.breakpoint.mediumOnly"
                :large="$vuetify.breakpoint.xlOnly"
              ></v-rating>
            </v-row>
            <v-row
              class="d-flex pa-0 ma-0 align-center justify-space-between mt-lg-4"
            >
              <div
                class="text-lg-h3 text-md-h4 text-sm-h5 text-h5 font-weight-medium align-end"
              >
                ${{ solution($route.params.id).price }}
              </div>
              <div
                class="text-lg-h5 text-md-h6 text-sm-h6 text-h6 font-weight-thin"
              >
                {{ solution($route.params.id).reviews.length }} reviews
              </div>
            </v-row>
            <v-divider></v-divider>
            <v-row
              class="d-flex pa-0 ma-0 align-center justify-space-between mt-lg-4 mt-md-4 mt-sm-2 mt-1"
            >
              <div class="text-lg-h5 text-md-h6 text-sm-h6 text-button">
                Color:
              </div>
              <div class="align-center justify-space-between">
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple--text text--accent-4"
                  mandatory
                >
                  <v-chip
                    :small="$vuetify.breakpoint.smallOnly"
                    :medium="$vuetify.breakpoint.mediumOnly"
                    :large="$vuetify.breakpoint.lgOnly"
                    :x-large="$vuetify.breakpoint.xlOnly"
                    v-for="image in images($route.params.id)"
                    :key="image.color"
                    :value="image.color"
                    :color="image.color"
                  >
                    {{ image.color }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-row>
            <v-row
              class="d-flex pa-0 ma-0 align-center justify-space-between mt-lg-4 mt-md-4 mt-sm-2 mt-1"
            >
              <div class="text-lg-h5 text-md-h6 text-sm-h6 text-button">
                Quantity:
              </div>
              <div class="d-flex d-flex-row align-center pl-0">
                <v-btn
                  :x-small="$vuetify.breakpoint.xsOnly"
                  :small="$vuetify.breakpoint.smallOnly"
                  :medium="$vuetify.breakpoint.mediumOnly"
                  :large="$vuetify.breakpoint.lgOnly"
                  :x-large="$vuetify.breakpoint.xlOnly"
                  fab
                  depressed
                  dark
                  color="purple"
                  @click.stop="
                    removeItem({
                      id: $route.params.id,
                      type: 'solution'
                    })
                  "
                >
                  <v-icon>
                    mdi-minus
                  </v-icon></v-btn
                >
                <div class="mr-8 ml-8 text-lg-h4 text-md-h5 text-sm-h6">
                  {{ itemQuantityInCart($route.params.id) }}
                </div>
                <v-btn
                  :x-small="$vuetify.breakpoint.xsOnly"
                  :small="$vuetify.breakpoint.smallOnly"
                  :medium="$vuetify.breakpoint.mediumOnly"
                  :large="$vuetify.breakpoint.lgOnly"
                  :x-large="$vuetify.breakpoint.xlOnly"
                  fab
                  depressed
                  dark
                  color="purple"
                  @click.stop="
                    addItem({
                      id: $route.params.id,
                      type: 'solution'
                    })
                  "
                >
                  <v-icon>
                    mdi-plus
                  </v-icon></v-btn
                >
              </div>
            </v-row>
          </v-container>
        </v-row>
        <v-row>
          <v-slide-group v-model="model">
            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="300"
                width="550"
                @click="toggle"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-row>
        <div class="ml-lg-15 mr-lg-15 mt-4 mb-4">
          <div class="text-h6 font-weight-medium">
            About this solution
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
      <v-spacer class="d-none d-lg-block"></v-spacer>
      <v-card
        outlined
        class="col-lg-2 mt-4 pa-2 mr-8 rounded-lg d-none d-lg-block"
        style="position: sticky; top: 2vh"
      >
        <div class="text-overline">
          Delivery Address:
        </div>
        <div>
          702 Jacaranda Drive
        </div>
        <div>
          Rusape
        </div>
        <div>
          Zimbabwe
        </div>

        <div class="text-overline mt-4">
          Items:
        </div>
        <div
          class="d-flex flex-row justify-space-between align-center font-weight-bold text-h6 mr-4"
          v-for="item in cart('solution')"
          :key="item.id"
        >
          <div>{{ solution(item.id).title }}</div>
          <div>{{ item.quantity }}</div>
          <div>${{ solution(item.id).price * item.quantity }}</div>
        </div>
        <div class="overline">
          Total:
        </div>
        <div class="text-h4 font-weight-light ma-4">
          ${{ cartTotal(cart("solution")) }}
        </div>
        <v-btn block depressed large rounded dark color="purple">
          Order
          <v-icon right dark>
            mdi-cart
          </v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          outlined
          large
          rounded
          dark
          color="orange"
          class="mt-3"
        >
          Register Device
          <v-icon right dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-card>
      <v-bottom-sheet v-model="sheet" class="d-lg-none">
        <v-sheet
          class="d-flex flex-column justify-center pa-2 pt-8"
          height="90vh"
        >
          <v-btn class="" text color="black" @click="sheet = !sheet" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <div class="col-12">
            <div class="text-overline">
              Delivery Address:
            </div>
            <div>
              702 Jacaranda Drive
            </div>
            <div>
              Rusape
            </div>
            <div>
              Zimbabwe
            </div>

            <div class="text-overline mt-4">
              Items:
            </div>
            <div
              class="d-flex flex-row justify-space-between align-center font-weight-bold text-h6 mr-4"
              v-for="item in cart('solution')"
              :key="item.id"
            >
              <div>{{ solution(item.id).title }}</div>
              <div>{{ item.quantity }}</div>
              <div>${{ solution(item.id).price * item.quantity }}</div>
            </div>

            <div class="overline">
              Total:
            </div>
            <div class="text-h4 font-weight-light ma-4 text-end">
              ${{ cartTotal(cart("solution")) }}
            </div>
            <v-btn block depressed large rounded dark color="purple">
              Order
              <v-icon right dark>
                mdi-cart
              </v-icon>
            </v-btn>
            <v-btn
              block
              depressed
              outlined
              large
              rounded
              dark
              color="orange"
              class="mt-3"
            >
              Register Device
              <v-icon right dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </v-container>
    <v-bottom-navigation
      fixed
      color="white"
      hide-on-scroll
      horizontal
      scroll-target="#scroll-threshold-example"
      scroll-threshold="2000"
      class="d-lg-none d-flex justify-space-between"
    >
      <v-btn disabled text>${{ cartTotal(cart("solution")) }}</v-btn>
      <v-btn @click="sheet = !sheet" icon>
        <v-icon color="purple">mdi-cart</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
        item => (sum += this.solution(item.id).price * item.quantity)
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
      solution: "solutions/getSolution",
      rating: "solutions/getRating",
      about: "solutions/getAbout",
      requirements: "solutions/getRequirements",
      specifications: "solutions/getSpecifications",
      tAndCs: "solutions/getTandCs",
      images: "solutions/getImages",
      cart: "carts/getCart",
      itemQuantityInCart: "carts/getItemQuantity"
    })
  }
});
</script>
