const express = require('express');
//db not working atm for some reason
const db = require('../data/helpers/actionModel');
const router = express.Router();

// grabs all data
router.get('/', (req, res) => {
  db
  .get()
  .then(response => {
    res.status(200).json(response);
  })
  .catch(err => {
    res.status(500).json({ error: 'Could not retrieve action info'})
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db
  .get(id)
  .then(response => {
    res.json(response);
  })
  .catch(error => {
    res.status(500).json( { error: 'Could not find id'});
  });
});

router.post('/', (req, res) => {
  db
  .insert(req.body)
  .then(response => {
    res.status(201).json(response);
  })
  .catch(err => {
    res.status(400).json({ error: 'Could not send data' })
  } )
})

