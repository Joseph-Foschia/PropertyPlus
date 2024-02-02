function LeaseDetails(props) {

  const property = props.property && props.property[0];
  const dateString = property?.start_date
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div >
      <h2>Lease Details</h2>
      <h4>Tenant: {property?.name}</h4>
      <h4>Tenant Phone #: {property?.phone_number}</h4>
      <h4>Email: {property?.email}</h4>
      <h4>Monthly Rent: ${property?.rent}</h4>
      <h4>Lease Signed: {formattedDate}</h4>
    </div>
  )
};

export default LeaseDetails;