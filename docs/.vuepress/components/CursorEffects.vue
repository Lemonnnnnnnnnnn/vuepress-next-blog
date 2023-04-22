<template>
    <canvas id="moefy-canvas"></canvas>
</template>

<script setup lang="ts">
import { Popper, PopperShape } from '@moefy-canvas/theme-popper'
import { onMounted } from 'vue';


const popper = new Popper(
    {
        shape: PopperShape.Star,
        size: 1.75,
        numParticles: 10
    },
    { opacity: 1, zIndex: 999 }
)

onMounted(() => {
    const el = document.getElementById('moefy-canvas')
    popper.mount(el as HTMLCanvasElement)
})
</script>

<style scoped></style>