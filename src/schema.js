const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    fname: String!
    lname: String!
    username: String!
    email: String!
    password: String!
    clothingItem: [ClothingItem!]!
  }

  type ClothingItem {
    id: Int!
    season: String!
    color: String!
    appareltype: String!
    shortdesc: String!
    longdesc: String
    user: User!
  }

  type Query {
    getAllClothingItems: [ClothingItem!]!
    getSingleClothingItem(id: Int!): ClothingItem
  }

  type Mutation {
    createUser(
      fname: String!
      lname: String!
      username: String!
      email: String!
      password: String!
    ): User!

    createClothingItem(
      userId: Int!
      season: String!
      color: String!
      appareltype: String!
      shortdesc: String!
      longdesc: String
    ): ClothingItem!
  }
`;

module.exports = typeDefs;
