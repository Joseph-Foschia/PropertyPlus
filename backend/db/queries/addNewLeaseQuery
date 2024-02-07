const db = require('../connection');

const addNewLease =  (unit_id, tenant_id, start_date, end_date, rent, lease_docs) => {
 
  return db
  .query( 'INSERT INTO leases (unit_id, tenant_id, start_date, end_date, rent, lease_docs) VALUES ($1, $2, $3, $4, $5, $6)',
  [unit_id, tenant_id, start_date, end_date, rent, lease_docs])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  addNewLease,
};