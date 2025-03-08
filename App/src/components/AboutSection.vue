<template>
    <div class="relative z-10 max-w-screen-xl mx-auto px-4 py-6">
        <div class="flex flex-col lg:flex-row justify-between gap-6 mt-9 mb-9">
            <div class="text-center lg:text-left">

                <!-- Section Title -->
                <p class="text-primary font-nunito font-semibold text-lg sm:text-xl md:text-2xl uppercase">
                    About Me
                </p>

                <!-- Heading -->
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-6">
                    Passionate Full Stack Developer
                </h2>

                <!-- About Text -->
                <p class="text-gray-400 font-nunito text-lg sm:text-xl md:text-2xl mt-5 mb-7">
                    {{ userInfo.About }}
                </p>

            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const userInfo = inject('userInfo');
</script>
