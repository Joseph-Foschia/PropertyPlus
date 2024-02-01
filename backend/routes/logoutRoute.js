
const express = require('express');


const router = express.Router();


  //change /details to best describe what your api call is
  router.get('/details',(req, res) => { //when trying to grab json data make sure to put an /api fist. Ex: http://localhost:3000/api/landlords/<route name>

    //logic for returning api data goes here

  });





module.exports = router;