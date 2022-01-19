import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
    query users {
        _id
        username
        email
        items {
            _id
            name
            description
            count
            price
            review{
                reviewId
                reviewBody
                writtenBy
                createdAt
            }
        }
        history {
            orderId
            username
            userId
        }
    }
`;

export const QUERY_USER = gql `
    query user($username: String!) {
        user(username: $username){
            _id
            username
            email
            items{
                _id
                name
                description
                count
                price
            }
            history{
                orderId
                username
                userId
            }
        }
    }
`;

export const QUERY_ITEMS = gpl`
    query items {
        _id
        name
        description
        count
        price
        review {
            reviewId
            reviewBody
            writtenBy
            createdAt
        }
    }
`;

export const QUERY_ITEM = gql `
    query item(itemId: ID!){
        item(itemId: $itemID){
            _id
            name
            description
            count
            price
            review {
                reviewId
                reviewBody
                writtenBy
                createdAt
            }
        }
    }
`;

export const QUERY_HISTORIES = gql`
    query histories{
        orderId: ID!
        items {
            _id: ID
            name: String!
            description: String!
            count: Int!
            price: Int!
        }
        username: String!
        userId: ID!
        createdAt: String
    }
`;

export const QUERY_HISTORY = gql`
    query history($orderId: ID!){
        history(orderId: $orderId){
            orderId: ID!
            items {
                _id: ID
                name: String!
                description: String!
                count: Int!
                price: Int!
            }
            username: String!
            userId: ID!
            createdAt: String
        }
    }`