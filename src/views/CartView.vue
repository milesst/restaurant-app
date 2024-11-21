<script setup lang="ts">
import { computed } from 'vue';
import CartItem from '../components/CartItem.vue';
import { useCartStore } from '../store/Cart.store';
import { useRouter } from 'vue-router';
import { useAppStore } from '../store/App.store';

const store = useCartStore()
const commonStore = useAppStore()

const router = useRouter()

const totalPrice = computed(() => {
    return store.cart.reduce((acc, val) => {
        return acc + val.product.price * val.amount
    }, 0)
})
const createOrder = () => {
    commonStore.createToast({
        message: 'Заказ создан'
    })
    router.push('/')
    store.resetCart()
}
</script>

<template>
    <div v-if="store.cart.length > 0">
        <div class="cart-list">
            <CartItem
            v-for="item in store.cart"
            :key="item.product.id"
            :item="item"
            class="cart-item"
            >
            </CartItem>
        </div>
        <div class="summary mt-5 is-flex is-flex-direction-column is-align-items-end">
            <div class="price-wrap is-flex-grow-0">Итого: {{ totalPrice }} ₽</div>
            <button @click="createOrder" class="button is-primary is-size-5 is-flex-grow-0">Заказать</button>
        </div>
    </div>
    <div v-else>Корзина пуста</div>
</template>