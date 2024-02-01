
const express = require('express');

const cors = require('cors');

//Calls the routes
const landlordAllPropertiesRoute = require('./routes/landlordAllPropertyRoute');
const landlordIndivPropertyRoute = require('./routes/landlordIndividualPropertyRoute')
const landlordNewPropertyRoute = require('./routes/landlordNewPropertyRoute')
const landlordProfitLossRoute = require('./routes/landlordProfitAndLossRoute')
const loginRoute = require('./routes/loginRoute')
const logoutRoute = require('./routes/logoutRoute')

const app = express();
const port = 3001;

app.use(cors());

app.use('/api/login', loginRoute)
app.use('/api/landlordproperties', landlordAllPropertiesRoute);
app.use('/api/newproperty,', landlordNewPropertyRoute)
app.use('/api/margins,', landlordProfitLossRoute)
app.use('/api/margins,', landlordProfitLossRoute)
app.use('/api/logout', logoutRoute)
app.use('api/property', landlordIndivPropertyRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
