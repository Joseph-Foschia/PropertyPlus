const db = require('../connection');
const jwt = require('jsonwebtoken');

const secretKey = 'password'; 

const authenticateUser =  (email, password) => {
 
  return db
  .query('SELECT * FROM landlords WHERE email = $1', [email])
  .then((res) => {
    const user = res.rows[0]
    
    if(user && user.password === password) {
      const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
      console.log('Auth Success')
      return {user, token}
    } else {
      console.log("Invalid")
      return null
    }
  })
  .catch((err) => {
    console.error('Authentication error:', err);
    throw err;
  });
};


module.exports = {
 authenticateUser
};