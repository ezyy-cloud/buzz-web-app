<script setup lang="ts">
import { computed, ref } from 'vue'
import UseDisplaysStore from './../../store/displaysStore'
import AdoptDisplay from './components/adoptDisplay.vue'
import DisplaySummary from './components/displaySummary.vue'

const dialog = ref(false)
const store = UseDisplaysStore()
const displays = computed(() => store.displays)

</script>

<template>
    <v-sheet class="bg-grey-lighten-3">
        <div class="d-flex flex-column ma-12">
            <v-row class="text-grey-darken-1 font-weight-bold">Dashboard</v-row>
            <v-row class="justify-space-between mb-6">
                <div class="text-h4 font-weight-bold text-grey-darken-1">Displays</div>
                <div>
                    <v-btn class="float-right" @click="dialog = true">Add Screen</v-btn>
                    <v-dialog v-model="dialog" width="auto">
                        <v-card>
                            <AdoptDisplay :done="() => dialog = false" />
                            <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </v-row>
            <div v-if="displays && displays.length > 0">
                <v-row class="d-flex flex-wrap justify-space-between" no-gutters>
                    <v-col cols="12" md="4" v-for="(display, index) in displays" :key="index">
                        <v-sheet class="ma-2" v-ripple
                            @click="$router.push({ name: 'viewDisplay', params: { id: display.id } })">
                            <v-col cols="12" class="">
                                <DisplaySummary :display="display" />
                            </v-col>
                        </v-sheet>
                    </v-col>
                </v-row>
            </div>
            <div v-else>No screen found. Click add screen to get started</div>
        </div>
    </v-sheet>
</template>