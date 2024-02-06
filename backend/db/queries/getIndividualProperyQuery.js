const db = require('../connection');

const getIndividualProperty =  (id) => {
 
  return db
  .query(`SELECT units.*, leases.*, tenants.name as tenant_name, tenants.phone_number as tenant_phone, landlords.* 
  FROM units 
  JOIN leases ON units.id = leases.unit_id 
  JOIN tenants ON leases.tenant_id = tenants.id 
  JOIN landlords ON units.landlord_id = landlords.id
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