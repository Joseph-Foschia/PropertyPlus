import "./topnav.css";
import landlord from "./data/landlord";
export default function TopNav() {
  return (
    <>
      {landlord.map((l, index) => (
        <div class="top-bar" key={index}>
          <img src={l.image} alt="profilepic" class="blue-box" />
          <div class="user-welcome">
            <h3>Welcome {l.name}</h3>
            <button className="add-p-btn">Add Property</button>
          </div>
        </div>
      ))}
    </>
  );
}
