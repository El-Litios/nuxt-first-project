<template>
    <div class="bg-black">
        <Header></Header>
        <Alert/>

        <!-- Components/Profile -->
        <Profile></Profile>

        <!-- Components/Profile/Header -->
        <ProfileHeader></ProfileHeader>

        <img src="@/assets/images/1.webp" alt=""> <!-- Image access in assets -->
        <img src="/2.jpg" alt=""> <!-- Image access in public -->

        <IconsBell></IconsBell>

        <!-- Modules with nuxt/content -->
        <div>
            <ContentDoc></ContentDoc>
        </div>

    </div>
</template>

<script setup>
//Composable function call
/* const { sayHello } = useUtils();

sayHello(); */

//Plugins
const { $sayHello } = useNuxtApp();
$sayHello('usando plugins');


//define middleware without globalize
definePageMeta({
    middleware: 'auth'
})
</script>

