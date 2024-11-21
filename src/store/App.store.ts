import { defineStore } from 'pinia'
import { ref } from 'vue'
import Toast from '../types/Toast'

export const useAppStore = defineStore('app', () => {
  const toasts = ref<Toast[]>([])

  const createToast = (toast: Toast) => {
    toast.id = (toasts.value.length + 1).toString()
    toasts.value.push(toast)

    setTimeout(() => {
        toasts.value = toasts.value.filter((item: Toast) => item.id !== toast.id);
      }, toast.duration || 3000);
  }

  return {
    toasts,
    createToast
  }
})