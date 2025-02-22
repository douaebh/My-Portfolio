<template>
    <div>
        <Navbar />
        <main class="container mx-auto py-10 px-4">
            <div v-if="projects.length" class="grid gap-6 grid-cols-1 ">
                <ProjectCard v-for="project in projects" :key="project.id" :title="project.name"
                    :description="project.description" :demoUrl="project.demo" :githubUrl="project.github"
                    :imgSrc="project.image" />
            </div>
            <p v-else class="text-center text-gray-700 dark:text-gray-300 text-lg">Loading projects...</p>
        </main>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { ref, onMounted } from 'vue';

const projects = ref([]);

onMounted(async () => {
    try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        projects.value = data;
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
});
</script>