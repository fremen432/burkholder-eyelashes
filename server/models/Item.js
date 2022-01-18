const { Schema, model, now } = require('mongoose');
const dateFormate = require('../utils/dateFormat');
const reviewSchema = require('./Review');

const itemSchema = new Schema (
    {
        name:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description:{
            type: String,
            required: true,
            trime: true
        },
        count:{
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        review: [reviewSchema],
        username:{
            type: String,
            required: false
        }
    },
    {
        toJSON:{
            getters: true
        }
    }
);

itemSchema.virtual('reviewCount').get(function() {
    return this.review.length;
})

const Item = model('Item', itemSchema);

module.exports = Item;