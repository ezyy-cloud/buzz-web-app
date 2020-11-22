<template>
  <v-container class="col-lg-12">
    <v-row>
      <v-col cols="2" class="d-none d-lg-block">
        <v-card tile style="position: sticky; top: 2vh" height="">
          <v-list shaped>
            <v-subheader>EXPLORE SERVICES</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item
                :to="{ name: 'service', params: { id: item.id } }"
                v-for="(item, i) in services"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col class="col-lg-10 col-md-12">
        <v-sheet class="pa-0">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  data: () => ({
    selectedItem: null
  }),
  computed: {
    ...mapGetters({
      services: "services/getServices"
    })
  }
});
</script>
