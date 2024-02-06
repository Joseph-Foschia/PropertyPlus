const db = require("../connection");

const getOccupancyRate = (id) => {
  return db
    .query(
      `SELECT
  u.landlord_id,
  COUNT(u.id) AS total_units,
  SUM(CASE WHEN l.id IS NOT NULL THEN 1 ELSE 0 END) AS leased_units,
  (SUM(CASE WHEN l.id IS NOT NULL THEN 1 ELSE 0 END) * 100.0) / COUNT(u.id) AS occupancy_rate
FROM
  units u
LEFT JOIN
  leases l ON u.id = l.unit_id WHERE landlord_id = $1
GROUP BY
  u.landlord_id;`,
      [id]
    )
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
  getOccupancyRate,
};
