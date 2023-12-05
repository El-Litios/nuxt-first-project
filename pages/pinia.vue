<template>
  <div>
    <button @click="store.increment" class="bg-green-500" >Cambiar</button>
    <h3>{{ store.count }}</h3>
    <h3>{{ store.name }}</h3>
  </div>
</template>

<script lang="ts" setup>
import { useMyStoreStore } from '@/stores/store';
const store = useMyStoreStore();

console.log(store);


</script>

<style>

</style>