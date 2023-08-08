import { defineStore } from "pinia"
import { computed, ref, watch } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from  '@vue/apollo-composable'
import useUserStore from './userStore'

const useDisplaysStore = defineStore('diplays', () => {
    const userStore = useUserStore()
    const { result, onError } = useQuery(gql`
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

    onError(error => {
        console.log(error)
    })

    watch(result, value => {
        setDisplays(value.displays)
    })
    
    const displays = ref()

    const setDisplays = (data) => {
        displays.value = data
    }

    const getDisplay = (id) => {
        return computed(() => displays.value.find((display) => display.id === id))
    }

    return {
        getDisplay,
        displays,
        setDisplays,
    }
})

export default useDisplaysStore;
