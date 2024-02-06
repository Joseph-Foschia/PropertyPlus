const db = require('../connection');

const findTenantByEmail =  (email) => {
 
  return db
  .query('SELECT id, name, email FROM tenants WHERE email = $1', [email])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  findTenantByEmail,
};