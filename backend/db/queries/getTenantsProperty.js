const db = require('../connection');

const getTenantProperty =  (id) => {
 
  return db
  .query(`SELECT units.*, leases.start_date as start, leases.rent as lease_rent, tenants.name as tenant_name, landlords.phone_number as landlord_phone, landlords.name as landlords_name, landlords.email as landlord_email 
  FROM units 
  LEFT JOIN leases ON units.id = leases.unit_id 
  LEFT JOIN tenants ON leases.tenant_id = tenants.id 
  LEFT JOIN landlords ON units.landlord_id = landlords.id
  WHERE tenants.id = $1`, [id])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  getTenantProperty
};