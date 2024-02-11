const db = require("../connection");

const getAverageRent = (id) => {
  return db
    .query(
      `SELECT 
      u.landlord_id,
      u.id AS unit_id,
      u.address,
      AVG(l.rent) AS average_rent_per_unit
  FROM 
      leases l
  JOIN 
      units u ON l.unit_id = u.id 
  WHERE 
      landlord_id = $1
  GROUP BY 
      u.landlord_id, u.id, u.address
  ORDER BY 
      u.id ASC;
  `,
      [id]
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
