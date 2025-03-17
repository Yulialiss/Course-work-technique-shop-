import axios from "axios";
import { Product } from "../types";  

axios.defaults.baseURL = 'http://localhost:5000';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get("/products");
    console.log("Отримані продукти:", response.data); 
    return response.data as Product[];  
  } catch (error) {
    console.error("Помилка при отриманні продуктів:", error);
    return [];  
  }
};
export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`/products/${id}`);
    console.log("Отриманий продукт:", response.data); 
    return response.data as Product;  
  } catch (error) {
    console.error("Помилка при отриманні продукту:", error);
    throw error;  
  }
};