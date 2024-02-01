function LeaseDetails(props) {

  const property = props.property && props.property[0];

  return (
    <div >
      <h2>Lease Details</h2>
      <h4>Tenant: {property?.name}</h4>
      <h4>Tenant Phone #: {property?.phone_number}</h4>
      <h4>Monthly Rent: ${property?.rent}</h4>
      <h4>Lease Signed: {property?.start_date}</h4>
    </div>
  )
};

export default LeaseDetails;