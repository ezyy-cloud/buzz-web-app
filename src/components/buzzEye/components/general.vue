
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { useRoute, useRouter } from 'vue-router'
import gql from 'graphql-tag'

const props = defineProps({
    eye: {
        type: Object,
        required: true,
    }
})
const route = useRoute()
const router = useRouter()
const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        phone(value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
        select(value) {
            if (value) return true

            return 'Select an item.'
        },
        checkbox(value) {
            if (value === '1') return true

            return 'Must be checked.'
        },
    },
})
const name = useField('name')
const select = useField('select')
const checkbox = useField('checkbox')
const dialog = ref(false)
const confirmationPairCode = ref('')
const loading = true;
const rules = ref([
    (value: string) => {
        if (value && value == route.params.pairCode) return true
        return 'Please enter the pair code to confirm deletion of the display'
    },
])
const groups = ref([
    'Default',
    'Electronic Shop',
    'Cheers Nite Club',
])

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})

const refetchQueriesAfterDeletion = computed(() => {
    return () => [{
        query: gql`
          query Displays {
                    displays {
                        id
                        pairCode
                        owner
                        playList
                        location
                    }
            }
        `,
        variables: {},
    }]
})

const deletionComplete = () => router.replace({ name: 'ownedDisplays' })


</script>
<template>
    <v-container>
        <form @submit.prevent="submit">
            <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
                label="Display Name"></v-text-field>

            <v-select v-model="select.value.value" :items="groups" :error-messages="select.errorMessage.value"
                :hint="`${select.value.value}`" label="Group"></v-select>

            <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value" value="1"
                label="Power On" type="checkbox"></v-checkbox>

            <v-btn class="me-4 float-right" type="submit">
                save
            </v-btn>
        </form>
                <v-dialog v-model="dialog" width="500">
                    <v-card>
                        <v-container>
                            <v-form @submit.prevent>
                                <v-text-field v-model="confirmationPairCode" :rules="rules"
                                    :label="`Enter the pair code to confirm deletion: ${props.eye.pairCode}`"></v-text-field>
                                <v-btn block :disabled="loading" v-if="confirmationPairCode == props.eye.pairCode"
                                    class="mt-2 text-red" @click="">Delete Display</v-btn>
                            </v-form>
                        </v-container>
                        <v-card-actions>
                            <v-btn color="primary" block @click="dialog = false">Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-btn class="text-red font-weight-black" variant="text" @click="dialog = true">DELETE THIS DISPLAY</v-btn>

    </v-container>
</template>