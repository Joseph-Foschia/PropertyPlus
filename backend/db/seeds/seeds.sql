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
  (1, '123 Main Street, Anytown, AN 12345', 'Available', 'unit1_image.jpg', 1400),
  (2, '456 Maple Avenue, Sometown, SM 67890', 'Occupied', 'unit2_image.png', 1200),
  (1, '456 Oak Ave, Sometown, SM 67890', 'Available', 'unit2_image.png', 1800),
  (2, '789 Oak Street, Oldtown, OT 13579', 'Occupied', 'unit2_image.png', 1500),
  (2, '101 Pine Road, Newcity, NC 24680, OT 13579', 'Occupied', 'unit2_image.png', 1800),
  (1, '202 Birch Lane, Lakeview, LV 86420', 'Occupied', 'unit2_image.png', 1600),
  (2, '303 Cedar Path, Rivertown, RT 97531', 'Available', 'unit2_image.png', 1700),
  (1, '404 Elm Street, Mountville, MV 75382', 'Occupied', 'unit2_image.png', 1700);

 


-- Test data for leases table
INSERT INTO leases (unit_id, tenant_id, start_date, end_date, rent, lease_docs)
VALUES
  (1, 1, '2024-02-01', '2024-08-01', 1500, 'lease_doc1.pdf'),
  (2, 2, '2024-03-01', '2024-09-01', 1200, 'lease_doc2.docx');

-- Test data for payments table
INSERT INTO payments (lease_id, amount, date_paid, status)
VALUES
  (1, 1500, '2024-02-15', 'Paid'),
  (2, 1200, '2024-03-15', 'Paid');
