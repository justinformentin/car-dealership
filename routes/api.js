const express = require('express');
const router = express.Router();
const Cars = require('../models/Cars');

// @route   GET /api/
// @desc    Get all cars
// @access  Public
router.get('/', async (req, res) => {
  try {
    const cars = await Cars.find({});
    res.send({ cars })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/:id
// @desc    Get a specific card
// @access  Public
router.get('/car/:id', async (req, res) => {
  try {
    const car = await Cars.findById(req.params.id)
    console.log(req.params.id);
    res.send({ car });
  } catch (err) {
    res.status(404).send({ message: 'Car not found!' });
  }
});

module.exports = router;
