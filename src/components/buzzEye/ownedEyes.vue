<script setup lang="ts">
import { computed, ref } from 'vue';
import AdoptEye from './components/adoptEye.vue';
import EyeSummary from './components/eyeSummary.vue';
const dialog = ref(false);
const eyes = [
    {
        id: '234lnk543',
        pairCode: '23442',
        revenue: [216.00, 230, 340, 480],
        costs: [214, 120, 300, 200],
        hours: [2, 4, 7, 3]
    },
    {
        id: '234lnk543',
        pairCode: '23442',
        revenue: [216.00, 230, 340, 480],
        costs: [214, 120, 300, 200],
        hours: [2, 4, 7, 3]
    },
    {
        id: '234lnk543',
        pairCode: '23442',
        revenue: [216.00, 230, 340, 480],
        costs: [214, 120, 300, 200],
        hours: [2, 4, 7, 3]
    },
]
</script>

<template>
    <v-sheet class="bg-grey-lighten-3">
        <div class="d-flex flex-column ma-12">
            <v-row class="text-grey-darken-1 font-weight-bold">Dashboard</v-row>
            <v-row class="justify-space-between mb-6">
                <div class="text-h4 font-weight-bold text-grey-darken-1">Eyes</div>
                <div>
                    <v-btn class="float-right" @click="dialog = true">Add Eye</v-btn>
                    <v-dialog v-model="dialog" width="auto">
                        <v-card>
                            <AdoptEye :done="() => dialog = false" />
                            <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </v-row>
            <div>
                <v-row class="d-flex flex-wrap justify-space-between" no-gutters>
                    <v-col cols="12" md="4" v-for="(eye, index) in eyes" :key="index">
                        <v-sheet class="ma-2" v-ripple
                        @click="$router.push({ name: 'viewEye', params: { pairCode: eye.pairCode, id: eye.id } })">
                            <v-col cols="12" class="">
                                <EyeSummary :costs="eye.costs" :revenue="eye.revenue"
                                    :name="eye.pairCode" :hours="eye.hours" />
                            </v-col>
                        </v-sheet>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-sheet>
</template>