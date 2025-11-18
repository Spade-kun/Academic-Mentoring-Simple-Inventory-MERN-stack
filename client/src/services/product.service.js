import { api, API_URLS } from './api';

const productService = {
  // Get all products
  getAll: async () => {
    const response = await api.get(`${API_URLS.products}/products`);
    return response.data;
  },

  // Get single product
  getById: async (id) => {
    const response = await api.get(`${API_URLS.products}/products/${id}`);
    return response.data;
  },

  // Create product
  create: async (productData) => {
    const response = await api.post(`${API_URLS.products}/products`, productData);
    return response.data;
  },

  // Update product
  update: async (id, productData) => {
    const response = await api.put(`${API_URLS.products}/products/${id}`, productData);
    return response.data;
  },

  // Delete product
  delete: async (id) => {
    const response = await api.delete(`${API_URLS.products}/products/${id}`);
    return response.data;
  }
};

export default productService;
