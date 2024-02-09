import React, { useCallback, useState } from "react";
import { findTenant, addNewLease, changeUnitStatus } from "../helpers/addNewLease";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Navbar/nav";
import "./components/NewLease/lease.css"


function NewLease(props) {
  const navigate = useNavigate();
  //Gets the unit number
  const location = useLocation();
  const { unit } = location.state || {};
  //console.group("unit", unit)
  
  const submitForm = async (e) => {
    e.preventDefault();

    //Grabs the form id of propertyForm
    const formElement = document.getElementById("leaseForm");

    //variable FormData grabs all inputs from the form
    const formData = new FormData(formElement);

    // //Payload turns those tinto key value pairs
    const payload = Object.fromEntries(formData);
    
    //Creates full address from all the inputs
    const date = `${payload.year}-${payload.month}-${payload.day}`;
    delete payload.year;
    delete payload.month;
    delete payload.day;
    
    payload.start_date = date;
    // //Calls the a function to add new property

    //Gets tenants email
    const tenantEmail = document.getElementById("tenant_email").value;
   
    try {
      //First search database for active tenant and then return their ID
      const tenant = await findTenant({ email: tenantEmail });
      payload.tenant_id = tenant[0].id
      console.log("After find tenant:", payload);

      // Proceed with other actions based on the retrieved tenant data
    try {
      //Add Data to add new lease
        await addNewLease(payload);
        console.log("New lease added successfully");
        await changeUnitStatus({id: unit})
        navigate(`/property/${unit}`)
    } catch (addLeaseError) {
      console.log("Error adding new lease:", addLeaseError.message);
    }
    } catch (err) {
      console.log("Error finding tenant:", err.message);
    }
  };


  return (
    <div className="add-lease-item">
      <Nav></Nav>
      <h3 className='head'> Add New Lease</h3>
    <div>
      <form id="leaseForm"className="lease-form" action="POST" >

   
      <label htmlFor="rent">Rent</label>
        <input type="text" id="rent" name="rent" placeholder="rent"/>

        <label htmlFor="tenant_email">Tenant Email</label>
        <input type="text" id="tenant_email" name="tenant_email"/>
     
        <label htmlFor="start_date">Lease Start Date:</label>
        <div className="lease-start-date">
        <label htmlFor="start_date">Year</label>
        <input type="text" id="year" name="year" placeholder="year"/>

        <select name="month" id="month">
            <option value="01">JAN</option> 
            <option value="02">FEB</option>
            <option value="03">MAR</option>
            <option value="04">APR</option>
            <option value="05">MAY</option>
            <option value="06">JUN</option>
            <option value="07">JUL</option>
            <option value="08">AUG</option>
            <option value="08">SEP</option>
            <option value="09">OCT</option>
            <option value="10">NOV</option>
            <option value="11">DEC</option>         
          </select>
       
        <label htmlFor="tenant_email">Day</label>
        <input type="text" id="day" name="day" placeholder="day"/>
        </div>


        <input type="hidden" name="landlord_id" defaultValue={props.userData} />

        <input type="hidden" name="lease_docs" defaultValue="test" />

        <input type="hidden" name="unit_id" defaultValue={unit} />

        <input type="hidden" name="end_date" defaultValue="2025-01-01" />

        <button className="add-lease" type="button" onClick={submitForm}>Add Lease</button>

      </form>
      </div>
    </div>
  );
}

export default NewLease;
