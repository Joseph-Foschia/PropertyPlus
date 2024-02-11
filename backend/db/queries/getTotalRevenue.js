const db = require('../connection');

const getTotalRevenue = (id) => {

  return db
  .query(`SELECT SUM(l.rent) AS total_revenue
  FROM leases l
  JOIN units u ON l.unit_id = u.id
  JOIN landlords ll ON u.landlord_id = ll.id
  WHERE ll.id = $1
    AND l.start_date >= CURRENT_DATE - INTERVAL '1 month'`, [id])
  .then((res) => {
    console.log(res.rows);
    return res.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  getTotalRevenue
};