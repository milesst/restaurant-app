<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import './assets/style.scss'
import { useAppStore } from './store/App.store';
import Notification from './components/Notification.vue';

const store = useAppStore()
</script>

<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
  <Teleport to="body">
    <div v-if="store.toasts.length" class="toaster is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
      <Notification
      v-for="(toast, index) in store.toasts"
      :key="index"
      :message="toast.message"
      ></Notification>
    </div>
  </Teleport>
</template>

<style>
#app {
  height: 100vh;
  background: #faf7f7;
}

.toaster {
  position: absolute;
  right: 40%;
  right: 40%;
  top: 5rem;
  z-index: 100;
}
</style>
