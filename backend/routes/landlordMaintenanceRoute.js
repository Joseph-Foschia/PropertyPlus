
const express = require('express');
const {getLandlordsMaintenanceRequests} = require('../db/queries/getLandlordMaintenanceQuery')
const {getDetailsForMaintenanceRequest, changeMaintenceValues, getUnitMaintenanceRequests  } = require('../db/queries/maintenanceRequestDetailsQuery')
const router = express.Router();
 

  //change /details to best describe what your api call is
  router.get('/requests/:id',(req, res) => { //when trying to grab json data make sure to put an /api fist. Ex: http://localhost:3000/api/landlords/<route name>
    const id = req.params.id
    getLandlordsMaintenanceRequests(id)
    .then((requests) => {
      return res.json(requests)
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });

  });


  router.get('/repairs/details/:id',(req, res) => { 
    const id = req.params.id
    getDetailsForMaintenanceRequest(id)
    .then((requests) => {
      return res.json(requests)
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });

  });



  router.post('/post/change',(req, res) => { 
    
    const { id, status, cost, service} = req.body;
    
    changeMaintenceValues(id, status, cost, service)
    .then((maintenance) => {
      return res.json(maintenance)
    })
    .catch((error) => {
      console.error('Error executing maintenance query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })


  });


  router.get('/all/:id',(req, res) => { 
    const id = req.params.id
    getUnitMaintenanceRequests(id)
    .then((requests) => {
      return res.json(requests)
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });

  });





module.exports = router;