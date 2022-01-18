const { Schema, model } = require('mongoose');
const historySchema = require('./History')
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }
        ],
        history: [
            {
                type: Schema.Types.ObjectId,
                ref: 'historySchema'
            }
        ],
        //role_id: 1 for admin, 2 for user
        role_id: {
            type: Number,
            required: true
        }
    },
    {
        toJSON:{
            virtuals: true
        }
    }
);

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password){
    return bcrypt.compare(password, this.password)
};

const User = model('User', userSchema);

module.exports = User;