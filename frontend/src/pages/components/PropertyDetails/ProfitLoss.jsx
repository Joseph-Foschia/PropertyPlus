// import Graph from "./Graph";

function ProfitLoss(props) {
  const property = props.property && props.property[0];

  const margin = property?.unit_cost - property?.rent;

  const data = [
    {
      name: "Rent",
      mortgage: property?.unit_cost,
      rent: property?.rent,
      margin: margin,
    },
  ];

  return (
    <div>
      <h2>P&L</h2>
      <h4>Mortgage: ${property?.unit_cost}</h4>
      <h4>Rent: ${property?.rent}</h4>
      <h4>Over/Under: ${margin}</h4>
    </div>
  );
}

export default ProfitLoss;
