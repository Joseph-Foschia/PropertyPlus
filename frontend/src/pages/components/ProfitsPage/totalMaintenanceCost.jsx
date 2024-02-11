function TotalMaintenanceCost(props) {
  console.log(props.totalMaintenanceCost);
  return (
    <div className="total-maintenance-cost round">
      <h2>Total Maintenance this month</h2>
      <p>${props.totalMaintenanceCost}</p>
    </div>
  )
};

export default TotalMaintenanceCost;