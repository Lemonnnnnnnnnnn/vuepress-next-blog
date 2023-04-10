<template>
    <div>
        <FirstView @activeFileExplorer="active" />
        <FileExplorer :ref="el => FileExplorerRef = el" />
    </div>
</template>

<script setup lang="ts">
import FileExplorer from '../components/FileExplorer.vue'
import FirstView from '../components/FirstView.vue';
// import { activeFileExplorer } from '../const'
import { useRoute } from "vue-router";
import { nextTick, ref } from 'vue'
import { throttle , getScrollTop} from '../utils'

const router = useRoute()
const FileExplorerRef = ref()

const active = () => {
    nextTick(() => {
        if(FileExplorerRef.value){
            FileExplorerRef.value.active()
        }
    })
}

if (router.hash === '#file-explorer') {
    active()
}

window.addEventListener(
    'scroll',
    throttle(() => {
        if (window.scrollY > 500) {
            active()
        }
    }, 300)
)



</script>

<style scoped></style>