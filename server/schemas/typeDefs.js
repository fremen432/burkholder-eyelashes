const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        items: [Item]
        history: [History]
    }

    type Item{
        _id: ID
        name: String!
        description: String!
        count: Number!
        price: Number!
        review: [Review]
        username: String
        image: URL
    }

    type History{
        orderId: ID!
        items: [Items]
        username: String!
        userId: ID!
        createdAt: String
    }

    type Review{
        reviewId: ID!
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
        history(orderId): History
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, role_id: Number!): Auth
        login(email: String!, password: String!): Auth
        addItem(name: String!, description: String!, count: Number!, price: Number!, image: URL): Item
        addReview(reviewBody: String!, writtenBy: String!): Review
        addHistory(username: String, userId: ID!, items: Array!): History
        removeItem(itemId: ID!): Item
        removeReview(itemId: ID!, reviewId: ID!): Review
        removeHistory(orderId: ID!): History
    }
    
`;

module.exports = typeDefs;