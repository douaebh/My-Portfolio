<template>
    <footer class="bg-gray-900 text-gray-300 py-8">
        <div
            class="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">

            <div>
                <h2 class="text-lg font-semibold text-white">{{ userInfo.FirstName }} {{ userInfo.LastName }}</h2>
                <p class="text-gray-400 text-sm mt-1">{{ userInfo.title }}</p>
            </div>

            <div class="text-gray-500 text-sm mt-6">
                © {{ new Date().getFullYear() }} {{ userInfo.FirstName }} {{ userInfo.LastName }}. All rights reserved.
            </div>

            <div class="flex space-x-4 mt-4 md:mt-0 lg:ml-40">
                <a :href="userInfo.Github" target="_blank" class="hover:text-yellow-400 transition">
                    <i class="fab fa-github text-xl"></i>
                </a>
                <a :href="userInfo.LinkedIn" target="_blank" class="hover:text-yellow-400 transition">
                    <i class="fab fa-linkedin text-xl"></i>
                </a>
                <a :href="'mailto:' + userInfo.Email" class="hover:text-yellow-400 transition">
                    <i class="fas fa-envelope text-xl"></i>
                </a>
            </div>
        </div>

    </footer>
</template>

<script setup>
import { inject } from 'vue';

const userInfo = inject('userInfo');
</script>
