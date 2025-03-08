<template>
    <div>
        <Navbar />
        <main class="pt-16">
            <section id="resume" class="container mx-auto p-8">
                <div class="flex items-center justify-center space-x-4">
                    <h1 class="text-4xl font-bold mb-6 text-center">My Resume</h1>
                    <a @click="downloadResume()"  download class="mb-6 cursor-pointer" title="Download Resume">
                        <i class="fa-solid fa-file-arrow-down text-primary text-4xl"></i>
                    </a>
                </div>

                <!-- Profile Section -->
                <div class="bg-gray-100 p-6 rounded-lg shadow-md mb-6 grid gap-6">
                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-6 items-center">
                        <div>
                            <h2 class="text-2xl font-semibold mb-2">
                                {{ userInfo.FirstName || 'First Name' }} {{ userInfo.LastName || 'Last Name' }}
                            </h2>
                            <p class="text-gray-700">{{ userInfo.title || 'Your Title' }}</p>
                            <p class="text-gray-500">{{ userInfo.location || 'Location' }}</p>
                        </div>
                        <div>
                            <p class="text-gray-500">
                                <strong>Email: </strong>
                                <a v-if="userInfo.Email" :href="'mailto:' + userInfo.Email"
                                    class="text-blue-600 hover:underline">
                                    {{ userInfo.Email }}
                                </a>
                                <span v-else>Not available</span>
                            </p>

                            <p class="text-gray-500">
                                <strong>Phone: </strong>
                                <a v-if="userInfo.Phone" :href="'tel:' + userInfo.Phone"
                                    class="text-blue-600 hover:underline">
                                    {{ userInfo.Phone }}
                                </a>
                                <span v-else>Not available</span>
                            </p>

                            <p v-if="userInfo.LinkedIn" class="text-gray-500">
                                <strong>LinkedIn: </strong>
                                <a v-if="userInfo.LinkedIn" :href="userInfo.LinkedIn" target="_blank"
                                    class="text-blue-600 hover:underline">
                                    LinkedIn Profile
                                </a>
                                <span v-else>Not available</span>
                            </p>
                        </div>
                    </div>
                    <p v-if="userInfo.Summary" class="text-gray-700 border-t-2 pt-4">{{ userInfo.Summary }}</p>
                </div>

                <!-- Grid for Education & Skills -->
                <div class="grid sm:grid-cols-2 grid-cols-1 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl text-primary font-semibold mb-4">Education</h2>
                        <ul class="space-y-3">
                            <li v-for="edu in userInfo.Educations" :key="edu.id" class="border-b-2 pb-2">
                                <p class="font-medium">{{ edu.title }} - {{ edu.location }}</p>
                                <p class="text-sm text-gray-500 mt-2">{{ edu.description }}</p>
                                <p class="text-sm text-gray-500 font-semibold">{{ edu.start_date }} - {{ edu.end_date }}
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl text-primary font-semibold mb-4">Skills</h2>
                        <ul v-if="skills.length" class="flex flex-wrap gap-2">
                            <li v-for="skill in skills" :key="skill.id"
                                class="bg-gray-200 text-gray-900 px-3 py-1 rounded text-sm">{{ skill.name }}</li>
                        </ul>
                        <p v-else class="text-gray-500">No skills added yet.</p>
                    </div>
                </div>

                <!-- Grid for Projects & Experience -->
                <div class="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl text-primary font-semibold mb-4">Projects</h2>
                        <ul v-if="projects.length" class="space-y-3">
                            <li v-for="project in projects" :key="project.id" class="border-b-2 pb-2">
                                <p class="font-medium">{{ project.name }}</p>
                                <p class="text-sm text-gray-500 mb-3">{{ project.description }}</p>
                                <p class="text-sm text-gray-500"><strong>Role:</strong> {{ project.role }}</p>
                                <p class="text-sm text-gray-500"><strong>Technologies:</strong></p>
                                <span v-for="tech in project.technologies" :key="tech"
                                    class="text-sm bg-gray-200 px-2 py-1 rounded inline-flex mr-1 mb-1">{{ tech
                                    }}</span>
                            </li>
                        </ul>
                        <p v-else class="text-gray-500">No projects added yet.</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl text-primary font-semibold mb-4">Experience</h2>
                        <ul v-if="experiences.length" class="space-y-3">
                            <li v-for="exp in experiences" :key="exp.id" class="border-b-2 pb-2">
                                <p class="font-medium">{{ exp.title }}</p>
                                <p class="text-sm text-gray-500 mb-3">{{ exp.description }}</p>
                                <p class="text-sm text-gray-500"><strong>Company:</strong> {{ exp.company }}</p>
                                <p class="text-sm text-gray-500"><strong>Location:</strong> {{ exp.location }}</p>
                                <p class="text-sm text-gray-500"><strong>Start:</strong> {{ exp.start_date }}</p>
                                <p class="text-sm text-gray-500"><strong>End:</strong> {{ exp.end_date || 'Present' }}
                                </p>
                            </li>
                        </ul>
                        <p v-else class="text-gray-500">No experience added yet.</p>
                    </div>
                </div>

                <!-- Certifications -->
                <div v-if="userInfo.Certifications.length" class="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 class="text-xl text-primary font-semibold mb-4">Certifications</h2>
                    <ul class="space-y-3">
                        <li v-for="cert in userInfo.Certifications" :key="cert.id" class="border-b-2 pb-2">
                            <p class="font-medium">{{ cert.title }} - {{ cert.issuer }}</p>
                            <p class="text-sm text-gray-500">Completed in {{ cert.date }}</p>
                        </li>
                    </ul>
                </div>

                <!-- Languages -->
                <div v-if="userInfo.Languages.length" class="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 class="text-xl text-primary font-semibold mb-4">Languages</h2>
                    <ul class="space-y-3">
                        <li v-for="lang in userInfo.Languages" :key="lang.name" class="border-b-2 pb-2">
                            <p class="font-medium">{{ lang.name }}</p>
                            <p class="text-sm text-gray-500">{{ lang.level }}</p>
                        </li>
                    </ul>
                </div>

                <!-- Additional Skills -->
                <div v-if="userInfo.AdditionalSkills.length" class="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 class="text-xl text-primary font-semibold mb-4">Additional Skills</h2>
                    <ul class="space-y-3">
                        <li v-for="skill in userInfo.AdditionalSkills" :key="skill" class="border-b-2 pb-2">
                            <p class="font-medium">{{ skill }}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

import { inject } from 'vue';

const userInfo = inject('userInfo');
const skills = inject('skills');
const projects = inject('projects');
const experiences = inject('experiences');

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
};
</script>

<style scoped>
.container {
    max-width: 900px;
}
</style>