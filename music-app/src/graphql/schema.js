// src/graphql/schema.js

const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Artist {
    id: Int
    name: String
    country: String
    albums: [Album]
  }

  type Album {
    id: Int
    title: String
    releaseYear: Int
    artist: Artist
    songs: [Song]
  }

  type Song {
    id: Int
    title: String
    duration: Int
    album: Album
  }

  type Query {
    artists: [Artist]
    albums: [Album]
    songs: [Song]
  }
`);

module.exports = schema;
