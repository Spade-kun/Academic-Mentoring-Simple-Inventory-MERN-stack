const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const Supplier = require('./models/supplier.model');

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
// Get all suppliers
app.get('/suppliers', async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single supplier
app.get('/suppliers/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findOne({ id: parseInt(req.params.id) });
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single supplier
app.get('/suppliers/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create supplier
app.post('/suppliers', async (req, res) => {
    const supplier = new Supplier({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    });

    try {
        const newSupplier = await supplier.save();
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update supplier
app.put('/suppliers/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });

        Object.assign(supplier, req.body);
        const updatedSupplier = await supplier.save();
        res.json(updatedSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete supplier
app.delete('/suppliers/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });

        await supplier.remove();
        res.json({ message: 'Supplier deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 10004;
app.listen(PORT, () => {
    console.log(`Suppliers service running on port ${PORT}`);
});