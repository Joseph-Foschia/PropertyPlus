
function NewLease({userData}) {
  return (
    <div>
      <h1> New Lease Form</h1>

      <form id="propertyForm"className="property-form" action="POST" >


        <label htmlFor="rent">Rent</label>
        <input type="text" id="rent" name="rent"/>

  

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
       
        
        <input type="text" id="day" name="day" placeholder="day"/>


        <label htmlFor="tenant_email">Tenant Email</label>
        <input type="text" id="tenant_email" name="tenant_email"/>

        <input type="hidden" name="landlord_id" defaultValue={userData} />

        <input type="hidden" name="lease-docs" defaultValue="" />

        <input type="hidden" name="unit-id" defaultValue="" />

        <button className="add-prop" type="button" >Add Property</button>

      </form>

    </div>
  );
}

export default NewLease;
