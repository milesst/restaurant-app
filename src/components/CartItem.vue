<template>
    <div class="box is-flex">
        <div class="item-image">
            <figure class="image is-4by3">
            <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
            />
            </figure>
        </div>
        <div class="item-info">
            <div>{{ item.product.name }}</div>
            <div>For 1: {{ item.product.price }}</div>
            <div>Amount: {{ item.amount }}</div>
            <div>Total: {{ totalAmount }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CartItem from '../types/CartItem';

const props = defineProps<{
    item: CartItem
}>()
const totalAmount = computed(() => props.item.amount * props.item.product.price)
</script>