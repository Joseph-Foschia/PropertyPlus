const db = require('../connection');

const getIndividualProperty =  (id) => {
 
  return db
  .query('SELECT * FROM units WHERE id = $1', [id])
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