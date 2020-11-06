const { Router } = require('express');
const Candidate = require('../models/Candidate-model');

module.exports = Router()
  .post('/', (req, res, next) => {
    Candidate
      .insert(req.body)
      .then(candidate => res.send(candidate))
      .catch(next);
  });
