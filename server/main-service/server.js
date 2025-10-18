const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes for Products Service
app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.PRODUCTS_SERVICE_URL}/products`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single product
app.get('/api/products/:id', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.PRODUCTS_SERVICE_URL}/products/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/products', async (req, res) => {
    try {
        const response = await axios.post(`${process.env.PRODUCTS_SERVICE_URL}/products`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/products/:id', async (req, res) => {
    try {
        const response = await axios.put(`${process.env.PRODUCTS_SERVICE_URL}/products/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${process.env.PRODUCTS_SERVICE_URL}/products/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Routes for Categories Service
app.get('/api/categories', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.CATEGORIES_SERVICE_URL}/categories`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single category
app.get('/api/categories/:id', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.CATEGORIES_SERVICE_URL}/categories/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/categories', async (req, res) => {
    try {
        const response = await axios.post(`${process.env.CATEGORIES_SERVICE_URL}/categories`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/categories/:id', async (req, res) => {
    try {
        const response = await axios.put(`${process.env.CATEGORIES_SERVICE_URL}/categories/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/api/categories/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${process.env.CATEGORIES_SERVICE_URL}/categories/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Routes for Suppliers Service
app.get('/api/suppliers', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.SUPPLIERS_SERVICE_URL}/suppliers`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single supplier
app.get('/api/suppliers/:id', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.SUPPLIERS_SERVICE_URL}/suppliers/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/suppliers', async (req, res) => {
    try {
        const response = await axios.post(`${process.env.SUPPLIERS_SERVICE_URL}/suppliers`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/suppliers/:id', async (req, res) => {
    try {
        const response = await axios.put(`${process.env.SUPPLIERS_SERVICE_URL}/suppliers/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/api/suppliers/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${process.env.SUPPLIERS_SERVICE_URL}/suppliers/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 10001;
app.listen(PORT, () => {
    console.log(`Main service running on port ${PORT}`);
});