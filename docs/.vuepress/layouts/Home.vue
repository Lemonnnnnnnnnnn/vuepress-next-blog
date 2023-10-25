<template>
    <div class="home-wrapper">
        <FirstView v-show="showFirstView" :frontmatter="frontmatter" :siteData="siteData" @activeFileExplorer="active" />
        <FileExplorer :frontmatter="frontmatter" :ref="el => FileExplorerRef = el" />
    </div>
</template>

<script setup lang="ts">
import FileExplorer from '../components/FileExplorer.vue'
import FirstView from '../components/FirstView.vue';
import { useSiteData, usePageFrontmatter } from "@vuepress/client";
import { useRoute } from "vue-router";
import { nextTick, ref, watch, onMounted } from 'vue'

const siteData = useSiteData()
const frontmatter = usePageFrontmatter();
const route = useRoute()
const FileExplorerRef = ref()
const showFirstView = ref(true)

const active = () => {
    nextTick(() => {
        if (FileExplorerRef.value) {
            FileExplorerRef.value.active()
        }
    })
}

onMounted(() => {
    if (localStorage.getItem("hasViewed") === '1') {
        showFirstView.value = false
        active()
    }
})

watch(() => route.hash, () => {
    if (route.hash === '#file-explorer') {
        active()
    }
})

</script>

<style >
.home-wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
}


</style>