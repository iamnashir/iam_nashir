<template>
    <div class="container mx-auto mt-5">
        <h1 class="text-3xl font-bold">Contact Me</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" v-model="form.name">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" v-model="form.email">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                    Message
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message" v-model="form.message"></textarea>
            </div>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Send
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            fetch('https://formspree.io/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.form)
            }).then(response => {
                if (response.ok) {
                    alert('Form submitted successfully!');
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                } else {
                    alert('Form submission failed!');
                }
            });
        }
    }
};
</script>