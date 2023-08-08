<template>
    <div class="mb-4">
        <v-row>

            <div class="avatar-wrapper" @click="openFiles">
                <v-avatar size="200px">
                    <v-img class="profile-pic" cover :src="src" alt="Avatar" />
                </v-avatar>
                <div class="upload-button">
                    <v-icon class="upload-icon" color="secondary" icon="mdi-arrow-up-bold-circle"></v-icon>
                </div>
                <input ref="fileUpload" type="file" accept="image/*" @change="uploadAvatar" :disabled="uploading" />
            </div>
        </v-row>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from 'vue'
import { supabase } from './../../supabase'

const prop = defineProps(['path', 'size'])
const { path, size } = toRefs(prop)

const emit = defineEmits(['upload', 'update:path'])
const uploading = ref(false)
const src = ref('')
const files = ref()
const fileUpload = ref()

const openFiles = () => { if (fileUpload.value) fileUpload.value.click() }

const downloadImage = async () => {
    try {
        const { data, error } = await supabase.storage.from('avatars').download(path?.value)
        if (error) throw error
        src.value = URL.createObjectURL(data)
    } catch (error) {
        console.error('Error downloading image: ', error)
    }
}

const uploadAvatar = async (evt) => {
    files.value = evt.target.files
    try {
        uploading.value = true
        if (!files.value || files.value.length === 0) {
            throw new Error('You must select an image to upload.')
        }

        const file = files.value[0]
        const fileExt = file.name.split('.').pop()
        const filePath = `${Math.random()}.${fileExt}`

        let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

        if (uploadError) throw uploadError
        
        emit('update:path', filePath)
        
        emit('upload')
    
    } catch (error) {
        alert(error)
    } finally {
        uploading.value = false
    }
}

watch(path!, () => {
    if (path?.value) downloadImage()
})

onMounted(() => {
    if (path?.value) downloadImage()
})
</script>
<style>
.avatar-wrapper {
    margin: 50px auto;
    display: inline-block;
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    transition: all .3s ease;
    background-color: #EDEDED;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    &:hover .profile-pic {
        opacity: .5;
    }

    .profile-pic {
        transition: all .3s ease;
        object-fit: cover;

        &:after {
            position: absolute;
            font-size: 100px;
            top: 50px;
            left: 50px;
            text-align: center;
        }
    }

    .upload-button {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        .upload-icon {
            position: absolute;
            font-size: 100px;
            top: 50px;
            left: 50px;
            opacity: 0;
            text-align: center;
            transition: all .3s ease;
        }

        &:hover .upload-icon {
            opacity: .9;
        }
    }
}
</style>