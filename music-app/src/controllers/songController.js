// src/controllers/songController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllSongs = async (req, res) => {
  try {
    const songs = await prisma.song.findMany();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllSongs };
