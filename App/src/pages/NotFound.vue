<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
        <h1 class="text-9xl font-extrabold text-primary">404</h1>
        <h2 class="text-3xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
        <p class="text-gray-500 mt-2">
            The page you are looking for does not exist or has been moved.
        </p>

        <router-link to="/"
            class="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
            Go Back Home
        </router-link>
    </div>
</template>
