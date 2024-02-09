import React, { useState, useEffect } from "react";
import "./components/TenantRepairs/repairs.css";

const TenantRepairsRequest = (props) => {
  const [unitDetails, setUnitDetails] = useState([]);
  const [description, setDescription] = useState("");
  const [service, setService] = useState("");

  // Handles the submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // New objective, try to login

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    console.log("payload", payload);
    console.log("unitDetails", unitDetails);

    const copy = {
      ...unitDetails,
      description: description,
      service: service,
      status: "Requested",
    };

    console.log("copy baybeeeee", copy);

    console.log("Token: ", props.token);
    console.log("User Data: ", props.userData);
    try {
      const response = await fetch("http://localhost:3001/api/new-repair", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(copy),
      });
      if (response.ok) {
        console.log("Form data submitted successfully!");
      } else {
        console.error("Failed to submit form data.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }

    setDescription("");
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/request/${props.token}`)
      .then((response) => response.json())
      .then((data) => {
        setUnitDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching Landlord's Unit Addresses data:", error);
      });
  }, []);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setUnitAddress({
    //   ...unitAddress,
    //   [name]: value
    // });
  };

  // const arrayOfUnits = unitAddressList.map((unit, idx) => {
  //   if (unit && unit.address) {
  //     return (
  //       <option key={idx} value={unit.id}>
  //         {unit.address}
  //       </option>
  //     );
  //   } else {
  //     return null; // Skip rendering if unit or unit.address is undefined
  //   }
  // });

  return (
    <div className="repairs-container">
      <h2>Request Repair</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="unit_id">Unit ID:</label>
          <select
            id="unit_id"
            name="unit_id"
            value={unitAddressList.unit_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Unit ID</option>

            {arrayOfUnits}
          </select>
        </div> */}

        <div>
          <label htmlFor="service">Service Needed:</label>
          <select
            id="service"
            name="service"
            value={service} 
            onChange={(e) => setService(e.target.value)} 
            required
          >
            <option value="">Select Service</option>
            <option value="Plumbing">Plumbing</option>
            <option value="HVAC">HVAC</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Electrical">Electrical</option>
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
