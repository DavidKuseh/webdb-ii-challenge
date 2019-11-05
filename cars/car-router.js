const express = require('express');
// const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req,res) => {
    console.log('testing')
})

module.exports = router;