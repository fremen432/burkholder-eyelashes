const { gql } = require('apollo-server-express');
const { User } = require('../models')

const typeDefs = gql`

    type Query {
        helloWorld: String
    }
    
`;

module.exports = typeDefs;