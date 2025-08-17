<template>
  <div>
    <div class="flex items-center justify-between py-6 bg-black text-white">
      <div>
        <!-- control the left margin of your header here -->
        <NuxtLink to="/" class="flex items-center justify-center mobile-s:ml-[1.3rem] sm:ml-[2.5rem] md:ml-[3.5rem] lg:ml-[5rem] xl:ml-[7rem] 2xl:ml-[10rem] 3xl:ml-[12rem] cursor-pointer">
          <p class="font-bold mobile-s:text-[1.3rem] mobile-m:text-[1.5rem] mobile-l:text-[1.8rem] sm:text-[1.8rem] md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.8rem]">Benmalek</p>
        </NuxtLink>
      </div>
      <!-- control the right margin of your header here (desktop) -->
      <div class="hidden lg:flex items-center lg:mr-[5rem] xl:mr-[7rem] 2xl:mr-[10rem] 3xl:mr-[12rem]">
        <a href="/" class="mr-12 hover:text-red-500 text-lg cursor-pointer">Home</a>
        <a href="#About" class="mr-12 hover:text-red-500 text-lg cursor-pointer">About Me</a>
        <a href="#Skills" class="mr-12 hover:text-red-500 text-lg cursor-pointer">Skills</a>
        <a href="#Projects" class="hover:text-red-500 text-lg cursor-pointer">Projects</a>
      </div>
      <!-- control the right margin of your header here (mobile) -->
      <div class="flex items-center justify-end mr-[1.3rem] sm:mr-[2.5rem] md:mr-[3.5rem] lg:hidden">
        <button class="py-[0.2rem] px-1 rounded-lg bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500 mobile-m:hidden" @click="isOpen = !isOpen" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
          <svg
            width="20" height="20"
            viewBox="0 0 100 100"
          >
            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path class="line line2" d="M 20,50 H 80" />
            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
        <button class="py-[0.2rem] px-1 rounded-lg bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500 hidden mobile-m:flex" @click="isOpen = !isOpen" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
          <svg
            width="25" height="25"
            viewBox="0 0 100 100"
          >
            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path class="line line2" d="M 20,50 H 80" />
            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isOpen" class="lg:hidden bg-white text-black py-5 mobile-s:pl-[1.3rem] sm:pl-[4rem] md:pl-[5.5rem]">
      <a href="/" class="block py-1.5 hover:text-red-500 text-[1.1rem]">Home</a>
      <a href="#About" class="block py-1.5 hover:text-red-500 text-[1.1rem]">About Me</a>
      <a href="#Skills" class="block py-1.5 hover:text-red-500 text-[1.1rem]">Skills</a>
      <a href="#Projects" class="block py-1.5 hover:text-red-500 text-[1.1rem]">Projects</a>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const isOpen = ref(false);
;
</script>
<style scoped>
.line {
  fill: none;
  stroke: white;
  stroke-width: 50;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
