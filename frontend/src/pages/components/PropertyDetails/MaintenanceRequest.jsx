import "./maintenanceRequest.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function MaintenanceRequest(props) {
  const [maintenanceData, setMaintenanceData] = useState([]);
  // console.log("THIS IS THE TOKEN",props.id)

  useEffect(() => {
    fetch(`http://localhost:3001/api/margins/maintenance/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMaintenanceData(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
  }, []);

  const arrayOfRequests = maintenanceData.map((request, idx) => {
    let statusColour = "red";

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
  });

  return (
    <div>
      <Link to='/maintenance' maintenanceData={maintenanceData}>
      <div className="some-component">
        <h1 className="mr-title">Maintenance Request</h1>
        <div className="mr-list">
          {arrayOfRequests}
          <hr className="hr2" />
        </div>
      </div>
      </Link>
    </div>
  );
}
