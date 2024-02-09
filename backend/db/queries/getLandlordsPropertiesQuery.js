const db = require("../connection");

const getProperties = (id) => {
  return db
    .query(
      `SELECT 
      units.*, 
      leases.id AS lease_id, 
      landlords.name 
  FROM 
      units 
  JOIN 
      landlords ON landlords.id = units.landlord_id 
  LEFT JOIN 
      leases ON units.id = leases.unit_id 
  WHERE 
      units.landlord_id = $1;
  `,
      [id]
    )
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
