import React, { useState, useEffect } from "react";
import MaintenanceCosts from "./components/ProfitsPage/maintenanceCosts";
import TotalIncome from "./components/ProfitsPage/totalIncome";
import "./components/ProfitsPage/profits.css";
import AverageRent from "./components/ProfitsPage/averageRent";
import OccupancyRate from "./components/ProfitsPage/occupancyRate";
import TotalMaintenanceCost from "./components/ProfitsPage/totalMaintenanceCost";
import TotalRevenue from "./components/ProfitsPage/totalRevenue";
import Nav from "./components/Navbar/nav";
import PropertyTopNav from "./components/PropertyDetails/PropertyTopNav";
import { useFetchAllProfitAndLossData } from "../helpers/profitAndLossData";

function Profits(props) {
  const [totalRevenue, setTotalRevenue] = useState([]);
  const [averageRent, setAverageRent] = useState([]);
  const [occupancyRate, setOccupancyRate] = useState(0);
  const [maintenanceData, setMaintenanceData] = useState([]);
  const [totalMaintenanceCost, setTotalMaintenanceCost] = useState([]);

  // Fetches the data for all of the state variables
  useFetchAllProfitAndLossData(props.token, setTotalRevenue, setAverageRent, setOccupancyRate, setMaintenanceData, setTotalMaintenanceCost);

<<<<<<< HEAD
=======
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
        console.log("We are in profit.jsx: ", data);
        setOccupancyRate(data.occupancy_rate);
      })
      .catch((error) => {
        console.error("Error fetching maintenance data:", error);
      });
  }, []);

  // Total Maintenance Costs
  useEffect(() => {
    fetch("http://localhost:3001/api/margins/maintenancetotal/1")
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
    fetch("http://localhost:3001/api/margins/maintenance/1")
      .then((response) => response.json())
      .then((data) => {
        console.log("MAINTENANCE DATA: ", data);
        setMaintenanceData(data);
      })
      .catch((error) => {
        console.error("Error fetching maintenance data:", error);
      });
  }, []);
>>>>>>> style/everything
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
            <TotalMaintenanceCost totalMaintenanceCost={totalMaintenanceCost} />
          </div>
          {maintenanceData.length > 0 && (
            <MaintenanceCosts maintenanceData={maintenanceData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Profits;
