const pubsub = require("./pubSub");
const FIBO_TASK_FINISHED = 'FIBO_TASK_FINISHED';
const { expensiveTaskList } = require("../utils/core");


const resolvers = {
    Subscription: {
        fibonacciSeries: {
            resolve: (payload, args, context, info) => {
                // Manipulate and return the new value
                return payload.fibonacciSeries;
            },
            // Additional event labels can be passed to asyncIterator creation
            subscribe: () => {
                try{
                    return pubsub.asyncIterator([FIBO_TASK_FINISHED])
                }catch(e){
                    console.log(e);
                }
            },
        }
    },
    Query: {
        hello: () => ("Welcome to the real-time GraphQL workshop!")
    },
    Mutation: {
        startFibonacciSeries: async (root, args, context) => {
            const n = args.n;
            return await expensiveTaskList(n, async (n, i, fiboResult) => await pubsub.publish(FIBO_TASK_FINISHED, { fibonacciSeries: fiboResult }));
        }
    },
};

module.exports = resolvers
