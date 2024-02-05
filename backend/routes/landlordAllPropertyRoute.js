
const express = require('express');
const {getLandlords} = require('../db/queries/getAllLandlordsQuery');
const {getProperties} = require('../db/queries/getLandlordsPropertiesQuery');

const router = express.Router();



  router.get('/all',(req, res) => { //when trying to grabjson data make sure to put an /api fist. Ex: http://localhost:3000/api/landlords


    getLandlords()
      .then((landlord) => {
        return res.json(landlord)
      })
      .catch((error) => {
        console.error('Error executing landlord query', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      })
  });

  router.get('/properties/:id', (req, res) => {
    const id = req.params.id

    getProperties(id)
      .then((properties) => {
        return res.json(properties)
      })
      .catch((error) => {
        console.error('Error executing landlord query', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      })

  });




module.exports = router;