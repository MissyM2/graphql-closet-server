const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('../db/models');
const config = require('../db/config/config.json');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

const port = config.port || 8000;

server
  .listen()
  .then(({ url }) => console.log(`Server is running on localhost:${port}`));
