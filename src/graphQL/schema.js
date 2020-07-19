const gql = require("graphql-tag")

const schema = gql`
  type Subscription {
    fibonacciSeries: Int
  }
  type Query {
    time: Int
    hello: String
  }
  type Mutation {
    startFibonacciSeries(n: Int): [Int]
  }
`

module.exports = schema