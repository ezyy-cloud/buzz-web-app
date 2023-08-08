<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify'
import { supabase } from './../../supabase'

const theme = useTheme()
const darkMode = ref(theme.global.current.value.dark)
const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    darkMode.value = !darkMode.value
}
// Menu
const menu = ref(false)
const loading = ref(false)


async function signOut() {
    try {

        loading.value = true

        let { error } = await supabase.auth.signOut()

        if (error) throw error

    } catch (error) {
        alert(error)

    } finally {
        loading.value = false

    }
}
</script>
<template>
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
        <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" icon="mdi-arrow-down-drop-circle"></v-btn>
        </template>

        <v-card min-width="300">
            <v-list>
                <v-list-item prepend-icon="mdi-account-circle" @click="$router.push({ name: 'profile' })">
                    Profile
                </v-list-item>

                <v-list-item prepend-icon="mdi-cash" @click="$router.push({ name: 'monetization' })">
                    Monetization
                </v-list-item>

                <v-list-item prepend-icon="mdi-brightness-6">
                    <template v-slot:append>
                        <v-switch color="primary" :model-value="darkMode" @update:model-value="toggleTheme"
                            hide-details></v-switch>
                    </template>
                    Dark Mode
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item @click="signOut" prepend-icon="mdi-exit-to-app">
                    Log Out
                </v-list-item>

            </v-list>
        </v-card>
    </v-menu>
</template>