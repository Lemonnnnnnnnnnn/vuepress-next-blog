<template>
    <div class="home-wrapper">
        <FirstView :frontmatter="frontmatter" :siteData="siteData" @activeFileExplorer="active" />
        <FileExplorer :frontmatter="frontmatter" :ref="el => FileExplorerRef = el" />
    </div>
</template>

<script setup lang="ts">
import FileExplorer from '../components/FileExplorer.vue'
import FirstView from '../components/FirstView.vue';
import { useSiteData, usePageFrontmatter } from "@vuepress/client";
import { useRoute } from "vue-router";
import { nextTick, ref, watch } from 'vue'

const siteData = useSiteData()
const frontmatter = usePageFrontmatter();
const route = useRoute()
const FileExplorerRef = ref()

const active = () => {
    nextTick(() => {
        if (FileExplorerRef.value) {
            FileExplorerRef.value.active()
        }
    })
}

if (localStorage.getItem("hasViewed") === '1') {
    active()
}

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

:root::-webkit-scrollbar {
    display: none;
}
</style>