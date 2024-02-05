
const express = require('express');
const {authenticateUser} = require("../db/queries/authenticateUserQuery")
const router = express.Router();


router.post('/login', (req, res) => {

  const { email, password } = req.body;

  authenticateUser(email, password)
    .then(auth => {
      if(auth) {
        console.log(auth)
        res.json({ message: 'Authentication successful', user: auth.user, token: auth.token });
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