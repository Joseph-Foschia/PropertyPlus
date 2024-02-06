
const express = require('express');
const {findTenantByEmail} = require('../db/queries/findTenantByEmailQuery')



const router = express.Router();

  router.get('/lease/:id',(req, res) => { //when trying to grab json data make sure to put an /api fist. Ex: http://localhost:3000/api/landlords/<route name>

    const email = req.params.id

    
    findTenantByEmail(email)
      .then((tenant) => {
        return res.json(tenant)
      })
      .catch((error) => {
        console.error('Error executing property query', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      })


  });





module.exports = router;