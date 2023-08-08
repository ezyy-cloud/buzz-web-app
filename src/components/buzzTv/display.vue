
<script setup lang="ts">
import { ref } from 'vue'
import UseDisplaysStore from './../../store/displaysStore'
import General from './components/general.vue'
import Content from './components/content.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = UseDisplaysStore()
const tabV = ref('option-1')
const display = ref(store.getDisplay(route.params.id))

</script>
<template>
        <v-container>
            <div class="d-flex flex-row">
                <v-col cols="3">
                    <v-tabs v-model="tabV" direction="vertical" color="primary">
                        <v-tab value="option-1">
                            <v-icon>
                                mdi-cog
                            </v-icon>
                            General
                        </v-tab>
                        <v-divider />
                        <v-tab value="option-2">
                            <v-icon>
                                mdi-play
                            </v-icon>
                            Content
                        </v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="8">
                    <v-window v-model="tabV" class="v-col" cols="8">
                        <v-window-item value="option-1">
                            <v-container class="pa-0">
                                <div class="text-h4 font-weight-black">General</div>
                                <v-divider />
                                <General :display="display" />
                            </v-container>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-container class="pa-0">
                                <div class="text-h4 font-weight-black">Content</div>
                                <v-divider />
                                <Content :display="display" />
                            </v-container>
                        </v-window-item>
                    </v-window>
                </v-col>
            </div>
        </v-container>
</template>