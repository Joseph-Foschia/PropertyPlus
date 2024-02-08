function TotalRevenue(props) {
  return (
    <div className="total-revenue round">
      <h2>Total Revenue this month</h2>
      <p>${props.totalRevenue}</p>
    </div>
  )
};

export default TotalRevenue;