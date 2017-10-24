const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require('./../models');

router.get('/', (req, res) => {
  console.log('Hit server');
  res.send('Server response');
});

module.exports = router;
