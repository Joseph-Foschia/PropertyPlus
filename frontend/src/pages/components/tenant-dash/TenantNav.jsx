import "./tenantNav.css";
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

function TenantNav() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <div className="nav-bg"></div>
      <span className="logo">PropertyPro</span>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="house-icon" />
        <span className="dash-span">Dashbaord</span>
      </Link>
      <Link to="/repairs">
        <FontAwesomeIcon icon={faScrewdriverWrench} className="tools" />
        <span className="m-span">Maintenance</span>
      </Link>
      <Link to="/pay">
        <FontAwesomeIcon icon={faMoneyBill} className="money" />
        <span className="pl-span">Pay Rent</span>
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faFolder} className="folder" />
        <span className="d-span">Documents</span>
      </Link>
      <Link onClick={handleLogout} to="/">
        <FontAwesomeIcon icon={faPersonThroughWindow} className="quit" />
        <span className="logout-span">Logout</span>
      </Link>
    </div>
  );
}

export default TenantNav;
