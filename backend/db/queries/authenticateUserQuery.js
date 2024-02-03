const db = require('../connection');

const authenticateUser =  (email, password) => {
 
  return db
  .query('SELECT * FROM landlords WHERE email = $1', [email])
  .then((res) => {
    const user = res.rows[0]
    
    if(user && user.password === password) {
      console.log('Auth Success')
      return user
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