<template>
    <div class="card">
        
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src="https://bulma.io/assets/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{ product.name }}</p>
      </div>
    </div>

    <div class="content">
      <div>{{ product.description }}</div>
      <div class="is-flex mt-3 is-justify-content-space-between">
        <div class="price-wrap">{{ product.price }} ₽</div>
        <div class="add-wrap is-flex is-align-items-center">
          <button v-if="cartAmount" @click="store.removeFromCart(product)" class="button is-ghost mr-2">
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
          <div class="mr-4 has-text-weight-bold" v-if="cartAmount">{{ cartAmount }}</div>
          <button @click="store.addToCart(product)" class="button is-primary">
            <font-awesome-icon class="primary-icon" icon="fa-solid fa-plus" />
          </button>
        </div>
      </div>
    </div>
  </div>
    </div>
</template> 

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../store/Cart.store';
import Product from '../types/Product';
import CartItem from '../types/CartItem';

const props = defineProps<{
  product: Product
}>()

const store = useCartStore()

const cartAmount = computed(() => {
  const cartItem = store.cart.find((cartItem: CartItem) => props.product.id === cartItem.product.id)
  if (!cartItem)
    return null
  return cartItem.amount
})

const handleAddToCart = (product: Product) => {
  store.addToCart(product)
}
</script>

<style lang="scss">
@import '../assets/_colors.scss';

.price-wrap {
  color: $primary;
  font-size: 1.4rem;
  font-weight: bold;
}

.primary-icon * {
  color: white !important;
}

</style>