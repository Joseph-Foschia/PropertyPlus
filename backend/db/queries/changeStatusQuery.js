const db = require('../connection');

const changeStatus =  (id) => {
 
  return db
  .query('UPDATE units SET status = $1 WHERE id = $2;', ["Occupied", id])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  changeStatus,
};