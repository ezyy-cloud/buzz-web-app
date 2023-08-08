<script setup lang="ts">
import { supabase } from './../../supabase'
import { ref, computed, watch, onMounted, onBeforeMount } from 'vue'
import CreateProfile from './../account/CreateProfile.vue'
import useUserStore from './../../store/userStore'
import DropDownMenu from './Menu.vue'

const store = useUserStore()
let drawer = ref(true)
let rail = ref(true)
const usernameSet = ref(true)
const username = computed(() => store.profile.username)
const avatar = computed(() => store.profile.avatar_url)
const avatarSrc = ref('')
const toggleRail = () => { rail.value = !rail.value }

const downloadImage = async () => {
    if (avatar.value)
        try {
            const { data, error } = await supabase.storage.from('avatars').download(avatar.value)
            if (error) throw error
            avatarSrc.value = URL.createObjectURL(data)
        } catch (error) {
            console.error('Error downloading image: ', error)
        }
}

onBeforeMount(() => {
    downloadImage()
}),

    watch(avatar, () => {
        if (avatar?.value) downloadImage()
    })

</script>
<template>
    <v-layout class="bg-grey-lighten-3">
        <create-profile v-if="!usernameSet" />
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent>
            <v-list-item :title="username" nav>
                <template v-slot:prepend>
                    <v-avatar><v-img cover :src="avatarSrc" @click="toggleRail"></v-img></v-avatar>
                </template>
                <template v-slot:append>
                    <DropDownMenu />
                </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item @click="$router.push({ name: 'overview' })" prepend-icon="mdi-home-analytics" title="Overview"
                    value="overview"></v-list-item>
                <v-list-item @click="$router.push({ name: 'ownedDisplays' })" prepend-icon="mdi-television" title="BuzzTV"
                    value="buzzTv"></v-list-item>
                <v-list-item @click="$router.push({ name: 'ownedNodes' })" prepend-icon="mdi-wifi" title="BuzzFi"
                    value="buzzFi"></v-list-item>
                <v-list-item @click="$router.push({ name: 'ownedEyes' })" prepend-icon="mdi-cctv" title="BuzzEye"
                    value="buzzCctv"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>../../userStore