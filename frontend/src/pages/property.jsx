import PropertyDetials from "./components/Landlords/PropertyDetails";
import LeaseDetails from "./components/Landlords/LeaseDetails";
import ProfitLoss from "./components/Landlords/ProfitLoss";
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

  return (
    <div >
      <h2>Property Details</h2>
     <PropertyDetials property={property} />
     <LeaseDetails property={property}/>
     <ProfitLoss property={property}/>
    </div>
  );
}

export default Property;
