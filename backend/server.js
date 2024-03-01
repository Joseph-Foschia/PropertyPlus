const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

//Calls the routes
const landlordAllPropertiesRoute = require("./routes/landlordAllPropertyRoute");
const landlordIndivPropertyRoute = require("./routes/landlordIndividualPropertyRoute");
const landlordNewPropertyRoute = require("./routes/landlordNewPropertyRoute");
const profit = require("./routes/profit");
const repairs = require("./routes/addNewMaintenanceRequest");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
const landlordNewLeaseRoute = require("./routes/landlordNewLeaseRoute")
const getTenantProperty = require("./routes/tenantDetailsRoute")
const landlordMaintenanceRoute = require("./routes/landlordMaintenanceRoute")
const {authenticateUser} = require("./db/queries/authenticateUserQuery")

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json()); 

const stripe = require("stripe")("sk_test_5");


app.use(loginRoute);
app.use("/api/landlord", landlordAllPropertiesRoute);
app.use("/api", landlordNewPropertyRoute);
app.use("/api/margins", profit);
app.use("/api", repairs)
app.use("/api/logout", logoutRoute);
app.use("/api/property", landlordIndivPropertyRoute);
app.use("/api", landlordNewLeaseRoute);
app.use("/api", getTenantProperty);
app.use("/api", landlordMaintenanceRoute);


const calculateOrderAmount = (items) => {
  return 2000;
};

app.post("/create-payment-intent", async (req, res) => {

  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({

    amount: calculateOrderAmount(items),
    currency: "usd",

    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});