
const db = require('../connection');

const getDetailsForMaintenanceRequest =  (id) => {
 
  return db
  .query(`SELECT maintenance.*, tenants.name as name, tenants.phone_number as number, tenants.email as email, units.address as address
  FROM maintenance 
  JOIN leases ON leases.id = maintenance.lease_id
  JOIN units ON units.id = leases.unit_id
  JOIN tenants ON leases.tenant_id = tenants.id
  WHERE maintenance.id = $1`, [id])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


const changeMaintenceValues = (id, status, cost, service) => {
  let query = 'UPDATE maintenance SET status = $1, cost = $2, service = $3';

  if (status === 'Completed') {
    query += ', date_completed = CURRENT_TIMESTAMP';
  }

  query += ' WHERE id = $4';

  return db
    .query(query, [status, cost, service, id])
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });
};



const getUnitMaintenanceRequests =  (id) => {
 
  return db
  .query(`SELECT maintenance.*
  FROM maintenance 
  
  WHERE maintenance.unit_id = $1
  ORDER BY 
  CASE maintenance.status
    WHEN 'Requested' THEN 1
    WHEN 'In Progress' THEN 2
    WHEN 'Completed' THEN 3
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
  getDetailsForMaintenanceRequest, changeMaintenceValues, getUnitMaintenanceRequests
};