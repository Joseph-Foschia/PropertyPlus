
const express = require('express');
const {getLandlordsMaintenanceRequests} = require('../db/queries/getLandlordMaintenanceQuery')

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

module.exports = router;