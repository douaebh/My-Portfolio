<template>
    <div class="relative z-10 max-w-screen-xl mx-auto px-4 py-6">
        <div class="flex flex-col lg:flex-row justify-between gap-6 mt-9">
            <div class="lg:w-1/2 text-center lg:text-left">
                <p class="text-primary font-semibold text-lg uppercase">Full Stack Developer</p>
                <h1 class="text-5xl font-bold text-gray-900 mt-3">
                    Hello, my name <br> is Ayoub Tribak
                </h1>
                <p class="text-gray-700 text-lg mt-4">
                    A passionate web developer crafting modern web applications and innovative digital solutions.
                </p>
                <div class="flex space-x-4 mt-6 justify-center lg:justify-start">
                    <button
                        class="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                        Projects
                    </button>
                    <button
                        class="px-6 py-3 border border-gray-700 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition duration-300">
                        LinkedIn
                    </button>
                </div>
            </div>

            <div class="flex-1 flex justify-center">
                <img src="../assets/user.png" alt="Hero Image" class="w-3/4 h-auto" />
            </div>
        </div>
    </div>
    <div class="absolute top-0 right-0 w-1/2 z-0">
        <img src="../assets/yellow-bg.svg" alt="Yellow Background" class="w-full h-auto object-cover" />
    </div>
</template>