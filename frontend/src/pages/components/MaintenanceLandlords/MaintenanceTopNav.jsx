import './MaintenanceTopNav.css'
function MaintenanceTopNav({name}) {
 
  return (
    <div className="main-top-nav-container">
      <p className="landlord-name">{name}'s Maintenance Requests</p>
    </div>
  );
}

export default MaintenanceTopNav;
