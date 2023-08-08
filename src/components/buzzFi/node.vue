
<script setup lang="ts">
import { ref } from 'vue'
import General from './components/general.vue'

const node = {
    id: '234lnk543',
    pairCode: '23442',
};
</script>
<template>
    <v-container>
        <div class="d-flex flex-row justify-center">
            <v-col cols="6">
                <v-container class="pa-0">
                    <div class="text-h4 font-weight-black">Node Settings</div>
                    <v-divider />
                    <General :node="node" />
                </v-container>
            </v-col>
        </div>
    </v-container>
</template>