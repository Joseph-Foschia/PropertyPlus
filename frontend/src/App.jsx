import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Landlords from "./pages/landlords";
import Nav from "./pages/components/Navbar/nav";
import Property from "./pages/property";
import Login from "./pages";
import Tenant from "./pages/tenant";
import NewProperty from "./pages/new";
import ProfitAndLoss from "./pages/profit";
import Welcome from "./pages/welcome";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/landlord" element={<Landlords />} />
        <Route path="/property/:id" element={<Property />} />

        <Route path="/tenant" element={<Tenant />} />
        <Route path="/new" element={<NewProperty />} />
        <Route path="/profit" element={<ProfitAndLoss />} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
    </Router>
  );
}

export default App;
