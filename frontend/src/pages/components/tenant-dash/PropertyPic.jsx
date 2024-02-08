import "./leaseDetails.css";
import image1 from "../LandlordProfile/data/photos/5.png";
import PropertyListItem from "../LandlordProfile/PropertyListItem";

export default function PropertyPic({tenantDetails}) {

  
  const propImage= tenantDetails && tenantDetails.image

  const image = propImage && require(`../LandlordProfile/data/${propImage}`)
 
  return (
    <div>
      <img className="pp-card" src={image} alt="" />
    </div>
  );
}
