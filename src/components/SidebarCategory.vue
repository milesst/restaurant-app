<script setup lang="ts">
const props = defineProps({
    category: {
        type: Object,
        default: () => {}
    },
    selected: {
        type: Boolean
    }
})
</script>

<template>
    <li class="category-item is-clickable" :class="{ selected: selected }"><a>{{ category.name }}</a></li>
</template>

<style lang="scss">
@import '../assets/_colors.scss';

li.category-item.selected {
    background: $primary;
}

li.category-item.selected a {
    color: white !important;
}

.category-item a {
    background: none;
}
</style>