<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue'
import useUserStore from '../../../store/userStore'
import UseDisplaysStore from './../../../store/displaysStore'
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { supabase } from '../../../supabase';


const categories = ref([{}])

onBeforeMount(async () => {
  const { data, error } = await supabase
  .from('content_categories')
  .select()

  categories.value = []

  data?.forEach(category => {
    const cat = {
      name: category.name,
      value: category.value,
    }

    categories.value.push(cat)
  })

  console.log(error)
})

const props = defineProps({
    display: {
        type: Object,
        required: true,
    }
})
const userStore = useUserStore()
const displayStore = UseDisplaysStore()
const user = computed(() => userStore.user)
const selectedCategories = ref(props.display.categories)
const acceptsAllCategory = () =>
  selectedCategories.value.length === categories.value.length
const acceptsSomeCategory = () =>
  selectedCategories.value.length > 0
const title = () => {
  if (acceptsAllCategory()) return 'We will deliver all content types to this screen'

  if (acceptsSomeCategory()) return 'We will deliver content on:'

  return 'We will not deliver any content to your screen.'
}
const subtitle = () => {
  if (acceptsAllCategory()) return undefined

  if (acceptsSomeCategory()) return selectedCategories.value.toString()

  return 'Earn money by sharing your display with others'
}
const toggle = () => {
  if (acceptsAllCategory())
    selectedCategories.value = []
  else
    selectedCategories.value = categories.value

}
const saveError = ref('')
const {
  mutate: updateCategories,
  loading: updateCategoriesLoading,
  error: updateCategoriesError,
  onDone,
  onError,
} = useMutation(gql`
    mutation UpdateCategories($input: UpdateCategoriesInput!) {
      updateCategories(input: $input) {
        categories
      }
    }
`)

onDone(() => {
  refetch()
})

onError(error => {
  saveError.value = error.message
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
  <v-container fluid>
    <v-select v-model="selectedCategories" :items="categories" item-title="name" item-value="value" label="Permitted Content" multiple>
      <template v-slot:prepend-item>
        <v-list-item title="Select All" @click="toggle">
          <template v-slot:prepend>
            <v-checkbox-btn :color="acceptsSomeCategory() ? 'indigo-darken-4' : undefined"
              :indeterminate="acceptsSomeCategory() && !acceptsAllCategory()"
              :model-value="acceptsSomeCategory"></v-checkbox-btn>
          </template>
        </v-list-item>

        <v-divider class="mt-2"></v-divider>
      </template>

      <template v-slot:append-item>
        <v-divider class="mb-2"></v-divider>

        <v-list-item :subtitle="subtitle()" :title="title()" disabled>
          <template v-slot:prepend>
            <v-avatar icon="mdi-advertisements" color="primary">
              mdi-advertisements
            </v-avatar>
          </template>
        </v-list-item>
      </template>
    </v-select>
    <v-card class="mb-12" color="surface-variant" variant="tonal">
      <v-card-text class="text-medium-emphasis text-caption">
        To avoid conflict of interest or displaying inappropriate content to your audience please let us know which
        content we can place on your screen. Our content includes product and service advetisements. Any content placed on
        your screen will be compensated according to our communnity guidelines.
      </v-card-text>
    </v-card>
    <v-spacer></v-spacer>
    <v-row class="justify-end">
      <v-btn color="primary" @click="updateCategories({
        input: {
          categories: selectedCategories,
          id: props.display.id
        }
      })" :disabled="updateCategoriesLoading">Save</v-btn>
    </v-row>
    <v-row v-if="updateCategoriesError"><p>{{ saveError }}</p></v-row>
  </v-container>
</template>
<style scoped>
.v-text-field .v-input__details {
  display: none;
}
</style>