const { RedisPubSub } = require('graphql-redis-subscriptions');
const redis = require("redis");

const options = {
    host: 'SG-realtimegraphql-36458',
    port: '6379',
    password: '4HeE9Vf1J03SSJo0ksNAd7wsMm7SCDsE'
};

const subscriber = redis.createClient();

const publisher = redis.createClient();
 

const pubsub = new RedisPubSub({
    publisher,
    subscriber
});


module.exports = pubsub;