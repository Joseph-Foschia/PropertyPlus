import PropertyDetials from "./components/Landlords/PropertyDetails";
import LeaseDetails from "./components/Landlords/LeaseDetails";
import ProfitLoss from "./components/Landlords/ProfitLoss";
import './components/Landlords/PropertyDetails.css'
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from 'react-router-dom';

function Property() {

  const [property, setProperty] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/property/details/${id}`)
      .then(response => response.json())
      .then(data => {
        //console.log('Fetched property data:', data);
        setProperty(data);
      })
      .catch(error => console.error('Error fetching property data', error));
  }, []);

  const prop = property && property[0];

  return (
    <div >
      <h1>{prop?.address}</h1>
      <div className="property-details-cards"><PropertyDetials property={property} /> </div>
      <div className="property-details-cards"><LeaseDetails property={property}/> </div>
      <div className="property-details-cards"><ProfitLoss property={property}/> </div>
    </div>
  );
}

export default Property;
