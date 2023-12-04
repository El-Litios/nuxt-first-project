<template>
    <div>
        <!-- Catch parameter into template -->
        event id: {{ $route.params.id }}
    </div>
</template>


<script setup>
const nuxt = useNuxtApp();

console.log(nuxt);

/* const route = useRoute();
console.log(route.params); */
</script>