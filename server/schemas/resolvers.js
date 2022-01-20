const { AuthenticationError } = require('apollo-server-express');
const { User, Item, History } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        //fine one user and populate the items and history ref
        user: async (parent, {username}) => {
            return User.findOne({username}).populate('items').populate({path:'history', populate: {path: 'items'} }).exec()
        },

        //find all user and populate the item and history ref
        users: async () => {
            return User.find().populate('items').populate({path:'history', populate: {path: 'items'} }).exec();
        },

        //find all item (review is already included because it is a schema under item). sort item by createdAt
        items: async () => {
            return Item.find().sort({ createdAt: -1 })
        },

        //find single item with the itemID
        item: async(parent, {itemId}) => {
            return Item.findOne({itemId})
        },

        //find single historyOrder with orderId and populate the items data
        history: async (parent, {orderId}) => {
            return History.findOne({orderId}).populate('items')
        },

        //find all history and populate all the item's data
        histories: async () => {
            return History.find().populate('items')
        }
    },
    Mutation: {
        addUser: async (parent, {username, email, password, role_id}) => {
            const user = await User.create({ username, email, password, role_id})
            const token = signToken(user)

            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if(!user) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const correctPw = await user.isCorrectPassword(password)

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user)

            return { token, user }
        },

        addItem: async (parent, { name, description, count, price, username }) => {
            const item = await Item.create({ name, description, count, price});

            await User.findOneAndUpdate(
                {username: username},
                { $push: {item: item._id}}
            );

            return item;
        },

        addReview: async (parent, { itemId, reviewBody, writtenBy }) => {
            return Item.findOneAndUpdate(
                { _id: itemId },
                { $addToSet: { review: { reviewBody, writtenBy }}},
                { new: true, runValidators: true }
            )
        },

        createHistory: async (parent, {username, itemArray}) => {
            if (!itemArray){
                itemArray = []
            };

            const history = await History.create({ username, itemArray })

            return history
        },

        updateHistory: async (parent, {orderId, itemId}) => {
            return History.findOneAndUpdate(
                { orderId: orderId},
                { $push: { items: {itemId} }},
                { new: true }
            )
        },

        removeItem: async (parent, {itemId}) => {
            return Item.findOneAndDelete({ _id: itemId })
        },

        removeReview: async(parent, {itemId, reviewId }) => {
            return Item.findOneAndUpdate(
                { _id: itemId },
                { $pull: { review: { reviewId: reviewId }}},
                { new: true }
            )
        },

        removeHistory: async (parent, {orderId}) => {
            return History.findOneAndDelete({ _id: orderId })
        }
    }
}

module.exports = resolvers