import "./propertyListItem.css";
import propertyList from "./data/propertyLists";

export default function PropertyListItem({userData, address, status}) {
  return (
    <div>
      
        <div className="propertyListItem" >
          
          <img className="profile-pic" alt="property" />
          <div className="name-status">
            <div className="p-name">{address}</div>
            <div
              className={`status ${
                status === "Occupied" ? "occupied" : "available"
              }`}
            >
              {status === "Occupied" ? "Occupied" : "Available"}
            </div>
          </div>
        </div>
      
    </div>

        // <div>
    //   {propertyList.map((property, index) => (
    //     <div className="propertyListItem" key={index}>
    //       {" "}
    //       <img className="profile-pic" src={property.image} alt="property" />
    //       <div className="name-status">
    //         <div className="p-name">{property.address}</div>
    //         <div
    //           className={`status ${
    //             property.isOccupied ? "occupied" : "available"
    //           }`}
    //         >
    //           {property.isOccupied ? "Occupied" : "Available"}
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}
