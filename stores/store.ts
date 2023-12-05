import { defineStore } from 'pinia'

export const useMyStoreStore = defineStore('myStoreStore', () => {
  const count = ref(0);
  const name = ref('Carlos');

  const doubleCount = computed(() => count.value * 2);

  function increment(){
    count.value++
    name.value = 'Carlos Guzman'
  }


  return {
    count,
    name,
    doubleCount,
    increment
  }
})
