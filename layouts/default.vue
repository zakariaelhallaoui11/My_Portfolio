<template>
    <div>
        <SpeedInsights />
        <Header class=""/>
        <NuxtPage class="cursor-default"/>
    </div>
</template>
<script setup>
    import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
<style>
    /* html {
        scroll-behavior: smooth;
    } */
    body {
    font-family: 'Space Grotesk', sans-serif;
    }
</style>