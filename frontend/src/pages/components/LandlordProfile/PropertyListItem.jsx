import "./propertyListItem.css";
import { Link } from 'react-router-dom';



export default function PropertyListItem({userData, address, status, imageName, id}) {

  // const image = require(`./data/${imageName}`);
  console.log(address, id)
  return (
    <Link to={`/property/${id}`}>
    <div>
        <div className="propertyListItem" >
          <img className="profile-pic" alt="property" /*src={image}*//>
          <div className="name-status">
            <div className="p-name">{address}</div>
            <div
              className={`status ${
                status === "Occupied" ? "occupied" : "available"
              }`}
            >
              {status === "Occupied" ? "Occupied" : "Available"}
            </div>
          </div>
        </div> 
    </div>
    </Link>
  );
}
