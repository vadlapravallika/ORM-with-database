// src/controllers/artistController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllArtists = async (req, res) => {
  try {
    const artists = await prisma.artist.findMany();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllArtists };
