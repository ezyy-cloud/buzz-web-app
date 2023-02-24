<script lang="ts">
import { defineComponent } from "vue";
import Landing from "./components/Landing.vue";
import Footer from "./components/Footer.vue";
import Robo from "./assets/index.png";

export default defineComponent({
  components: {
    Landing,
    Footer,
  },
  setup() {
    return {
      Robo,
    };
  },
  mounted() {
    ((canvas: HTMLCanvasElement, winscreen, raf) => {
      const width = (canvas.width = winscreen.width);
      const height = (canvas.height = winscreen.height);
      const context = canvas.getContext("2d");

      //noinspection JSPotentiallyInvalidConstructorUsage
      let points = Array(256).fill("1");

      if (context != null) {
        const paint = () => {
          context.fillStyle = "rgba(40,36,61,0.1)";
          context.fillRect(0, 0, width, height);
          context.fillStyle = "rgba(255,0,255,1)";
          points = points.map((value, index) => {
            const r = Math.random();
            context.fillText(
              String.fromCharCode(Math.floor(2720 + r * 33)),
              index * 10,
              value
            );
            value += 10;
            return 768 + r * 1e4 < value ? 0 : value;
          });
        };

        const delay = 50;
        let before = 0;

        const loop = (now: number) => {
          if (delay < now - before) {
            paint();
            before = now;
          }
          raf(loop);
        };

        loop(before);
      }
    })(
      <HTMLCanvasElement>this.$refs.matrix,
      window.screen,
      window.requestAnimationFrame
    );
  },
});
</script>

<template>
  <canvas id="matrix" ref="matrix" />
  <Landing />
  <v-img :src="Robo" alt="" class="robo" />
  <Footer />
</template>

<style scoped>
canvas {
  width: 100vw;
  height: 100vh;
}
@media (min-width: 100px) {
  .robo {
    width: 70%;
    bottom: 0;
    position: absolute;
    left: 0;
    transform: translate(8vh, 0);
  }
}
@media (min-width: 500px) {
  .robo {
    width: 40%;
    bottom: 0;
    position: absolute;
    left: 0;
    transform: translate(35vh, 0);
  }
}
@media (min-width: 1000px) {
  .robo {
    width: 30%;
    bottom: 0;
    position: absolute;
    left: 0;
    transform: translate(60vh, 0);
  }
}
</style>
