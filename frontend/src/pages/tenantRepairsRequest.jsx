import React, { useState, useEffect } from "react";
import "./components/TenantRepairs/repairs.css";

const TenantRepairsRequest = () => {
  const [unitAddress, setUnitAddress] = useState([]);
  const [description, setDescription] = useState("");
  const data = {};
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, such as sending the data to a server
    console.log("Unit Address:", unitAddress);
    console.log("Description:", description);
    // Reset the form fields after submission
    setDescription("");
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/landlord/properties/1")
      .then((response) => response.json())
      .then((data) => {
        setUnitAddress(data);
      })
      .catch((error) => {
        console.error("Error fetching total revenue data:", error);
      });
  }, []);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setUnitAddress({
    //   ...unitAddress,
    //   [name]: value
    // });
  };
  console.log(unitAddress);

  const arrayOfUnits = unitAddress.map((unit, idx) => {
    if (unit && unit.address) {
      return <option key={idx} value={unit.address}>{unit.address}</option>;
    } else {
      return null; // Skip rendering if unit or unit.address is undefined
    }
  });
  return (
    <div className="repairs-container">
      <h2>Request Repair</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="unit_id">Unit ID:</label>
          <select
            id="unit_id"
            name="unit_id"
            value={unitAddress.unit_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Unit ID</option>
            {/* <option value="1">Unit 1</option>
              <option value="2">Unit 2</option> */}
            {arrayOfUnits}
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default TenantRepairsRequest;
