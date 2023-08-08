<script setup lang="ts">
import { supabase } from '../../supabase'
import useUserStore from './../../store/userStore';
import { onMounted, ref } from 'vue'
import Avatar from './Avatar.vue'

const store = useUserStore()
const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')
const dialog = ref(true)
const session = ref()

onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
        session.value = data.session
    })

    supabase.auth.onAuthStateChange((_, _session) => {
        session.value = _session
    })
})

async function updateProfile() {
    try {
        loading.value = true
        const { user } = session.value

        const updates = {
            id: user?.id,
            username: username.value,
            website: website.value,
            avatar_url: avatar_url.value,
            updated_at: new Date(),
        }


        let { error, data } = await supabase.from('profiles').upsert(updates).select()

        if (error) throw error

        if(data) {store.setProfile({...data[0]})}

        dialog.value = false

    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
}
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
}
</style>
<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Set up your profile</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn variant="text" @click="updateProfile">
                            Save
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-container class="d-flex justify-center align-center" style="height: 100vh;">
                    <v-col sm="6" lg="4">
                        <v-container>
                            <v-column>
                                <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />
                            </v-column>
                            <v-row>
                                <v-text-field class="inputField" required type="text" placeholder="Choose a username"
                                    v-model="username" />
                            </v-row>
                        </v-container>
                    </v-col>
                </v-container>
            </v-card>
        </v-dialog>
    </v-row>
</template>../../userStore