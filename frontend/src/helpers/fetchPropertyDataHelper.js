const fetchPropertyData = (id, setProperty) => {
  fetch(`http://localhost:3001/api/property/details/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setProperty(data);
    })
    .catch((error) => console.error("Error fetching property data", error));
};

export default fetchPropertyData;