<template>
    <div class="relative">
        <Navbar />
        <main class="pt-16">
            <section id="home">
                <HeroSection />
            </section>
            <section id="about" class="mt-20">
                <AboutSection />
                <SkillsSection />
            </section>
            <section id="projects" class="mt-10">
                <ProjectsCard />
            </section>
            <section id="contact" class="mt-20 bg-gray-50 py-10 px-4">
                <ContactForm />
            </section>
            <Footer />
        </main>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ProjectsCard from '../components/ProjectsCard.vue';
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/Footer.vue';
</script>