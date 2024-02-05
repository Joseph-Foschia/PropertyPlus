
const db = require('../connection');

const getProperties =  (id) => {
 
  return db
  .query('SELECT * FROM units WHERE landlord_id = $1', [id])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  getProperties,
};