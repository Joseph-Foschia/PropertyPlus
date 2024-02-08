import "./LeaseTopNav.css";

export default function LeaseTopNav({tenantDetails}) {

  console.log("in nav", tenantDetails)
  return (
    <div className="top-p-nav">
      <div className="nav-container">
        <div className="text-nav">
          <h1 className="welcome">Welcome {tenantDetails && tenantDetails.tenant_name}</h1>
          <p className="p-pro">Welcome to ProperyPro</p>
        </div>
        <div className="profile-pic-detail"></div>
      </div>
    </div>
  );
}
