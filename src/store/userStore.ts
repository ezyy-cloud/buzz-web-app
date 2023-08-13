import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { supabase } from './../supabase'

const useUserStore = defineStore('user', () => {

  const user = ref({ id: '' })

  const getUser = computed(() => user.value)

  const setUser = async (data) => {
    user.value = data;

    // Fetch the profile from Supabase if user.id exists
    if (data.id) {
      try {
        const { data: profileData, error, status } = await supabase
          .from("profiles")
          .select("username, website, avatar_url")
          .eq("id", data.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        setProfile(profileData);

      } catch (error) {
        // Handle the error
      } finally {
        // Add any additional code or logic to execute after the try-catch block
      }

      // Fetch user's groups
      fetchGroups(data.id)
    }
  }

  const profile = ref({ username: '', avatar_url: '' })

  const getProfile = computed(() => profile.value)

  const setProfile = (data) => { profile.value = data }

  const fetchGroups = async () => {
    try {
      const { data: groups, error, status } = await supabase
        .from("groups")
        .select("name")
        .eq("user_uid", user.value.id)

      if (error && status !== 406) {
        throw error;
      }

      setGroups(groups);

    } catch (error) {
      // Handle the error
    } finally {
      // Add any additional code or logic to execute after the try-catch block
    }
  }

  const setGroups = (fetchedGroups) => {
    groups.value = []
    groups.value.push('Default')
    
    fetchedGroups.forEach(group => {
      groups.value.push(group.name)
    });

    groups.value.sort((a, b) => a.localeCompare(b))
  }

  const groups = ref(['Default'])

  return {
    user,
    getUser,
    setUser,
    profile,
    getProfile,
    setProfile,
    groups,
    fetchGroups,
  }
})

export default useUserStore;