const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const path = require('path');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

