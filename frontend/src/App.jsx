import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import Landlords from "./pages/landlords";
import Nav from "./pages/components/Navbar/nav";
import Property from "./pages/property";
import Login from "./pages/index";
import Tenant from "./pages/tenant";
import NewProperty from "./pages/AddPropertyItem";
import Profits from "./pages/profit";
import LandlordProfile from "./pages/LandlordProfile";
import useToken from "./CustomHooks/useToken";
import NewLease from "./pages/lease";
import TenantDashboard from "./pages/TenantDashboard";
import Stripe from "./pages/stripe";

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
        {/* <Route path="/login" element={<Login setToken={setToken} />} /> */}
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
          path="/tenant"
          element={<Tenant token={token} userData={userData} />}
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
          path="/pay"
          element={<Stripe token={token} userData={userData} />}
        /> 
        <Route path="tenant/dash" element={<TenantDashboard />} />
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
          <Route path="tenant/dash" element={<TenantDashboard />} />
        </Routes>
      </Router>
    );
  }

}

export default App;
