<script setup lang="ts">
import DeviceSummary from './components/deviceSummary.vue'
import DeviceFinancials from './components/deviceFinancials.vue'
import DeviceMap from './components/deviceMap.vue'

const devices = [
    {
        name: "BuzzTV",
        type: "Displays",
        icon: "mdi-television",
        number: 13,
        active: 11,
        revenue: [216.00, 230, 340, 480],
        costs: [214, 120, 300, 200],
        users: 20,
        locations: []
    },
    {
        name: "BuzzFi",
        type: "Nodes",
        icon: "mdi-wifi",
        number: 23,
        active: 18,
        revenue: [216.00, 230, 340, 480],
        costs: [214, 120, 300, 200],
        users: 15,
        locations: []
    },
    {
        name: "BuzzEye",
        type: "Cameras",
        icon: "mdi-cctv",
        number: 14,
        active: 10,
        revenue: [216.00, 230, 340, 480],
        costs: [214, 120, 300, 200],
        users: 10,
        locations: []
    },
]
</script>
<template>
    <v-sheet class="bg-grey-lighten-3">
        <div class="d-flex flex-column ma-12">
            <v-row class="text-grey-darken-1 font-weight-bold">Dashboard</v-row>
            <v-row class="text-h4 font-weight-bold mb-4 text-grey-darken-1">Overview</v-row>
            <div>
                <v-row class="d-flex flex-wrap justify-space-between">
                    <v-col cols="12" md="4" v-for="(device, index) in devices" :key="index">
                        <DeviceSummary :icon="device.icon" :number-of-devices="device.number"
                            :active-devices="device.active" :device-name="device.name" :type="device.type"
                            :number-of-users="device.users" />

                        <DeviceFinancials :name="device.name" :revenue="device.revenue" :costs="device.costs" />
                    </v-col>
                </v-row>
                <v-row class="d-flex flex-wrap">
                    <v-col cols="12">
                        <v-theme-provider theme="light">
                            <DeviceMap />
                        </v-theme-provider>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-sheet>
</template>
