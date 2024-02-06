-- Drop tables if they exist
DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS leases;
DROP TABLE IF EXISTS units;
DROP TABLE IF EXISTS tenants;
DROP TABLE IF EXISTS landlords;

-- Create landlords table
CREATE TABLE landlords (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  phone_number VARCHAR NOT NULL,
  profile_img TEXT
);

-- Create tenants table
CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  phone_number VARCHAR NOT NULL,
  profile_img TEXT
);

-- Create units table
CREATE TABLE units (
  id SERIAL PRIMARY KEY,
  landlord_id INTEGER REFERENCES landlords(id) ON DELETE CASCADE,
  address VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  image TEXT,
  unit_cost INTEGER
);

-- Create leases table
CREATE TABLE leases (
  id SERIAL PRIMARY KEY,
  unit_id INTEGER REFERENCES units(id),
  tenant_id INTEGER REFERENCES tenants(id),
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  rent INTEGER NOT NULL,
  lease_docs TEXT
);

-- Create payments table
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  lease_id INTEGER REFERENCES leases(id),
  amount INTEGER NOT NULL,
  date_paid TIMESTAMP NOT NULL,
  status VARCHAR NOT NULL
);

-- Create maintenance table
CREATE TABLE maintenance (
  id SERIAL PRIMARY KEY,
  lease_id INTEGER,
  unit_id INTEGER,
  description VARCHAR,
  cost INTEGER,
  date_started TIMESTAMP,
  date_completed TIMESTAMP,
  FOREIGN KEY (lease_id) REFERENCES leases(id),
  FOREIGN KEY (unit_id) REFERENCES units(id)
);
