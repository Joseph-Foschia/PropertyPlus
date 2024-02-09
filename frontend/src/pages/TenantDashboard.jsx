import TenantNav from "./components/tenant-dash/TenantNav";
import LeaseTopNav from "./components/tenant-dash/LeaseTopNav";
import PropertyPic from "./components/tenant-dash/PropertyPic";
import PaymentHistory from "./components/PropertyDetails/PaymentHistory";
import PaymentDetails from "./components/tenant-dash/PaymentDetails";
import LeaseDetails from "./components/tenant-dash/LeaseDetails";
import SomeBox from "./components/tenant-dash/SomeBox";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TenantDashboard({ token, userData }) {
  //Details for tenants lease
  const [lease, setLease] = useState([]);
  const [maintenance, setMaintenance] = useState([])

  //Makes api call for logged in tenants lease
  useEffect(() => {
    fetch(`http://localhost:3001/api/tenant/${userData}`)
      .then((response) => response.json())
      .then((data) => {
        setLease(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
  }, []);

  //ensures lease is true and sets lease detaisl to the first value of lease
  const tenantDetails = lease && lease[0];

  const landlordEmail = tenantDetails && tenantDetails.landlord_email;  
  const body = `Hi ${tenantDetails && tenantDetails.landlords_name}`;
  const subject = tenantDetails && tenantDetails.address;

  const handleEmailLandlord = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${landlordEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/tenants/${userData}`)
      .then((response) => response.json())
      .then((data) => {
        setMaintenance(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
  }, []);



  return (
    <div>
      <TenantNav />
      <div className="property-top-nav">
        <LeaseTopNav tenantDetails={tenantDetails} />
      </div>
      <div className="history-pic">
        <PropertyPic tenantDetails={tenantDetails} />
        <PaymentDetails />
      </div>
      <div className="bottom-ten-dash">
        <LeaseDetails tenantDetails={tenantDetails}/>
        <SomeBox tenantDetails={tenantDetails} maintenance={maintenance}/>
        <div className="t-buttons">
          <button className="t-m-req">Maintenace Request</button>
          <Link to="/pay">
            <button className="t-p-rent">Pay Rent</button>
          </Link>
          <button className="t-m-req" onClick={handleEmailLandlord}>Email Landlord</button>
        </div>
      </div>
    </div>
  );
}
