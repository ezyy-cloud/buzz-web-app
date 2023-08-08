<script setup lang="ts">
const props = defineProps({
    icon: { type: String, required: true },
    numberOfDevices: { type: Number, required: true },
    deviceName: { type: String, required: true },
    type: { type: String, required: true },
    activeDevices: { type: Number, required: true },
    numberOfUsers: { type: Number, required: true },
})
</script>
<template>
    <v-card class="d-flex flex-column align-center" elevation="0">
        <v-col cols="12">
            <v-row class="pa-4">
                <v-icon color="purple-darken-3" :icon="props.icon" size="30"></v-icon>
                <div class="text-h6 ml-4 font-weight-black">{{ props.deviceName }}</div>
            </v-row>
        </v-col>

        <v-col cols="12">
            <v-row align="center" class="text-center" no-gutters>
                <v-col cols="6">
                    <v-col class="text-h3 font-weight-black" cols="12">{{ props.numberOfDevices.toString() }}</v-col>
                    <v-col class="text-overline" cols="12">{{ props.type }}</v-col>
                </v-col>
                <v-col cols="6">
                    <v-col class="text-h3 font-weight-black" cols="12">{{ props.numberOfUsers.toString() }}</v-col>
                    <v-col class="text-overline" cols="12">Users</v-col>
                </v-col>
            </v-row>
        </v-col>
        <v-col class="ma-0 pa-0"><v-divider></v-divider></v-col>

        <v-col>
            <v-row class="d-flex align-center justify-space-between ma-1">
                <v-col cols="5" class="text-caption ma-1">
                    <v-row>
                        <div class="text-grey">Active&nbsp;{{ props.type }}:</div>
                        <div class="font-weight-bold">&nbsp;{{ props.activeDevices.toString() }}</div>
                    </v-row>
                    <v-row><v-progress-linear model-value="80" color="green" rounded striped></v-progress-linear></v-row>
                </v-col>
                <v-col cols="5" class="text-caption ma-1">
                    <v-row>
                        <div class="text-grey">Inactive&nbsp;{{ props.type }}:</div>
                        <div class="font-weight-bold">&nbsp;{{ (props.numberOfDevices - props.activeDevices).toString() }}
                        </div>
                    </v-row>
                    <v-row><v-progress-linear model-value="20" color="orange" rounded striped></v-progress-linear></v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-card>
</template>