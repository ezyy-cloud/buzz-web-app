<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from './../../supabase'
import Logo from './../../assets/logo.png';

const loading = ref(false)
const errorText = ref(false)
const errorMessage = ref('')
const email = ref('')
const password = ref('')

const handleLogin = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })
        if (error) throw error
    } catch (error) {
        if (error instanceof Error) {
            errorMessage.value = error.message
            errorText.value = true
        }
    } finally {
        loading.value = false
        errorText.value = false
    }
}

const handleSignUp = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signUp(
            {
                email: email.value,
                password: password.value,
                options: {}
            }
        )
        if (error) throw error
    } catch (error) {
        if (error instanceof Error) {
            errorMessage.value = error.message
            errorText.value = true
        }
    } finally {
        loading.value = false
        errorText.value = false
    }
}

</script>

<template>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
        <v-col sm="6" lg="4">
            <v-row class="pa-6 mb-12">
                <v-img @click="$router.push({ name: 'landing' })" :src="Logo" alt="logo" height="100" />
            </v-row>
            <p class="text-h3 font-weight-bold ma-4 text-center">Sign in</p>
            <p v-if="loading" class="text-center ma-4">Please wait a moment</p>
            <p v-if="errorText" class="text-center ma-4">{{ errorMessage }}</p>
            <v-row>
                <v-text-field class="inputField" required type="email" placeholder="Your email" v-model="email" />
            </v-row>
            <v-row>
                <v-text-field class="inputField" required type="password" placeholder="Your password" v-model="password" />
            </v-row>
            <v-row class="d-flex justify-space-between">
                <v-btn :disabled="loading" @click="handleSignUp" class="bg-primary">Sign Up</v-btn>
                <v-btn :disabled="loading" @click="handleLogin" class="bg-primary">Login</v-btn>
            </v-row>
        </v-col>
    </v-container>
</template>