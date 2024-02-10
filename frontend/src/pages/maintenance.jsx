import Nav from "./components/Navbar/nav";
import {useState, useEffect} from 'react';
import MaintenanceTopNav from "./components/MaintenanceLandlords/MaintenanceTopNav";
import DetailsListItem from "./components/MaintenanceLandlords/DetailsListItem";
import { getLandlordsMaintenanceRequests } from "../helpers/landlordsMaintenanceHelper";



function Maintenance({userData}) {

  const [requests, setRequests] = useState([])

  //Api call to get landlord maitnenance requests
  useEffect(() => {
  getLandlordsMaintenanceRequests(userData, setRequests)
  }, []);

  const name = requests.length > 0 ? requests[0].name : null;
  

  return (
  <div>
    <Nav></Nav>
    <MaintenanceTopNav name={name}></MaintenanceTopNav>
    <DetailsListItem userData={userData} requests={requests}></DetailsListItem>
  </div>
  );
  }

export default Maintenance;