import PropertyDetials from "./components/PropertyDetails/PropertyDetails";
import LeaseDetails from "./components/PropertyDetails/leaseDetails";
import ProfitLoss from "./components/PropertyDetails/ProfitLoss";
import "./components/PropertyDetails/PropertyDetails.css";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Nav from "./components/Navbar/nav";
import PropertyTopNav from "./components/PropertyDetails/PropertyTopNav";

function Property() {
  const [property, setProperty] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/property/details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log('Fetched property data:', data);
        setProperty(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
  }, []);

  const prop = property && property[0];

  return (
    <div>
      <Nav />
      <div className="property-top-nav">
        <PropertyTopNav />
      </div>
      <PropertyDetials property={property} />{" "}
      {/* <div className="property-details-cards">
        <LeaseDetails property={property} />{" "}
      </div>
      <div className="property-details-cards">
        <ProfitLoss property={property} />{" "}
      </div> */}
    </div>
  );
}

export default Property;
