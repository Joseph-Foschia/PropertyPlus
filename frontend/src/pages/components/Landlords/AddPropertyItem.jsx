import React, { useCallback, useState } from 'react';
import './LandLords.css';

const AddPropertyItem = (props) => {

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData);

    console.log(payload);
  }

  return (
    <div className='add-property-item'>
      <form className="property-form" action="POST" onSubmit={submitForm}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address"/>

        <label htmlFor="status">Status</label>
        <input type="text" id="status" name="status"/>

        <label htmlFor="image">Image Url</label>
        <input type="text" id="image" name="imageUrl"/>

        <label htmlFor="unit_cost">Unit Cost</label>
        <input type="text" id="unit_cost" name="unitCost"/>

        <button type="submit">Add Property</button>
      </form>

    </div>
  );
};

export default AddPropertyItem;
