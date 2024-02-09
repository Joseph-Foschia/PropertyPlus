const db = require('../connection');

const addNewMaintenance =  (lease_id, unit_id, description) => {
 
  return db
  .query( 'INSERT INTO maintenance (lease_id, unit_id, description, cost, date_started, date_completed) VALUES ($1, $2, $3, NULL, CURRENT_TIMESTAMP, NULL)',
  [lease_id, unit_id, description])
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