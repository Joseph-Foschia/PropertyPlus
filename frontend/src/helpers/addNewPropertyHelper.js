function addNewPropertyItem(credentials) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3001/api/new', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  })
    .then(response => {
      if(!response.ok) {
        console.log('Response status:', response.status);
        console.log('Response message:', response.statusText);
        console.log('Credentials:', credentials);
      throw new Error('Invalid credentials');
    }
    return response.json();
    })
    .then(data => resolve(data))
    .catch(error => reject(error));
    });
  }

  export default addNewPropertyItem;