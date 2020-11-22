<template>
  <v-container class="col-8">
    <v-container class="text-h2">Buzz Platform</v-container>
    <v-container>
      <p>
        Buzz is made up of two main components, a
        <router-link :to="{ name: 'network' }">network</router-link>
        and a platform. The platform is the software side of Buzz. It is built
        up of software modules which provide Buzz with logic for a response to
        various stimuli effected on its interaction points with the pysical
        world. The software modules provide for data capturing, processing and
        deriving actionable intelligence from it. They also provide user
        consoles which allow Buzz device owners access to their devices.
      </p>

      <p>
        To ensure integrity on the platform and to facilitate value exchange
        across network devices, Buzz utilizes the blockchain technology relying
        on Bitcoin
      </p>
    </v-container>
  </v-container>
</template>
