export const getLandlordsMaintenanceRequests = (userData, setRequests) => {
  fetch(`http://localhost:3001/api/requests/${userData}`)
  .then((response) => response.json())
  .then((data) => {
    setRequests(data);
  })
  .catch((error) => console.error("Error fetching property data", error));
}

export const getLandlordsMaintenanceRequestsForToast = (userData, setRequests) => {
  return fetch(`http://localhost:3001/api/requests/${userData}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setRequests(data);
      return data; // Return the data fetched for further chaining if needed
    })
    .catch((error) => {
      console.error("Error fetching property data", error);
      throw error; // Rethrow the error to handle it where the function is called
    });
};
