<template>
    <div>
        <Navbar />
        <main class="pt-16">
            <section id="resume" class="container mx-auto p-8">
                <h1 class="text-4xl font-bold mb-6 text-center">My Resume</h1>

                <div class="bg-gray-100 p-6 rounded-lg shadow-md mb-6 grid  gap-6 items-center">
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 items-center">
                        <div>
                            <h2 class="text-2xl font-semibold mb-2">{{ userInfo.FirstName }} {{ userInfo.LastName }}
                            </h2>
                            <p class="text-gray-700">{{ userInfo.title }}</p>
                            <p class="text-gray-500">{{ userInfo.location }}</p>
                        </div>
                        <div>
                            <p class="text-gray-500"><strong>Email: </strong>{{ userInfo.Email }}</p>
                            <p class="text-gray-500"><strong>Phone: </strong>{{ userInfo.Phone }}</p>
                            <p class="text-gray-500"><strong>LinkedIn: </strong><a :href="userInfo.LinkedIn"
                                    target="_blank">www.linkedin.com/in/ayoub-tribak</a></p>
                        </div>
                    </div>
                    <div>
                        <p class="text-gray-700 border-t-2 pt-4">{{ userInfo.summary }}</p>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl text-primary font-semibold mb-4">Education</h2>
                        <ul class="space-y-3">
                            <li v-for="Education in userInfo.Educations" :key="Education.id" class="border-b-2 pb-2">
                                <p class="font-medium">{{ Education.title }} - {{ Education.location }}</p>
                                <p class="text-sm text-gray-500 mt-2 mb-1">{{ Education.description }}</p>
                                <p class="text-sm text-gray-500 font-semibold">{{ Education.start_date }} - {{
                                    Education.end_date }}</p>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl text-primary font-semibold mb-4">Skills</h2>
                        <ul v-if="skills.length" class="flex flex-wrap gap-2">
                            <li v-for="skill in skills" :key="skill.id"
                                class="bg-gray-200 text-gray-900 px-3 py-1 rounded">{{ skill.name }}</li>
                        </ul>
                        <p v-else>Loading skills...</p>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mt-6">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl text-primary font-semibold mb-4">Projects</h2>
                        <ul v-if="projects.length" class="space-y-3">
                            <li v-for="project in projects" :key="project.id" class="border-b-2 pb-2">
                                <p class="font-medium">{{ project.name }}</p>
                                <p class="text-sm text-gray-500 mb-3">{{ project.description }}</p>
                                <p class="text-sm text-gray-500 mb-3"><strong>Role:</strong> {{ project.role }}</p>
                                <p class="text-sm text-gray-500"><strong>Technologies:</strong></p>
                                <span v-for="tech in project.technologies" :key="tech" class="text-sm text-gray-500">
                                    {{ tech }} , </span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl text-primary font-semibold mb-4">Experience</h2>
                        <ul v-if="experiences.length" class="space-y-3">
                            <li v-for="experience in experiences" :key="experience.id" class="border-b-2 pb-2">
                                <p class="font-medium">{{ experience.title }}</p>
                                <p class="text-sm text-gray-500 mb-3">{{ experience.description }}</p>
                                <p class="text-sm text-gray-500"><strong>Company:</strong> {{ experience.company }}</p>
                                <p class="text-sm text-gray-500"><strong>Location:</strong> {{ experience.location }}
                                </p>
                                <p class="text-sm text-gray-500"><strong>Start Date:</strong> {{ experience.start_date
                                }}</p>
                                <p class="text-sm text-gray-500"><strong>End Date:</strong> {{ experience.end_date ||
                                    'Present' }}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 class="text-xl text-primary font-semibold mb-4">Certifications</h2>
                    <ul class="space-y-3">
                        <li v-for="Certification in userInfo.Certifications" :key="Certification.id"
                            class="border-b-2 pb-2">
                            <p class="font-medium">{{ Certification.title }} - {{ Certification.issuer }}</p>
                            <p class="text-sm text-gray-500">Completed in {{ Certification.date }}</p>
                        </li>
                    </ul>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 class="text-xl text-primary font-semibold mb-4">Languages</h2>
                    <ul class="space-y-3">
                        <li v-for="Language in userInfo.Languages" :key="Language.name" class="border-b-2 pb-2">
                            <p class="font-medium">{{ Language.name }}</p>
                            <p class="text-sm text-gray-500">{{ Language.level }}</p>
                        </li>
                    </ul>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 class="text-xl text-primary font-semibold mb-4">Additional Skills</h2>
                    <ul class="space-y-3">
                        <li v-for="AdditionalSkill in userInfo.AdditionalSkills" :key="AdditionalSkill"
                            class="border-b-2 pb-2">
                            <p class="font-medium">{{ AdditionalSkill }}</p>
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
import { ref, onMounted } from 'vue';

const skills = ref([]);
const projects = ref([]);
const experiences = ref([]);
const userInfo = ref([]);

onMounted(async () => {
    try {
        const [skillsResponse, projectsResponse, experiencesResponse, userInfoResponse] = await Promise.all([
            fetch('/skills.json'),
            fetch('/projects.json'),
            fetch('/experiences.json'),
            fetch('/userInfo.json')
        ]);
        const skillsData = await skillsResponse.json();
        const projectsData = await projectsResponse.json();
        const experiencesData = await experiencesResponse.json();
        const userInfoData = await userInfoResponse.json();

        skills.value = skillsData;
        projects.value = projectsData;
        experiences.value = experiencesData;
        userInfo.value = userInfoData;
    } catch (error) {
        console.error(error);
    }
});

</script>

<style scoped>
.container {
    max-width: 900px;
}
</style>