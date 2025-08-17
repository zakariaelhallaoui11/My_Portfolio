<template>
            <div class="flex flex-col space-y-5 mobile-s:mx-[1.3rem] sm:mx-[2.5rem] md:mx-[3.5rem] lg:mx-[5rem] xl:mx-[7rem] 2xl:mx-[10rem] 3xl:mx-[12rem] py-10">
                <div class="flex flex-col space-y-5 items-center">
                    <p class="mobile-xs:text-[1.74rem] mobile-s:text-[1.85rem] mobile-m:text-[2.2rem] sm:text-[2.5rem] md:text-[2.55rem] lg:text-[2.7rem] font-bold text-center">
                        Avocat Spark
                    </p>
                </div>
                <div class="flex flex-col items-center space-y-[2rem] lg:space-y-[4rem] bg-white py-10 px-[1rem] sm:px-[4rem] md:px-[6rem] lg:px-[8rem] xl:px-[10rem] 2xl:px-[12rem] 3xl:px-[15rem] overflow-x-hidden">
                    <div class="w-full p-4 mt-4 bg-yellow-200 rounded-lg">
                        <p class="self-start mobile-xs:text-[0.9rem] mobile-m:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] font-bold">
                            Disclaimer:
                        </p>
                        <p class="self-start mobile-xs:text-[0.9rem] mobile-m:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                            Avocat Spark is a product owned by Spark Tech, a software development company. This product is featured in my portfolio 
                            as I contributed to its development during my tenure with Spark Tech. For more information about Avocat Spark, 
                            please visit <a href="https://hellospark.tech/" target="_blank" class="text-blue-500 underline">this link</a>.
                        </p>
                    </div>
                    <div class="w-full flex flex-col items-center space-y-4">
                        <p class="self-start mobile-xs:text-[1.2rem] mobile-m:text-[1.4rem] sm:text-[1.35rem] md:text-[1.4rem] font-bold">
                            Desciption :
                        </p>
                        <p class="self-start mobile-xs:text-[0.9rem] mobile-m:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                            Avocat Spark is an innovative SaaS platform tailored to meet the unique needs of law firms, providing a comprehensive solution for both lawyers and their clients. 
                            The platform is designed to streamline daily operations, improve communication, and foster better collaboration, ensuring a seamless and efficient experience for all users.
                            <br>
                            With a focus on user-centric design and functionality, Avocat Spark simplifies administrative tasks such as scheduling, case management, and document sharing. 
                            Lawyers can easily manage their appointments, track court audiences, and organize their workflows, all from a single, intuitive interface.
                            <br>
                            Clients, on the other hand, benefit from enhanced accessibility and transparency, with features that allow them to stay updated on their cases, review important details, 
                            and communicate directly with their legal representatives.
                        </p>
                    </div>
                    <div class="w-full flex flex-col items-center space-y-4">
                        <p class="self-start mobile-xs:text-[1.2rem] mobile-m:text-[1.4rem] sm:text-[1.35rem] md:text-[1.4rem] font-bold">
                            Features :
                        </p>
                        <ul class="list-disc list-inside space-y-2 mobile-s:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.2rem]">
                            <li class="font-bold">Lawyer & Client Dashboards: <span class="font-normal">Separate interfaces for lawyers and clients to manage appointments and track audience schedules efficiently.</span></li>
                            <li class="font-bold">Case Management: <span class="font-normal">Tools to organize cases, track progress, and store important details securely.</span></li>
                            <li class="font-bold">Appointment Scheduling: <span class="font-normal">Automated scheduling system for client consultations and courtroom appearances.</span></li>
                            <li class="font-bold">Notification System: <span class="font-normal">Email alerts for account creation, password resets, and appointment reminders to keep users informed.</span></li>
                            <li class="font-bold">Responsive Design: <span class="font-normal">Optimized for accessibility and usability across all devices.</span></li>
                        </ul>
                    </div>
                    <div class="w-full flex flex-col items-center space-y-4">
                        <p class="self-start mobile-xs:text-[1.2rem] mobile-m:text-[1.4rem] sm:text-[1.35rem] md:text-[1.4rem] font-bold">
                            More Images :
                        </p>
                        <UCarousel v-slot="{ item }" :items="AVOCAT" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
                            <img :alt="getFilename(item)" :src="item" class="w-full lg:h-[35rem] object-contain" draggable="false">
                        </UCarousel>
                    </div>
                </div>
            </div>
</template>
<script setup>
    const AVOCAT= [
        '/images/AVOCAT_SPARK/AVOCAT/Login.webp',
        '/images/AVOCAT_SPARK/AVOCAT/Accueil.webp',
        '/images/AVOCAT_SPARK/AVOCAT/Dossiers.webp',
        '/images/AVOCAT_SPARK/AVOCAT/Clients.webp',
        '/images/AVOCAT_SPARK/AVOCAT/Parametres_Profile.webp',
    ];
    const getFilename = (path) => {
        let filename = path.split('/').pop();
        filename = filename.split('.')[0];
        return filename + '_Image';
    }
</script>