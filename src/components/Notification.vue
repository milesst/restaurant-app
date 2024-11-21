<script setup lang="ts">
const props = defineProps<{
    message: string
}>()    
</script>

<template>
    <div class="box toast-wrap">
        <p class="toast-text">{{ message }}</p>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/_colors.scss';

.toast-wrap {
    background-color: var(--bulma-success);
    
    .toast-text {
        color: white;
    }
}
</style>