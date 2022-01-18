const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema (
    {
        reviewId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reviewBody:{
            type: String,
            required: true,
        },
        writtenBy: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
    },
    {
        toJSON:{
            getters: true
        }
    }
);

module.exports = reviewSchema;