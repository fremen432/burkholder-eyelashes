import { gql } from '@apollo/client'

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                role_id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser ($username: String!, $email: String!, $password: String!, $role_id: Int!){
        addUser(username: $username, email: $email, password: $password, role_id: $role_id){
            token
            user{
                _id
                username
                email
                role_id
            }
        }
    }
`;

export const ADD_ITEM = gql `
    mutation addItem ($name: String!, $description: String!, $count: Int!, $price: Int!, $username: String!){
        addItem(name: $name, description: $description, count: $count, price:$price, username:$username){
            _id
            name
            description
            count
            price
            username
        }
    }
`;

export const ADD_REVIEW = gql `
    mutation addReview ($itemId: ID!, $reviewBody: String!, $writtenBy: String!){
        addReview (itemId: $itemId, reviewBody: $reviewBody, writtenBy: $writtenBy){
            _id
            name
            review {
                reviewId
                reviewBody
                writtenBy
                createdAt
            }
        }
    }
`;

export const CREATE_HISTORY = gql `
    mutation createHistory ($username: String!, $userId: ID!){
        createHistory (username: $username, userId: $userId){
            orderId
            username
            userId
            createdAt
        }
    }
`;

export const UPDATE_HISTORY = gql `
    mutation updateHistory ($orderId: ID!, $itemId: ID!){
        updateHistory (orderId: $orderId, itemId: $itemId){
            orderId
            items
            username
            userId
            createdAt
        }
    }
`;

export const REMOVE_ITEM = gql`
    mutation removeItem ($itemId: ID!){
        removeItem (itemId: $itemId){
            name
            description
            count
            price
        }
    }
`;

export const REMOVE_REVIEW  = gql`
    mutation removeReview($itemId: ID!, $reviewId: ID!){
        removeReview(itemId: $itemId, reviewId: $reviewId){
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
    }
`;