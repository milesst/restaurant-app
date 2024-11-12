import axios from "axios";

const axiosService = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getProducts = async (categoryName?: string) => {
    return await axiosService.get('products', { params: { category: categoryName } })
}