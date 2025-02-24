<template>
    <nav class="bg-transparent border-gray-200 dark:bg-transparent dark:border-gray-700 relative z-20">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 fixed top-0 right-0 left-0">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Ayoub Tribak</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <router-link to="/" class="nav-link" :class="{ 'active-link': activeSection === 'home' }"
                            @click="handleScrollToHero">Home</router-link>
                    </li>
                    <li>
                        <button @click="handleScroll('about')" class="nav-link"
                            :class="{ 'active-link': activeSection === 'about' }">About</button>
                    </li>
                    <li>
                        <button @click="handleScroll('projects')" class="nav-link"
                            :class="{ 'active-link': activeSection === 'projects' }">Projects</button>
                    </li>
                    <li>
                        <router-link to="/resume" class="nav-link"
                            :class="{ 'active-link': activeSection === '/resume' }"
                            @click="setActive('/resume')">Resume</router-link>
                    </li>
                    <li>
                        <button @click="handleScroll('contact')" class="nav-link"
                            :class="{ 'active-link': activeSection === 'contact' }">Contact</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const activeSection = ref(route.path === '/' ? 'home' : route.path);

watch(route, () => {
    activeSection.value = route.path;
});

// Smooth scrolling function
const handleScroll = (section) => {
    const target = document.getElementById(section);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        activeSection.value = section;
    }
};

const handleScrollToHero = () => {
    if (route.path === '/') {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

const updateActiveSection = () => {
    const sections = document.querySelectorAll("section");
    let closestSection = null;
    let minDistance = Infinity;

    const viewportCenter = window.innerHeight / 2; // Middle of the screen

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2; // Center of the section
        const distance = Math.abs(sectionCenter - viewportCenter); // Distance to middle

        if (distance < minDistance) {
            minDistance = distance;
            closestSection = section.id;
        }
    });

    activeSection.value = closestSection || "home"; // Default to "home" if none found
};

// Attach the scroll event listener
onMounted(() => {
    if (route.path === '/') {
        window.addEventListener("scroll", updateActiveSection);
    }
});

// Remove the event listener when leaving the component
onUnmounted(() => {
    window.removeEventListener("scroll", updateActiveSection);
});


</script>

<style scoped>
.nav-link {
    @apply block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0 dark:text-white relative;
}

.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
}

.nav-link:hover::after,
.active-link::after {
    background-color: #000000;
}

.active-link {
    @apply border-b-2 border-black;
}
</style>
