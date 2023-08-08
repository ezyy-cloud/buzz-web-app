<template>
    <v-card elevation="0">
        <v-card-title>Locations</v-card-title>
        <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 100%; height: 300px">
            <GMapCluster :minimumClusterSize="2" :zoomOnClick="true">
                <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center = m.position"
                    :icon='{
                        url: "https://image.flaticon.com/teams/slug/google.jpg",
                        scaledSize: { width: 77, height: 77 },
                        labelOrigin: { x: 16, y: -10 }
                    }' :clickable="true" />
            </GMapCluster>
        </GMapMap>
    </v-card>
</template>
  
<script setup lang="ts">
let center = { lat: 51.093048, lng: 6.842120 }
const markers = [
    {
        position: { lat: 51.093048, lng: 6.842120 },
    },
]
</script>