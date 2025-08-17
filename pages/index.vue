<template>
    <div>
        <Intro id="Home" />
        <Me id="About" />
        <Skills id="Skills" />
        <Projects id="Projects" />
        <Contact_Me id="Contact_Me" />
    </div>
</template>
<script setup>
    import Intro from '~/components/home/Intro.vue'
    import Me from '~/components/home/Me.vue'
    import Skills from '~/components/home/Skills.vue'
    import Projects from '~/components/home/Projects.vue'
    import Contact_Me from '~/components/home/Contact_Me.vue'
</script>
