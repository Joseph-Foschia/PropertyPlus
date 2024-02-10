import React, { useState, useEffect } from "react";
import "./components/TenantRepairs/repairs.css";
import TenantDashboard from "./TenantDashboard";
import TenantNav from "./components/tenant-dash/TenantNav";
import { useNavigate } from "react-router-dom";

const TenantRepairsRequest = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [unitDetails, setUnitDetails] = useState([]);
  const [description, setDescription] = useState("");
  const [service, setService] = useState("");
  

  // Handles the submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // New objective, try to login

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    // console.log("payload", payload);
    // console.log("unitDetails", unitDetails);

    const copy = {
      ...unitDetails,
      description: description,
      service: service,
      status: "Requested",
    };

    // console.log("copy baybeeeee", copy);

    // console.log("Token: ", props.token);
    // console.log("User Data: ", props.userData);
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
        setSubmitted(true);
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
    <div>
      <TenantNav></TenantNav>
      <h1 className="top-nav-header-repairs">Submit Your Repair Request</h1>
      
    <div className="repairs-container">
    {submitted ? (
          <div className="thank-you-message">
            <h2 className="thankyou-header">Thank you for submitting your repair request!</h2>
            <p className="thankyou-msg">Your landlord should be in contact with you shortly. If this is an emergency please contact them directly.</p>
          </div>
        ) : (
  
      <div>
      <h2 className="request-repair">Request Repair</h2>
      <form onSubmit={handleSubmit}>
    
        <div>
          <label htmlFor="service" className="service" >Service Needed:</label>
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
          <label htmlFor="description" className="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="submit-btn">
        <button type="submit">Submit Request</button>
        </div>
      </form>
      </div>
      )}
    </div>
    
    </div>
  );
};

export default TenantRepairsRequest;
