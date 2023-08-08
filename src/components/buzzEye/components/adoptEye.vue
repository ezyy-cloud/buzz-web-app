
<template>
    <ApolloMutation  
        :mutation="gql => gql`
            mutation Mutation($input: AdoptDisplayInput!) {
                adoptDisplay(input: $input) {
                    pairCode
                    owner
                    playList {
                        format
                        url
                        id
                    }
                }
        }`"
        :variables="{ input: { owner: owner, pairCode: pairing_code } }"
        :refetchQueries="refetchQueriesAfterAdoption"
        @done="done"
    >
        <template v-slot="{ mutate, loading, error }">
            <v-container>
                <v-sheet width="300" class="mx-auto">
                    <v-form validate-on="submit" @submit.prevent="">
                        <v-text-field v-model="pairing_code" type="input" label="Pairing Code" placeholder="000 000"></v-text-field>
                        <v-btn :disabled="loading" @click="mutate()" block class="mt-2">Adopt</v-btn>
                        <p v-if="error">An error occurred: {{ error }}</p>
                    </v-form>
                </v-sheet>
            </v-container>
        </template>
    </ApolloMutation>
</template>

<script setup lang="ts">
import gql from 'graphql-tag'
import { computed, ref } from 'vue'

const props = defineProps(['done'])

const pairing_code = ref('')
const owner = 'Schneider'

const done = props.done
const refetchQueriesAfterAdoption = computed( () => {
      return () =>[{
        query: gql`
          query Displays {
            displays {
                    pairCode
                    owner
                    playList {
                        format
                        url
                        id
                    }
                }
            }
        `,
        variables: {},
      }]
    })

</script>