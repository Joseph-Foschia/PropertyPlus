import PriceGraphIndividual from "./components/PropertyDetails/priceGraphIndividual";
import LeaseDetails from "./components/PropertyDetails/leaseDetails";
import Notifications from "./components/PropertyDetails/notifications";
import TenantInfo from "./components/PropertyDetails/tenantInfo";
import './components/PropertyDetails/propertyDetails.css';

function PropertyDetails() {
  return (
    <div className="welcome">
      <header>
        <h1>Welcome, {"Insert User"}!</h1>
        <div className="image-container">
          <img src="" alt="Profile Image" />
        </div>
      </header>
      <main>
        <div className="welcome-left-side">
          <div className="property-details-section">
            <img src="" alt="Property Image" />
          </div>
          <PriceGraphIndividual />
        </div>
        <div className="welcome-right-side">
          <Notifications />
          <div className="welcome-right-side-bottom-half">
            <div className="welcome-notifications-block">
              <LeaseDetails />
            </div>
            <TenantInfo />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PropertyDetails;
