const db = require('../connection');

const getIndividualProperty =  (id) => {
 
  return db
  .query(`SELECT units.*, leases.*, tenants.* 
  FROM units 
  JOIN leases ON units.id = leases.unit_id 
  JOIN tenants ON leases.tenant_id = tenants.id 
  WHERE units.id = $1`, [id])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  getIndividualProperty
};

//