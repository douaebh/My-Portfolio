<template>
    <div class="relative z-10 max-w-screen-xl mx-auto px-4 py-6">
        <div class="flex flex-col lg:flex-row justify-between gap-6 mt-9">
            <div class="lg:w-1/2 text-center lg:text-left">
                <p class="text-primary font-nunito font-semibold text-xl uppercase">Full Stack Developer</p>
                <h1 class="text-6xl font-playfair font-bold text-gray-900 mt-4 mb-6">
                    Hello, my name <br> is Ayoub Tribak
                </h1>
                <p class="text-gray-400 font-nunito text-2xl mt-5 mb-7">
                    A passionate web developer crafting modern web applications and innovative digital solutions.
                </p>
                <div class="flex space-x-4 mt-7 justify-center lg:justify-start">
                    <BaseButton text="Resume" btnClass="px-5 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"/>
                    <BaseButton text="LinkedIn" btnClass="px-5 py-2 border border-gray-700 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"/>
                </div>
            </div>

            <div class="flex-1 flex justify-center">
                <img src="../assets/user.png" alt="Hero Image" class="w-3/4 h-auto" />
            </div>
        </div>
    </div>
    <div class="absolute top-0 right-0 w-1/2 z-0">
        <img src="../assets/yellow-bg.svg" alt="Yellow Background" class="w-full h-auto object-cover" />
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
</script>