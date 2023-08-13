
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import { useMutation, useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { supabase } from '../../../supabase'
import useUserStore from '../../../store/userStore'
import UseDisplaysStore from './../../../store/displaysStore'
import { isRequiredArgument } from 'graphql'

const props = defineProps({
    display: {
        type: Object,
        required: true,
    }
})

const schema = toTypedSchema(
    yup.object({
        name: yup.string().max(20).label('Display Name'),
        location: yup.string().required().label('Location'),
        group: yup.string().required().label('Group'),
        status: yup.boolean().required().label('Power On'),
    })
);

const { values, errors, defineComponentBinds, handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: {
        name: props.display.name,
        location: props.display.location,
        group: props.display.group,
        status: props.display.status,
    },
});

const userStore = useUserStore()
const displayStore = UseDisplaysStore()
const name = defineComponentBinds('name')
const location = defineComponentBinds('location')
const group = defineComponentBinds('group')
const status = defineComponentBinds('status')
const user = computed(() => userStore.user)
const dialog = ref(false)
const addGroup = ref(false)
const newGroup = ref('')
const confirmationPairCode = ref('')
const loading = true;
const rules = ref([
    (value: string) => {
        if (value && value == props.display.pairCode) return true
        return 'Please enter the pair code to confirm deletion of the display'
    },
])

const groups = computed(() => userStore.groups)

const update = handleSubmit((values) => {
    // send values to API
    updateDisplay({
        updateNameId: props.display.id,
        name: values.name,
        updateGroupId: props.display.id,
        group: values.group,
        updateStatusId: props.display.id,
        status: values.status,
        input: {
            id: props.display.id,
            location: values.location,
        }
    })
});

const addNewGroup = async () => {
    try {
        const { error } = await supabase
            .from('groups')
            .insert({ user_uid: user.value.id, name: newGroup.value })

        if (error) throw error

    } catch (error) {
        console.log(error)

    } finally {
        userStore.fetchGroups()

        addGroup.value = false
    }
}

const {
    mutate: updateDisplay,
    loading: updateDisplayLoading,
    error: updateDisplayError,
    onDone,
    onError,
} = useMutation(gql`
    mutation updateDisplay(
        $updateNameId: ID!,
        $name: String!,
        $updateGroupId: ID!,
        $group: String!,
        $updateStatusId: ID!,
        $status: Boolean!,
        $input: UpdateLocationInput!,
    ) {
        updateName(id: $updateNameId, name: $name) {
            name
        }
        updateGroup(id: $updateGroupId, group: $group) {
            group
        }
        updateStatus(id: $updateStatusId, status: $status) {
            status
        }
        updateLocation(input: $input) {
            location
        }
    }
`)

onDone(() => {
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
})
)

watch(result, value => {
    displayStore.setDisplays(value.displays)
})
</script>
<template>
    <v-container>
        <form @submit.prevent="update">
            <v-text-field v-bind="name" :counter="20" :error-messages="errors.name" label="Display Name"></v-text-field>

            <v-text-field v-bind="location" :error-messages="errors.location" label="Display Location"></v-text-field>

            <v-select v-bind="group" :items="groups" :error-messages="errors.group" :hint="``" label="Group">
                <template v-slot:prepend-item>
                    <v-list-item title="Add New" @click="addGroup = true"></v-list-item>
                    <v-divider class="mt-2"></v-divider>
                </template>
            </v-select>

            <v-dialog v-model="addGroup" width="300">
                <v-card class="pa-4">
                    <v-text-field v-model="newGroup" label="NewGroup" />
                    <v-card-actions>
                        <v-btn color="error" @click="addGroup = false">Close</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="addNewGroup">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-checkbox v-bind="status" :error-messages="errors.status" type="checkbox" label="Power On"></v-checkbox>

            <v-btn class="me-4 float-right" type="submit" :disabled="updateDisplayLoading">
                save
            </v-btn>
        </form>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-container>
                    <v-form @submit.prevent>
                        <v-text-field v-model="confirmationPairCode" :rules="rules"
                            :label="`Enter the pair code to confirm deletion: ${props.display.pairCode}`"></v-text-field>
                        <v-btn block :disabled="loading" v-if="confirmationPairCode == props.display.pairCode"
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