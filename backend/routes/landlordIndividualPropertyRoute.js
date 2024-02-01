
const express = require('express');
const {getIndividualProperty} = require('../db/queries/getIndividualProperyQuery')

const router = express.Router();


  //change /details to best describe what your api call is
  router.get('/details/:id',(req, res) => { //when trying to grab json data make sure to put an /api fist. Ex: http://localhost:3000/api/landlords/<route name>
    const id = req.params.id
   
    getIndividualProperty(id)
      .then((landlord) => {
        return res.json(landlord)
      })
      .catch((error) => {
        console.error('Error executing property query', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      })

  });





module.exports = router;