function PropertyDetails(props) {
   console.log(props)

   const property = props.property && props.property[0];

  return (
    <div >
      <h2>Details</h2>
      <h4>ID: {property && property.id}</h4>
      <h4>Address: {property && property.address}</h4>
      <h4>Status: {property && property.status}</h4>
    </div>
  )
};

export default PropertyDetails;