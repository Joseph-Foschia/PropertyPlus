export const fetchTenantLease = (userData, setLease) => {
  fetch(`http://localhost:3001/api/tenant/${userData}`)
    .then((response) => response.json())
    .then((data) => {
      setLease(data);
    })
    .catch((error) => console.error("Error fetching tenant lease data", error));
};

export const fetchTenantMaintenance = (userData, setMaintenance) => {
  fetch(`http://localhost:3001/api/tenants/${userData}`)
    .then((response) => response.json())
    .then((data) => {
      setMaintenance(data);
    })
    .catch((error) => console.error("Error fetching tenant maintenance data", error));
};