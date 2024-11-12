<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import './assets/style.scss'
</script>

<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<style>
#app {
  height: 100vh;
  background: #faf7f7;
}
</style>
