export const getLandlordsMaintenanceRequests = (userData, setRequests) => {
  fetch(`http://localhost:3001/api/requests/${userData}`)
  .then((response) => response.json())
  .then((data) => {
    setRequests(data);
  })
  .catch((error) => console.error("Error fetching property data", error));
}