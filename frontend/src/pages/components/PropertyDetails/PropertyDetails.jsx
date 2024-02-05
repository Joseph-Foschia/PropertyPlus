function PropertyDetails(props) {
  console.log(props);

  const property = props.property && props.property[0];

  return (
    <div>
      <div className="pp-card"></div>
      <h2 className="address">{property && property.address}</h2>
      <div className="details-card">
        <h2 className="title">Details</h2>
        <div className="detail-item">
          <h4>Status: {property && property.status}</h4>
        </div>
        <div className="detail-item">
          <h4>Landlord Name: [NAME]</h4>
        </div>
        <div className="detail-item">
          <h4>Term: 4 year</h4>
        </div>
        <div className="detail-item">
          <h4>Term Start : Jan 1st 2022</h4>
        </div>
        <div className="detail-item">
          <h4>Rent: 1400$</h4>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
