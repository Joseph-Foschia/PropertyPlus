
function findTenant(credentials) {
  
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3001/api/lease/${credentials.email}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    
  })
    .then(response => {
      if(!response.ok) {
      throw new Error('Invalid');
    }
    return response.json();
    })
    .then(data => resolve(data))
    .catch(error => console.log(error));
    });
  }


function addNewLease(credentials) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3001/api/post', {
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


  function changeUnitStatus(credentials) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/api/update', {
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

  export { findTenant, addNewLease, changeUnitStatus };