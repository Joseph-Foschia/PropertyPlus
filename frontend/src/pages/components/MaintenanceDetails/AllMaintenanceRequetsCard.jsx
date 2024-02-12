import { useState, useEffect } from "react";


function AllMaintenanceRequestsCard({id}) {
  const [repairs, setRepairs] = useState([])
 
  
 useEffect(() => {
  fetch(`http://localhost:3001/api/all/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setRepairs(data);
    })
    .catch((error) => {
      console.error("Error fetching total revenue data:", error);
    });
}, [id]);



  return (
    <div className="all-repair-requests-card">

      <div >
      <div className="header-info">
        <h3>Other Repairs At Property</h3>
      </div>
        <ul>
          {repairs.map((request, index) => {
            
            return (
             
              <li key={index}>
                <div className="request-details">
                  <div>
                    <p className="description-repair">{request.description}</p>
                    <p className="date-started">{request.service}</p>
                  </div>
                    <p className="status-request">{request.status}</p>
                  </div>
              </li>
             
            );
          })}
        </ul>



      </div>
      
    </div>
  );
}

export default AllMaintenanceRequestsCard;
 