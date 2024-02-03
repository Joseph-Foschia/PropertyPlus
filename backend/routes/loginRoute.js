
const express = require('express');
const {authenticateUser} = require("../db/queries/authenticateUserQuery")
const router = express.Router();


router.post('/login', (req, res) => {

  const { email, password } = req.body;

  authenticateUser(email, password)
    .then(user => {
      if(user) {
        res.json({ message: 'Authentication successful', user })
      } else {
        res.status(401).json({message: "Invalid credentials", })
      }
    })
    .catch(error => {
      console.error('Authentication error', error);
      res.status(500).json({ message: 'Internal server error' });
    })
});




module.exports = router;