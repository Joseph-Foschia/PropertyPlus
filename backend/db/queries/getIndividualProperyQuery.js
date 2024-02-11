const db = require('../connection');

const getIndividualProperty =  (id) => {
 
  return db
  .query(`SELECT units.*, leases.start_date as start, leases.rent as lease_rent, tenants.name as tenant_name, tenants.phone_number as tenant_phone, landlords.name as landlords_name 
  FROM units 
  LEFT JOIN leases ON units.id = leases.unit_id 
  LEFT JOIN tenants ON leases.tenant_id = tenants.id 
  LEFT JOIN landlords ON units.landlord_id = landlords.id
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