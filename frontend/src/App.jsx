import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import Landlords from "./pages/landlords";
import MaintenanceDetails from "./pages/MaintenanceDetails";
import Property from "./pages/property";
import Login from "./pages/index";
import PaymentSuccess from "./pages/payment";
import NewProperty from "./pages/AddPropertyItem";
import Profits from "./pages/profit";
import LandlordProfile from "./pages/LandlordProfile";
import useToken from "./CustomHooks/useToken";
import NewLease from "./pages/lease";
import TenantDashboard from "./pages/TenantDashboard";
import TenantRepairsRequest from "./pages/tenantRepairsRequest";
import Stripe from "./pages/stripe";
import Maintenance from "./pages/maintenance";




function App() {
 
  const { token, setToken, getUser, getUserType } = useToken();

  
  if (!token) {
    return <Login setToken={setToken} />;
  }

  const userData = getUser();
  const type = getUserType();
 


  if(type === "landlord") {
  return (
    <Router>
      
      <Routes>
      
        <Route
          path="/landlord"
          element={<Landlords token={token} userData={userData} />}
        />
        <Route
          path="/property/:id"
          element={<Property token={token} userData={userData} />}
        />
        <Route
          path="/"
          element={<LandlordProfile token={token} userData={userData} />}
        />
       

        <Route
          path="/new"
          element={<NewProperty token={token} userData={userData} />}
        />
        <Route
          path="/profit"
          element={<Profits token={token} userData={userData} />}
        />

        <Route
          path="/lease"
          element={<NewLease token={token} userData={userData} />}
        />

        <Route 
          path="/maintenance"
          element={<Maintenance token={token} userData={userData} />}
        /> 

        <Route
          path="/maintenance/:id"
          element={<MaintenanceDetails token={token} userData={userData} />}
        />

      </Routes>
    </Router>
  );
  }

  if(type === "tenant") {
    return (
      <Router>
        <Routes>
          
          <Route 
            path="/pay"
            element={<Stripe token={token} userData={userData} />}
          /> 
          <Route 
            path="/" 
            element={<TenantDashboard token={token} userData={userData}/>} />

          <Route
            path="/repairs"
            element={<TenantRepairsRequest token={token} userData={userData} />}
          />

          <Route
            path="/approved"
            element={<PaymentSuccess token={token} userData={userData} />}
          />
        </Routes>
  
      </Router>
    );
  }

}

export default App;
