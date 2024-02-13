import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMoneyBill,
  faFolder,
  faScrewdriverWrench,
  faPersonThroughWindow,
  faHouseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Nav() {
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload();
  }


  return (
    <div>
      <div className="nav-bg"></div>
      <span className="logo">PropertyPro</span>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="house-icon" />
        <span className="dash-span">Dashbaord</span>
      </Link>
      <Link to="/profit">
        <FontAwesomeIcon icon={faMoneyBill} className="money" />
        <span className="pl-span">Profit & Loss</span>
      </Link>
      <Link to="/maintenance">
        <FontAwesomeIcon icon={faScrewdriverWrench} className="ma" />
        <span className="ma-span">Maintenance</span>
      </Link>
      <Link to="/new">
        <FontAwesomeIcon icon={faHouseMedical} className="add" />
        <span className="add-p-span">Add Property</span>
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faFolder} className="folder" />
        <span className="d-span">Documents</span>
      </Link>
      <button onClick={handleLogout}>
  <FontAwesomeIcon icon={faPersonThroughWindow} className="quit" />
  <span className="logout-span">Logout</span>
</button>
    </div>
  );
}

export default Nav;
