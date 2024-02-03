import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
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
  
   const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/landlord" element={<Landlords />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/" element={<LandlordProfile />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/new" element={<NewProperty />} />
        <Route path="/profit" element={<ProfitAndLoss />} />
      </Routes>
    </Router>
  );
}

export default App;
