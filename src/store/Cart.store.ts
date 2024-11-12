import { defineStore } from 'pinia'
import CartItem from '../types/CartItem'
import Product from '../types/Product'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([])

  function addToCart (newItem: Product) {
    const cartItem = cart.value.find((cartItem: CartItem) => cartItem.product.id === newItem.id)
    if (!cartItem)
        cart.value.push({ product: newItem, amount: 1 })
    else
        cartItem.amount++
  }

  function removeFromCart (itemToRemove: Product) {
    const cartItem = cart.value.find(item => item.product.id === itemToRemove.id)
    if (!cartItem)
      return
    if (cartItem.amount > 1)
      cartItem.amount--
    else
      cart.value.splice(cart.value.indexOf(cartItem))
  }

  function resetCart () {
    cart.value = []
  }

  return {
    cart, 
    addToCart,
    removeFromCart,
    resetCart
  }
})