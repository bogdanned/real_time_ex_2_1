import { RedisPubSub } from 'graphql-redis-subscriptions';
import * as Redis from 'ioredis';

const options = {
    host: 'eu1-native-anchovy-30330.lambda.store',
    port: '30330',
    password: 'e5716cdccb2f4fac9a4b8d66365284a2',
    retryStrategy: times => {
        // reconnect after
        return Math.min(times * 50, 2000);
    }
};



const pubsub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options)
});


module.exports = pubsub;