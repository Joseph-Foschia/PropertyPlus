const db = require('../connection');

const addNewProperty =  (landlord_id, address, status, image, unit_cost) => {
 
  return db
  .query( 'INSERT INTO units (landlord_id, address, status, image, unit_cost) VALUES ($1, $2, $3, $4, $5)',
  [landlord_id, address, status, image, unit_cost])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  addNewProperty,
};