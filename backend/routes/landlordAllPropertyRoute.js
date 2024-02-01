
const express = require('express');
const {getLandlords} = require('../db/queries/getAllLandlordsQuery');

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





module.exports = router;