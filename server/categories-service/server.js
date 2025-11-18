const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const Category = require('./models/category.model');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

// Routes
// Get all categories
app.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single category
app.get('/categories/:id', async (req, res) => {
    try {
        const category = await Category.findOne({ id: parseInt(req.params.id) });
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create category
app.post('/categories', async (req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update category
app.put('/categories/:id', async (req, res) => {
    try {
        const category = await Category.findOne({ id: parseInt(req.params.id) });
        if (!category) return res.status(404).json({ message: 'Category not found' });

        Object.assign(category, req.body);
        const updatedCategory = await category.save();
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete category
app.delete('/categories/:id', async (req, res) => {
    try {
        const category = await Category.findOne({ id: parseInt(req.params.id) });
        if (!category) return res.status(404).json({ message: 'Category not found' });

        await category.deleteOne();
        res.json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 10003;
app.listen(PORT, () => {
    console.log(`Categories service running on port ${PORT}`);
});