import React, { useCallback, useState } from "react";
import addNewPropertyItem from "../helpers/addNewPropertyHelper";
import "./components/NewProperty/LandLords.css";
import Nav from "./components/Navbar/nav";
import PropertyTopNav from "./components/PropertyDetails/PropertyTopNav";
import { useNavigate } from "react-router-dom";

const NewProperty = ({ userData }) => {
  const navigate = useNavigate();

  //Form to handle adding new property
  const submitForm = async (e) => {
    e.preventDefault();
    //Grabs the form id of propertyForm
    const formElement = document.getElementById("propertyForm");

    //variable FormData grabs all inputs from the form
    const formData = new FormData(formElement);

    //Payload turns those tinto key value pairs
    const payload = Object.fromEntries(formData);
    console.log(payload);
    //Creates full address from all the inputs
    const address = `${payload.streetAddress}, ${payload.city}, ${payload.province}, ${payload.postal}`;
    delete payload.streetAddress;
    delete payload.city;
    delete payload.province;
    delete payload.postal;
    payload.address = address;
    //Calls the afunction to add new property
    try {
      await addNewPropertyItem(payload);
      console.log("Yay");
      navigate('/')
    } catch (err) {
      console.log("NOOO", err.message);
    }
  };

  return (
    <div className="add-property-item">
      <Nav />
      <PropertyTopNav />
      <hr />
      <h1 className="add-new-prop">Add your new property !</h1>
      <form id="propertyForm" className="property-form" action="POST">
        <div className="left-side-addp">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            className="streetAddress"
            name="streetAddress"
            placeholder="Enter your street address"
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            className="city"
            name="city"
            placeholder="Enter your city"
          />

          <label htmlFor="province">Province</label>
          <select name="province" className="province">
            <option value="ON">Ontario</option>
            <option value="QC">Quebec</option>
            <option value="BC">British Columbia</option>
            <option value="AB">Alberta</option>
            <option value="SK">Saskatchewan</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NS">Nova Scotia</option>
            <option value="PEI">Prince Edward Island</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="YT">Yukon</option>
          </select>
        </div>
        <div className="right-side-addp">
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            className="postal"
            name="postal"
            placeholder="Enter your Postal Code"
          />
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
          </select>
          <label htmlFor="unit_cost">Unit Cost</label>
          <input
            type="text"
            className="unit-cost"
            name="unitCost"
            placeholder="How much is the unit"
          />
        </div>
        <div className="bottom-addp">
          {/* TODO: This does not submit anything for now */}
          <h1 className="up-img">Upload Image</h1>
          <div className="file-upload-container">
            <label for="imageSearch" className="file-label">
              Search for an image:
            </label>
            <input
              type="file"
              id="imageSearch"
              name="imageSearch"
              accept="image/*"
              className="file-input"
            />
          </div>

          <input type="hidden" name="landlord_id" defaultValue={userData} />

          <input type="hidden" name="image" defaultValue="photos/1.png" />

          <button className="add-prop" type="button" onClick={submitForm}>
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProperty;
