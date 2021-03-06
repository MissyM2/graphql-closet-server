const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('../db/models');
const config = require('../db/config/config.json');

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  context: { models },
});
console.log('hi there');
const port = config.port || 4000;

server
  .listen()
  .then(({ url }) => console.log(`Server is running on localhost:${port}`));
