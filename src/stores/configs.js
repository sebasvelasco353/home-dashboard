import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigsStore = defineStore('configs', () => {
  const isDarkMode = ref(true)

  return { isDarkMode }
})
