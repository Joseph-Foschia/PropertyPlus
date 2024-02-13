-- Test data for landlords table
INSERT INTO landlords (name, email, password, phone_number, profile_img)
VALUES
  ('John Doe', 'john.doe@example.com', 'password123', '123-456-7890', 'john_profile.jpg'),
  ('Jane Smith', 'jane.smith@example.com', 'pass456', '987-654-3210', 'jane_profile.png');
-- Test data for tenants table
INSERT INTO tenants (name, email, password, phone_number, profile_img)
VALUES
  ('Alice Johnson', 'alice.j@example.com', 'pass789', '111-222-3333', 'alice_profile.jpg'),
  ('Bob Williams', 'bob.w@example.com', 'bobpass', '444-555-6666', 'bob_profile.png');

-- Test data for units table
INSERT INTO units (landlord_id, address, status, image, unit_cost)
VALUES
  (1, '123 Main Street, Anytown, AN 12345', 'Occupied', 'photos/7.png', 1400),
  (2, '456 Maple Avenue, Sometown, SM 67890', 'Occupied', 'photos/6.png', 1200),
  (1, '456 Oak Ave, Sometown, SM 67890', 'Available', 'photos/2.png', 1800),
  (2, '101 Pine Road, Newcity, NC 24680, OT 13579', 'Available', 'photos/3.png', 1800),
  (1, '202 Birch Lane, Lakeview, LV 86420', 'Available', 'photos/3.png', 1600),
  (2, '303 Cedar Path, Rivertown, RT 97531', 'Occupied', 'photos/4.png', 1700),
  (1, '404 Elm Street, Mountville, MV 75382', 'Available', 'photos/4.png', 1700);

 


-- Test data for leases table
INSERT INTO leases (unit_id, tenant_id, start_date, end_date, rent, lease_docs)
VALUES
  (1, 1, '2024-02-01', '2024-08-01', 1500, 'lease_doc1.pdf'),
  (6, 1, '2024-01-01', '2024-08-01', 2000, 'lease_doc1.pdf'),
  (2, 2, '2024-03-01', '2024-09-01', 1200, 'lease_doc2.docx');

-- Test data for payments table
INSERT INTO payments (lease_id, amount, date_paid, status)
VALUES
  (1, 1500, '2024-02-15', 'Paid'),
  (2, 1200, '2024-03-15', 'Paid');


-- Test data for maintenance table
INSERT INTO maintenance (lease_id, unit_id, description, cost, date_started, date_completed, service, status)
VALUES
  (1, 1, 'Kithcen faucet is leaking', 50, '2024-02-05 10:00:00', '2024-02-05 11:30:00', 'Plumbing', 'Completed'),
  (1, 6, 'Kitchen sink is clogged', 30, '2024-01-05 08:00:00', '2024-02-05 11:30:00', 'Plumbing', 'In Progress'),
  (2, 2, 'Broken window latch in living room', 30, '2023-09-15 14:00:00', '2024-03-02 15:15:00', 'Carpentry', 'Completed'),
  (2, 7, 'Broken light fixture in living room', 150, '2024-01-15 13:00:00', '2024-01-15 15:00:00', 'HVAC', 'Completed');




INSERT INTO maintenance (lease_id, unit_id, description, cost, date_started, date_completed, status)
VALUES
  (1, 1, 'Fixed leaky faucet', 50, '2023-09-05 10:00:00', '2023-09-05 11:30:00', 'Completed'),
  (1, 1, 'Replaced broken window', 80, '2023-09-15 14:00:00', '2023-09-15 15:30:00', 'Completed');

-- October 2023
INSERT INTO maintenance (lease_id, unit_id, description, cost, date_started, date_completed, status)
VALUES
  (1, 1, 'Unclogged drain', 30, '2023-10-05 09:00:00', '2023-10-05 10:30:00', 'Completed'),
  (1, 1, 'Fixed light fixture', 60, '2023-10-20 11:00:00', '2023-10-20 12:30:00', 'Completed');

-- November 2023
INSERT INTO maintenance (lease_id, unit_id, description, cost, date_started, date_completed, status)
VALUES
  (1, 1, 'Repaired HVAC system', 150, '2023-11-05 13:00:00', '2023-11-05 15:30:00', 'Completed'),
  (1, 1, 'Fixed kitchen sink', 40, '2023-11-20 10:00:00', '2023-11-20 11:30:00', 'Completed');

-- December 2023
INSERT INTO maintenance (lease_id, unit_id, description, cost, date_started, date_completed, status)
VALUES
  (1, 1, 'Replaced air filter', 20, '2023-12-10 09:00:00', '2023-12-10 10:30:00', 'Completed'),
  (1, 1, 'Fixed door lock', 30, '2023-12-25 14:00:00', '2023-12-25 15:30:00', 'Completed');

-- January 2024
INSERT INTO maintenance (lease_id, unit_id, description, cost, date_started, date_completed, status)
VALUES
  (1, 1, 'Unclogged toilet', 40, '2024-01-05 10:00:00', '2024-01-05 11:30:00', 'Completed'),
  (1, 1, 'Fixed shower head', 25, '2024-01-20 11:00:00', '2024-01-20 12:30:00', 'Completed');


--Extra data below for the profits and loss page

-- Insert new tenants
INSERT INTO tenants (name, email, password, phone_number, profile_img)
VALUES
  ('Emily Johnson', 'emily.j@example.com', 'pass987', '333-444-5555', 'emily_profile.jpg'),
  ('Michael Brown', 'michael.b@example.com', 'pass123', '777-888-9999', 'michael_profile.jpg'),
  ('Jessica Miller', 'jessica.m@example.com', 'pass456', '555-666-7777', 'jessica_profile.jpg');

-- Insert new units
INSERT INTO units (landlord_id, address, status, image, unit_cost)
VALUES
  (1, '567 Pine Avenue, Anytown, AN 12345', 'Available', 'photos/5.png', 1600),
  (1, '890 Maple Street, Sometown, SM 67890', 'Occupied', 'photos/6.png', 1500),
  (1, '111 Elm Avenue, Newcity, NC 24680', 'Available', 'photos/7.png', 1700);

-- Insert new leases
INSERT INTO leases (unit_id, tenant_id, start_date, end_date, rent, lease_docs)
VALUES
  (8, (SELECT id FROM tenants WHERE name = 'Emily Johnson'), '2024-02-01', '2025-02-01', 1700, 'lease_doc8.pdf'),
  (9, (SELECT id FROM tenants WHERE name = 'Michael Brown'), '2024-02-01', '2025-02-01', 1600, 'lease_doc9.docx'),
  (10, (SELECT id FROM tenants WHERE name = 'Jessica Miller'), '2024-02-01', '2025-02-01', 1800, 'lease_doc10.pdf');
