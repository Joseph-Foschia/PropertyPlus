import "./PropertyDetails.css";
import { Link } from "react-router-dom";

function PropertyDetails(props) {

  const property = props.property && props.property[0];

  //Turns PSQL date into readbale date
  const dateString = property?.start
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  //Gets the unit number to pass down to add new lease
  const dataToPass = { unit: property && property.id };
  

  return (
    <div className="address-details">
      <h2 className="address">{property && property.address}</h2>
      <div className="details-card">
        <h2 className="title">Details</h2>
        {property && property.lease_rent ? (
           <>
        <div className="detail-item">
          <h4>Status: {property && property.status}</h4>
         
        </div>
        <div className="detail-item">
          <h4>Tenant Name: {property && property.tenant_name} </h4>
        </div>
        <div className="detail-item">
          <h4>Tenant Phone #: {property && property.tenant_phone} </h4>
        </div>
        <div className="detail-item">
          <h4>Term: 1 year</h4>
        </div>
        <div className="detail-item">
        <h4>Term Start : {formattedDate ? formattedDate : "N/A"}</h4>
        </div>
        <div className="detail-item">
          <h4>Rent: ${property && property.lease_rent}</h4>
        </div>
        </>
         ) : (
          <>
        <div className="detail-item">
          <h4>No active lease.</h4>
        </div>
        <Link to='/lease'state={dataToPass}>
          <button class="add-new-lease">Add New Lease</button>
        </Link>
        </>
         )}
      </div>
    </div>
  );
}

export default PropertyDetails;
