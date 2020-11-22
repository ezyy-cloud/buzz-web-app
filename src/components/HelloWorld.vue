<template>
  <div class="pa-0">
    <v-carousel
      cycle
      v-model="model"
      height="93vh"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(pillar, i) in pillars" :key="i">
        <v-sheet :color="pillar.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              <v-row class="justify-space-around text-right">
                <v-col cols="8">
                  <h1 class="display-2 font-weight-black">
                    {{ pillar.tagline }}
                  </h1>
                </v-col>
              </v-row>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
    model: 0,
    pillars: [
      {
        color: "purple",
        tagline: "We did not choose to think different. We are different"
      },
      {
        color: "yellow darken-2",
        tagline: "We want everyone to share in on Ad Revenue"
      },
      {
        color: "black",
        tagline: "We believe in the Blockchain"
      },
      {
        color: "blue",
        tagline: "We imagine devices that can earn for you"
      }
    ]
  })
});
</script>
