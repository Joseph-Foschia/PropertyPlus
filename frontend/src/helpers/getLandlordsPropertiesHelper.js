export const getLandlordsProperties = (userData, setProperties) => {
  fetch(`http://localhost:3001/api/landlord/properties/${userData}`)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => console.error("Error fetching property data", error));
}