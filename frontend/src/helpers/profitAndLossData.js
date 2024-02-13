import React, { useState, useEffect } from "react";


export const useFetchAllProfitAndLossData = (id, setTotalRevenue, setAverageRent, setOccupancyRate, setMaintenanceData, setTotalMaintenanceCost) => {
    // Total Revenue
    useEffect(() => {
      fetch(`http://localhost:3001/api/margins/details/${id}`)
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
      fetch(`http://localhost:3001/api/margins/rent/${id}`)
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
      fetch(`http://localhost:3001/api/margins/occupancy/${id}`)
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
      fetch(`http://localhost:3001/api/margins/maintenancetotal/${id}`)
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
}