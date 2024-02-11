import PropertyDetials from "./components/PropertyDetails/PropertyDetails";
import "./components/PropertyDetails/PropertyDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "./components/Navbar/nav";
import PropertyTopNav from "./components/PropertyDetails/PropertyTopNav";
import PaymentHistory from "./components/PropertyDetails/PaymentHistory";
import "./components/PropertyDetails/property.css";
import ProfilePic from "./components/PropertyDetails/ProfilePic";
import Graph from "./components/PropertyDetails/Graph";
import MaintenanceRequest from "./components/PropertyDetails/MaintenanceRequest";
import fetchPropertyData from "../helpers/fetchPropertyDataHelper";



function Property() {
  const [property, setProperty] = useState([]);
  const { id } = useParams();

  //Gets individual property details
  useEffect(() => {
    fetchPropertyData(id, setProperty)
  }, []);

  //Data to pass down for the graph
  const prop = property && property[0];
  const margin = prop?.lease_rent - prop?.unit_cost;
  const data = [
    {
      name: "Rent",
      mortgage: prop?.unit_cost,
      rent: prop?.lease_rent,
      margin: margin,
    },
  ];

  return (
    <div>
      <Nav />
      <div className="property-top-nav">
        <PropertyTopNav prop={prop} />
      </div>
      <div className="history-pic">
        <ProfilePic property={prop} />
        <PaymentHistory property={property} />
      </div>
      <div className="details-graph">
        <PropertyDetials property={property} />
        <Graph data={data} />
        <MaintenanceRequest id={id}/>
      </div>
    </div>
  );
}

export default Property;
