const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
      res.json(cars); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('cars').where({ id }).first()
    .then(car => {
      res.json(car);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
  });
  
  router.post('/', (req, res) => {
    db('cars').insert({ VIN: req.body.VIN, make: req.body.make, model: req.body.model, mileage: req.body.mileage, transmission_type: req.body.transmission_type, title: req.body.title})
    .then(ids => {
      db('cars').where({ id: ids[0] })
      .then(newCarEntry => {
        res.status(201).json(newCarEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });
  
module.exports = router; 