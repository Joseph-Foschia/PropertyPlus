import Announcements from "./components/ProfitsPage/announcements";
import RecentActivity from "./components/ProfitsPage/recentActivity";
import ServiceProviderPerformance from "./components/ProfitsPage/serviceProviderPerformance";
import TenantsByProperty from "./components/ProfitsPage/tenantsByProperty";
import TotalIncome from "./components/ProfitsPage/totalIncome";

function ProfitAndLoss() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-left-side">
        <div className="container">
          <div className="property-overview">Property Overview</div>
          <div className="rent-payment"> Rent Payment</div>
        </div>
        <TenantsByProperty />
        <TotalIncome />
        <ServiceProviderPerformance />
      </div>
      <div className="dashboard-right-side">
        <Announcements />
        <RecentActivity />
      </div>
    </div>
  );
}

export default ProfitAndLoss;