import TenantNav from "./components/tenant-dash/TenantNav";
import LeaseTopNav from "./components/tenant-dash/LeaseTopNav";
import PropertyPic from "./components/tenant-dash/PropertyPic";
import PaymentDetails from "./components/tenant-dash/PaymentDetails";
import LeaseDetails from "./components/tenant-dash/LeaseDetails";
import SomeBox from "./components/tenant-dash/SomeBox";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTenantMaintenance, fetchTenantLease } from "../helpers/tenantDashHelper";
import { handleEmailLandlord } from "../helpers/emailHelper";



export default function TenantDashboard({ token, userData }) {
  
  //Details for tenants lease
  const [lease, setLease] = useState([]);
  const [maintenance, setMaintenance] = useState([])

  //Makes api call for logged in tenants lease and also their maintenance requests
  useEffect(() => {
    fetchTenantLease(userData, setLease)
    fetchTenantMaintenance(userData, setMaintenance)
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
        <SomeBox tenantDetails={tenantDetails} maintenance={maintenance}/>
        <div className="t-buttons">
        <Link to="/repairs">
          <button className="t-m-req">Maintenace Request</button>
          </Link>
          <Link to="/pay">
            <button className="t-p-rent">Pay Rent</button>
          </Link>
          <button className="t-m-req" onClick={() => handleEmailLandlord(tenantDetails)}>Email Landlord</button>
        </div>
      </div>
    </div>
  );
}
