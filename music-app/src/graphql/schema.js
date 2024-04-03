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
    artist: Artist! # Define the artist field
    songs: [Song!]! # Define the songs field
    # Add other fields as needed
  }

  type Song {
    id: ID!
    title: String!
    descripstion: String!
    # Add other fields as needed
  }

  type Query {
    artists: [Artist]
    albums: [Album]
    songs: [Song]
  }
`;

module.exports = typeDefs;
