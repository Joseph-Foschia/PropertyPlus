


function TenantInfoCard({detail}) {

  return (
    <div className="tenant-info-card">
      <div className="header-info">
        <h3>Tenant Details</h3>
      </div>
      <div className="det-container">
        <div className="info-item">
          <p className="info-category">Name:</p>
          <p className="info-value">{detail && detail.name}</p>
        </div>
        <div className="info-item">
          <p className="info-category">Phone Number:</p>
          <p className="info-value">{detail && detail.number}</p>
        </div>
        <div className="info-item">
          <p className="info-category">Email:</p>
          <p className="info-value">{detail && detail.email}</p>
        </div>
      </div>
    </div>
  );
}

export default TenantInfoCard;
 