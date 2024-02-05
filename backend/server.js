const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

//Calls the routes
const landlordAllPropertiesRoute = require("./routes/landlordAllPropertyRoute");
const landlordIndivPropertyRoute = require("./routes/landlordIndividualPropertyRoute");
const landlordNewPropertyRoute = require("./routes/landlordNewPropertyRoute");
const profit = require("./routes/profit");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
const {authenticateUser} = require("./db/queries/authenticateUserQuery")

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json()); 

app.use(loginRoute);
app.use("/api/landlord", landlordAllPropertiesRoute);
app.use("/api/newproperty", landlordNewPropertyRoute);
app.use("/api/margins", profit);
app.use("/api/logout", logoutRoute);
app.use("/api/property", landlordIndivPropertyRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});