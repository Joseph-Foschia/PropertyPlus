import Nav from "./components/Navbar/nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./components/MaintenanceDetails/details.css"
import GeneralInfoCard from "./components/MaintenanceDetails/GeneralInfoCard";
import TenantInfoCard from "./components/MaintenanceDetails/TenantInfoCard";
import ChangeInfoCard from "./components/MaintenanceDetails/ChangeInfoCard";
import AllMaintenanceRequestsCard from "./components/MaintenanceDetails/AllMaintenanceRequetsCard";



function MaintenanceDetails() {
  const [details, setDetails] = useState([])
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/repairs/details/${id}`)
    .then((response) => response.json())
    .then((response) => {
      setDetails(response)
    })
    .catch((error) => {
      console.error("Cannot find repair details:", error);
    });
  }, [])


  const handleEmail = () => {
    const landlordEmail = detail && detail.email;
    const body = `Hi ${detail && detail.name}`;
    const subject = detail && detail.address;
  
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${landlordEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  };



  const detail = details && details[0]

  const ID = detail && detail.unit_id
 
  return (
    <div>
      <Nav></Nav>
      <div >
        <div className="maint-header">
        <h1 className="header-a">{detail && detail.address}</h1>
        <Link to={`/property/${ID}`}>
            <button className="add-p-btn">View Property</button>
          </Link>
          </div>
        <div className="all-details">

          <div>
            <GeneralInfoCard detail={detail}></GeneralInfoCard>
          </div>

          <div>
            <ChangeInfoCard detail={detail}></ChangeInfoCard>
            <button
            className="email-tenant"
            onClick={handleEmail}
          >
            Email Tenant
          </button>
          </div>

          <div>
          {ID && <AllMaintenanceRequestsCard id={ID} />}
          <TenantInfoCard detail={detail}></TenantInfoCard>
          </div>
          
        </div>

      </div>
    </div>
  );

  
  
}

export default MaintenanceDetails;
 