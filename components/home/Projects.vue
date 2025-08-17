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
                Recent Projects
            </p>
        </div>
        <div class="flex flex-col justify-start space-y-[7rem] mobile-s:mx-[1.3rem] sm:mx-[2.5rem] md:mx-[3.5rem] lg:mx-[5rem] xl:mx-[7rem] 2xl:mx-[10rem] 3xl:mx-[12rem] mobile-s:pb-[2rem] mobile-s:pt-[3rem]">
            <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between lg:space-x-10">
                <div class="lg:w-[50%] flex items-center justify-start">
                    <NuxtLink to="/Avocat_Spark">
                        <img alt="Login_Image" src="/images/AVOCAT_SPARK/AVOCAT/Login.webp" class="w-[2000px] lg:w-[4000px] h-[170px] lg:h-[400px] object-cover rounded-xl" />
                    </NuxtLink>
                </div>
                <div class="w-full lg:w-[50%] flex flex-col space-y-5">
                    <p class="text-lg lg:text-xl xl:text-2xl font-bold">
                        Avocat Spark
                    </p>
                    <div class="mobile-s:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.2rem] space-y-4 sm:space-y-2 lg:space-y-5">
                        <p>
                            Avocat Spark is a SaaS platform designed to streamline law firm management for lawyers 
                            and enhance client collaboration. It simplifies administrative tasks, improves communication, 
                            and provides a seamless user experience.
                        </p>
                        <p>
                            Made With :
                        </p>
                    </div>
                    <div class="flex flex-wrap justify-start items-start min-[403px]:w-[80%] min-[471px]:w-full min-[511px]:w-[83%] lg:w-full min-[1112px]:w-[84%] min-[1349px]:w-[71%] min-[1643px]:w-[60%] min-[1877px]:w-full">
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(66, 184, 131,0.38);">
                            <img alt="VUE_Image" src="/images/Logos/VUE.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(66, 184, 131);">Vue</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(255,245,71,0.38);">
                            <img alt="PINIA_Image" src="/images/Logos/PINIA.webp" class="w-[1.5rem] h-[1.5rem] object-contain"/>
                            <span style="color: rgb(255,189,53);">Pinia</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(66, 184, 131,0.38);">
                            <img alt="TAILWIND_Image" src="/images/Logos/TAILWIND.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(88, 150, 54);">Tailwind</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(245, 82, 71,0.38);">
                            <img alt="LARAVEL_Image" src="/images/Logos/LARAVEL.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(245, 82, 71);">Laravel</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(0, 216, 255,0.78);">
                            <img alt="API_Image" src="/images/Logos/API.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(0, 37, 97);">Rest Api</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(0, 117, 143,0.38);">
                            <img alt="MYSQL_Image" src="/images/Logos/MYSQL.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(0, 117, 143);">MySQL</span>
                        </span>
                    </div>
                    <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2  text-white rounded-lg m-2 bg-green-500/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>
                        <NuxtLink to="/Avocat_Spark">
                            <span class="text-white">Check More Details</span>
                        </NuxtLink> 
                    </span>
                </div>
            </div>
            <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between">
                <div class="lg:hidden flex items-center justify-start">
                    <img alt="Coming_Soon_Image" src="/images/MARRANDKECH/Coming_Soon.webp" class="w-[2000px] lg:w-[4000px] h-[170px] lg:h-[400px] object-cover rounded-xl" />
                </div>
                <div class="w-full lg:w-[50%] flex flex-col justify-start space-y-5 lg:mr-10">
                    <p class="text-lg lg:text-xl xl:text-2xl font-bold">
                        MarrandKech
                    </p>
                    <div class="mobile-s:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.2rem] space-y-4 sm:space-y-2 lg:space-y-5">
                        <p>
                        Marrakndech is an e-commerce platform created for a local business specializing 
                        in uniquely designed t-shirts and hoodies. The platform provides a seamless shopping experience for customers 
                        while offering robust management tools for the business owner.
                    </p>
                        <p>
                            Made With :
                        </p>
                    </div>
                    <div class="flex flex-wrap justify-start items-start min-[403px]:w-[80%] min-[471px]:w-full min-[511px]:w-[83%] lg:w-full min-[1112px]:w-[84%] min-[1349px]:w-[71%] min-[1643px]:w-[60%] min-[1877px]:w-full">
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(66, 184, 131,0.38);">
                            <img alt="VUE_Image" src="/images/Logos/VUE.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(66, 184, 131);">Vue</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(255,245,71,0.38);">
                            <img alt="PINIA_Image" src="/images/Logos/PINIA.webp" class="w-[1.5rem] h-[1.5rem] object-contain"/>
                            <span style="color: rgb(255,189,53);">Pinia</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(66, 184, 131,0.38);">
                            <img alt="TAILWIND_Image" src="/images/Logos/TAILWIND.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(88, 150, 54);">Tailwind</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(245, 82, 71,0.38);">
                            <img alt="LARAVEL_Image" src="/images/Logos/LARAVEL.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(245, 82, 71);">Laravel</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(0, 216, 255,0.78);">
                            <img alt="API_Image" src="/images/Logos/API.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(0, 37, 97);">Rest Api</span>
                        </span>
                        <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2" style="background-color: rgba(0, 117, 143,0.38);">
                            <img alt="MYSQL_Image" src="/images/Logos/MYSQL.webp" class="w-[1.5rem] object-cover"/>
                            <span style="color: rgb(0, 117, 143);">MySQL</span>
                        </span>
                    </div>
                    <span class="w-fit flex flex-row items-center space-x-2 px-3 py-2 text-white rounded-lg m-2 bg-yellow-500/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="white"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="white"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="white"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>
                        <span class="text-white">Still In Development</span>
                    </span>
                </div>
                <div class="hidden w-[50%] lg:flex items-center justify-start">
                    <img alt="Coming_Soon_Image" src="/images/MARRANDKECH/Coming_Soon.webp" class="hidden lg:flex w-[4000px] h-[400px] object-cover rounded-xl" />
                </div>
            </div>
            <!-- <ul class="list-disc list-inside space-y-2 mobile-s:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.2rem]">
                <li class="text-red-500">Lawyer & Client Dashboards: <span class="text-white">Separate interfaces for lawyers and clients to manage appointments and track audience schedules efficiently.</span></li>
                <li class="text-red-500">Case Management: <span class="text-white">Tools to organize cases, track progress, and store important details securely.</span></li>
                <li class="text-red-500">Appointment Scheduling: <span class="text-white">Automated scheduling system for client consultations and courtroom appearances.</span></li>
                <li class="text-red-500">Notification System: <span class="text-white">Email alerts for account creation, password resets, and appointment reminders to keep users informed.</span></li>
                <li class="text-red-500">Responsive Design: <span class="text-white">Optimized for accessibility and usability across all devices.</span></li>
            </ul> -->
        </div>
    </div>
</template>