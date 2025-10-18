const mongoose = require('mongoose');
const Counter = require('./counter.model');

const categorySchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Pre-save middleware to auto-increment ID
categorySchema.pre('save', async function(next) {
    if (this.isNew) {
        const counter = await Counter.findByIdAndUpdate(
            'categoryId',
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.id = counter.seq;
    }
    next();
});

module.exports = mongoose.model('Category', categorySchema);