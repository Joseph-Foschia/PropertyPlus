import React, {useState }from "react";
import StripeCheckout from "./stripe/StripeCheckout";
import './stripe/stripe.css'
import Nav from "./components/Navbar/nav";

const Stripe = () => {
  const [total, setTotal] = useState(0)

  const handleCheckBoxSelect = (e) => {
    const isChecked = e.target.checked;
    const rent = 1500;

    setTotal((prevTotal) => {
      return isChecked ? prevTotal + rent : prevTotal - rent
    })
  }
  return (
    <div>
      <Nav></Nav>
      <h1 className="pay">Pay Your Rent</h1>
      
    <div className="payment-container font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center">
      
      <div className="payment-details">
      
      <p className="date"> Please select which months you would like to pay</p>
      <p className="rent"> </p>
      <form>
      <div className="checkbox-container">
      <div className="checkbox-label">
      <label htmlFor="overdue_rent">Overdue (January 31)</label>
      <input type="checkbox" name="overdue-rent" id="overdue_rent" onClick={handleCheckBoxSelect}>
        </input>
      
        
        </div>

        <div className="checkbox-label">
        <label htmlFor="upcoming_rent">Upcoming (February 29)</label>
        <input type="checkbox" name="upcoming-rent" id="upcoming_rent" onClick={handleCheckBoxSelect}>
        </input>
        
        </div>
        
    </div>
    <h1 className="total">Total : &nbsp;&nbsp;${total}</h1>
      </form>
     
      </div>
         <div className='bg-white rounded-md p-12 bg-opacity-70'>
          
          <StripeCheckout/>
          </div>  
        </div>
        </div>
  );
};

export default Stripe;