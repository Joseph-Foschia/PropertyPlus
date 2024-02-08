
const express = require('express');
const {addNewMaintenance} = require('../db/queries/addNewMaintenance');


const router = express.Router();

  router.post('/maintenance',(req, res) => { 
    console.log("IT WORKED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    const { lease_id, unit_id, description} = req.body;
    
    addNewMaintenance(unit_id, tenant_id, start_date, end_date, rent, lease_docs)
    .then((request) => {
      return res.json(request)
    })
    .catch((error) => {
      console.error('Error executing property query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })


  });





module.exports = router;