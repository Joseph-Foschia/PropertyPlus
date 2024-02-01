const db = require('../connection');

const getLandlords =  () => {
 
  return db
  .query('SELECT * FROM landlords')
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  getLandlords,
};