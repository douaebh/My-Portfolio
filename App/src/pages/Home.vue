<template>
    <div class="min-h-screen relative">
        <Navbar />
        <div class="max-w-screen-xl mx-auto px-4 py-16 relative z-10">
            <div class="flex flex-col lg:flex-row  justify-between gap-6 mt-9">
                <div class="flex-1">
                    <div class="mb-4">
                        <p class="text-lg font-semibold text-gray-600">Full Stack Developer</p>
                    </div>
                    <div class="mb-7">
                        <h1 class="text-5xl font-bold text-gray-900">Hello, my name</h1>
                        <h1 class="text-5xl font-bold text-gray-900">is Ayoub Tribak</h1>
                    </div>
                    <div class="mb-4">
                        <p class="text-xl sm:w-3/4 xl:w-full text-gray-700">
                            A passionate web developer crafting modern web applications and innovative digital
                            solutions.
                            I'm always looking for new opportunities to grow and collaborate.
                        </p>
                    </div>
                    <div class="flex space-x-4 mt-6">
                        <button
                            class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Button 1
                        </button>
                        <button
                            class="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                            Button 2
                        </button>
                    </div>
                </div>

                <div class="flex-1">
                    <img src="../assets/vue.svg" alt="Hero Image" class="w-full h-auto " />
                </div>
            </div>
        </div>
        <div class="absolute top-0 right-0 w-1/2 z-0">
            <img src="../assets/yellow-bg.svg" alt="Yellow Background" class="w-full h-auto object-cover" />
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>