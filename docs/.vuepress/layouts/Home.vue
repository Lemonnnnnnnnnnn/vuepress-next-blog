<template>
    <div>
        <FirstView @activeFileExplorer="active"  />
        <FileExplorer :ref="el => FileExplorerRef = el" />
    </div>
</template>

<script setup lang="ts">
import FileExplorer from '../components/FileExplorer.vue'
import FirstView from '../components/FirstView.vue';
// import { activeFileExplorer } from '../const'
import { ref } from 'vue'

const FileExplorerRef = ref()

const active = () => {
    console.log('active emit');
    FileExplorerRef.value.active()
}


</script>

<style scoped></style>