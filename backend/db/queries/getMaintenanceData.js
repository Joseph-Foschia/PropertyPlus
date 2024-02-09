const db = require("../connection");

const getMaintenanceData = (id) => {
  return db
    .query(
  //     `SELECT 
  //     TO_CHAR(DATE_TRUNC('month', m.date_completed), 'Month') AS month_name,
  //     SUM(m.cost) AS total_maintenance_cost
  // FROM 
  //     maintenance m
  // JOIN 
  //     leases l ON m.lease_id = l.id
  // JOIN 
  //     units u ON l.unit_id = u.id
  // WHERE 
  //     u.landlord_id = $1
  //     AND m.date_completed >= NOW() - INTERVAL '6 months'
  // GROUP BY 
  //     DATE_TRUNC('month', m.date_completed)
  // ORDER BY 
  //     DATE_TRUNC('month', m.date_completed);`,
  `SELECT 
  m.id AS maintenance_id,
  m.lease_id,
  m.unit_id,
  u.address AS unit_address,
  m.description,
  m.cost,
  m.service,
  m.date_started,
  m.date_completed,
  m.status
FROM 
  maintenance m
JOIN 
  leases l ON m.lease_id = l.id
JOIN 
  units u ON m.unit_id = u.id
WHERE 
  u.landlord_id = $1;
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

const getTotalMaintenanceCost = (id) => {
  return db
    .query(
      `SELECT 
      SUM(m.cost) AS total_maintenance_cost
  FROM 
      maintenance m
  JOIN 
      leases l ON m.lease_id = l.id
  JOIN 
      units u ON l.unit_id = u.id
  WHERE 
      u.landlord_id = $1
      AND m.date_completed >= NOW() - INTERVAL '6 months';`,
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
  getMaintenanceData,
  getTotalMaintenanceCost
};
