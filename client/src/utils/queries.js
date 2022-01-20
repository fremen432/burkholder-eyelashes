import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
    query getUsers {
        users {
            _id
            username
            email
            items {
                _id
                name
                description
                count
                price
            }
            history{
                orderId
                items{
                    name
                    price
                }
                username
            }
        }
    }
`;

export const QUERY_USER = gql `
    query getUser($username: String!) {
        user(username: $username){
            _id
            username
            email
            items{
                name
                description
                count
                price
            }
            history{
                orderId
                items{
                    name
                    price
                }
            }
        }
    }
`;

export const QUERY_ITEMS = gql`
    query getItems {
        items {
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

export const QUERY_ITEM = gql `
    query getItem($itemId: ID!){
        item(itemId: $itemId){
            _id
            name
            description
            count
            price
            review{
                reviewBody
                writtenBy
                createdAt
            }
        }
    }
`;

export const QUERY_HISTORIES = gql`
    query getHistories{
        histories {
            orderId
            username
            createdAt
            items{
                name
                price
            }
        }
    }
`;

export const QUERY_HISTORY = gql`
    query history($orderId: ID!){
        history(orderId: $orderId){
            orderId
            items {
                _id
                name
                description
                count
                price
            }
            username
            createdAt
        }
    }`