import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMoneyBill,
  faFolder,
  faScrewdriverWrench,
  faPersonThroughWindow,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="nav-bg">
        <div className="nav-container">
          <span className="logo">PropertyPro</span>
          <Link to="/" className="dashboard">
            <FontAwesomeIcon icon={faHouse} className="house-icon" />
            <span className="dash-span">Dashbaord</span>
          </Link>
          <Link to="/" className="p-and-l">
            <FontAwesomeIcon icon={faMoneyBill} className="money" />
            <span className="pl-span">Profit & Loss</span>
          </Link>
          <Link to="/" className="maintenance">
            <FontAwesomeIcon icon={faScrewdriverWrench} className="tools" />
            <span className="m-span">Maintenance</span>
          </Link>
          <Link to="" className="documents">
            <FontAwesomeIcon icon={faFolder} className="folder" />
            <span className="d-span">Documents</span>
          </Link>
          <Link to="/" className="exit">
            <FontAwesomeIcon icon={faPersonThroughWindow} className="quit" />
            <span className="logout-span">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
