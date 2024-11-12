<script setup lang="ts">
import MenuCategory from '../types/MenuCategory';
import SidebarCategory from './SidebarCategory.vue';
const selectedCategory = defineModel<MenuCategory | null>()
const categories: MenuCategory[] = [
  {
    name: 'Пицца'
  },
  {
    name: 'Сеты'
  },
  {
    name: 'Наборы'
  },
  {
    name: 'Роллы'
  },
  {
    name: 'Горячее'
  },
  {
    name: 'Десерты'
  },
  {
    name: 'Напитки'
  }
]


</script>

<template>
    <aside class="menu p-4">
  <ul class="menu-list">
    <SidebarCategory @click="() => selectedCategory = category" v-for="category in categories" :key="category.name" :category="category" :selected="selectedCategory?.name === category.name"></SidebarCategory>
  </ul>
</aside>    
</template>

<style scoped>
.menu-list > * {
  padding: 1rem 0.5rem;
  font-size: 1.2rem;
  /* background: radial-gradient(ellipse at top, #fffdfd, transparent),
            radial-gradient(ellipse at bottom, #efeded, transparent); */
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgba(243, 243, 243, 0.3);
  transition: background 1s;
}
.menu-list > *:not(.selected):hover {
  background: radial-gradient(ellipse at top, #edeaea, transparent),
            radial-gradient(ellipse at bottom, #efeded, transparent);
  transition: background 1s;
}
.menu-list > * > a {
  background: none;
}
.menu {
  width: 20rem;
}
.menu-list {
  display: grid;
  gap: 1rem;
}
</style>