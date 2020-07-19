const { PubSub } = require('apollo-server');
const pubsub = new PubSub();
const PARALLEL_TASK_FINISHED = 'PARALLEL_TASK_FINISHED';
const {expensiveTaskList} = require("../utils/core");



const resolvers = {

  Subscription: {
    fibonacciSeries: {
      resolve: (payload, args, context, info) => {
        // Manipulate and return the new value
        return payload.fibonacciSeries;
      },
      // Additional event labels can be passed to asyncIterator creation
      subscribe: () => pubsub.asyncIterator([PARALLEL_TASK_FINISHED]),
    }
  },
  Query: {
    hello: () => ("Welcome to the real-time GraphQL workshop!")
  },
  Mutation: {
    startFibonacciSeries(root, args, context) {
      const n = args.n;
      return expensiveTaskList(n, (n, i, fiboResult) => pubsub.publish(PARALLEL_TASK_FINISHED, { fibonacciSeries: fiboResult}));
    }
  },
};

module.exports = resolvers
