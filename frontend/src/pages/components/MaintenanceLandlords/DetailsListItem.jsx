import "./DetailsListItem.css";
import DetailsItem from "./DetailsItem";

function DetailsListItem({ userData, requests }) {
  const displayProperties = (requests) => {
    return requests.map((request) => (
      <DetailsItem
        key={request.id}
        description={request.description}
        status={request.status}
        service={request.service}
        id={request.id}
        dateStarted={request.date_started}
        dateCompleted={request.date_completed}
        address={request.address}
        cost={request.cost}
      />
    ));
  };

  return <div className="list-requests">{displayProperties(requests)}</div>;
}

export default DetailsListItem;
