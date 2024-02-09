import "./maintenanceRequest.css";
export default function MaintenanceRequest() {

  
  // useEffect(() => {
  //   fetch(`http://localhost:3001/api/landlord/properties/${userData}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProperties(data);
  //     })
  //     .catch((error) => console.error("Error fetching property data", error));
  // }, []); 
  

  return (
    <div>
      <div className="some-component">
        <h1 className="mr-title">Maintenance Request</h1>
        <div className="mr-list">
          <div className="mr-item1">
            <li>Electrical</li>
            <span className="mr-status1">inprogress</span>
          </div>
          <hr className="hr2" />
          <div className="mr-item2">
            <li>Plumbing</li>
            <span className="mr-status2">inprogress</span>
          </div>
          <hr className="hr2" />
          <div className="mr-item2">
            <li>Electrical</li>
            <span className="mr-status3">Completed</span>
          </div>
          <hr className="hr2" />
        </div>
      </div>
    </div>
  );
}
