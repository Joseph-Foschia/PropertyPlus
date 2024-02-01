import ViewDataTest from "./components/Landlords/ViewLandlordTest";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from 'react-router-dom';

function Property() {

  // const [data, setData] = useState([]);

  // //testing to view all landlords
  // useEffect(() => {
  //   fetch('http://localhost:3001/api/landlordproperties/all')
  //     .then(response => response.json())
  //     .then(data => {console.log('Fetched data:', data); setData(data)})
  //     .catch(error => console.error('Error fetching data', error));
  // }, []);

  const [property, setProperty] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/property/details/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched property data:', data);
        setProperty(data);
      })
      .catch(error => console.error('Error fetching property data', error));
  }, [property]);

  return (
    <div >
     <p>{property[0].id}</p>
    </div>
  );
}

export default Property;
