function OccupancyRate(props) {
  console.log("Occupancy Rate", props.occupancyRate)
  return (
    <div className="occupancy-rate round">
      <h2>Occupancy Rate</h2>
      <p>{parseFloat(props.occupancyRate)}%</p>
    </div>
  )
};

export default OccupancyRate;