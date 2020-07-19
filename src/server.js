const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { schema, resolvers } = require("./graphQL");

const app = express();
const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app })

const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

module.exports = {
    server,
    httpServer
}

