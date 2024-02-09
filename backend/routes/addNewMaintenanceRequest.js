
const express = require('express');
const {addNewMaintenance} = require('../db/queries/addNewMaintenance');


const router = express.Router();

router.get('/',(req, res) => { //when trying to grabjson data make sure to put an /api fist. Ex: http://localhost:3000/api/landlords


  getLandlords()
    .then((landlord) => {
      return res.json(landlord)
    })
    .catch((error) => {
      console.error('Error executing landlord query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })
});


  router.post('/new-repair',(req, res) => { 
    // console.log(req.body);
    // console.log("params: ", req.params);
    const { lease_id, unit_id, description, service, status} = req.body;
    // console.log(lease_id);
    addNewMaintenance(lease_id, unit_id, description, service, status)
    .then((request) => {
      return res.json(request)
    })
    .catch((error) => {
      console.error('Error executing property query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })


  });


  /* Ok so this shit works the issue is the landlord receiving the request.  There are two options, we see how the 
  maintenance page is doing add everything on there and they can complete/see the request along with a new table called requests.

  Option two, honestly I don't fucking know lol, search up how to pass data to another login
*/

module.exports = router;