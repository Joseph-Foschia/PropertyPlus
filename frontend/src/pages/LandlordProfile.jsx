import TopNav from "./components/LandlordProfile/TopNav";
import Nav from "./components/Navbar/nav";
import PropertyList from "./components/LandlordProfile/PropertyList";

export default function LandlordProfile({token, userData}) {
  
  return (
    <div className="landlord-profile">
      <Nav />
      <TopNav />
      <PropertyList userData={userData}/>
    </div>
  );
}
