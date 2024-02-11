import changeMaintenanceValues from "../../../helpers/changeMaintenanceValuesHelper"
import React, { useState, useEffect } from "react";


function ChangeInfoCard({detail}) {

  const service = detail && detail.service
  const status = detail && detail.status
  const cost = detail && detail.cost

  const maintId = detail && detail.id

  const submitForm = async (e) => {
    e.preventDefault();

    //Grabs the form id of propertyForm
    const formElement = document.getElementById("maintenance-form");

    //variable FormData grabs all inputs from the form
    const formData = new FormData(formElement);

    // //Payload turns those tinto key value pairs
    const payload = Object.fromEntries(formData);
    
    if (!payload.cost) {
      if (cost) {
        payload.cost = cost;
      } else {
        payload.cost = null;
      }
    }
    
    try {
      
        await changeMaintenanceValues(payload);
        console.log("Values added successfully");
        window.location.reload();
    } catch (Error) {
      console.log("Error adding new lease:", Error.message);
    }
    
  };


 
  return (
    <div className="change-info-card">

      <div>
   
        <div className="header-info">
          <h3>Change Information</h3>
        </div>
        <form id="maintenance-form" action="POST" className="form-container">
        <div className="general-info-list">
          <label htmlFor="status" className="info-p">Status</label>
          <select name="status" className="select-font">
          <option value={status} >Select...</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          </div>
          <div className="general-info-list">
          <label htmlFor="cost" className="info-p">Cost</label>
          <input name="cost" type="number"></input>
          </div>
          <div className="general-info-list">
          <label htmlFor="service" className="info-p">Type</label>
          <select name="service" className="select-font">
          <option value={service}>Select...</option>
          <option value="Plumbing">Plumbing</option>
            <option value="HVAC">HVAC</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Electrical">Electrical</option>
          </select>
          </div>
          <input type="hidden" name="id" defaultValue={maintId} />
          <div className="submit-button-container">
            <button type="button" className="change-stat" onClick={submitForm}>
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default ChangeInfoCard;
 