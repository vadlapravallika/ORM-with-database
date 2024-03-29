// src/routes/artistRoutes.js

const express = require('express');
const router = express.Router();
const { getAllArtists, getArtistById, createArtist, updateArtistById, deleteArtistById } = require('../controllers/artistController');

router.get('/', getAllArtists);
router.get('/:id', getArtistById);
router.post('/', createArtist);
router.put('/:id', updateArtistById);
router.delete('/:id', deleteArtistById);

module.exports = router;
