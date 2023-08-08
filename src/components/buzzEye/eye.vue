
<script setup lang="ts">
import { ref } from 'vue'
import General from './components/general.vue'

const tabV = ref('option-1')
const eye =
{
    id: '234lnk543',
    pairCode: '23442',
};
</script>
<template>
    <v-container>
        <div class="d-flex flex-row justify-center">
            <v-col cols="6">
                <v-container class="pa-0">
                    <div class="text-h4 font-weight-black">Eye Settings</div>
                    <v-divider />
                    <General :eye="eye" />
                </v-container>
            </v-col>
        </div>
    </v-container>
</template>