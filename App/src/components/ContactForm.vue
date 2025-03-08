<template>
    <div class="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 py-10 mt-10 mb-10">
        <h2 class="text-3xl font-bold text-gray-900 text-center">Contact Me</h2>
        <p class="text-gray-500 text-center mt-2">Let's get in touch! Fill out the form below.</p>

        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit" class="mt-6 space-y-5">
            <div>
                <label for="name" class="block text-gray-700 font-semibold">Your Name</label>
                <input v-model="form.name" type="text" id="name" placeholder="John Doe"
                    class="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary"
                    required />
            </div>

            <div>
                <label for="email" class="block text-gray-700 font-semibold">Email Address</label>
                <input v-model="form.email" type="email" id="email" placeholder="you@example.com"
                    class="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary"
                    required />
            </div>

            <div>
                <label for="message" class="block text-gray-700 font-semibold">Your Message</label>
                <textarea v-model="form.message" id="message" rows="4" placeholder="Type your message here..."
                    class="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary"
                    required></textarea>
            </div>

            <button type="submit" :disabled="loading"
                class="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed">
                <svg v-if="loading" class="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3V4a8 8 0 00-8 8H4z">
                    </path>
                </svg>
                {{ loading ? "Sending..." : "Send Message" }}
            </button>

            <p v-if="successMessage" class="text-green-600 text-center font-semibold text-sm mt-2">
                {{ successMessage }}
            </p>
            <p v-if="errorMessage" class="text-red-500 text-center font-semibold text-sm mt-2">
                {{ errorMessage }}
            </p>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import emailjs from 'emailjs-com';

const form = ref({
    name: '',
    email: '',
    message: ''
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

// Initialize EmailJS when component is mounted
onMounted(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
});

const handleSubmit = async () => {
    loading.value = true;
    successMessage.value = '';
    errorMessage.value = '';

    // EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const templateParams = {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
    };

    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
        successMessage.value = 'Your message has been sent successfully!';
        form.value = { name: '', email: '', message: '' };
    } catch (error) {
        console.error('EmailJS Error:', error);
        errorMessage.value = 'Something went wrong. Please try again.';
    } finally {
        loading.value = false;
    }
};
</script>
