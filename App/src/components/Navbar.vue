<template>
    <nav class="bg-transparent border-gray-200 dark:bg-transparent dark:border-gray-700 relative z-20">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ayoub Tribak</span>
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
                        <router-link to="/"
                            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            active-class="text-blue-700">
                            Home
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/about"
                            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            active-class="text-blue-700">
                            About
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/projects"
                            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            active-class="text-blue-700">
                            Projects
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/contact"
                            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            active-class="text-blue-700">
                            Contact
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<!-- <template>
    <nav class="absolute top-0 left-0 right-0 z-20 bg-transparent p-4">
        <div class="max-w-screen-xl mx-auto flex justify-between items-center">
            <a href="#" class="text-2xl font-semibold text-gray-900">Ayoub Tribak</a>
            <div class="hidden md:flex space-x-8">
                <router-link to="/" class="text-gray-900 hover:text-yellow-500 font-medium" active-class="text-yellow-500">Home</router-link>
                <router-link to="/about" class="text-gray-900 hover:text-yellow-500 font-medium" active-class="text-yellow-500">About</router-link>
                <router-link to="/projects" class="text-gray-900 hover:text-yellow-500 font-medium" active-class="text-yellow-500">Projects</router-link>
                <router-link to="/contact" class="text-gray-900 hover:text-yellow-500 font-medium" active-class="text-yellow-500">Contact</router-link>
            </div>
        </div>
    </nav>
</template> -->
