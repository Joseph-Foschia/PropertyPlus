import "./DetailsItem.css"
import { formatDate } from "../../../helpers/dateHelper"
import { Link } from "react-router-dom"

function DetailsItem(props) {
  const {description, status, service, id, dateStarted, dateCompleted, address, cost} = props

//Formats to readable date
const formattedDate = formatDate(dateStarted)

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
    <Link to={`/maintenance/${id}`}>
    <button className="detail-button"> View More Details</button>
    </Link>
  </div>

  <div className={`status-container ${status === 'In Progress' ? 'in-progress' : status === 'Completed' ? 'completed' : ''}`}>
    <p> {status}</p>
  </div>

 </div>
);
}

export default DetailsItem;