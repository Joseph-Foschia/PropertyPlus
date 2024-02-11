
function changeMaintenanceValues(credentials) {
  console.log(credentials)
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3001/api/post/change', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  })
    .then(response => {
      if(!response.ok) {
      throw new Error('Invalid credentials');
    }
    return response.json();
    })
    .then(data => resolve(data))
    .catch(error => reject(error));
    });
  }

  export default changeMaintenanceValues;