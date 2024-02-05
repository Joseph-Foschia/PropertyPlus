const db = require("../connection");

const getAverageRent = () => {
  return db
    .query(
      `SELECT u.landlord_id,
  AVG(l.rent) AS average_rent_per_unit
  FROM leases l
  JOIN units u ON l.unit_id = u.id
  GROUP BY u.landlord_id;`,
      []
    )
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });
};

module.exports = {
  getAverageRent,
};
