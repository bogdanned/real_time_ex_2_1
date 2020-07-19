const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { schema, resolvers } = require("./graphQL");

const app = express();
const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app })

const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

const PORT = 4000;

httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
})

