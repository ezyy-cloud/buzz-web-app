<script setup>
import { ref, computed } from 'vue'
import { supabase } from './../../supabase'
import Avatar from './Avatar.vue'
import useUserStore from './../../store/userStore';

const props = defineProps(['session'])
const store = useUserStore()
const loading = ref(false)
const username = computed(() => store.profile.username)
const email = computed(() => store.user.email)
const website = computed(() => store.profile.website)
const avatar_url = computed(() => store.profile.avatar_url)
const userId = store.user.id

async function updateProfile() {
    try {
        loading.value = true

        const updates = {
            id: userId,
            username: username.value,
            website: website.value,
            avatar_url: avatar_url.value,
            updated_at: new Date(),
        }

        let { error, data } = await supabase.from('profiles').upsert(updates).select()

        if (error) throw error

        if(data) {store.setProfile({...data[0]})}

    } catch (error) {
        alert(error.message)

    } finally {
        loading.value = false

    }
}
</script>
<template>
    <v-sheet>
        <v-container class="d-flex justify-center align-center" style="height: 100vh;">
            <v-col sm="6" lg="4">
                <v-form @submit.prevent="updateProfile">
                    <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />
                    <v-row>
                        <v-text-field label="email" type="text" v-model="email" disabled />
                    </v-row>
                    <v-row>
                        <v-text-field label="username" type="text" v-model="username" />
                    </v-row>
                    <v-row>
                        <v-text-field label="website" type="url" v-model="website" />
                    </v-row>

                    <v-row class="d-flex">
                        <v-btn type="submit" block :disabled="loading">{{ loading ? 'Loading ...' :
                            'Update'
                        }}</v-btn>
                    </v-row>

                </v-form>
            </v-col>
        </v-container>
    </v-sheet>
</template>
../../userStore