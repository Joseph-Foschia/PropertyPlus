const db = require('../connection');

const authenticateUser =  (email, password) => {
 
  return db
  .query('SELECT * FROM landlords WHERE email = $1', [email])
  .then((res) => {
    const user = res.rows[0]
    
    if(user && user.password === password) {
    
      const token = user.id
      const userData = { id: user.id, name: user.name, email: user.email, type: "landlord" };
      
      console.log('Auth Success')
      return {user: userData, token}
    } else {
      return db
      .query('SELECT * FROM tenants WHERE email = $1', [email])
      .then((res) => {
        const user = res.rows[0];

        if (user && user.password === password) {
          const token = user.id;
          const userData = { id: user.id, name: user.name, email: user.email, type: "tenant" };
          return {user: userData, token}
        } else {
          console.log("Invalid auth user query line 27")
          return null; 
        }
    })
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