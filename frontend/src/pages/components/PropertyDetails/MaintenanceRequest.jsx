import "./maintenanceRequest.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function MaintenanceRequest({ prop, id }) {
  const [maintenanceData, setMaintenanceData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/all/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMaintenanceData(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
  }, []);

  // Prints out a list (max 3) of maintenance requests for the user to see
  const arrayOfRequests = maintenanceData.slice(0, 3).map((request, idx) => {
    let statusColour = "red";

    // Changes the colour depending on the status of the maintenance request
    if (request.status === "Completed") {
      statusColour = "green";
    } else if (request.status === "In Progress") {
      statusColour = "yellow";
    }

    return (
      <div className="mr-item1">
        <li>{request.service}</li>
        <span className={`mr-status1 ${statusColour}`}>{request.status}</span>
      </div>
    );
    // }
  });
  return (
    <div>
      <Link to="/maintenance" maintenanceData={maintenanceData}>
        <div className="some-component">
          <h1 className="mr-title">Maintenance Request</h1>
          <div className="mr-list">{arrayOfRequests}</div>
        </div>
      </Link>
    </div>
  );
}
