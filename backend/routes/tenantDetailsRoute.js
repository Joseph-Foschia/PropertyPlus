
const express = require('express');
const {getTenantProperty} = require('../db/queries/getTenantsProperty')

const router = express.Router();


  
router.get('/tenant/:id',(req, res) => { //when trying to grab json data make sure to put an /api fist. Ex: http://localhost:3000/api/landlords/<route name>
  
  const id = req.params.id
 
  getTenantProperty(id)
    .then((landlord) => {
      return res.json(landlord)
    })
    .catch((error) => {
      console.error('Error executing property query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })

});





module.exports = router;