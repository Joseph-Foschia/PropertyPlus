import React, { useState, useEffect } from "react";
import Announcements from "./components/ProfitsPage/announcements";
import RecentActivity from "./components/ProfitsPage/recentActivity";
import MaintenanceCosts from "./components/ProfitsPage/maintenanceCosts";
import TenantsByProperty from "./components/ProfitsPage/averageRent";
import TotalIncome from "./components/ProfitsPage/totalIncome";
import "./components/ProfitsPage/profits.css";
import AverageRent from "./components/ProfitsPage/averageRent";
import OccupancyRate from "./components/ProfitsPage/occupancyRate";
import TotalMaintenanceCost from "./components/ProfitsPage/totalMaintenanceCost";

function Profits() {
  const [totalRevenue, setTotalRevenue] = useState([]);
  const [averageRent, setAverageRent] = useState([]);
  const [occupancyRate, setOccupancyRate] = useState([]);

  // Total Revenue
  useEffect(() => {
    fetch("http://localhost:3001/api/margins/details/1")
      .then((response) => response.json())
      .then((data) => {
        setTotalRevenue(data.total_revenue);
      })
      .catch((error) => {
        console.error("Error fetching total revenue data:", error);
      });
  }, []);

  // Average Rent
  useEffect(() => {
    fetch("http://localhost:3001/api/margins/rent/1")
      .then((response) => response.json())
      .then((data) => {
        setAverageRent(data);
      })
      .catch((error) => {
        console.error("Error fetching average rent data:", error);
      });
  }, []);

  // Occupancy Rate
  useEffect(() => {
    fetch("http://localhost:3001/api/margins/occupancy/1")
      .then((response) => response.json())
      .then((data) => {
        console.log("We are in profit.jsx: ", data[0].occupancy_rate)
        setOccupancyRate(data[0].occupancy_rate);
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
            <OccupancyRate occupancyRate={occupancyRate} />
            <div className="rent-payment round">
              <p>Rent payment</p>
              <h3>Paid on Time</h3>
            </div>
          </div>
          <AverageRent averageRent={averageRent} />
          <TotalIncome totalRevenue={totalRevenue} />
        </div>
        <div className="dashboard-right-side">
          <div className="container">
            <Announcements />
            <RecentActivity />
          </div>
          <MaintenanceCosts />
          <TotalMaintenanceCost />
        </div>
      </div>
    </div>
  );
}

export default Profits;
