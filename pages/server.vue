<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
const response = await $fetch('/api/hello');

console.log(response);

</script>

<style>

</style>