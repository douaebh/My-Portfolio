<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="text-center">
        <h2 class="text-4xl font-playfair font-bold text-gray-900">My Skills</h2>
        <p class="mt-4 font-nunito text-xl text-gray-400">Technologies I'm proficient in</p>
      </div>

      <div v-if="skills.length" class="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="skill in skills" :key="skill.id"
          class="text-center bg-white p-6 shadow-xl rounded-lg hover:scale-105 transition-transform">
          <div class="text-5xl text-primary mb-4 flex justify-center items-center">
            <template v-if="skill.icon === 'tailwind-logo-svg'">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"  width="70" height="70">
                <path
                  d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                  style="fill:#FDC435">
                </path>
              </svg>
            </template>
            <template v-else>
              <span v-html="skill.icon"></span>
            </template>
          </div>
          <h3 class="text-xl font-semibold text-gray-800">{{ skill.name }}</h3>

          <div class="mt-3">
            <p class="text-gray-500">{{ skill.category }}</p>
            <p class="text-sm font-medium text-primary">
              {{ skill.level }}
            </p>
          </div>
        </div>
      </div>
      <p v-else>Loading skills...</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/skills.json');
    const data = await response.json();
    skills.value = data;
  } catch (error) {
    console.error(error);
  }
});
</script>
