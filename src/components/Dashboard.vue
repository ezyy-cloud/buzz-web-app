<script lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
export default {
    setup() {
        const theme = useTheme()
        let drawer = ref(true)
        let rail = ref(true)

        function toggleRail() {
            rail.value = !rail.value
        }

        return {
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
            drawer,
            items: [
                { title: 'Overview', icon: 'mdi-home-analytics' },
                { title: 'BuzzTV', icon: 'mdi-television' },
                { title: 'BuzzFi', icon: 'mdi-wifi' },
                { title: 'BuzzEye', icon: 'mdi-cctv' },
            ],
            rail,
            toggleRail,
        }
    }
}
</script>
<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent>
                <v-list-item title="Kloud Coder" nav>
                    <template v-slot:prepend>
                        <v-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/85.jpg" :width="50"
                                @click="toggleRail"></v-img>
                        </v-avatar>

                    </template>
                    <template v-slot:append>
                        <v-btn variant="text" icon="mdi-cog" @click="() => {}"></v-btn>
                    </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item @click="$router.push({name: 'overview'})" prepend-icon="mdi-home-analytics" title="Overview" value="overview"></v-list-item>
                    <v-list-item @click="$router.push({name: 'buzztv'})" prepend-icon="mdi-television" title="BuzzTV" value="buzzTv"></v-list-item>
                    <v-list-item @click="$router.push({name: 'buzzfi'})" prepend-icon="mdi-wifi" title="BuzzFi" value="buzzFi"></v-list-item>
                    <v-list-item @click="$router.push({name: 'buzzeye'})" prepend-icon="mdi-cctv" title="BuzzEye" value="buzzCctv"></v-list-item>
                    <v-list-item @click.stop="toggleTheme" prepend-icon="mdi-brightness-6" title="Switch Theme"
                        value="toggleTheme"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main>
                <router-view></router-view>
            </v-main>
        </v-layout>
    </v-card>
</template>