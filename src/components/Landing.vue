<script lang="ts">
import { defineComponent } from "vue";

function goTo() {
  console.log("Clicked")
}

export default defineComponent({
  components: {
  },
  setup() {
    return {
      goTo,
    };
  },
  mounted() {},
});
</script>

<template>
  <v-container class="galaxy fade-in font-effect-neon">
    <div class="star" @click="goTo()">
      <div class="star-text">BuzzTV</div>
    </div>
    <div class="star" @click="goTo()">
      <div class="star-text">BuzzFi</div>
    </div>
    <div class="star" @click="goTo()">
      <div class="star-text">BuzzAds</div>
    </div>
    <div class="star" @click="goTo()">
      <div class="star-text">BuzzWing</div>
    </div>
    <div class="star" @click="goTo()">
      <div class="star-text">BuzzEye</div>
    </div>
    <div class="star" @click="goTo()">
      <div class="star-text">BuzzISP</div>
    </div>
    <div class="star" @click="goTo()">
      <div class="star-text">BuzzPOS</div>
    </div>
    <div class="star" @click="goTo()">
      <div class="star-text">BuzzHive</div>
    </div>
  </v-container>
</template>

<style scoped>
.galaxy {
  z-index: 1;
}

.fade-in {
  animation: fadeIn 5s;
  opacity: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.star {
  width: 12vh;
  height: 12vh;
  border-radius: 50%;
  position: absolute;
  animation: vibration 20s linear infinite;

  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;

  -webkit-box-shadow: 0 20px 30px rgba(40,36,61, 0.2),
    inset 0px 10px 30px 5px rgba(255,0,255, 1);
  -moz-box-shadow: 0 20px 30px rgba(40,36,61, 0.2),
    inset 0px 10px 30px 5px rgba(255,0,255, 1);
  box-shadow: 0 20px 30px rgba(40,36,61, 0.2),
    inset 0px 10px 30px 5px rgba(255,0,255, 1);
}

.star:after {
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(255,0,255, 0.5) 0%,
    rgba(255,0,255, 0) 70%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(255,0,255, 0.5)),
    color-stop(70%, rgba(255,0,255, 0))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(255,0,255, 0.5) 0%,
    rgba(255,0,255, 0) 70%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(255,0,255, 0.5) 0%,
    rgba(255,0,255, 0) 70%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(255,0,255, 0.5) 0%,
    rgba(255,0,255, 0) 70%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(255,0,255, 0.5) 0%,
    rgba(255,0,255, 0) 70%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow: inset 0 20px 30px rgba(255,0,255, 0.3);
  -moz-box-shadow: inset 0 20px 30px rgba(255,0,255, 0.3);
  box-shadow: inset 0 20px 30px rgba(255,0,255, 0.3);
}

.star-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2vh;
  font-weight: 400;
  color: #ffffff;
  font-family: 'Product Sans black', sans-serif;
}

.star:nth-child(1) {
  top: 65vh;
  left: 70vw;
  animation-delay: 3.3s;
}

.star:nth-child(2) {
  top: 15vh;
  left: 5vw;
  animation-delay: 0.5s;
}

.star:nth-child(3) {
  top: 15vh;
  left: 72vw;
  animation-delay: 2.2s;
}

.star:nth-child(4) {
  top: 65vh;
  left: 10vw;
  animation-delay: 1.7s;
}

.star:nth-child(5) {
  top: 18vh;
  left: 40vw;
  animation-delay: 5.4s;
}

.star:nth-child(6) {
  top: 35vh;
  left: 42vw;
  animation-delay: 2.9s;
}

.star:nth-child(7) {
  top: 40vh;
  left: 68vw;
  animation-delay: 1.4s;
}
.star:nth-child(8) {
  top: 40vh;
  left: 15vw;
  animation-delay: 3.9s;
}

.galaxy:hover .star {
  animation-play-state: paused;
}

.galaxy:hover .star:nth-child(1) {
  transform: translate3d(0px, -4px, 0);
}

.galaxy:hover .star:nth-child(2) {
  transform: translate3d(-4px, 0px, 0);
}

.galaxy:hover .star:nth-child(3) {
  transform: translate3d(4px, -4px, 0);
}

.galaxy:hover .star:nth-child(4) {
  transform: translate3d(-4px, 0px, 0);
}

.galaxy:hover .star:nth-child(5) {
  transform: translate3d(-4px, 4px, 0);
}

@keyframes vibration {
  0% {
    transform: translate3d(0, 0, 0);
  }
  10% {
    transform: translate3d(-8px, 8px, 0);
  }
  20% {
    transform: translate3d(8px, -8px, 0);
  }
  30% {
    transform: translate3d(-8px, 8px, 0);
  }
  40% {
    transform: translate3d(8px, 0, 0);
  }
  50% {
    transform: translate3d(-8px, 0, 0);
  }
  60% {
    transform: translate3d(8px, -8px, 0);
  }
  70% {
    transform: translate3d(0, -8px, 0);
  }
  80% {
    transform: translate3d(-8px, 8px, 0);
  }
  90% {
    transform: translate3d(0, -8px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
