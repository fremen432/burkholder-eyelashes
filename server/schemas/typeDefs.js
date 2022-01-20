const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        items: [Item]
        history: [History]
    }

    type Item{
        _id: ID
        name: String
        description: String
        count: Int
        price: Int
        review: [Review]
        username: String
        image: String
    }

    type History{
        orderId: ID
        items: [Item]
        username: String
        createdAt: String
    }

    type Review{
        reviewId: ID
        reviewBody: String
        writtenBy: String
        createdAt: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user(username: String!): User
        users: [User]
        items: [Item]
        item(itemId: ID!): Item
        histories: [History]
        history(orderId: ID!): History
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, role_id: Int!): Auth
        login(email: String!, password: String!): Auth
        addItem(name: String!, description: String!, count: Int!, price: Int!, image: String, username: String!): Item
        addReview(itemId: ID!, reviewBody: String!, writtenBy: String!): Review
        createHistory(username: String, itemArray: ID): History
        updateHistory(orderId: ID!, itemId: ID!): History
        removeItem(itemId: ID!): Item
        removeReview(itemId: ID!, reviewId: ID!): Review
        removeHistory(orderId: ID!): History
    }
`;

module.exports = typeDefs;
