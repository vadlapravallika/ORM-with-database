// src/graphql/resolvers.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  artists: async () => await prisma.artist.findMany(),
  albums: async () => await prisma.album.findMany(),
  songs: async () => await prisma.song.findMany(),
};

module.exports = resolvers;
