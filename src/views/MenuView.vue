<script setup lang="ts">
import useProducts from '../composables/useProducts';
import TheSidebar from '../components/TheSidebar.vue';
import ProductCard from '../components/ProductCard.vue';
import { ref, watch } from 'vue';
import MenuCategory from '../types/MenuCategory';

const category = ref<MenuCategory | null>(null)
const isLoading = ref(false)
const { products, error, loadProducts } = useProducts()

watch(category, async (newCategory: MenuCategory | null) => {
    isLoading.value = true
    await loadProducts(newCategory)
    isLoading.value = false
}
)
</script>

<template>
    <div class="is-flex">
        <TheSidebar
        v-model="category"
        ></TheSidebar>
        <div class="is-flex-grow-1 p-5" v-if="category">
            <div v-if="!isLoading" class="product-list-wrap grid is-col-min-10">
                <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
                <div v-if="products.length === 0">No Products</div>
            </div>
            <div v-else>Loading...</div>
        </div>
        <div v-else>
            <h2 class="is-size-3 p-5">Promotion Page</h2>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/_colors.scss';

.card {
    margin-bottom: var(--bulma-block-spacing);
}
</style>