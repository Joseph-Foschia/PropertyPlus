import "./propertyListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PropertyListItem() {
  return (
    <div className="propertyListItem">
      <div className="profile-pic"></div>
      <div className="p-name">[Address of Property]</div>
      <FontAwesomeIcon className="icon" icon="fa-solid fa-angle-right" />
    </div>
  );
}
