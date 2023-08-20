<template>
    <main>
        <div id="docsearch"></div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';

const trigger = async () => {
    const { default: docsearch } = await import('@docsearch/js')

    docsearch({
        container: '#docsearch',
        appId: 'YVXEGMS61I',
        indexName: 'lincy-soul',
        apiKey: '5137fc76e800b649fa2df2151513d3f6',
    });

    setTimeout(() => {
        const searchRef = document.querySelector("#docsearch button")
        searchRef.click()
    }, 300)
}

onMounted(() => {
    trigger()
})

</script>

<style lang="scss" scoped>
main {
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
}
</style>