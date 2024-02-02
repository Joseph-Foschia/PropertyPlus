import "./propertyList.css";
import PropertyListItem from "./PropertyListItem";

export default function PropertyList() {
  return (
    <div className="property-list">
      <h3 className="my-p">My Properties</h3>
      <PropertyListItem />
    </div>
  );
}
