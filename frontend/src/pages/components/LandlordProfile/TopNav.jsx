import "./topnav.css";
import landlord from "./data/landlord";
import image from "./data/photos/profilePic.png"
import { Link } from 'react-router-dom';

export default function TopNav({name}) {

  return (
 
    <div class="top-bar" >
        <img src={image} alt="profilepic" class="blue-box" />
          <div class="user-welcome">
            <h3>Welcome {name}</h3>
            <Link to={`/new`}>
            <button className="add-p-btn">Add Property</button>
            </Link>
          </div>
    </div>
  );
}
