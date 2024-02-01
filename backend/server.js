
const express = require('express');

const cors = require('cors');


const landlordRoutes = require('./routes/landlordDetailsRoutes');



const app = express();
const port = 3001;

app.use(cors());

//defines the API routes
app.use('/api/landlords', landlordRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
