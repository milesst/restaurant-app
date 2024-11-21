import { ref } from "vue"
import Product from "../types/Product"
import MenuCategory from "../types/MenuCategory"
import { getProducts } from "../service/axios.service"

export const useProducts = () => {
    const products = ref<Product[]>([])
    const error = ref<any>(null)

    const loadProducts = async (category?: MenuCategory | null) => {
        try {
            let result = await getProducts(category?.name)
            if (result.status !== 200) {
                throw Error('error')
            }
            products.value = result.data
        } catch (e: any) {
            error.value = e.message
        }
    }

    return { products, error, loadProducts }
}

export default useProducts