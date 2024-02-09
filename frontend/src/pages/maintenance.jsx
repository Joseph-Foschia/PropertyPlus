import Nav from "./components/Navbar/nav";
import {useState, useEffect} from 'react';
import MaintenanceTopNav from "./components/MaintenanceLandlords/MaintenanceTopNav";

import DetailsListItem from "./components/MaintenanceLandlords/DetailsListItem";


function Maintenance({userData}) {
  const [requests, setRequests] = useState([])

 

  useEffect(() => {
    fetch(`http://localhost:3001/api/requests/${userData}`)
      .then((response) => response.json())
      .then((data) => {
        setRequests(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
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