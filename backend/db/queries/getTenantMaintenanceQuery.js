const db = require('../connection');

const getTenantMaintenanceRequests =  (id) => {
 
  return db
  .query(`SELECT maintenance.*, tenants.name as name
  FROM maintenance 
  JOIN leases ON leases.id = maintenance.lease_id
  JOIN tenants ON leases.tenant_id = tenants.id
  WHERE tenants.id = $1
  ORDER BY 
  CASE 
    WHEN status = 'Requested' THEN 1
    WHEN status = 'In Progress' THEN 2
    WHEN status = 'Completed' THEN 3
    ELSE 4
  END;`, [id])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  getTenantMaintenanceRequests,
};