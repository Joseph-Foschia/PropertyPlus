import TopNav from "./components/LandlordProfile/TopNav";
import Nav from "./components/Navbar/nav";
import PropertyList from "./components/LandlordProfile/PropertyList";
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";

export default function LandlordProfile({token, userData}) {
  //List of landlords properties
  const [properties, setProperties] = useState([]);

  //TODO: Id needs to be the logged in landlord instead of the id param
  //const { id } = useParams();

  //Makes api call for logged in landlord properties
  useEffect(() => {
    fetch(`http://localhost:3001/api/landlord/properties/${userData}`)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
  }, []); 
  
  const name = properties.length > 0 ? properties[0].name : null;
  
  return (
    <div className="landlord-profile">
      <Nav />
      <TopNav name={name}/>
      <PropertyList userData={userData} properties={properties}/>
    </div>
  );
}
