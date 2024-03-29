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

const getArtistById = async (req, res) => {
  const { id } = req.params;
  try {
    const artist = await prisma.artist.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!artist) {
      res.status(404).json({ error: 'Artist not found' });
    } else {
      res.json(artist);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createArtist = async (req, res) => {
  const { name, genre } = req.body;
  try {
    const newArtist = await prisma.artist.create({
      data: {
        name,
        genre,
      },
    });
    res.json(newArtist);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateArtistById = async (req, res) => {
  const { id } = req.params;
  const { name, genre } = req.body;
  try {
    const updatedArtist = await prisma.artist.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        genre,
      },
    });
    res.json(updatedArtist);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteArtistById = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.artist.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: 'Artist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtistById,
  deleteArtistById,
};
