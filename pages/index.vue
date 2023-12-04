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
    </div>
</template>

<script setup>
const { sayHello } = useUtils();

sayHello();
</script>

