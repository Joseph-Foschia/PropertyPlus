
const express = require('express');
const {addNewMaintenance} = require('../db/queries/addNewMaintenance');


const router = express.Router();

  router.post('/new-repair',(req, res) => { 
    console.log("IT WORKED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(req.body);
    console.log("params: ", req.params);
    // const { lease_id, id, description} = req.body;
    console.log(lease_id);
    addNewMaintenance(lease_id, id, description )
    .then((request) => {
      return res.json(request)
    })
    .catch((error) => {
      console.error('Error executing property query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })


  });





module.exports = router;