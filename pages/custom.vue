<template>
    <div class="bg-black">
        Custom Page
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
})


const { sayHello } = useUtils();

sayHello();

</script>