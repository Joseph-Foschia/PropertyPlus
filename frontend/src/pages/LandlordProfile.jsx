import TopNav from "./components/LandlordProfile/TopNav";
import Nav from "./components/Navbar/nav";
import PropertyList from "./components/LandlordProfile/PropertyList";
export default function LandlordProfile() {
  return (
    <div className="landlord-profile">
      <Nav />
      <TopNav />
      <PropertyList />
    </div>
  );
}
