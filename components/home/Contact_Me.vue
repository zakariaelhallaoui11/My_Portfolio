<template>
    <div class="bg-black text-white py-12">
        <div class="flex items-center mobile-s:mx-[1.3rem] sm:mx-[2.5rem] md:mx-[3.5rem] lg:mx-[5rem] xl:mx-[7rem] 2xl:mx-[10rem] 3xl:mx-[12rem]">
            <svg
                width="33" height="6" 
                viewBox="0 0 33 6" fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M28 3.5L33 5.88675V0.113249L28 2.5V3.5ZM0 3.5H28.5V2.5H0V3.5Z"
                    fill="red" fill-opacity="0.4"
                />
            </svg>
            <p class="text-lg lg:text-xl xl:text-xl font-[700] ml-3">
                Where You Can Find Me
            </p>
        </div>
        <div class="flex flex-col items-center sm:flex-row sm:items-center justify-between space-y-6 sm:space-y-0 sm:space-x-5 mobile-s:mx-[1.3rem] sm:mx-[2.5rem] md:mx-[3.5rem] lg:mx-[5rem] xl:mx-[7rem] 2xl:mx-[10rem] 3xl:mx-[12rem] mobile-s:pb-[2rem] mobile-s:pt-[5rem]">
            <div class="sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 flex items-center justify-start">
                <img alt="Contact_Me_Avatar_Image" src="/images/Contact_Me_Avatar.webp" class="mobile-s:h-[25rem] lg:h-[28rem] 2xl:h-[35rem] object-cover"/>
            </div>
            <div class="sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 flex flex-col items-center justify-center space-y-10">
                <div class="mobile-s:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.2rem] font-[500] flex justify-end space-y-4 sm:space-y-2 lg:space-y-5"
                >
                    <p class="">
                        Have questions ? Need a skilled developer to bring your ideas to life ? Or just want to chat, 
                        Either way, I’m just a message away.
                        <br>
                        Let’s create something awesome together!
                    </p>
                </div>
                <div class="w-full">
                    <a href="mailto:walidbenmalek12@gmail.com" target="_blank" class="w-full flex flex-row items-center mobile-s:space-x-4 mobile-l:space-x-3 lg:space-x-5 pl-2 py-2 text-white rounded-lg m-2 ml-0 rounded-lg bg-red-600/40 hover:bg-red-600/80">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="white" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                        <span class="text-white">walidbenmalek12@gmail.com</span>
                    </a>
                    <a href="tel:+212627004623" class="w-full flex flex-row items-center mobile-s:space-x-4 mobile-l:space-x-3 lg:space-x-5 pl-2 py-2 text-white rounded-lg m-2 ml-0 rounded-lg bg-red-600/40 hover:bg-red-600/80">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6"/></svg>
                        <span class="text-white">( +212 ) 627-004623</span>
                    </a>
                    <a v-show="!downloadResumeClicked" @click="downloadResumeClicked = !downloadResumeClicked" class="w-full flex flex-row items-center mobile-s:space-x-5 mobile-l:space-x-3 lg:space-x-5 pl-2 py-2 text-white rounded-lg m-2 ml-0 rounded-lg bg-red-600/40 hover:bg-red-600/80 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><g fill="none"><path fill="white" d="M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"/><path fill="white" fill-rule="evenodd" d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.1v4.7h4.7"/><path fill="white" d="M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133"/><path fill="white" fill-rule="evenodd" d="M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z" clip-rule="evenodd"/></g></svg>
                        <span class="text-white">My Rresume</span>
                    </a>
                    <div v-show="downloadResumeClicked" class="flex mobile-s:flex-col mobile-l:flex-row sm:flex-col space-y-2 mobile-l:space-y-0 sm:space-y-2">
                        <a class="w-full flex flex-row items-center mobile-s:space-x-4 mobile-l:space-x-3 lg:space-x-5 pl-2 py-2 text-white rounded-lg mx-2 ml-0 rounded-lg bg-red-600/40 hover:bg-red-600/80 cursor-pointer" @click="OpenEnglishResume">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21"><g fill="none"><path fill="white" d="M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"/><path fill="white" fill-rule="evenodd" d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.1v4.7h4.7"/><path fill="white" d="M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133"/><path fill="white" fill-rule="evenodd" d="M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z" clip-rule="evenodd"/></g></svg>
                            <span class="text-white">English Resume</span>
                        </a>
                        <a class="w-full flex flex-row items-center  mobile-s:space-x-4 mobile-l:space-x-3 lg:space-x-5 pl-2 py-2 text-white rounded-lg mx-2 ml-0 rounded-lg bg-red-600/40 hover:bg-red-600/80 cursor-pointer" @click="OpenFrenshResume">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21"><g fill="none"><path fill="white" d="M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"/><path fill="white" fill-rule="evenodd" d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.1v4.7h4.7"/><path fill="white" d="M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133"/><path fill="white" fill-rule="evenodd" d="M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z" clip-rule="evenodd"/></g></svg>
                            <span class="text-white">French Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const downloadResumeClicked = ref(false);

    const OpenEnglishResume = () => {
        window.open('/Walid_Benmalek_English_Resume.pdf', '_blank');
    }

    const OpenFrenshResume = () => {
        window.open('/Walid_Benmalek_French_Resume.pdf', '_blank');
    }
</script>