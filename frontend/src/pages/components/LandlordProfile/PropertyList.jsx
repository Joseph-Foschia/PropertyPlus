import "./propertyList.css";
import PropertyListItem from "./PropertyListItem";
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";



export default function PropertyList({userData}) {

  const [properties, setProperties] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/landlord/properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
  }, []); 

  const displayProperties = (properties) => {
    return properties.map((property) => (
      <PropertyListItem key={property.id} userData={userData} address={property.address} status={property.status}/>
    ))
}
  return (
    <div className="property-list">
      <h3 className="my-p">My Properties</h3>
      {displayProperties(properties)}
      {/* <PropertyListItem userData={userData}/> */}
    </div>
  );
}
