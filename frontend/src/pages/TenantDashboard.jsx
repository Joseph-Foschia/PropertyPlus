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
        <SomeBox tenantDetails={tenantDetails}/>
        <div className="t-buttons">
          <button className="t-m-req">Maintenace Request</button>
          <Link to="/pay">
            <button className="t-p-rent">Pay Rent</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
