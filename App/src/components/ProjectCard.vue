<template>
    <div
        class="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden md:max-w-2xl hover:shadow-lg transition duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

        <img v-if="imgSrc" :src="imgSrc" alt="Project Image"
            class="w-full md:w-48 h-56 object-cover md:rounded-none md:rounded-l-lg" />

        <div class="flex flex-col justify-between p-5 w-full">
            <h5 class="text-2xl font-bold text-gray-900 dark:text-white">{{ title }}</h5>
            <p class="text-gray-700 dark:text-gray-400 mt-2">{{ description }}</p>

            <div class="flex gap-4 mt-4">
                <a v-if="demoUrl" :href="demoUrl" target="_blank">
                    <BaseButton text="Live Demo"
                        btnClass="px-5 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300" />
                </a>
                <a v-if="githubUrl" :href="githubUrl" target="_blank">
                    <BaseButton text="GitHub"
                        btnClass="px-5 py-2 border border-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';

defineProps({
    imgSrc: String,
    title: String,
    description: String,
    demoUrl: String,
    githubUrl: String
});
</script>
