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
  (1, '123 Main St', 'Available', 'unit1_image.jpg', 1500),
  (2, '456 Oak Ave', 'Occupied', 'unit2_image.png', 1200);

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
