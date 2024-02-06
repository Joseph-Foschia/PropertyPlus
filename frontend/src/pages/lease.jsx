import React, { useCallback, useState } from "react";
import findTenant from "../helpers/addNewLease";

function NewLease({userData}) {

  const submitForm = async (e) => {
    // e.preventDefault();
    // //Grabs the form id of propertyForm
    // // const formElement = document.getElementById("leaseForm");

    // //variable FormData grabs all inputs from the form
    // const formData = new FormData(formElement);

    // //Payload turns those tinto key value pairs
    // const payload = Object.fromEntries(formData);
    // console.log(payload);
    // // //Creates full address from all the inputs
    // // const date = `${payload.year}-${payload.month}-${payload.day}`;
    // // delete payload.year;
    // // delete payload.month;
    // // delete payload.day;
    
    // // payload.start_date = date;
    // //Calls the a function to add new property

    // console.log(payload)
    // try {
    //   await findTenant(payload);
    //   console.log("Yay");
    // } catch (err) {
    //   console.log("NOOO", err.message);
    // }

    const tenantEmail = document.getElementById("tenant_email").value;
   
    try {
      const tenant = await findTenant({ email: tenantEmail });
      console.log("Tenant found:", tenant);
      // Proceed with other actions based on the retrieved tenant data
    } catch (err) {
      console.log("Error finding tenant:", err.message);
    }
  };


  return (
    <div>
      <h1> New Lease Form</h1>

      <form id="leaseForm"className="lease-form" action="POST" >


      {/* <input type="hidden" name="unit-id" defaultValue="4" />

  

        <label htmlFor="start_date">Lease Start Date</label>
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
        <input type="text" id="day" name="day" placeholder="day"/> */}


        <label htmlFor="tenant_email">Tenant Email</label>
        <input type="text" id="tenant_email" name="tenant_email"/>

        {/* <input type="hidden" name="landlord_id" defaultValue={userData} />

        <input type="hidden" name="lease-docs" defaultValue="" />

        <input type="hidden" name="unit-id" defaultValue="" /> */}

        <button className="add-prop" type="button" onClick={submitForm}>Add Property</button>

      </form>

    </div>
  );
}

export default NewLease;
