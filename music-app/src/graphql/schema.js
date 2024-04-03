// src/graphql/schema.js

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Artist {
    id: ID!
    name: String!
    # Add other fields as needed
  }

  type Album {
    id: ID!
    title: String!
    # Add other fields as needed
  }

  type Song {
    id: ID!
    title: String!
    # Add other fields as needed
  }

  type Query {
    artists: [Artist]
    albums: [Album]
    songs: [Song]
  }
`;

module.exports = typeDefs;
