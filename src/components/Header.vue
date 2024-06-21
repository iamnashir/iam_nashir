<template>
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto">
            <ul class="flex justify-around text-white">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Me</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/skills">Skills</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
};
</script>