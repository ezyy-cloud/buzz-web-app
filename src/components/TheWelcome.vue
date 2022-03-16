<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import BuzzISPIcon from './icons/IconBuzzISP.vue'
import BuzzLocationsIcon from './icons/IconBuzzLocations.vue'
import BuzzEyeIcon from './icons/IconBuzzEye.vue'
import BuzzFiIcon from './icons/IconBuzzFi.vue'
import BuzzTVIcon from './icons/IconBuzzTV.vue'
import BuzzAdIcon from './icons/IconBuzzAd.vue'
import BuzzWingIcon from './icons/IconBuzzWing.vue'
import BuzzPosIcon from './icons/IconBuzzPos.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <BuzzFiIcon />
    </template>
    <template #heading>
      <a href="https://buzzfi.ezyy.cloud">BuzzFi</a>
    </template>
      Connect to the internet anytime, anywhere with BuzzFi. We
      have placed hotspots all over to enable you to connect online
      whenever you need to. Become a BuzzFi user and stay connected every moment.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BuzzTVIcon />
    </template>
    <template #heading>
      <a href="https://buzztv.ezyy.cloud">BuzzTV</a>
    </template>
      Monetize your wall space and do much more with BuzzTV. The 
      digital signage display network allows location owners to 
      monetize traffic in their spaces and provide information to 
      enable their customers to navigate and explore their products and
      services.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BuzzAdIcon />
    </template>
    <template #heading>
      <a href="https://buzzad.ezyy.cloud">BuzzAds</a>
    </template>
      BuzzAds are embedded in many of our products and services to 
      ensure your advertising message reaches your target customer 
      in the right way. BuzzTV is our main advertising channel opening 
      up advertising space in multiple locations with large traffic.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BuzzISPIcon />
    </template>
    <template #heading>BuzzISP</template>
      Connectivity has become a the strength of every enterprise.
      BuzzISP ensures you are connected at home, at work and at your 
      your business. BuzzISP provides the right network solution to suit 
      your needs.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BuzzEyeIcon />
    </template>
    <template #heading>BuzzEye</template>
      Security has become a neccessity in all forms. BuzzEye 
      gives you assurance that you can monitor your assets wherever you are.
      BuzzEye provides remote surveillance for your home, office or shop right 
      from your connected device.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BuzzLocationsIcon />
    </template>
    <template #heading>BuzzLocations</template>
      BuzzLocations's Hive solutions instantly connects any public
      location to the internet. Hive bundles most of our cloud solutions to 
      provide your customers with WiFi, entertainment, security and much more.
      BuzzLocations is connected to Gringo Platform enabling you to engage your customers 
      in real time when they are neaar you.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BuzzWingIcon />
    </template>
    <template #heading>BuzzWing</template>
      Get a drone for your next surveillance, photoshoot or exploration trip
      on demand. We have multiple drones suite for various jobs. Our drones all 
      come with a certified pilot to ensure you get the expected results. Fly Buzz 
      and enjoy the view from above stress free.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BuzzPosIcon />
    </template>
    <template #heading>BuzzPOS</template>
      Receiving payments has never been easy like this. BuzzPOS is an intergrated point 
      of sale and inventory system allowing you to manage and sell your inventory stress free. 
      BuzzPOS can be integrated with your website to ensure unified inventory management.
  </WelcomeItem>
</template>
