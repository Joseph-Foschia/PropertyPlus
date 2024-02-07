import Nav from "./components/Navbar/nav";
import PropertyTopNav from "./components/PropertyDetails/PropertyTopNav";
import ProfilePic from "./components/PropertyDetails/ProfilePic";
import PaymentHistory from "./components/PropertyDetails/PaymentHistory";
import LeaseDetails from "./components/tenant-dash/LeaseDetails";
import SomeBox from "./components/tenant-dash/SomeBox";

export default function TenantDashboard() {
  return (
    <div>
      <Nav />
      <div className="property-top-nav">
        <PropertyTopNav />
      </div>
      <div className="history-pic">
        <ProfilePic />
        <PaymentHistory />
      </div>
      <div className="bottom-ten-dash">
        <LeaseDetails />
        <SomeBox />
        <div className="t-buttons">
          <button className="t-m-req">Maintenace Request</button>
          <button className="t-p-rent">Pay Rent</button>
        </div>
      </div>
    </div>
  );
}
