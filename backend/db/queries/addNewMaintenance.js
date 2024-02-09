const db = require('../connection');

const addNewMaintenance =  (lease_id, unit_id, description, service, status) => {
 
  return db
  .query( 'INSERT INTO maintenance (lease_id, unit_id, description, cost, service, date_started, date_completed, status) VALUES ($1, $2, $3, NULL, $4, CURRENT_TIMESTAMP, NULL, $5)',
  [lease_id, unit_id, description, service, status])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  addNewMaintenance,
};