import ViewDataTest from "./components/Landlords/ViewLandlordTest";
import { useState, useEffect } from "react";
function Property() {

  const [data, setData] = useState([]);

  //testing to view all landlords
  useEffect(() => {
    fetch('http://localhost:3001/api/landlords/all')
      .then(response => response.json())
      .then(data => {console.log('Fetched data:', data); setData(data)})
      .catch(error => console.error('Error fetching data', error));
  }, []);

  return (
    <div >
     {data.length > 0 && <ViewDataTest data={data[0]} />}
    </div>
  );
}

export default Property;
