function TotalIncome(props) {
  return (
    <div className="total-income round">
      <h2>Total Income</h2>
      <p>${props.totalRevenue}</p>
    </div>
  )
};

export default TotalIncome;