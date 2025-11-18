import { api, API_URLS } from './api';

const categoryService = {
  // Get all categories
  getAll: async () => {
    const response = await api.get(`${API_URLS.categories}/categories`);
    return response.data;
  },

  // Get single category
  getById: async (id) => {
    const response = await api.get(`${API_URLS.categories}/categories/${id}`);
    return response.data;
  },

  // Create category
  create: async (categoryData) => {
    const response = await api.post(`${API_URLS.categories}/categories`, categoryData);
    return response.data;
  },

  // Update category
  update: async (id, categoryData) => {
    const response = await api.put(`${API_URLS.categories}/categories/${id}`, categoryData);
    return response.data;
  },

  // Delete category
  delete: async (id) => {
    const response = await api.delete(`${API_URLS.categories}/categories/${id}`);
    return response.data;
  }
};

export default categoryService;
