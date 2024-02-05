import "./propertyList.css";
import PropertyListItem from "./PropertyListItem";
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";



export default function PropertyList({userData, properties}) {
  
  //Loops through the array of properties to produce list items
  const displayProperties = (properties) => {
    return properties.map((property) => (
      <PropertyListItem key={property.id} userData={userData} address={property.address} status={property.status} imageName={property.image} id={property.id}/>
    ))
}
  return (
    <div className="property-list">
      <h3 className="my-p">My Properties</h3>
      {displayProperties(properties)}
    </div>
  );
}
