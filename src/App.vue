<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    Footer,
  },
  setup() {
    return {
    };
  },
  mounted() {}
});
</script>

<template>
  <router-view></router-view>
  <Footer />
</template>
