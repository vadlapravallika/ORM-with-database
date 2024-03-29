// src/controllers/albumController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllAlbums = async (req, res) => {
  try {
    const albums = await prisma.album.findMany();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllAlbums };
