const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const historySchema = new Schema (
    {
        orderId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON:{
            getters: true
        }
    }
);

module.exports = historySchema;