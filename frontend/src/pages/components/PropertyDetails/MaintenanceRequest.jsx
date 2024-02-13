import "./maintenanceRequest.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function MaintenanceRequest({prop, id}) {
  const [maintenanceData, setMaintenanceData] = useState([]);
  // console.log("THIS IS THE TOKEN",props.id)

  // const id = props.property && props.property[0].id;
  useEffect(() => {
    fetch(`http://localhost:3001/api/all/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("GETTING DATA: ", data);
        setMaintenanceData(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
  }, []);
  // console.log("User DATA: ", props.property);
  const arrayOfRequests = maintenanceData.slice(0, 3).map((request, idx) => {
    console.log("MAINTENANCE DATA: ", request.service);
    // if (props.property.length > 0) {
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
    // }
  });
  return (
    <div>
      <Link to="/maintenance" maintenanceData={maintenanceData}>
        <div className="some-component">
          <h1 className="mr-title">Maintenance Request</h1>
          <div className="mr-list">
            {arrayOfRequests}
          </div>
        </div>
      </Link>
    </div>
  );
}
