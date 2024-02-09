import "./DetailsItem.css"

function DetailsItem(props) {
  const {description, status, service, id, dateStarted, dateCompleted, address, cost} = props

  const dateString = dateStarted
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
return (
 <div className="details-item-container">

  <div className="address-container">
    <h2> {address}</h2>
  </div>

  <div className="content-container">
    <p> <b>Type:</b> {service}</p>
    <p> <b>Details:</b> {description}</p>
    <p> <b>Date:</b> {formattedDate}</p>
  </div>

  <div className="details-container">
    <button className="detail-button"> View More Details</button>
  </div>

  <div className={`status-container ${status === 'In Progress' ? 'in-progress' : status === 'Completed' ? 'completed' : ''}`}>
    <p> {status}</p>
  </div>

 </div>
);
}

export default DetailsItem;