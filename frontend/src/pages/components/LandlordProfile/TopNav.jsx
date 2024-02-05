import "./topnav.css";
import landlord from "./data/landlord";
import image from "./data/photos/profilePic.png"

export default function TopNav({name}) {

  return (
 
    <div class="top-bar" >
        <img src={image} alt="profilepic" class="blue-box" />
          <div class="user-welcome">
            <h3>Welcome {name}</h3>
            <button className="add-p-btn">Add Property</button>
          </div>
    </div>
  );
}
