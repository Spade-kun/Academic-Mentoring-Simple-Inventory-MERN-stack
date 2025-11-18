import { api, API_URLS } from './api';

const supplierService = {
  // Get all suppliers
  getAll: async () => {
    const response = await api.get(`${API_URLS.suppliers}/suppliers`);
    return response.data;
  },

  // Get single supplier
  getById: async (id) => {
    const response = await api.get(`${API_URLS.suppliers}/suppliers/${id}`);
    return response.data;
  },

  // Create supplier
  create: async (supplierData) => {
    const response = await api.post(`${API_URLS.suppliers}/suppliers`, supplierData);
    return response.data;
  },

  // Update supplier
  update: async (id, supplierData) => {
    const response = await api.put(`${API_URLS.suppliers}/suppliers/${id}`, supplierData);
    return response.data;
  },

  // Delete supplier
  delete: async (id) => {
    const response = await api.delete(`${API_URLS.suppliers}/suppliers/${id}`);
    return response.data;
  }
};

export default supplierService;
