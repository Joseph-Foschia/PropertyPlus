import React, { useState, useEffect } from "react";
import Announcements from "./components/ProfitsPage/announcements";
import RecentActivity from "./components/ProfitsPage/recentActivity";
import ServiceProviderPerformance from "./components/ProfitsPage/serviceProviderPerformance";
import TenantsByProperty from "./components/ProfitsPage/averageRent";
import TotalIncome from "./components/ProfitsPage/totalIncome";
import "./components/ProfitsPage/profits.css";
import AverageRent from "./components/ProfitsPage/averageRent";

function Profits() {
  const [totalRevenue, setTotalRevenue] = useState([]);
  const [averageRent, setAverageRent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/margins/details/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTotalRevenue(data.total_revenue);
      })
      .catch((error) => {
        console.error("Error fetching total revenue data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/margins/rent/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAverageRent(data);
      })
      .catch((error) => {
        console.error("Error fetching average rent data:", error);
      });
  }, []);
  return (
    <div className="profits">
      <h1>Dashboard</h1>
      <div className="profits-container">
        <div className="dashboard-left-side">
          <div className="container">
            <div className="property-overview round">
              <p>Property Overview</p>
              <h3>90%</h3>
            </div>
            <div className="rent-payment round">
              <p>Rent payment</p>
              <h3>Paid on Time</h3>
            </div>
          </div>
          <AverageRent />
          <TotalIncome totalRevenue={totalRevenue} />
          <ServiceProviderPerformance />
        </div>
        <div className="dashboard-right-side">
          <Announcements />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default Profits;
