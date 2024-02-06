function OccupancyRate(props) {
  console.log("Occupancy Rate", props.occupancyRate)
  return (
    <div className="occupancy-rate round">
      <h3>Occupancy Rate</h3>
      <p>{parseFloat(props.occupancyRate)}%</p>
    </div>
  )
};

export default OccupancyRate;