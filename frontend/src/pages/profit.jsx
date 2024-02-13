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
import TotalRevenue from "./components/ProfitsPage/totalRevenue";
import Nav from "./components/Navbar/nav";
import PropertyTopNav from "./components/PropertyDetails/PropertyTopNav";

function Profits(props) {
  const [totalRevenue, setTotalRevenue] = useState([]);
  const [averageRent, setAverageRent] = useState([]);
  const [occupancyRate, setOccupancyRate] = useState(0);
  const [maintenanceData, setMaintenanceData] = useState([]);
  const [totalMaintenanceCost, setTotalMaintenanceCost] = useState([]);

  // Total Revenue
  useEffect(() => {
    fetch(`http://localhost:3001/api/margins/details/${props.token}`)
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
    fetch(`http://localhost:3001/api/margins/rent/${props.token}`)
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
    fetch(`http://localhost:3001/api/margins/occupancy/${props.token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("We are in profit.jsx: ", data);
        setOccupancyRate(data.occupancy_rate);
      })
      .catch((error) => {
        console.error("Error fetching maintenance data:", error);
      });
  }, []);

  // Total Maintenance Costs
  useEffect(() => {
    fetch(`http://localhost:3001/api/margins/maintenancetotal/${props.token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "We are in profit.jsx Total Maintenance Costs: ",
          data.total_maintenance_cost
        );
        setTotalMaintenanceCost(data.total_maintenance_cost);
      })
      .catch((error) => {
        console.error("Error fetching maintenance data:", error);
      });
  }, []);

    // Maintenance Data
    useEffect(() => {
      fetch(`http://localhost:3001/api/margins/maintenance/1`)
        .then((response) => response.json())
        .then((data) => {
          console.log("MAINTENANCE DATA: ", data)
          setMaintenanceData(data);
        })
        .catch((error) => {
          console.error("Error fetching maintenance data:", error);
        });
    }, []);
  return (
    <div>
      <Nav />
      <PropertyTopNav />
      <div className="profits-container">
        <div className="dashboard-left-side">
          <div className="container">
            <TotalIncome
              totalRevenue={totalRevenue}
              totalMaintenanceCost={totalMaintenanceCost}
            />
            <TotalRevenue totalRevenue={totalRevenue} />
          </div>
          <AverageRent averageRent={averageRent} />
        </div>
        <div className="dashboard-right-side">
          <div className="container">
            <OccupancyRate occupancyRate={occupancyRate} />
            {/* <div className="rent-payment round">
              <p>Outstanding Rent</p>
              <h3>$220</h3>
            </div> */}
            <TotalMaintenanceCost totalMaintenanceCost={totalMaintenanceCost} />
          </div>
          {maintenanceData.length > 0 && (
          <MaintenanceCosts maintenanceData={maintenanceData}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profits;
