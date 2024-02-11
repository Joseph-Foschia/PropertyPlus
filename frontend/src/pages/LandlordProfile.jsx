import TopNav from "./components/LandlordProfile/TopNav";
import Nav from "./components/Navbar/nav";
import PropertyList from "./components/LandlordProfile/PropertyList";
import React, { useState, useEffect } from 'react';
import { getLandlordsProperties } from "../helpers/getLandlordsPropertiesHelper";




export default function LandlordProfile({token, userData}) {

  //List of landlords properties
  const [properties, setProperties] = useState([]);

  //Makes api call for logged in landlord properties
  useEffect(() => {
    getLandlordsProperties(userData, setProperties)
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
