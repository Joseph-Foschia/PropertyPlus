import "./leaseDetails.css";
import { formatDate } from "../../../helpers/dateHelper";

export default function LeaseDetails({tenantDetails}) {
  
  //Turns PSQL date into readbale date
   const dateString = tenantDetails?.start
  
   //Formats readable date
  const formattedDate = formatDate(dateString)

  
  return (
    <div className="lease-details-box">
      <div className="t-lease-detail-box">
        <p className="t-detail-title">Lease Details</p>
        <p className="t-rent">Rent: ${tenantDetails && tenantDetails.lease_rent}</p>
        <p className="t-start-date">Start Date: {formattedDate}</p>
        <p className="t-end-date">Term: 1 year</p>
        <p className="t-ll-name">Landlord Name: {tenantDetails && tenantDetails.landlords_name}</p>
        <p className="t-ll-number">Phone number: {tenantDetails && tenantDetails.landlord_phone}</p>
      </div>
    </div>
  );
}
