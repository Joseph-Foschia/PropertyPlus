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
        <Route path="/landlord" element={<Landlords token={token}/>} />
        <Route path="/property/:id" element={<Property token={token}/>} />
        <Route path="/" element={<LandlordProfile token={token} />} />
        <Route path="/tenant" element={<Tenant token={token}/>} />
        <Route path="/new" element={<NewProperty token={token}/>} />
        <Route path="/profit" element={<ProfitAndLoss token={token}/>} />
      </Routes>
    </Router>
  );
}

export default App;
