import React from "react";
import StripeCheckout from "./stripe/StripeCheckout";


const Stripe = () => {

  return (
    <div className="font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center">
    
         <div className='bg-white rounded-md p-12 bg-opacity-70'>
          <StripeCheckout/>
          </div>  
        </div>
  );
};

export default Stripe;