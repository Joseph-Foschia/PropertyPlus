import "./topnav.css";
import Nav from "../Navbar/nav";

export default function TopNav() {
  return (
    <>
      <div class="top-bar">
        <div class="blue-box"></div>
        <div class="user-welcome">
          <h3>Welcome [User]</h3>
          <button>Add Property</button>
        </div>
      </div>
    </>
  );
}
