
const express = require('express');
const { addNewProperty } = require('../db/queries/addNewPropertyQuery')


const router = express.Router();

  
  
  router.post('/new',(req, res) => { 
    const { landlord_id, address, status, image, unit_cost } = req.body;
    
    addNewProperty(landlord_id, address, status, image, unit_cost)
    .then((landlord) => {
      return res.json(landlord)
    })
    .catch((error) => {
      console.error('Error executing property query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })


  });





module.exports = router;