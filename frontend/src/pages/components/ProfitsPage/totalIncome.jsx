function TotalIncome(props) {
  return (
    <div className="total-income round">
      <h2>Total Income this month</h2>
      <p>${props.totalRevenue - props.totalMaintenanceCost}</p>
    </div>
  )
};

export default TotalIncome;