
<script setup lang="ts">
import gql from 'graphql-tag'
import { ref, watch } from 'vue'
import { useMutation, useQuery } from '@vue/apollo-composable'
import UseUserStore from '../../../store/userStore'
import UseDisplaysStore from './../../../store/displaysStore'

const props = defineProps(['done'])
const userStore = UseUserStore()
const displayStore = UseDisplaysStore()
const user = ref(userStore.user)
const pairingCode = ref('')
const location = ref('')
const name = ref('')
const owner = user.value.id
const done = props.done

const {
    mutate: adoptDisplay,
    loading: adoptDisplayLoading,
    error: adoptDisplayError,
    onDone,
    onError,
} = useMutation(gql`
    mutation adoptDisplay ($input: AdoptDisplayInput!) {
        adoptDisplay(input: $input) {
            id
            pairCode
            owner
            playlist
            location
            revenue {
                amount
                date
            }
            costs {
                amount
                date
            }
            hours {
                hours
                date
            }
            categories
        }
    }
`)

onDone(() => {
    done()
    refetch()
})

onError(error => {
    console.log(error)
})

const { result, refetch } = useQuery(gql`
        query Displays($ownerId: ID!) {
            displays(ownerId: $ownerId) {
                id
                pairCode
                owner
                playlist
                location
                revenue {
                    amount
                    date
                }
                costs {
                    amount
                    date
                }
                hours {
                    hours
                    date
                }
                categories
                name
                status
                group
            }
        }`, () => ({
    ownerId: userStore.user.id,
}))

watch(result, value => {
    displayStore.setDisplays(value.displays)
})
</script>

<template>
    <v-container>
        <v-sheet width="300" class="mx-auto">
            <v-form validate-on="submit" @submit.prevent="">
                <v-text-field v-model="pairingCode" type="input" label="Pairing Code" placeholder="000 000"></v-text-field>
                <v-text-field v-model="name" type="input" label="Set TV name" placeholder="FrontStore TV"></v-text-field>
                <v-text-field v-model="location" type="input" label="Screen Location" placeholder="CBD"></v-text-field>
                <v-btn :disabled="adoptDisplayLoading" @click="adoptDisplay({
                    input: {
                        owner: owner,
                        pairCode: pairingCode,
                        location: location,
                        name: name,
                    }
                })" block class="mt-2">Adopt</v-btn>
                <p v-if="adoptDisplayError">An error occurred: {{ adoptDisplayError }}</p>
            </v-form>
        </v-sheet>
    </v-container>
</template>