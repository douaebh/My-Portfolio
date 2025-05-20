<template>
    <div class="max-w-screen-xl mx-auto px-4 py-10">
        <div class="text-center">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-gray-900">My Projects</h2>
            <p class="mt-4 font-nunito text-xl text-gray-400">A showcase of my latest work</p>
        </div>

        <div v-if="projects.length" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-10">
            <div v-for="project in projects" :key="project.id"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div class="w-full h-56 relative">
                    <img v-if="project.image" :src="project.image" alt="Project Image"
                        class="w-full h-56 object-cover md:rounded-t-2xl p-4" />
                </div>
                <div class="p-6 w-full">
                    <h5 class="text-xl font-extrabold text-gray-900 mb-2">{{ project.name }}</h5>
                    <span class="px-3 py-1 text-sm font-semibold rounded-lg" :class="{
                        'bg-green-100 text-green-800': project.status === 'active',
                        'bg-yellow-100 text-yellow-800': project.status === 'in-progress',
                        'bg-gray-100 text-gray-800': project.status === 'archived'
                    }">
                        {{ project.status }}
                    </span>
                    <p class="text-gray-600 mt-2">
                        {{ project.description || 'No description available' }}
                    </p>

                    <div v-if="project.technologies && project.technologies.length" class="mt-3">
                        <span class="text-sm font-semibold text-gray-700">Technologies:</span>
                        <div class="flex flex-wrap gap-2 mt-1">
                            <span v-for="tech in project.technologies" :key="tech"
                                class="px-3 py-1 text-sm bg-gray-200 text-gray-900 rounded-lg">
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <div class="flex gap-4 mt-5">
                        <a v-if="project.demo && project.demo !== '#'" :href="project.demo" target="_blank">
                            <BaseButton text="Live Demo"
                                btnClass="px-5 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300" />
                        </a>
                        <BaseButton v-else text="Live Demo"
                            class="px-5 py-2 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed" />

                        <a v-if="project.github" :href="project.github" target="_blank">
                            <BaseButton text="GitHub"
                                btnClass="px-5 py-2 border border-gray-700 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <p v-else class="text-center text-gray-700 text-lg mt-10">Loading projects...</p>
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { inject } from 'vue';

const projects = inject('projects');
</script>
