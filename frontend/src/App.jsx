import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Landlords from "./pages/landlords";
import Nav from "./pages/components/Navbar/nav";
import Property from "./pages/property";
import Login from "./pages/index";
import Tenant from "./pages/tenant";
import NewProperty from "./pages/new";
import ProfitAndLoss from "./pages/profit";
import LandlordProfile from "./pages/LandlordProfile";
import useToken from "./CustomHooks/useToken";

function App() {
  const { token, setToken, getUser } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const userData = getUser();

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/landlord"
          element={<Landlords token={token} userData={userData} />}
        />
        <Route
          path="/property/:id"
          element={<Property token={token} userData={userData} />}
        />
        <Route
          path="/:id"
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
          element={<ProfitAndLoss token={token} userData={userData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
