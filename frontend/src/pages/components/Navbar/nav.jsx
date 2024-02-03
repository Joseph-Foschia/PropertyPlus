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
  return (
    <div>
      <div className="nav-bg">
        <div className="nav-container">
          <span className="logo">PropertyPro</span>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="house-icon" />
            <span className="dash-span">Dashbaord</span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faMoneyBill} className="money" />
            <span className="pl-span">Profit & Loss</span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faScrewdriverWrench} className="tools" />
            <span className="m-span">Maintenance</span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHouseMedical} className="add"/>
            <span className="add-p-span">Add Property</span>
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faFolder} className="folder" />
            <span className="d-span">Documents</span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faPersonThroughWindow} className="quit" />
            <span className="logout-span">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
